## 2026-04-16 - Adicionar ARIA Labels em botões icon-only
**Learning:** Elementos interativos como botões e inputs de busca que dependem inteiramente de ícones para comunicar seu propósito não são acessíveis para leitores de tela e tecnologias assistivas sem a utilização da tag `aria-label`. Pude perceber a ausência desta boa prática neste projeto em elementos cruciais como navegação lightbox, botões mobile e campos de busca.
**Action:** Sempre verificar a presença e adicionar as propriedades `aria-label` adequadas em botões ou inputs que contêm apenas ícones, providenciando descrições concisas de seu propósito em português.

## 2026-04-24 - File input accessibility with sr-only
**Learning:** Custom styled file input components that hide the actual `<input type="file">` element using `class="hidden"` completely remove the element from the accessibility tree and keyboard tab order, rendering them unusable for keyboard-only and screen reader users. The application failed to provide focus visibility or screen reader compatibility for the image upload inputs.
**Action:** Replace `class="hidden"` with `.sr-only` (screen-reader only) for the actual input element, allowing it to remain focusable and readable by screen readers. Apply `focus-within` styles on the parent custom label wrapper to ensure a clear visual indicator is shown to keyboard users when the input receives focus. Add JavaScript logic to update visual elements to reflect file selection to give all users proper interaction feedback.

## 2024-07-04 - Ensuring adequate readability duration for multi-line UI messages
**Learning:** Multi-line temporary status messages are often missed by users when the timeout is too short (e.g. 1-2 seconds), especially when the message requires reading and comprehension. Furthermore, concurrent rapid submissions can create race conditions causing erratic UI behavior.
**Action:** Always store the timeout ID globally or in a closure and clear it (`clearTimeout`) upon subsequent submissions to prevent race conditions. Ensure multi-line messages remain visible for an adequate duration (e.g., 8 seconds) rather than a brief period, allowing users enough time to read them.
