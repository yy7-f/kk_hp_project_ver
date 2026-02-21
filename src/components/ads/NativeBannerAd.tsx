"use client";
import { useEffect, useRef } from "react";

export function NativeBannerAd({ className }: { className?: string }) {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;
    injected.current = true;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "https://cockygoodness.com/0142e21040018793a4b9c9d578faffb2/invoke.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className={className}>
      <div id="container-0142e21040018793a4b9c9d578faffb2"></div>
    </div>
  );
}
