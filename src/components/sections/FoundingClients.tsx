export default function FoundingClients() {
  const benefits = [
    { icon: "♾", title: "Condições vitalícias", desc: "Taxas e termos do piloto mantidos permanentemente, independente de reajustes futuros após lançamento público." },
    { icon: "⚙", title: "3 customizações operacionais", desc: "Split, webhooks e onboarding adaptados à operação do merchant antes da release geral." },
    { icon: "◎", title: "Prioridade no roadmap", desc: "Decisões de desenvolvimento influenciadas diretamente pelos founding clients. Sua operação molda o produto." },
    { icon: "⟳", title: "Linha direta com o time", desc: "Suporte sem intermediários durante todo o piloto. Canal direto para incidentes e solicitações técnicas." },
    { icon: "◈", title: "Relatórios quinzenais", desc: "Desempenho da camada de settlement da sua operação durante o piloto — antes do dashboard público." },
    { icon: "⬡", title: "Badge on-chain", desc: "Reconhecimento como participante fundador do ecossistema Z-PAY. Registro rastreável e auditável." },
  ];

  return (
    <section className="section">
      <div className="section-inner">
        <div className="rv">
          <div className="chip">05 — PROGRAMA FOUNDING CLIENTS</div>
          <h2>
            Piloto fechado. <em>20 vagas.</em>
          </h2>
          <p className="lead" style={{ marginBottom: 36 }}>
            Acesso controlado e restrito com condições estruturais exclusivas — não
            disponíveis após o lançamento público. Objetivo: validar a camada
            operacional com merchants selecionados antes da abertura geral.
          </p>
        </div>
        <div className="g2" style={{ marginBottom: 48 }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`rv ${i % 2 === 0 ? "d1" : "d2"} card`}
              style={{ display: "flex", gap: 14, height: "100%" }}
            >
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{b.icon}</span>
              <div>
                <div
                  style={{
                    fontFamily: "'Bricolage Grotesque',sans-serif",
                    fontWeight: 900,
                    fontSize: 15,
                    color: "var(--accent)",
                    marginBottom: 5,
                  }}
                >
                  {b.title}
                </div>
                <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65 }}>
                  {b.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TAXAS */}
        <div className="rv">
          <div className="chip" style={{ marginBottom: 10 }}>
            ESTRUTURA DE TAXAS — PILOTO FECHADO
          </div>
          <p
            style={{
              fontSize: 14,
              color: "var(--text2)",
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 600,
            }}
          >
            As taxas abaixo refletem a estrutura operacional do piloto. A
            mensalidade Pro subsidia taxas por transação menores. Valores são
            operacionais — não constituem retorno financeiro.
          </p>
        </div>
        <div className="g3" style={{ alignItems: "start", marginBottom: 12 }}>
          {/* Core */}
          <div className="rv d1 pc">
            <div className="pc-plan">Core</div>
            <div className="pc-price">
              R$0 <span>/mês</span>
            </div>
            <div className="pc-desc">Fase inicial de integração.</div>
            <div className="pc-fee">
              PIX: <strong>4,5%</strong> · Cartão: <strong>5,5%</strong>+R$0,50 ·
              Ativos digitais: <strong>3,5%</strong>
            </div>
            <ul className="pc-items">
              <li>Charges ilimitadas</li>
              <li>Link de checkout rastreável</li>
              <li>Webhooks com log de eventos</li>
              <li>Dashboard operacional</li>
            </ul>
            <button className="pc-btn outline">Começar</button>
          </div>
          {/* Pro */}
          <div className="rv d2 pc hi">
            <span className="pc-badge">RECOMENDADO</span>
            <div className="pc-plan">Pro</div>
            <div className="pc-price">
              R$79 <span>/mês</span>
            </div>
            <div className="pc-desc">Operações com maior volume.</div>
            <div className="pc-fee">
              PIX: <strong>3,2%</strong> · Cartão: <strong>4,5%</strong>+R$0,25 ·
              Ativos digitais: <strong>2,5%</strong>
            </div>
            <ul className="pc-items">
              <li>Tudo do Core</li>
              <li>Split avançado por charge</li>
              <li>Webhooks com retry automático</li>
              <li>Idempotência obrigatória</li>
              <li>Relatórios operacionais</li>
            </ul>
            <button className="pc-btn solid">Assinar Pro</button>
          </div>
          {/* Business */}
          <div className="rv d3 pc">
            <div className="pc-plan">Business</div>
            <div className="pc-price" style={{ fontSize: 26, paddingTop: 6 }}>
              Sob consulta
            </div>
            <div className="pc-desc">Plataformas e marketplaces.</div>
            <div className="pc-fee">
              Taxas negociadas por volume · Split customizado · SLA 99,9%
            </div>
            <ul className="pc-items">
              <li>Tudo do Pro</li>
              <li>Taxas negociadas por volume</li>
              <li>Split multi-recebedor</li>
              <li>Suporte operacional dedicado</li>
            </ul>
            <button className="pc-btn outline">Falar com vendas</button>
          </div>
        </div>
        <p className="fee-disc rv">
          Taxas operacionais de orquestração. Não constituem retorno financeiro ou
          garantia de resultado. Liquidação sujeita a disponibilidade dos rails
          parceiros.
        </p>

        {/* CTA BOX */}
        <div className="rv pilot-box" style={{ marginTop: 40 }} id="cta-section">
          <div className="pilot-nums">
            <div>
              <div className="pilot-val">20</div>
              <div className="pilot-label">vagas disponíveis</div>
            </div>
            <div className="pilot-sep" />
            <div>
              <div className="pilot-price">R$10.000</div>
              <div className="pilot-label">Setup único — Founding Client</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
            <a
              className="btn-accent"
              href="mailto:founding@zettaceo.com?subject=Founding%20Client%20%E2%80%94%20Solicita%C3%A7%C3%A3o%20de%20Vaga&body=Quero%20participar%20do%20programa%20Founding%20Clients%20da%20Z-PAY."
            >
              Solicitar uma vaga →
            </a>
            <a
              className="btn-outline"
              href="https://z-pay-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Página institucional
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
