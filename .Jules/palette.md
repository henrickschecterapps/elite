## 2026-04-16 - Adicionar ARIA Labels em botões icon-only
**Learning:** Elementos interativos como botões e inputs de busca que dependem inteiramente de ícones para comunicar seu propósito não são acessíveis para leitores de tela e tecnologias assistivas sem a utilização da tag `aria-label`. Pude perceber a ausência desta boa prática neste projeto em elementos cruciais como navegação lightbox, botões mobile e campos de busca.
**Action:** Sempre verificar a presença e adicionar as propriedades `aria-label` adequadas em botões ou inputs que contêm apenas ícones, providenciando descrições concisas de seu propósito em português.

## 2026-04-24 - File input accessibility with sr-only
**Learning:** Custom styled file input components that hide the actual `<input type="file">` element using `class="hidden"` completely remove the element from the accessibility tree and keyboard tab order, rendering them unusable for keyboard-only and screen reader users. The application failed to provide focus visibility or screen reader compatibility for the image upload inputs.
**Action:** Replace `class="hidden"` with `.sr-only` (screen-reader only) for the actual input element, allowing it to remain focusable and readable by screen readers. Apply `focus-within` styles on the parent custom label wrapper to ensure a clear visual indicator is shown to keyboard users when the input receives focus. Add JavaScript logic to update visual elements to reflect file selection to give all users proper interaction feedback.

## 2024-07-07 - Form Submission State Feedback
**Learning:** In vanilla JS forms with simulated network requests, showing a success message while the button still says "Sending" creates conflicting UI states. Additionally, abruptly clearing a multi-line success message too quickly (e.g., 1000ms) prevents users from reading crucial next steps.
**Action:** Always implement a loading state during async submissions (disable button, show spinner), immediately restore the button's original state upon completion before showing success feedback, and ensure multi-line status messages remain visible for an adequate duration (e.g., 8 seconds).
