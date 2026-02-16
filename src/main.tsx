import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import App from "./App.tsx";
import "./index.css";

// PostHog cookieless analytics – no cookies, no persistent identifiers
posthog.init("phc_PLACEHOLDER_API_KEY", {
  api_host: "https://eu.i.posthog.com",
  persistence: "memory",
  disable_cookie: true,
  capture_pageview: true,
  capture_pageleave: true,
});

createRoot(document.getElementById("root")!).render(<App />);
