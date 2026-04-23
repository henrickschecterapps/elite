const fs = require('fs');
const path = require('path');

/**
 * This test verifies the toggleMobileMenu function logic.
 * Since we cannot install JSDOM or other heavy dependencies due to environment restrictions,
 * we use a lightweight mock of the DOM elements involved.
 */
function testToggleMobileMenu() {
    console.log('Running test: toggleMobileMenu (extracted from index.html)');

    const htmlPath = path.resolve(__dirname, '../index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    // Extract the body of the toggleMobileMenu function
    // We use a regex that matches the function name and its single-line body.
    // This is specifically tailored to the current implementation.
    const functionMatch = html.match(/function toggleMobileMenu\(\) \{([\s\S]*?)\}/);
    if (!functionMatch) {
        throw new Error('Could not find toggleMobileMenu function in index.html');
    }
    const functionBody = functionMatch[1].trim();

    // Create a mock DOM element for #mobile-menu
    const mockMobileMenu = {
        classList: {
            toggle: function(className) {
                if (this.contains(className)) {
                    this.remove(className);
                } else {
                    this.add(className);
                }
            },
            add: function(className) { this.classes.add(className); },
            remove: function(className) { this.classes.delete(className); },
            contains: function(className) { return this.classes.has(className); },
            classes: new Set(['hidden']) // Initial state in HTML is 'hidden md:hidden'
        }
    };

    // Mock document.getElementById
    const mockDocument = {
        getElementById: function(id) {
            if (id === 'mobile-menu') {
                return mockMobileMenu;
            }
            return null;
        }
    };

    // The function to test, using the extracted body
    const toggleMobileMenu = new Function('document', functionBody);

    // Initial state: hidden
    if (!mockMobileMenu.classList.contains('hidden')) {
        throw new Error('Initial state should be hidden');
    }

    // First toggle: should show (remove hidden)
    toggleMobileMenu(mockDocument);
    if (mockMobileMenu.classList.contains('hidden')) {
        throw new Error('First toggle failed: should NOT be hidden');
    }

    // Second toggle: should hide (add hidden)
    toggleMobileMenu(mockDocument);
    if (!mockMobileMenu.classList.contains('hidden')) {
        throw new Error('Second toggle failed: should be hidden');
    }

    console.log('Test passed: toggleMobileMenu (real source verified)');
}

try {
    testToggleMobileMenu();
} catch (error) {
    console.error('Test failed:', error.message);
    process.exit(1);
}
