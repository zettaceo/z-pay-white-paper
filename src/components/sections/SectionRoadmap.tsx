import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Chip } from "@/components/ui/Chip";

const phases = [
  {
    num: "01",
    phase: "Release Inicial",
    status: "em operação",
    statusColor: "#22c55e",
    tags: ["Charges multi-rail", "Split por charge", "Webhooks com retry", "KYB com trilha", "Dashboard operacional", "Idempotência"],
  },
  {
    num: "02",
    phase: "Expansão Operacional",
    status: "próxima fase",
    statusColor: "#ff7a18",
    tags: ["Recorrência via PIX", "Antecipação de recebíveis", "Relatórios PDF", "Dashboard WebSocket", "Link-in-bio / 1 clique", "SDKs Node · Python · PHP"],
  },
  {
    num: "03",
    phase: "Integração Ecossistema",
    status: "planejado",
    statusColor: "#06b6d4",
    tags: ["Z-FINANCE como carteira", "Nota Fiscal automática", "Gestão de chargebacks", "Anti-fraude por score", "Marketplace nativo", "White-label"],
  },
  {
    num: "04",
    phase: "Inteligência & Escala",
    status: "visão",
    statusColor: "#445a78",
    tags: ["ZION AI Checkout Adaptativo", "Pagamento Preditivo", "Agentic Commerce", "Open Banking", "Multi-currency", "ZETTA Chain on-chain"],
  },
];

export function SectionRoadmap() {
  return (
    <section className="relative z-10 py-20 px-[22px]">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection className="mb-10">
          <Chip>07 — ROADMAP ESTRATÉGICO</Chip>
          <h2
            className="font-display font-black leading-[1.08] tracking-[-0.03em] mb-3"
            style={{ fontSize: "clamp(22px,5vw,46px)", color: "#f1f5f9" }}
          >
            Construído para{" "}
            <em className="not-italic" style={{ color: "#ff7a18" }}>
              longo prazo.
            </em>
          </h2>
          <p className="text-[16px] leading-[1.75] max-w-[620px]" style={{ color: "#8aa0bd" }}>
            Releases incrementais. Founding clients têm prioridade de acesso e influência direta nas
            decisões de desenvolvimento.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative flex flex-col">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-[42px] bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,122,24,.3), rgba(6,182,212,.15), rgba(68,90,120,.1))",
            }}
          />

          {phases.map((p, i) => (
            <AnimatedSection key={p.num} delay={i * 0.1} className="flex gap-5 relative pb-10 last:pb-0">
              {/* Circle */}
              <div
                className="w-[42px] h-[42px] rounded-full flex-shrink-0 flex items-center justify-center font-mono text-[13px] font-bold z-10"
                style={{
                  background: `rgba(${
                    p.statusColor === "#22c55e"
                      ? "34,197,94"
                      : p.statusColor === "#ff7a18"
                      ? "255,122,24"
                      : p.statusColor === "#06b6d4"
                      ? "6,182,212"
                      : "68,90,120"
                  },.12)`,
                  border: `1px solid ${p.statusColor}80`,
                  color: p.statusColor,
                  boxShadow:
                    p.statusColor !== "#445a78"
                      ? `0 0 14px ${p.statusColor}24`
                      : "none",
                }}
              >
                {p.num}
              </div>

              {/* Content */}
              <div className="pt-2 flex-1">
                <div
                  className="font-display font-black text-[18px] mb-1.5"
                  style={{ color: "#f1f5f9" }}
                >
                  {p.phase}
                </div>
                <div className="mb-2.5">
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-[.10em] uppercase px-2.5 py-0.5 rounded-full"
                    style={{
                      color: p.statusColor,
                      background: `${p.statusColor}1a`,
                      border: `1px solid ${p.statusColor}4d`,
                    }}
                  >
                    <span
                      className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                      style={{ background: p.statusColor }}
                    />
                    {p.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] px-2.5 py-1 rounded-[6px]"
                      style={{
                        color: "#8aa0bd",
                        background: "#0d1322",
                        border: "1px solid rgba(255,255,255,0.055)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
