import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Chip } from "@/components/ui/Chip";

const items = [
  {
    positive: false,
    title: "Não é banco",
    body: "Infraestrutura de orquestração. Não capta, não custodia, não opera como instituição financeira. Liquidação via parceiros autorizados.",
  },
  {
    positive: false,
    title: "Não promete retorno",
    body: "Nenhuma funcionalidade constitui produto de investimento, recomendação financeira ou garantia de resultado operacional.",
  },
  {
    positive: false,
    title: "Não é produto isolado",
    body: "Módulo do ecossistema ZETTA — projetado para integração progressiva com Z-FINANCE, OBELISK-Z e ZION AI.",
  },
  {
    positive: true,
    title: "É infraestrutura",
    body: "Settlement layer com arquitetura orientada a auditoria, idempotência obrigatória e eventos rastreáveis em todas as operações.",
  },
];

export function SectionDiferenciacao() {
  return (
    <section
      className="relative z-10 py-20 px-[22px]"
      style={{ background: "#090d18" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection className="mb-7">
          <Chip>02 — DIFERENCIAÇÃO</Chip>
          <h2
            className="font-display font-black leading-[1.08] tracking-[-0.03em]"
            style={{ fontSize: "clamp(22px,5vw,46px)", color: "#f1f5f9" }}
          >
            O que a Z-PAY não é.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.07}>
              <div
                className="flex gap-3 items-start p-5 rounded-[14px] h-full"
                style={{
                  background: item.positive
                    ? "rgba(255,122,24,.05)"
                    : "rgba(0,0,0,.25)",
                  border: item.positive
                    ? "1px solid rgba(255,122,24,.22)"
                    : "1px solid rgba(255,255,255,0.055)",
                }}
              >
                <span
                  className="font-black text-[16px] flex-shrink-0 mt-0.5"
                  style={{
                    color: item.positive
                      ? "#ff7a18"
                      : "rgba(239,68,68,.6)",
                  }}
                >
                  {item.positive ? "✓" : "✗"}
                </span>
                <div>
                  <div
                    className="font-display font-black text-[15px] mb-1.5"
                    style={{
                      color: item.positive ? "#ff7a18" : "#8aa0bd",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="text-[13px] leading-[1.65]"
                    style={{ color: "#8aa0bd" }}
                  >
                    {item.body}
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
