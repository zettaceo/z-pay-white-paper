"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Chip } from "@/components/ui/Chip";

const CONTACT_EMAIL = "contato@zettaword.com";

const benefits = [
  { icon: "♾", title: "Condições vitalícias", body: "Taxas e termos do piloto mantidos permanentemente, independente de reajustes futuros após lançamento público." },
  { icon: "⚙", title: "3 customizações operacionais", body: "Split, webhooks e onboarding adaptados à operação do merchant antes da release geral." },
  { icon: "◎", title: "Prioridade no roadmap", body: "Decisões de desenvolvimento influenciadas diretamente pelos founding clients. Sua operação molda o produto." },
  { icon: "⟳", title: "Linha direta com o time", body: "Suporte sem intermediários durante todo o piloto. Canal direto para incidentes e solicitações técnicas." },
  { icon: "◈", title: "Relatórios quinzenais", body: "Desempenho da camada de settlement da sua operação durante o piloto — antes do dashboard público." },
  { icon: "⬡", title: "Badge on-chain", body: "Reconhecimento como participante fundador do ecossistema Z-PAY. Registro rastreável e auditável." },
];

const plans = [
  {
    plan: "Core",
    price: "R$0",
    period: "/mês",
    desc: "Fase inicial de integração.",
    fee: { pix: "4,5%", card: "5,5%+R$0,50", crypto: "3,5%" },
    features: ["Charges ilimitadas", "Link de checkout rastreável", "Webhooks com log de eventos", "Dashboard operacional"],
    highlight: false,
    badge: null,
    btnLabel: "Começar",
  },
  {
    plan: "Pro",
    price: "R$79",
    period: "/mês",
    desc: "Operações com maior volume.",
    fee: { pix: "3,2%", card: "4,5%+R$0,25", crypto: "2,5%" },
    features: ["Tudo do Core", "Split avançado por charge", "Webhooks com retry automático", "Idempotência obrigatória", "Relatórios operacionais"],
    highlight: true,
    badge: "RECOMENDADO",
    btnLabel: "Assinar Pro",
  },
  {
    plan: "Business",
    price: "Sob consulta",
    period: null,
    desc: "Plataformas e marketplaces.",
    fee: { pix: null, card: null, crypto: null },
    feeCustom: "Taxas negociadas por volume · Split customizado · SLA 99,9%",
    features: ["Tudo do Pro", "Taxas negociadas por volume", "Split multi-recebedor", "Suporte operacional dedicado"],
    highlight: false,
    badge: null,
    btnLabel: "Falar com vendas",
  },
];

export function SectionFoundingClients() {
  return (
    <section className="relative z-10 py-20 px-[22px]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-9">
          <Chip>05 — PROGRAMA FOUNDING CLIENTS</Chip>
          <h2
            className="font-display font-black leading-[1.08] tracking-[-0.03em] mb-3"
            style={{ fontSize: "clamp(22px,5vw,46px)", color: "#f1f5f9" }}
          >
            Piloto fechado.{" "}
            <em className="not-italic" style={{ color: "#ff7a18" }}>20 vagas.</em>
          </h2>
          <p className="text-[16px] leading-[1.75] max-w-[620px]" style={{ color: "#8aa0bd" }}>
            Acesso controlado e restrito com condições estruturais exclusivas — não disponíveis após
            o lançamento público. Objetivo: validar a camada operacional com merchants selecionados
            antes da abertura geral.
          </p>
        </AnimatedSection>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 gap-4 mb-12 max-sm:grid-cols-1">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.07}>
              <div
                className="flex gap-3.5 items-start rounded-[20px] p-[26px] h-full transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "#0d1322", border: "1px solid rgba(255,255,255,0.055)" }}
              >
                <span className="text-[1.3rem] flex-shrink-0">{b.icon}</span>
                <div>
                  <div className="font-display font-black text-[15px] mb-1.5" style={{ color: "#ff7a18" }}>
                    {b.title}
                  </div>
                  <div className="text-[13px] leading-[1.65]" style={{ color: "#8aa0bd" }}>
                    {b.body}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Pricing */}
        <AnimatedSection className="mb-2">
          <Chip className="mb-2.5">ESTRUTURA DE TAXAS — PILOTO FECHADO</Chip>
          <p className="text-[14px] leading-[1.7] mb-7 max-w-[600px]" style={{ color: "#8aa0bd" }}>
            As taxas abaixo refletem a estrutura operacional do piloto. A mensalidade Pro subsidia taxas
            por transação menores. Valores são operacionais — não constituem retorno financeiro.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-3 gap-4 items-start mb-3 max-sm:grid-cols-1">
          {plans.map((p, i) => (
            <AnimatedSection key={p.plan} delay={i * 0.07}>
              <div
                className="relative rounded-[22px] p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: p.highlight
                    ? "linear-gradient(145deg,rgba(255,122,24,.10),#0d1322)"
                    : "#090d18",
                  border: p.highlight
                    ? "1px solid rgba(255,122,24,.28)"
                    : "1px solid rgba(255,255,255,0.055)",
                  boxShadow: p.highlight ? "0 0 60px rgba(255,122,24,.06)" : undefined,
                }}
              >
                {p.badge && (
                  <span
                    className="absolute top-3.5 right-3.5 text-[9px] font-black tracking-[.10em] uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: "linear-gradient(135deg,#ff7a18,#ff4d00)",
                      color: "#000",
                    }}
                  >
                    {p.badge}
                  </span>
                )}
                <div className="text-[11px] font-black uppercase tracking-[.12em] mb-1.5" style={{ color: "#8aa0bd" }}>
                  {p.plan}
                </div>
                <div className="font-display font-black leading-none mb-1" style={{ fontSize: 38, color: "#f1f5f9" }}>
                  {p.price}
                  {p.period && (
                    <span className="text-[14px] font-bold" style={{ color: "#8aa0bd", fontFamily: "var(--font-dm-sans)" }}>
                      {p.period}
                    </span>
                  )}
                </div>
                <div className="text-[13px] mb-4 pb-[15px]" style={{ color: "#8aa0bd", borderBottom: "1px solid rgba(255,255,255,0.055)" }}>
                  {p.desc}
                </div>
                <div
                  className="rounded-[11px] px-3.5 py-2.5 mb-4 text-[12px] leading-[1.7]"
                  style={{ background: "#0d1322", border: "1px solid rgba(255,255,255,0.055)", color: "#8aa0bd" }}
                >
                  {p.feeCustom ? (
                    p.feeCustom
                  ) : (
                    <>
                      PIX: <strong className="font-mono" style={{ color: "#f1f5f9" }}>{p.fee.pix}</strong>
                      {" · "}Cartão: <strong className="font-mono" style={{ color: "#f1f5f9" }}>{p.fee.card}</strong>
                      {" · "}Ativos digitais: <strong className="font-mono" style={{ color: "#f1f5f9" }}>{p.fee.crypto}</strong>
                    </>
                  )}
                </div>
                <ul className="list-none mb-4">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 py-1.5 text-[13px]" style={{ color: "#8aa0bd" }}>
                      <span
                        className="flex items-center justify-center w-[18px] h-[18px] rounded-[5px] text-[10px] font-black flex-shrink-0"
                        style={{ background: "rgba(255,122,24,.12)", border: "1px solid rgba(255,122,24,.18)", color: "#ff7a18" }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-[13px] text-[14px] font-black cursor-pointer transition-all duration-200"
                  style={
                    p.highlight
                      ? {
                          background: "linear-gradient(135deg,#ff7a18,#ff4d00)",
                          color: "#000",
                          border: "none",
                          boxShadow: "0 10px 32px rgba(255,122,24,.18)",
                        }
                      : {
                          background: "transparent",
                          border: "1px solid rgba(255,255,255,0.10)",
                          color: "#f1f5f9",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!p.highlight) {
                      e.currentTarget.style.borderColor = "rgba(255,122,24,.4)";
                      e.currentTarget.style.color = "#ff7a18";
                    } else {
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.boxShadow = "0 12px 38px rgba(255,122,24,.24)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!p.highlight) {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                      e.currentTarget.style.color = "#f1f5f9";
                    } else {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = "0 10px 32px rgba(255,122,24,.18)";
                    }
                  }}
                >
                  {p.btnLabel}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <p className="text-[12px] italic leading-[1.65]" style={{ color: "#445a78" }}>
            Taxas operacionais de orquestração. Não constituem retorno financeiro ou garantia de resultado.
            Liquidação sujeita a disponibilidade dos rails parceiros.
          </p>
        </AnimatedSection>

        {/* CTA Box */}
        <AnimatedSection className="mt-10" delay={0.05}>
          <div
            id="cta-section"
            className="relative rounded-[22px] p-9 overflow-hidden max-sm:p-6"
            style={{
              background: "linear-gradient(135deg,rgba(255,122,24,.08),#0d1322)",
              border: "1px solid rgba(255,122,24,.25)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg,transparent,rgba(255,122,24,.5),transparent)" }}
            />
            <div className="flex gap-8 flex-wrap mb-7 items-center max-sm:flex-col max-sm:gap-4">
              <div>
                <div className="font-display font-black leading-none" style={{ fontSize: 52, color: "#ff7a18" }}>
                  20
                </div>
                <div className="text-[13px] mt-1" style={{ color: "#8aa0bd" }}>vagas disponíveis</div>
              </div>
              <div className="w-px h-[60px] max-sm:hidden" style={{ background: "rgba(255,122,24,.2)" }} />
              <div>
                <div className="font-display font-black leading-none" style={{ fontSize: 34, color: "#f1f5f9" }}>
                  R$10.000
                </div>
                <div className="text-[13px] mt-1" style={{ color: "#8aa0bd" }}>Setup único — Founding Client</div>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center text-[14px] font-black px-6 py-3.5 rounded-[13px] no-underline transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg,#ff7a18,#ff4d00)",
                  color: "#000",
                  border: "none",
                  boxShadow: "0 10px 34px rgba(255,122,24,.18)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,122,24,.28)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "0 10px 34px rgba(255,122,24,.18)";
                }}
              >
                Solicitar uma vaga →
              </a>
              <a
                href="https://z-pay-eight.vercel.app/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center text-[14px] font-bold px-5 py-3.5 rounded-[13px] no-underline transition-all duration-200"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#f1f5f9",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,122,24,.4)";
                  e.currentTarget.style.color = "#ff7a18";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                  e.currentTarget.style.color = "#f1f5f9";
                }}
              >
                Página institucional
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
