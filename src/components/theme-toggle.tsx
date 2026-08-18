"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "taxez-theme";

type Theme = "light" | "dark";

/**
 * The theme lives on <html data-theme> so it can be set before paint. React
 * subscribes to that DOM state rather than owning a duplicate copy of it.
 */
let listeners: Array<() => void> = [];

function subscribe(onChange: () => void) {
  listeners.push(onChange);
  return () => {
    listeners = listeners.filter((l) => l !== onChange);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Private browsing — the theme still applies for this page view.
  }
  listeners.forEach((l) => l());
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`grid h-9 w-9 place-items-center rounded-full border border-line text-ink-2 transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-[18px] w-[18px]">
        {theme === "dark" ? (
          <>
            <circle cx="10" cy="10" r="3.6" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M10 2v1.6M10 16.4V18M18 10h-1.6M3.6 10H2m12.2-4.2-1.1 1.1M6.9 13.1l-1.1 1.1m8.4 0-1.1-1.1M6.9 6.9 5.8 5.8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </>
        ) : (
          <path
            d="M16.2 12.4A6.8 6.8 0 0 1 7.6 3.8a6.8 6.8 0 1 0 8.6 8.6Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

/** Runs before paint so the stored theme never flashes, and arms scroll reveals. */
export const themeScript = `(function () {
  var d = document.documentElement;
  try {
    var t = localStorage.getItem("${STORAGE_KEY}");
    if (t !== "dark" && t !== "light") {
      t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    d.dataset.theme = t;
  } catch (e) {
    d.dataset.theme = "light";
  }
  // Arm the scroll-reveal hidden state. React clears data-hydrated once it
  // mounts; if the bundle never arrives (chunk 404, blocked host, offline)
  // we disarm so the page is readable instead of a wall of invisible text.
  d.dataset.reveal = "on";
  setTimeout(function () {
    if (d.dataset.hydrated !== "1") delete d.dataset.reveal;
  }, 3000);
})();`
