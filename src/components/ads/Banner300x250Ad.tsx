"use client";
import { useEffect, useRef } from "react";

export function Banner300x250Ad({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const injected = useRef(false);

  useEffect(() => {
    if (!containerRef.current || injected.current) return;
    injected.current = true;

    (window as any).atOptions = {
      key: "36c51b8ba4aa7ca78170f18473091dd9",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://cockygoodness.com/36c51b8ba4aa7ca78170f18473091dd9/invoke.js";
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: 300, height: 250, overflow: "hidden" }}
    />
  );
}
