## 2024-11-20 - Adding Loading/Disabled State to Vanilla JS Form

**Learning:** When simulating network requests with vanilla JavaScript `setTimeout` and changing submit button states (e.g., to `<i data-lucide="loader-2" class="w-5 h-5 mr-2 animate-spin"></i> Enviando...`), it is critical to save the button's `originalBtnContent` (`innerHTML`) and restore it explicitly once the request "completes". Also, `event.submitter` is a cleaner way to capture the button that fired the submission without needing `id` selectors.

**Action:** Whenever implementing a disabled/loading state for simulated async actions in vanilla JS without frameworks like React, always explicitly restore the original DOM state of the trigger element to prevent visual bugs if the user intends to perform the action again. Also use `event.submitter` when changing button states within a form `submit` listener to ensure accuracy.

## 2024-11-20 - Preserving Journal Context

**Learning:** When using bash commands to update journal files like `palette.md`, using the `>` operator overwrites the entire file, destroying previous context.

**Action:** Always use the `>>` append operator to add new entries to journal files rather than overwriting them, ensuring historical learnings are retained.
