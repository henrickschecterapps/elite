## 2026-04-17 - ARIA labels on Icon-only Buttons
**Learning:** This vanilla JS/HTML app contains multiple interactive elements (Lightbox controls, Mobile menu, Favorites) that rely entirely on Lucide icons for their visual presentation without accompanying text, leading to poor screen reader accessibility. The dynamic state of the favorite button requires a dynamic ARIA label.
**Action:** Added localized Portuguese `aria-label` attributes to all icon-only buttons to ensure they are properly announced by screen readers.
