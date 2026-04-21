## 2026-04-17 - ARIA labels on Icon-only Buttons
**Learning:** This vanilla JS/HTML app contains multiple interactive elements (Lightbox controls, Mobile menu, Favorites) that rely entirely on Lucide icons for their visual presentation without accompanying text, leading to poor screen reader accessibility. The dynamic state of the favorite button requires a dynamic ARIA label.
**Action:** Added localized Portuguese `aria-label` attributes to all icon-only buttons to ensure they are properly announced by screen readers.

## 2026-04-18 - Loading States and ARIA Alerts for Async Operations
**Learning:** Forms simulating async operations lack visual feedback (loading spinners, disabled buttons) causing users to potentially submit multiple times. Additionally, dynamically inserted success messages are visually clear but not announced to screen readers.
**Action:** Implemented visual loading states on submit buttons (disabling them to prevent double submissions) and added `role="alert"` and `aria-live="polite"` to status messages so screen readers announce the success status dynamically.
