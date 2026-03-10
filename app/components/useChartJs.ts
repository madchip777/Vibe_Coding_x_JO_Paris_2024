"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Chart?: any;
    __chartJsLoader?: Promise<void>;
  }
}

export function useChartJs() {
  const [ready, setReady] = useState(typeof window !== "undefined" && !!window.Chart);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.Chart) {
      setReady(true);
      return;
    }

    if (!window.__chartJsLoader) {
      window.__chartJsLoader = new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/chart.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Chart.js failed to load"));
        document.body.appendChild(script);
      });
    }

    window.__chartJsLoader
      .then(() => setReady(true))
      .catch(() => setReady(false));
  }, []);

  return ready;
}
