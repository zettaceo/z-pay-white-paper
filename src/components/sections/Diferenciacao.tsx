export default function Diferenciacao() {
  const negItems = [
    { title: "Não é banco", desc: "Infraestrutura de orquestração. Não capta, não custodia, não opera como instituição financeira. Liquidação via parceiros autorizados." },
    { title: "Não promete retorno", desc: "Nenhuma funcionalidade constitui produto de investimento, recomendação financeira ou garantia de resultado operacional." },
    { title: "Não é produto isolado", desc: "Módulo do ecossistema ZETTA — projetado para integração progressiva com Z-FINANCE, OBELISK-Z e ZION AI." },
  ];

  return (
    <section className="section bg2">
      <div className="section-inner">
        <div className="rv">
          <div className="chip">02 — DIFERENCIAÇÃO</div>
          <h2 style={{ marginBottom: 28 }}>O que a Z-PAY não é.</h2>
        </div>
        <div className="g2">
          {negItems.map((item, i) => (
            <div
              key={i}
              className={`rv ${i % 2 === 0 ? "d1" : "d2"}`}
              style={{
                padding: 20,
                borderRadius: 14,
                background: "rgba(0,0,0,.25)",
                border: "1px solid var(--border)",
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  color: "rgba(239,68,68,.6)",
                  fontWeight: 900,
                  fontSize: 16,
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                ✗
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "'Bricolage Grotesque',sans-serif",
                    fontWeight: 900,
                    fontSize: 15,
                    color: "var(--text2)",
                    marginBottom: 5,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--text2)",
                    lineHeight: 1.65,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
          <div
            className="rv d2"
            style={{
              padding: 20,
              borderRadius: 14,
              background: "rgba(255,122,24,.05)",
              border: "1px solid rgba(255,122,24,.22)",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                color: "var(--accent)",
                fontWeight: 900,
                fontSize: 16,
                flexShrink: 0,
                marginTop: 1,
              }}
            >
              ✓
            </span>
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
                É infraestrutura
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text2)",
                  lineHeight: 1.65,
                }}
              >
                Settlement layer com arquitetura orientada a auditoria, idempotência
                obrigatória e eventos rastreáveis em todas as operações.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
