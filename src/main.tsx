import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Defer PostHog until the browser is idle so it doesn't block FCP/LCP
if (typeof window !== "undefined") {
  const initPosthog = () => {
    import("posthog-js").then(({ default: posthog }) => {
      posthog.init("phc_y5oUZ6NU74DbSps65iL0HMouXgKlmHMGkodmwzY9wqD", {
        api_host: "https://eu.i.posthog.com",
        ui_host: "https://eu.posthog.com",
        persistence: "memory",
        disable_cookie: true,
        capture_pageview: false,
        capture_pageleave: true,
        debug: false,
        loaded: (ph) => {
          ph.capture("$pageview");
        },
      });
    });
  };
  const ric = (window as any).requestIdleCallback as
    | ((cb: () => void, opts?: { timeout: number }) => number)
    | undefined;
  if (ric) {
    ric(initPosthog, { timeout: 3000 });
  } else {
    setTimeout(initPosthog, 1500);
  }
}
