## 2026-04-17 - ARIA labels on Icon-only Buttons
**Learning:** This vanilla JS/HTML app contains multiple interactive elements (Lightbox controls, Mobile menu, Favorites) that rely entirely on Lucide icons for their visual presentation without accompanying text, leading to poor screen reader accessibility. The dynamic state of the favorite button requires a dynamic ARIA label.
**Action:** Added localized Portuguese `aria-label` attributes to all icon-only buttons to ensure they are properly announced by screen readers.

## 2024-05-18 - Restoring Focus Accessibility on Custom Input Containers
**Learning:** When default focus styles (`focus:ring-0`, `border-none`) are removed from an `<input>` element so that it visually blends into a styled parent container (like a custom search bar), keyboard users lose visual focus feedback. This creates a severe accessibility issue where the user cannot tell which element is currently active.
**Action:** Always apply `focus-within:` utility classes (e.g., `focus-within:ring-2`) to the *parent container* of the customized input. This restores the focus indicator to the entire logical component when the hidden inner input receives focus, ensuring an accessible and cohesive user experience.
