export default function Ecossistema() {
  const items = [
    { color: "#ff7a18", name: "Z-FINANCE", desc: "Camada financeira híbrida. Contas digitais, conversão fiat↔ativos digitais e ledger auditável. Integração de liquidação conforme roadmap." },
    { color: "#06b6d4", name: "OBELISK-Z Wallet", desc: "Carteira não-custodial multi-chain. Merchants recebem em ativos digitais diretamente na wallet do ecossistema." },
    { color: "#818cf8", name: "ZION AI", desc: "Motor analítico. Monitora padrões operacionais, detecta anomalias e sugere ajustes — sem executar transações sem autorização." },
    { color: "#ff7a18", name: "ZETTA Chain", desc: "Blockchain do ecossistema. Trilhas on-chain para transparência operacional e auditoria imutável." },
    { color: "#06b6d4", name: "Z-SWAP", desc: "Camada de liquidez entre rails. Integração com Z-PAY para conversão no fluxo de settlement." },
    { color: "#fbbf24", name: "Z-PAD", desc: "Launchpad do ecossistema. Merchants da Z-PAY têm acesso prioritário a projetos do launchpad." },
  ];

  return (
    <section className="section bg2">
      <div className="section-inner">
        <div className="rv">
          <div className="chip">04 — ECOSSISTEMA</div>
          <h2>
            Módulo dentro de uma <em>infraestrutura maior.</em>
          </h2>
          <p className="lead" style={{ marginBottom: 36 }}>
            A Z-PAY não opera como produto standalone. É a settlement layer do
            ecossistema ZETTA — integração progressiva com os demais módulos é
            arquitetura, não promessa.
          </p>
        </div>
        <div className="g2">
          {items.map((item, i) => (
            <div
              key={i}
              className={`rv ${i % 2 === 0 ? "d1" : "d2"} eco-item`}
            >
              <div
                className="eco-dot"
                style={{
                  background: item.color,
                  boxShadow: `0 0 7px ${item.color}`,
                }}
              />
              <div>
                <div className="eco-name" style={{ color: item.color }}>
                  {item.name}
                </div>
                <div className="eco-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
