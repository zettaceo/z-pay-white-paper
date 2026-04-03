import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Chip } from "@/components/ui/Chip";

const layers = [
  { level: "L5", name: "Aplicação", desc: "Checkout · Dashboard · API · Webhooks · Split", color: "#ff7a18" },
  { level: "L4", name: "Compliance", desc: "KYB · AML · RBAC · Alertas de fraude", color: "#06b6d4" },
  { level: "L3", name: "Ledger", desc: "Append-only · Idempotência · Auditoria imutável", color: "#ff7a18" },
  { level: "L2", name: "Settlement", desc: "Rails fiat + digitais · Parceiros autorizados", color: "#818cf8" },
  { level: "L1", name: "Regulatório", desc: "VARA Dubai · VASP frameworks · Alinhamento progressivo", color: "#06b6d4" },
];

const checks = [
  "Smart contract auditado — Cyberscope, Dez/2024",
  "KYC verificado — equipe fundadora",
  "Alinhamento VARA Dubai em preparação",
  "Ledger imutável — append-only por padrão",
  "Compliance AML estruturado",
  "GDPR Ready",
  "Go tests ✓ — todos passaram",
  "Backend VASP-ready — travel rule + perfis regulatórios",
];

export function SectionCompliance() {
  return (
    <section className="relative z-10 py-20 px-[22px]">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection className="mb-9">
          <Chip>03 — ARQUITETURA DE COMPLIANCE</Chip>
          <h2
            className="font-heading font-black leading-[1.08] tracking-[-0.03em] mb-3"
            style={{ fontSize: "clamp(22px,5vw,46px)", color: "#f1f5f9" }}
          >
            Compliance por design,{" "}
            <em className="not-italic" style={{ color: "#ff7a18" }}>
              não por opção.
            </em>
          </h2>
          <p
            className="text-[16px] leading-[1.75] max-w-[620px]"
            style={{ color: "#8aa0bd" }}
          >
            A postura regulatória da Z-PAY é comportamento estrutural do sistema
            — não módulo adicional. Trilhas, políticas e registros são padrão em
            toda operação.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-[1fr_1.3fr] gap-8 items-start max-[900px]:grid-cols-1">
          {/* Stack */}
          <AnimatedSection>
            <div
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.055)" }}
            >
              {layers.map((layer, i) => (
                <div
                  key={layer.level}
                  className="flex items-center gap-4 px-5 py-[15px]"
                  style={{
                    background: i % 2 === 0 ? "#0d1322" : "#101828",
                    borderBottom:
                      i < layers.length - 1
                        ? "1px solid rgba(255,255,255,0.055)"
                        : undefined,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: layer.color,
                      boxShadow: `0 0 8px ${layer.color}`,
                    }}
                  />
                  <span
                    className="font-mono text-[10px] font-bold tracking-[.06em] uppercase min-w-[36px]"
                    style={{ color: "#445a78" }}
                  >
                    {layer.level}
                  </span>
                  <span
                    className="font-mono text-[11px] font-bold tracking-[.06em] uppercase min-w-[110px]"
                    style={{ color: "#445a78" }}
                  >
                    {layer.name}
                  </span>
                  <span
                    className="text-[13px] flex-1"
                    style={{ color: "#8aa0bd" }}
                  >
                    {layer.desc}
                  </span>
                </div>
              ))}
              <div
                className="flex items-center gap-2 px-5 py-2.5"
                style={{ background: "rgba(34,197,94,.05)" }}
              >
                <span
                  className="w-[7px] h-[7px] rounded-full animate-blink-slow flex-shrink-0"
                  style={{ background: "#22c55e" }}
                />
                <span
                  className="font-mono text-[10px]"
                  style={{ color: "rgba(34,197,94,.8)" }}
                >
                  Sistema em operação · Todas as camadas ativas
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Checklist */}
          <AnimatedSection delay={0.14}>
            <div
              className="font-mono text-[10px] tracking-[.1em] uppercase mb-3"
              style={{ color: "#445a78" }}
            >
              AUDIT CHECKLIST
            </div>
            <div className="flex flex-col gap-2">
              {checks.map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-2.5 rounded-[11px] px-4 py-3"
                  style={{
                    background: "#0d1322",
                    border: "1px solid rgba(255,255,255,0.055)",
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-[6px] flex-shrink-0 flex items-center justify-center text-[10px] font-black mt-0.5"
                    style={{
                      background: "rgba(255,122,24,.12)",
                      border: "1px solid rgba(255,122,24,.22)",
                      color: "#ff7a18",
                    }}
                  >
                    ✓
                  </div>
                  <span
                    className="text-[13px] leading-[1.55]"
                    style={{ color: "#8aa0bd" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
