"use client";

const SITE_URL = "https://z-pay-eight.vercel.app";
const BRICOLAGE = '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif';

const metaItems = [
  { k: "Versão",     v: "1.0 — Piloto Fechado",          green: false },
  { k: "Jurisdição", v: "BR · VARA Dubai (alinhamento)",  green: false },
  { k: "Acesso",     v: "Restrito — 20 vagas",            green: false },
  { k: "Status",     v: "● Em operação",                  green: true  },
];

export function Hero() {
  const handleCTAClick = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative max-w-[1100px] mx-auto"
      style={{
        padding:
          "calc(100px + var(--safe-top)) calc(22px + var(--safe-right)) 80px calc(22px + var(--safe-left))",
      }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 60, left: -100, right: -100, height: 400,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%,rgba(255,122,24,.08) 0%,transparent 100%)",
        }}
      />

      <div className="relative z-10">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 mb-7 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-[7px] text-[12px] font-black tracking-[.10em] uppercase"
            style={{
              background: "rgba(255,122,24,.09)",
              border: "1px solid rgba(255,122,24,.20)",
              color: "#ff7a18",
            }}
          >
            <span
              className="w-[7px] h-[7px] rounded-full flex-shrink-0 animate-blink"
              style={{ background: "#ff7a18", boxShadow: "0 0 10px rgba(255,122,24,.35)" }}
            />
            PROGRAMA FOUNDING CLIENTS · ACESSO RESTRITO
          </div>
        </div>

        {/* H1 */}
        <h1
          className="font-black leading-[1.04] tracking-[-0.03em] max-w-[820px] mb-[18px] animate-fade-up"
          style={{
            fontFamily: BRICOLAGE,
            fontSize: "clamp(26px,6vw,72px)",
            color: "#f1f5f9",
            animationDelay: "80ms",
          }}
        >
          Piloto fechado.{" "}
          <em className="not-italic" style={{ color: "#ff7a18" }}>20 vagas.</em>{" "}
          Condições vitalícias.
        </h1>

        {/* Sub */}
        <p
          className="max-w-[640px] mb-9 leading-[1.75] animate-fade-up"
          style={{ fontSize: 17, color: "#8aa0bd", animationDelay: "160ms" }}
        >
          Documento técnico e comercial do programa de acesso restrito à Z-PAY
          — a camada de orquestração de pagamentos do ecossistema ZETTA,
          projetada para liquidação rastreável entre rails fiat e digitais.
        </p>

        {/* Meta grid */}
        <div
          className="grid grid-cols-2 max-w-[520px] mb-9 rounded-2xl overflow-hidden animate-fade-up"
          style={{
            border: "1px solid rgba(255,255,255,0.055)",
            animationDelay: "220ms",
          }}
        >
          {metaItems.map((item, i) => (
            <div
              key={item.k}
              className="px-5 py-4"
              style={{
                background: "#0d1322",
                borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.055)" : undefined,
                borderBottom: i < 2     ? "1px solid rgba(255,255,255,0.055)" : undefined,
              }}
            >
              <div
                className="text-[10px] font-black uppercase tracking-[.12em] mb-1"
                style={{ color: "#445a78" }}
              >
                {item.k}
              </div>
              <div
                className="font-mono text-[13px] font-bold"
                style={{ color: item.green ? "#22c55e" : "#ff7a18" }}
              >
                {item.v}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-3 flex-wrap animate-fade-up" style={{ animationDelay: "280ms" }}>
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center text-[14px] font-black px-6 py-[13px] rounded-[13px] cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#ff7a18,#ff4d00)",
              color: "#000",
              border: "none",
              boxShadow: "0 10px 34px rgba(255,122,24,.18)",
            }}
          >
            Solicitar uma vaga
          </button>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center text-[14px] font-bold px-5 py-[13px] rounded-[13px] no-underline transition-all duration-200 hover:text-[#ff7a18]"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "#f1f5f9",
            }}
          >
            Página institucional →
          </a>
        </div>
      </div>
    </section>
  );
}
