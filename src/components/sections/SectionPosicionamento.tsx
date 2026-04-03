"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Chip } from "@/components/ui/Chip";

const cards = [
  {
    icon: "⚡",
    title: "Orquestração",
    body: "Checkout multi-rail com split configurável por charge. Um único ponto de integração para rails fiat e digitais.",
    highlight: true,
  },
  {
    icon: "📋",
    title: "Rastreabilidade",
    body: "Ledger auditável e append-only. Cada evento registrado da criação ao settlement. Conciliação nativa por design.",
    highlight: false,
  },
  {
    icon: "🔧",
    title: "Modularidade",
    body: "Settlement layer desacoplado do Z-FINANCE. Opera de forma independente com integração progressiva ao ecossistema.",
    highlight: false,
  },
  {
    icon: "🔐",
    title: "Compliance-first",
    body: "KYB estruturado, trilhas de auditoria por padrão e RBAC — comportamento estrutural do sistema, não camada opcional.",
    highlight: false,
  },
];

export function SectionPosicionamento() {
  return (
    <section className="relative z-10 py-20 px-[22px]">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection className="mb-9">
          <Chip>01 — POSICIONAMENTO</Chip>
          <h2
            className="font-display font-black leading-[1.08] tracking-[-0.03em] mb-3"
            style={{ fontSize: "clamp(22px,5vw,46px)", color: "#f1f5f9" }}
          >
            Não é um gateway.{" "}
            <em className="not-italic" style={{ color: "#ff7a18" }}>
              É infraestrutura.
            </em>
          </h2>
          <p
            className="text-[16px] leading-[1.75] max-w-[620px]"
            style={{ color: "#8aa0bd" }}
          >
            A Z-PAY foi projetada como settlement layer — não como produto
            isolado. Sua função dentro do ecossistema ZETTA é orquestrar
            checkout, eventos e liquidação entre rails fiat e digitais de forma
            rastreável, modular e orientada a compliance desde a base.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.07}>
              <div
                className="h-full rounded-[20px] p-[26px] relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px]"
                style={{
                  background: card.highlight
                    ? "linear-gradient(135deg,rgba(255,122,24,.08),#0d1322)"
                    : "#0d1322",
                  border: card.highlight
                    ? "1px solid rgba(255,122,24,.22)"
                    : "1px solid rgba(255,255,255,0.055)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = card.highlight
                    ? "rgba(255,122,24,.38)"
                    : "rgba(255,255,255,0.10)";
                  e.currentTarget.style.background = card.highlight
                    ? "linear-gradient(135deg,rgba(255,122,24,.08),#101828)"
                    : "#101828";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = card.highlight
                    ? "rgba(255,122,24,.22)"
                    : "rgba(255,255,255,0.055)";
                  e.currentTarget.style.background = card.highlight
                    ? "linear-gradient(135deg,rgba(255,122,24,.08),#0d1322)"
                    : "#0d1322";
                }}
              >
                <div
                  className="w-[46px] h-[46px] rounded-[14px] flex items-center justify-center text-[20px] mb-3.5"
                  style={{
                    background: "rgba(255,122,24,.12)",
                    border: "1px solid rgba(255,122,24,.18)",
                  }}
                >
                  {card.icon}
                </div>
                <div
                  className="font-display font-black text-[17px] mb-1.5"
                  style={{ color: "#f1f5f9" }}
                >
                  {card.title}
                </div>
                <div
                  className="text-[13.5px] leading-[1.65]"
                  style={{ color: "#8aa0bd" }}
                >
                  {card.body}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
