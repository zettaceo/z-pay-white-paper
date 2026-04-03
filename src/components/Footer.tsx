"use client";

import Link from "next/link";

const SITE_URL = "https://z-pay-eight.vercel.app";
const CONTACT_EMAIL = "contato@zettaword.com";

export function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "#0d1322",
        borderTop: "1px solid rgba(255,122,24,.12)",
        padding:
          "32px calc(22px + var(--safe-right)) calc(28px + var(--safe-bottom)) calc(22px + var(--safe-left))",
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(255,122,24,.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="flex justify-between items-center flex-wrap gap-3.5">
          {/* Brand */}
          <Link
            href={SITE_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2.5 no-underline"
          >
            <div
              className="w-8 h-8 rounded-[9px] flex items-center justify-center overflow-hidden flex-shrink-0"
              style={{
                background: "linear-gradient(145deg,rgba(255,122,24,.14),rgba(255,77,0,.06))",
                border: "1px solid rgba(255,122,24,.24)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${SITE_URL}/assets/logo/zpay-logo.png`}
                alt="Z-PAY"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
            <div>
              <div
                className="font-heading font-extrabold text-[14px] tracking-[.06em]"
                style={{ color: "#f1f5f9" }}
              >
                Z-PAY
              </div>
              <div
                className="text-[9px] tracking-[.1em] uppercase mt-0.5"
                style={{ color: "#445a78" }}
              >
                SETTLEMENT LAYER · ZETTA ECOSYSTEM
              </div>
            </div>
          </Link>

          {/* Legal */}
          <p className="text-[11px] leading-[1.65] max-w-[500px]" style={{ color: "#445a78" }}>
            Z-PAY é infraestrutura de orquestração de pagamentos. Não constitui serviço financeiro,
            recomendação de investimento ou garantia de resultado. Parte do ecossistema ZETTA WORD.{" "}
            © 2025 ZETTA WORD ·{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="no-underline hover:underline"
              style={{ color: "#445a78" }}
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
