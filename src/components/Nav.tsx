"use client";

import Link from "next/link";

const SITE_URL = "https://z-pay-eight.vercel.app";

export function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between gap-3.5"
      style={{
        height: 64,
        backdropFilter: "blur(22px) saturate(1.35)",
        background: "rgba(6,9,18,.82)",
        borderBottom: "1px solid rgba(255,255,255,0.055)",
        paddingTop: "calc(10px + var(--safe-top))",
        paddingRight: "calc(26px + var(--safe-right))",
        paddingLeft: "calc(26px + var(--safe-left))",
        paddingBottom: "10px",
      }}
    >
      <Link
        href={SITE_URL}
        target="_blank"
        rel="noopener"
        className="flex items-center gap-3 no-underline"
      >
        <div
          className="w-[38px] h-[38px] rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
          style={{
            background: "linear-gradient(145deg,rgba(255,122,24,.14),rgba(255,77,0,.06))",
            border: "1px solid rgba(255,122,24,.24)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${SITE_URL}/assets/logo/zpay-logo.png`}
            alt="Z-PAY"
            width={38}
            height={38}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        </div>
        <div>
          <div
            className="font-heading font-extrabold text-[15px] tracking-[.06em]"
            style={{ color: "#f1f5f9" }}
          >
            Z-PAY
          </div>
          <div
            className="text-[9px] font-bold tracking-[.12em] uppercase"
            style={{ color: "#445a78" }}
          >
            SETTLEMENT LAYER
          </div>
        </div>
      </Link>

      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-1.5 text-[13px] font-bold px-4 py-2.5 rounded-xl transition-all duration-200 whitespace-nowrap no-underline hover:text-[#ff7a18]"
        style={{
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.10)",
          color: "#8aa0bd",
        }}
      >
        ← Z-PAY
      </a>
    </nav>
  );
}
