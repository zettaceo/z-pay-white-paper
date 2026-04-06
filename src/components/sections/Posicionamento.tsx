export default function Posicionamento() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="rv">
          <div className="chip">01 — POSICIONAMENTO</div>
          <h2>
            Não é um gateway. <em>É infraestrutura.</em>
          </h2>
          <p className="lead" style={{ marginBottom: 36 }}>
            A Z-PAY foi projetada como settlement layer — não como produto isolado.
            Sua função dentro do ecossistema ZETTA é orquestrar checkout, eventos e
            liquidação entre rails fiat e digitais de forma rastreável, modular e
            orientada a compliance desde a base.
          </p>
        </div>
        <div className="g2">
          <div className="rv d1 card hi" style={{ height: "100%" }}>
            <div className="card-icon">⚡</div>
            <div className="card-title">Orquestração</div>
            <div className="card-body">
              Checkout multi-rail com split configurável por charge. Um único ponto
              de integração para rails fiat e digitais.
            </div>
          </div>
          <div className="rv d2 card" style={{ height: "100%" }}>
            <div className="card-icon">📋</div>
            <div className="card-title">Rastreabilidade</div>
            <div className="card-body">
              Ledger auditável e append-only. Cada evento registrado da criação ao
              settlement. Conciliação nativa por design.
            </div>
          </div>
          <div className="rv d1 card" style={{ height: "100%" }}>
            <div className="card-icon">🔧</div>
            <div className="card-title">Modularidade</div>
            <div className="card-body">
              Settlement layer desacoplado do Z-FINANCE. Opera de forma independente
              com integração progressiva ao ecossistema.
            </div>
          </div>
          <div className="rv d2 card" style={{ height: "100%" }}>
            <div className="card-icon">🔐</div>
            <div className="card-title">Compliance-first</div>
            <div className="card-body">
              KYB estruturado, trilhas de auditoria por padrão e RBAC —
              comportamento estrutural do sistema, não camada opcional.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
