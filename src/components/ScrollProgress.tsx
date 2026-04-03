"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const d = document.documentElement;
      const pct = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100;
      setProgress(pct);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[9999] h-[2.5px] pointer-events-none rounded-r-sm transition-[width] duration-75 ease-linear"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, #ff4d00, #ff7a18, #ffb347)",
          boxShadow: "0 0 12px rgba(255,122,24,.55)",
        }}
      >
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full"
          style={{
            background: "#ff7a18",
            boxShadow: "0 0 10px rgba(255,122,24,.8)",
          }}
        />
      </div>
    </>
  );
}
