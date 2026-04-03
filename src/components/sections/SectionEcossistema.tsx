"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Chip } from "@/components/ui/Chip";

const modules = [
  {
    name: "Z-FINANCE",
    color: "#ff7a18",
    desc: "Camada financeira híbrida. Contas digitais, conversão fiat↔ativos digitais e ledger auditável. Integração de liquidação conforme roadmap.",
  },
  {
    name: "OBELISK-Z Wallet",
    color: "#06b6d4",
    desc: "Carteira não-custodial multi-chain. Merchants recebem em ativos digitais diretamente na wallet do ecossistema.",
  },
  {
    name: "ZION AI",
    color: "#818cf8",
    desc: "Motor analítico. Monitora padrões operacionais, detecta anomalias e sugere ajustes — sem executar transações sem autorização.",
  },
  {
    name: "ZETTA Chain",
    color: "#ff7a18",
    desc: "Blockchain do ecossistema. Trilhas on-chain para transparência operacional e auditoria imutável.",
  },
  {
    name: "Z-SWAP",
    color: "#06b6d4",
    desc: "Camada de liquidez entre rails. Integração com Z-PAY para conversão no fluxo de settlement.",
  },
  {
    name: "Z-PAD",
    color: "#fbbf24",
    desc: "Launchpad do ecossistema. Merchants da Z-PAY têm acesso prioritário a projetos do launchpad.",
  },
];

export function SectionEcossistema() {
  return (
    <section
      className="relative z-10 py-20 px-[22px]"
      style={{ background: "#090d18" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection className="mb-9">
          <Chip>04 — ECOSSISTEMA</Chip>
          <h2
            className="font-heading font-black leading-[1.08] tracking-[-0.03em] mb-3"
            style={{ fontSize: "clamp(22px,5vw,46px)", color: "#f1f5f9" }}
          >
            Módulo dentro de uma{" "}
            <em className="not-italic" style={{ color: "#ff7a18" }}>
              infraestrutura maior.
            </em>
          </h2>
          <p
            className="text-[16px] leading-[1.75] max-w-[620px]"
            style={{ color: "#8aa0bd" }}
          >
            A Z-PAY não opera como produto standalone. É a settlement layer do
            ecossistema ZETTA — integração progressiva com os demais módulos é
            arquitetura, não promessa.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          {modules.map((mod, i) => (
            <AnimatedSection key={mod.name} delay={i * 0.07}>
              <div
                className="flex items-start gap-3.5 rounded-[14px] p-[18px] transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#0d1322",
                  border: "1px solid rgba(255,255,255,0.055)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.055)")
                }
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                  style={{
                    background: mod.color,
                    boxShadow: `0 0 7px ${mod.color}`,
                  }}
                />
                <div>
                  <div
                    className="font-mono text-[13px] font-bold mb-1"
                    style={{ color: mod.color }}
                  >
                    {mod.name}
                  </div>
                  <div
                    className="text-[13px] leading-[1.6]"
                    style={{ color: "#8aa0bd" }}
                  >
                    {mod.desc}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
