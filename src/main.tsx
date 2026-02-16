import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import App from "./App.tsx";
import "./index.css";

// PostHog cookieless analytics – no cookies, no persistent identifiers
if (typeof window !== "undefined") {
  posthog.init("phc_BtikiRHz5OPnBiHKbtxIqwh9V2piWhtfSuv0U24CSuD", {
    api_host: "https://eu.i.posthog.com",
    ui_host: "https://eu.posthog.com",
    persistence: "memory",
    disable_cookie: true,
    capture_pageview: false,
    capture_pageleave: true,
    debug: true,
    loaded: (ph) => {
      ph.capture("$pageview");
    },
  });
}

createRoot(document.getElementById("root")!).render(<App />);
