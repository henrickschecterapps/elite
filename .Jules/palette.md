## 2026-04-17 - ARIA labels on Icon-only Buttons
**Learning:** This vanilla JS/HTML app contains multiple interactive elements (Lightbox controls, Mobile menu, Favorites) that rely entirely on Lucide icons for their visual presentation without accompanying text, leading to poor screen reader accessibility. The dynamic state of the favorite button requires a dynamic ARIA label.
**Action:** Added localized Portuguese `aria-label` attributes to all icon-only buttons to ensure they are properly announced by screen readers.

## 2024-05-18 - Restoring Focus Accessibility on Custom Input Containers
**Learning:** When default focus styles (`focus:ring-0`, `border-none`) are removed from an `<input>` element so that it visually blends into a styled parent container (like a custom search bar), keyboard users lose visual focus feedback. This creates a severe accessibility issue where the user cannot tell which element is currently active.
**Action:** Always apply `focus-within:` utility classes (e.g., `focus-within:ring-2`) to the *parent container* of the customized input. This restores the focus indicator to the entire logical component when the hidden inner input receives focus, ensuring an accessible and cohesive user experience.

## 2026-04-18 - Visual Loading Feedback on Form Submissions
**Learning:** During form submission, users often click the submit button multiple times if they don't see immediate feedback. This app had no visual loading state during the simulated network request, which can cause confusion and accidental double-submissions.
**Action:** Always disable the submit button and show an immediate visual loading state (like a spinner and updated text) to provide clear system status and prevent duplicate actions.

## 2026-04-18 - Keyboard Accessibility & Feedback for Custom File Inputs
**Learning:** Customizing file inputs by wrapping them in styled labels and applying `class="hidden"` completely removes the input from the tab order, breaking keyboard navigation. Additionally, removing the native input removes the browser's default feedback indicating how many files were selected, leaving users unsure if their upload succeeded.
**Action:** Use `.sr-only` to visually hide the input while preserving focusability. Always apply `focus-within` styles to the parent container (e.g. `<label>`) to provide visual focus feedback when the hidden input is focused. Also, use JavaScript (via `onchange`) to provide explicit textual feedback about the selected files.
