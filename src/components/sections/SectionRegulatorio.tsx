import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Chip } from "@/components/ui/Chip";

const blocks = [
  {
    title: "Natureza do documento",
    body: "Documento técnico e comercial do programa Founding Clients. Não constitui oferta pública de valores mobiliários, prospecto de investimento ou promessa de resultado financeiro.",
  },
  {
    title: "Natureza da Z-PAY",
    body: "Infraestrutura de orquestração de pagamentos. Não é banco, não capta recursos, não opera como instituição financeira. Liquidação via parceiros autorizados conforme jurisdição.",
  },
  {
    title: "Ativos digitais",
    body: "Suporte a rails digitais é infraestrutura operacional de orquestração — não constitui oferta, custódia ou gestão de ativos virtuais. Operações seguem as políticas dos parceiros de liquidação autorizados.",
  },
  {
    title: "VARA / VASP",
    body: "Diálogo institucional com framework VARA Dubai em preparação. Nenhuma alegação de aprovação regulatória vigente. Alinhamento progressivo orientado por conformidade operacional.",
  },
];

export function SectionRegulatorio() {
  return (
    <section className="relative z-10 py-20 px-[22px]" style={{ background: "#090d18" }}>
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection className="mb-8">
          <Chip>08 — POSTURA REGULATÓRIA</Chip>
          <h2
            className="font-display font-black leading-[1.08] tracking-[-0.03em]"
            style={{ fontSize: "clamp(22px,5vw,46px)", color: "#f1f5f9" }}
          >
            Alinhamento{" "}
            <em className="not-italic" style={{ color: "#ff7a18" }}>
              progressivo.
            </em>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          {blocks.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.07}>
              <div
                className="rounded-[14px] p-5 h-full"
                style={{
                  background: "rgba(0,0,0,.3)",
                  border: "1px solid rgba(255,255,255,0.055)",
                }}
              >
                <div
                  className="font-bold text-[14px] mb-2"
                  style={{ color: "#8aa0bd" }}
                >
                  {b.title}
                </div>
                <div className="text-[13px] leading-[1.75]" style={{ color: "#8aa0bd" }}>
                  {b.body}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
