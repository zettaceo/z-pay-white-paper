"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Chip } from "@/components/ui/Chip";

const roles = [
  {
    positive: true,
    title: "O que o parceiro FAZ",
    body: "Apresenta a infraestrutura Z-PAY ao cliente PJ. Indica o merchant para onboarding. Acompanha status no Painel Contador.",
  },
  {
    positive: false,
    title: "O que NÃO faz",
    body: "Não opera a conta. Não toca em recursos. Não dá ordem de pagamento. Não assume responsabilidade regulatória sobre a operação do merchant.",
  },
];

const panelCards = [
  { title: "Painel Contador", body: "Dashboard com visão dos merchants indicados — KYB, volume e comissões. Sem acesso às contas individuais." },
  { title: "Receita por indicação", body: "Comissionamento por merchant ativado. Revenue share sobre fees enquanto o merchant estiver ativo." },
  { title: "Contrato de indicação", body: "Contrato de canal comercial. Você é canal — não intermediário financeiro. Responsabilidade regulatória permanece na Z-PAY." },
  { title: "Kit comercial", body: "Material de apresentação, scripts e treinamento. Você apresenta — nós fazemos o onboarding técnico." },
];

const models = [
  {
    label: "Modelo A",
    badge: "Mais caixa agora",
    badgeColor: { bg: "rgba(255,122,24,.15)", color: "#ff7a18", border: "rgba(255,122,24,.25)" },
    name: "Entrada rápida",
    activation: "R$4.000",
    recurring: "10% das fees",
    recurringLabel: "Receita mensal (12 meses)",
    note: "Você recebe R$4.000 assim que o merchant ativa a conta. Depois, recebe 10% das taxas que ele pagar mensalmente por 1 ano.",
    highlight: false,
  },
  {
    label: "Modelo B",
    badge: "Equilíbrio",
    badgeColor: { bg: "rgba(6,182,212,.12)", color: "#06b6d4", border: "rgba(6,182,212,.25)" },
    name: "Recorrência forte",
    activation: "R$2.500",
    recurring: "20% das fees",
    recurringLabel: "Receita mensal (24 meses)",
    note: "Recebe menos na ativação, mas o percentual mensal é maior e dura 2 anos. Para um escritório com BPO, vira uma linha de receita estável.",
    highlight: true,
  },
  {
    label: "Modelo C",
    badge: "Mais recorrência",
    badgeColor: { bg: "rgba(129,140,248,.12)", color: "#818cf8", border: "rgba(129,140,248,.25)" },
    name: "Canal exclusivo",
    activation: "R$1.500",
    recurring: "30% das fees",
    recurringLabel: "Receita mensal (sem prazo)",
    note: "Menor valor de ativação, mas 30% das fees para sempre — sem prazo. Ao atingir 20 merchants ativos, você garante exclusividade regional.",
    highlight: false,
  },
];

export function SectionPainelContador() {
  return (
    <section className="relative z-10 py-20 px-[22px]" style={{ background: "#090d18" }}>
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection className="mb-8">
          <Chip>06 — PAINEL DO CONTADOR</Chip>
          <h2
            className="font-display font-black leading-[1.08] tracking-[-0.03em] mb-3"
            style={{ fontSize: "clamp(22px,5vw,46px)", color: "#f1f5f9" }}
          >
            Canal parceiro{" "}
            <em className="not-italic" style={{ color: "#ff7a18" }}>
              sem risco operacional.
            </em>
          </h2>
          <p className="text-[16px] leading-[1.75] max-w-[620px]" style={{ color: "#8aa0bd" }}>
            A Z-PAY tem painel dedicado para escritórios de contabilidade e assessores. O parceiro
            indica — não opera. Não toca em recursos, não dá ordens, não assume responsabilidade
            regulatória.
          </p>
        </AnimatedSection>

        {/* Role cards */}
        <div className="grid grid-cols-2 gap-4 mb-7 max-sm:grid-cols-1">
          {roles.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.07}>
              <div
                className="p-5 rounded-[14px] h-full"
                style={{
                  background: r.positive ? "rgba(255,122,24,.06)" : "rgba(0,0,0,.25)",
                  border: r.positive
                    ? "1px solid rgba(255,122,24,.22)"
                    : "1px solid rgba(255,255,255,0.055)",
                }}
              >
                <div
                  className="font-display font-black text-[15px] mb-2"
                  style={{ color: r.positive ? "#ff7a18" : "#8aa0bd" }}
                >
                  {r.title}
                </div>
                <div className="text-[13.5px] leading-[1.7]" style={{ color: "#8aa0bd" }}>
                  {r.body}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Panel feature cards */}
        <div className="grid grid-cols-2 gap-4 mb-9 max-sm:grid-cols-1">
          {panelCards.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.07}>
              <div
                className="rounded-[20px] p-[26px] h-full transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "#0d1322", border: "1px solid rgba(255,255,255,0.055)" }}
              >
                <div className="font-display font-black text-[17px] mb-1.5" style={{ color: "#f1f5f9" }}>
                  {c.title}
                </div>
                <div className="text-[13.5px] leading-[1.65]" style={{ color: "#8aa0bd" }}>
                  {c.body}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Commission models */}
        <AnimatedSection className="mb-4">
          <Chip className="mb-4">MODELOS DE COMISSIONAMENTO</Chip>
          <p className="text-[14px] leading-[1.75] max-w-[680px] mb-3" style={{ color: "#8aa0bd" }}>
            Como canal parceiro, você escolhe{" "}
            <strong style={{ color: "#f1f5f9" }}>um único modelo</strong> antes de começar a indicar.
            A diferença é simples: quanto maior o pagamento por merchant indicado, menor o percentual
            mensal recorrente — e vice-versa.
          </p>
          <div
            className="flex items-center gap-2.5 mb-7 px-4 py-3 rounded-xl max-w-[680px]"
            style={{ background: "rgba(255,122,24,.06)", border: "1px solid rgba(255,122,24,.18)" }}
          >
            <span className="text-[18px] flex-shrink-0">💡</span>
            <p className="text-[13px] leading-[1.65] m-0" style={{ color: "#8aa0bd" }}>
              <strong style={{ color: "#ff7a18" }}>Regra prática:</strong> se você quer dinheiro agora
              → Modelo A. Se prefere renda mensal de longo prazo → Modelo B ou C. O Modelo C também
              garante exclusividade na sua região.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-3 gap-4 mb-3 max-sm:grid-cols-1">
          {models.map((m, i) => (
            <AnimatedSection key={m.label} delay={i * 0.07}>
              <div
                className="rounded-[18px] p-6 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#0d1322",
                  border: m.highlight
                    ? "1px solid rgba(255,122,24,.22)"
                    : "1px solid rgba(255,255,255,0.055)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,122,24,.28)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = m.highlight
                    ? "rgba(255,122,24,.22)"
                    : "rgba(255,255,255,0.055)")
                }
              >
                <div className="flex justify-between items-start mb-2">
                  <div
                    className="text-[10px] font-black uppercase tracking-[.12em]"
                    style={{ color: "#445a78" }}
                  >
                    {m.label}
                  </div>
                  <span
                    className="text-[9px] font-black uppercase tracking-[.08em] px-2 py-0.5 rounded-full"
                    style={{
                      background: m.badgeColor.bg,
                      color: m.badgeColor.color,
                      border: `1px solid ${m.badgeColor.border}`,
                    }}
                  >
                    {m.badge}
                  </span>
                </div>
                <div className="font-display font-black text-[18px] mb-2" style={{ color: "#f1f5f9" }}>
                  {m.name}
                </div>
                <div
                  className="rounded-[10px] px-3 py-2.5 mb-3 text-[12px] leading-[1.6]"
                  style={{ background: "#101828", border: "1px solid rgba(255,255,255,0.055)", color: "#8aa0bd" }}
                >
                  <div className="flex justify-between mb-1.5">
                    <span>Por merchant indicado</span>
                    <strong className="font-mono" style={{ color: "#ff7a18" }}>{m.activation}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>{m.recurringLabel}</span>
                    <strong className="font-mono" style={{ color: "#06b6d4" }}>{m.recurring}</strong>
                  </div>
                </div>
                <div className="text-[13px] leading-[1.6]" style={{ color: "#8aa0bd" }}>
                  {m.note}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <p className="text-[12px] italic leading-[1.65]" style={{ color: "#445a78" }}>
            Comissão paga após confirmação do setup pelo merchant. Revenue share calculado sobre receita
            líquida de fees. Exclusividade condicionada ao cumprimento de meta mínima de 20 merchants ativos.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
