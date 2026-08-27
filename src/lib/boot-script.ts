/**
 * Runs in <head> before paint.
 *
 * Arms the scroll-reveal hidden state, then starts a watchdog: React clears
 * data-hydrated on mount, and if that never happens (chunk 404, blocked host,
 * offline) we disarm so the page is readable rather than a wall of invisible
 * text. Without this, a failed JS bundle renders a completely blank page.
 */
export const bootScript = `(function () {
  var d = document.documentElement;
  d.dataset.reveal = "on";
  setTimeout(function () {
    if (d.dataset.hydrated !== "1") delete d.dataset.reveal;
  }, 3000);
})();`;
