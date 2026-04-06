export default function Regulatorio() {
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

  return (
    <section className="section bg2">
      <div className="section-inner">
        <div className="rv">
          <div className="chip">08 — POSTURA REGULATÓRIA</div>
          <h2 style={{ marginBottom: 32 }}>
            Alinhamento <em>progressivo.</em>
          </h2>
        </div>
        <div className="g2">
          {blocks.map((b, i) => (
            <div
              key={i}
              className={`rv ${i % 2 === 0 ? "d1" : "d2"} legal-block`}
            >
              <div className="legal-title">{b.title}</div>
              <div className="legal-body">{b.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
