"use client";

export default function Hero() {
  const handleScrollToCta = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="eyebrow">
          <div className="eyebrow-dot" />
          PROGRAMA FOUNDING CLIENTS · ACESSO RESTRITO
        </div>
        <h1>
          Piloto fechado. <em>20 vagas.</em> Condições vitalícias.
        </h1>
        <p className="hero-sub">
          Documento técnico e comercial do programa de acesso restrito à Z-PAY — a
          camada de orquestração de pagamentos do ecossistema ZETTA, projetada para
          liquidação rastreável entre rails fiat e digitais.
        </p>
        <div className="hero-meta">
          <div
            className="meta-block"
            style={{ borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
          >
            <div className="meta-k">Versão</div>
            <div className="meta-v">1.0 — Piloto Fechado</div>
          </div>
          <div className="meta-block" style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="meta-k">Jurisdição</div>
            <div className="meta-v">BR · VARA Dubai (alinhamento)</div>
          </div>
          <div className="meta-block" style={{ borderRight: "1px solid var(--border)" }}>
            <div className="meta-k">Acesso</div>
            <div className="meta-v">Restrito — 20 vagas</div>
          </div>
          <div className="meta-block">
            <div className="meta-k">Status</div>
            <div className="meta-v green">● Em operação</div>
          </div>
        </div>
        <div className="hero-ctas">
          <button className="btn-accent" onClick={handleScrollToCta}>
            Solicitar uma vaga
          </button>
          <a
            className="btn-outline"
            href="https://z-pay-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Página institucional →
          </a>
        </div>
      </div>
    </div>
  );
}
