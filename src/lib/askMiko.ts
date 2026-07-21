/**
 * Opens the embedded Miko chat and, when a question is supplied, prefills the input and
 * submits it so the suggested question is actually asked. The widget exposes no JS API, so
 * we drive its DOM directly and degrade gracefully (just open) if it's rate-limited or the
 * markup shifts.
 *
 * The widget mounts inside a Shadow DOM (pythia d521f02): its elements live in the (open)
 * shadow root of `.pythia-host` and are NOT reachable via document.querySelector. Resolve
 * through the host's shadowRoot, falling back to the light DOM for older widget builds.
 */
function widgetRoot(): ParentNode {
  const host = document.querySelector<HTMLElement>(".pythia-host");
  return host?.shadowRoot ?? document;
}

export function askMiko(question?: string): void {
  const launcher = widgetRoot().querySelector<HTMLButtonElement>(".pythia-btn");
  // Open only if the launcher is showing (it's display:none once the panel is open). Use computed
  // display, NOT offsetParent — a position:fixed launcher reports offsetParent=null even when visible
  // (that bug sent the prompt without opening the panel on mobile).
  if (launcher && getComputedStyle(launcher).display !== "none") launcher.click();
  if (!question) return;
  window.setTimeout(() => {
    const root = widgetRoot(); // re-resolve — the panel can mount after open
    const input = root.querySelector<HTMLInputElement>(".pythia-input");
    const form = root.querySelector<HTMLFormElement>(".pythia-form");
    if (!input || !form || input.disabled) return; // paused/rate-limited → leave for the user
    input.value = question;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    if (typeof form.requestSubmit === "function") form.requestSubmit();
    else form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  }, 220);
}
