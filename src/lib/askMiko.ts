/**
 * Opens the embedded Miko chat and, when a question is supplied, prefills the input and
 * submits it so the suggested question is actually asked. The widget exposes no JS API, so
 * we drive its DOM directly and degrade gracefully (just open) if it's rate-limited or the
 * markup shifts.
 */
export function askMiko(question?: string): void {
  const launcher = document.querySelector<HTMLButtonElement>(".pythia-btn");
  // Open only if the launcher is showing (it's display:none once the panel is open). Use computed
  // display, NOT offsetParent — a position:fixed launcher reports offsetParent=null even when visible
  // (that bug sent the prompt without opening the panel on mobile).
  if (launcher && getComputedStyle(launcher).display !== "none") launcher.click();
  if (!question) return;
  window.setTimeout(() => {
    const input = document.querySelector<HTMLInputElement>(".pythia-input");
    const form = document.querySelector<HTMLFormElement>(".pythia-form");
    if (!input || !form || input.disabled) return; // paused/rate-limited → leave for the user
    input.value = question;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    if (typeof form.requestSubmit === "function") form.requestSubmit();
    else form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  }, 220);
}
