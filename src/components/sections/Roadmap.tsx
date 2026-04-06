export default function Roadmap() {
  const phases = [
    {
      num: "01",
      numStyle: { background: "rgba(34,197,94,.12)", border: "1px solid rgba(34,197,94,.5)", color: "#22c55e", boxShadow: "0 0 14px rgba(34,197,94,.14)" },
      phase: "Release Inicial",
      statusColor: "#22c55e",
      statusBg: "rgba(34,197,94,.1)",
      statusBorder: "rgba(34,197,94,.3)",
      statusText: "em operação",
      tags: ["Charges multi-rail", "Split por charge", "Webhooks com retry", "KYB com trilha", "Dashboard operacional", "Idempotência"],
    },
    {
      num: "02",
      numStyle: { background: "rgba(255,122,24,.12)", border: "1px solid rgba(255,122,24,.5)", color: "#ff7a18", boxShadow: "0 0 14px rgba(255,122,24,.14)" },
      phase: "Expansão Operacional",
      statusColor: "#ff7a18",
      statusBg: "rgba(255,122,24,.1)",
      statusBorder: "rgba(255,122,24,.3)",
      statusText: "próxima fase",
      tags: ["Recorrência via PIX", "Antecipação de recebíveis", "Relatórios PDF", "Dashboard WebSocket", "Link-in-bio / 1 clique", "SDKs Node · Python · PHP"],
    },
    {
      num: "03",
      numStyle: { background: "rgba(6,182,212,.12)", border: "1px solid rgba(6,182,212,.5)", color: "#06b6d4", boxShadow: "0 0 14px rgba(6,182,212,.14)" },
      phase: "Integração Ecossistema",
      statusColor: "#06b6d4",
      statusBg: "rgba(6,182,212,.1)",
      statusBorder: "rgba(6,182,212,.3)",
      statusText: "planejado",
      tags: ["Z-FINANCE como carteira", "Nota Fiscal automática", "Gestão de chargebacks", "Anti-fraude por score", "Marketplace nativo", "White-label"],
    },
    {
      num: "04",
      numStyle: { background: "rgba(68,90,120,.15)", border: "1px solid rgba(68,90,120,.4)", color: "#445a78", boxShadow: "none" },
      phase: "Inteligência & Escala",
      statusColor: "#445a78",
      statusBg: "rgba(68,90,120,.1)",
      statusBorder: "rgba(68,90,120,.25)",
      statusText: "visão",
      tags: ["ZION AI Checkout Adaptativo", "Pagamento Preditivo", "Agentic Commerce", "Open Banking", "Multi-currency", "ZETTA Chain on-chain"],
    },
  ];

  return (
    <section className="section">
      <div className="section-inner">
        <div className="rv">
          <div className="chip">07 — ROADMAP ESTRATÉGICO</div>
          <h2>
            Construído para <em>longo prazo.</em>
          </h2>
          <p className="lead" style={{ marginBottom: 40 }}>
            Releases incrementais. Founding clients têm prioridade de acesso e
            influência direta nas decisões de desenvolvimento.
          </p>
        </div>
        <div className="rv rm-wrap">
          <div className="rm-line" />
          {phases.map((p, i) => (
            <div className="rm-item" key={i}>
              <div className="rm-num" style={p.numStyle}>
                {p.num}
              </div>
              <div className="rm-content">
                <div className="rm-phase">{p.phase}</div>
                <span
                  className="rm-status"
                  style={{
                    color: p.statusColor,
                    background: p.statusBg,
                    borderColor: p.statusBorder,
                  }}
                >
                  <span
                    className="rm-status-dot"
                    style={{ background: p.statusColor }}
                  />
                  {p.statusText}
                </span>
                <div className="rm-tags">
                  {p.tags.map((t, j) => (
                    <span className="rm-tag" key={j}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
