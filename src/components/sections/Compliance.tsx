export default function Compliance() {
  const layers = [
    { color: "#ff7a18", lv: "L5", name: "Aplicação", desc: "Checkout · Dashboard · API · Webhooks · Split" },
    { color: "#06b6d4", lv: "L4", name: "Compliance", desc: "KYB · AML · RBAC · Alertas de fraude" },
    { color: "#ff7a18", lv: "L3", name: "Ledger", desc: "Append-only · Idempotência · Auditoria imutável" },
    { color: "#818cf8", lv: "L2", name: "Settlement", desc: "Rails fiat + digitais · Parceiros autorizados" },
    { color: "#06b6d4", lv: "L1", name: "Regulatório", desc: "VARA Dubai · VASP frameworks · Alinhamento progressivo" },
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

  return (
    <section className="section">
      <div className="section-inner">
        <div className="rv">
          <div className="chip">03 — ARQUITETURA DE COMPLIANCE</div>
          <h2>
            Compliance por design, <em>não por opção.</em>
          </h2>
          <p className="lead" style={{ marginBottom: 36 }}>
            A postura regulatória da Z-PAY é comportamento estrutural do sistema —
            não módulo adicional. Trilhas, políticas e registros são padrão em toda
            operação.
          </p>
        </div>
        <div className="g2-auto">
          <div className="rv">
            <div className="cs">
              {layers.map((l, i) => (
                <div className="cs-row" key={i}>
                  <div
                    className="cs-dot"
                    style={{ background: l.color, boxShadow: `0 0 8px ${l.color}` }}
                  />
                  <div className="cs-lv">{l.lv}</div>
                  <div className="cs-name">{l.name}</div>
                  <div className="cs-desc">{l.desc}</div>
                </div>
              ))}
              <div className="cs-ok">
                <div className="cs-ok-dot" />
                <div className="cs-ok-txt">
                  Sistema em operação · Todas as camadas ativas
                </div>
              </div>
            </div>
          </div>
          <div className="rv d2">
            <div
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: 10,
                color: "var(--text3)",
                letterSpacing: ".1em",
                textTransform: "uppercase" as const,
                marginBottom: 12,
              }}
            >
              AUDIT CHECKLIST
            </div>
            <div className="checklist">
              {checks.map((c, i) => (
                <div className="chk" key={i}>
                  <div className="chk-mark">✓</div>
                  <div className="chk-txt">{c}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
