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
        // Disable heavy optional modules — saves ~95 KiB / 7s on slow 4G
        autocapture: false,
        disable_session_recording: true,
        disable_surveys: true,
        disable_web_experiments: true,
        capture_dead_clicks: false,
        capture_performance: false,
        advanced_disable_decide: true,
        advanced_disable_feature_flags: true,
        advanced_disable_feature_flags_on_first_load: true,
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
    setTimeout(initPosthog, 2000);
  }
}
