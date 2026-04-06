export default function PainelContador() {
  const cards = [
    { title: "Painel Contador", body: "Dashboard com visão dos merchants indicados — KYB, volume e comissões. Sem acesso às contas individuais." },
    { title: "Receita por indicação", body: "Comissionamento por merchant ativado. Revenue share sobre fees enquanto o merchant estiver ativo." },
    { title: "Contrato de indicação", body: "Contrato de canal comercial. Você é canal — não intermediário financeiro. Responsabilidade regulatória permanece na Z-PAY." },
    { title: "Kit comercial", body: "Material de apresentação, scripts e treinamento. Você apresenta — nós fazemos o onboarding técnico." },
  ];

  const models = [
    {
      label: "Modelo A",
      badgeText: "Mais caixa agora",
      badgeBg: "rgba(255,122,24,.15)",
      badgeColor: "var(--accent)",
      badgeBorder: "rgba(255,122,24,.25)",
      name: "Entrada rápida",
      perMerchant: "R$4.000",
      revenue: "10% das fees",
      revenuePeriod: "Receita mensal (12 meses)",
      note: "Você recebe R$4.000 assim que o merchant ativa a conta. Depois, recebe 10% das taxas que ele pagar mensalmente por 1 ano.",
      borderColor: undefined as string | undefined,
    },
    {
      label: "Modelo B",
      badgeText: "Equilíbrio",
      badgeBg: "rgba(6,182,212,.12)",
      badgeColor: "var(--teal)",
      badgeBorder: "rgba(6,182,212,.25)",
      name: "Recorrência forte",
      perMerchant: "R$2.500",
      revenue: "20% das fees",
      revenuePeriod: "Receita mensal (24 meses)",
      note: "Recebe menos na ativação, mas o percentual mensal é maior e dura 2 anos. Para um escritório com BPO, vira uma linha de receita estável.",
      borderColor: "rgba(255,122,24,.22)",
    },
    {
      label: "Modelo C",
      badgeText: "Mais recorrência",
      badgeBg: "rgba(129,140,248,.12)",
      badgeColor: "var(--purple)",
      badgeBorder: "rgba(129,140,248,.25)",
      name: "Canal exclusivo",
      perMerchant: "R$1.500",
      revenue: "30% das fees",
      revenuePeriod: "Receita mensal (sem prazo)",
      note: "Menor valor de ativação, mas 30% das fees para sempre — sem prazo. Ao atingir 20 merchants ativos, você garante exclusividade regional.",
      borderColor: undefined,
    },
  ];

  const delays = ["d1", "d2", "d3"];

  return (
    <section className="section bg2">
      <div className="section-inner">
        <div className="rv">
          <div className="chip">06 — PAINEL DO CONTADOR</div>
          <h2>
            Canal parceiro <em>sem risco operacional.</em>
          </h2>
          <p className="lead" style={{ marginBottom: 32 }}>
            A Z-PAY tem painel dedicado para escritórios de contabilidade e
            assessores. O parceiro indica — não opera. Não toca em recursos, não dá
            ordens, não assume responsabilidade regulatória.
          </p>
        </div>

        <div className="g2" style={{ marginBottom: 28 }}>
          <div className="rv d1 role-card role-yes">
            <div className="role-title acc">O que o parceiro FAZ</div>
            <div className="role-body">
              Apresenta a infraestrutura Z-PAY ao cliente PJ. Indica o merchant
              para onboarding. Acompanha status no Painel Contador.
            </div>
          </div>
          <div className="rv d2 role-card role-no">
            <div className="role-title dim">O que NÃO faz</div>
            <div className="role-body">
              Não opera a conta. Não toca em recursos. Não dá ordem de pagamento.
              Não assume responsabilidade regulatória sobre a operação do merchant.
            </div>
          </div>
        </div>

        <div className="g2" style={{ marginBottom: 36 }}>
          {cards.map((c, i) => (
            <div
              key={i}
              className={`rv ${i % 2 === 0 ? "d1" : "d2"} card`}
              style={{ height: "100%" }}
            >
              <div className="card-title">{c.title}</div>
              <div className="card-body">{c.body}</div>
            </div>
          ))}
        </div>

        <div className="rv">
          <div className="chip" style={{ marginBottom: 16 }}>
            MODELOS DE COMISSIONAMENTO
          </div>
          <p
            style={{
              fontSize: 14,
              color: "var(--text2)",
              lineHeight: 1.75,
              maxWidth: 680,
              marginBottom: 10,
            }}
          >
            Como canal parceiro, você escolhe{" "}
            <strong style={{ color: "var(--text)" }}>um único modelo</strong> antes
            de começar a indicar. A diferença é simples: quanto maior o pagamento
            por merchant indicado, menor o percentual mensal recorrente — e
            vice-versa. Escolha de acordo com o que faz mais sentido para o caixa
            do seu escritório.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 28,
              padding: "12px 16px",
              background: "rgba(255,122,24,.06)",
              border: "1px solid rgba(255,122,24,.18)",
              borderRadius: 12,
              maxWidth: 680,
            }}
          >
            <span style={{ fontSize: 18, flexShrink: 0 }}>💡</span>
            <p
              style={{
                fontSize: 13,
                color: "var(--text2)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              <strong style={{ color: "var(--accent)" }}>Regra prática:</strong> se
              você quer dinheiro agora → Modelo A. Se prefere renda mensal de longo
              prazo → Modelo B ou C. O Modelo C também garante exclusividade na sua
              região.
            </p>
          </div>
        </div>

        <div className="g3" style={{ marginBottom: 12 }}>
          {models.map((m, i) => (
            <div
              key={i}
              className={`rv ${delays[i]} model`}
              style={m.borderColor ? { borderColor: m.borderColor } : undefined}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <div className="model-lbl">{m.label}</div>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 900,
                    textTransform: "uppercase" as const,
                    letterSpacing: ".08em",
                    padding: "3px 8px",
                    borderRadius: 999,
                    background: m.badgeBg,
                    color: m.badgeColor,
                    border: `1px solid ${m.badgeBorder}`,
                  }}
                >
                  {m.badgeText}
                </span>
              </div>
              <div className="model-name">{m.name}</div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text2)",
                  marginBottom: 12,
                  lineHeight: 1.6,
                  padding: "10px 12px",
                  background: "var(--card2)",
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 5,
                  }}
                >
                  <span>Por merchant indicado</span>
                  <strong
                    style={{
                      color: "var(--accent)",
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    {m.perMerchant}
                  </strong>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{m.revenuePeriod}</span>
                  <strong
                    style={{
                      color: "var(--teal)",
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    {m.revenue}
                  </strong>
                </div>
              </div>
              <div className="model-note">
                {m.note.includes("exclusividade regional") ? (
                  <>
                    {m.note.split("exclusividade regional")[0]}
                    <strong style={{ color: "var(--text)" }}>
                      exclusividade regional
                    </strong>
                    .
                  </>
                ) : (
                  m.note
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="fee-disc rv">
          Comissão paga após confirmação do setup pelo merchant. Revenue share
          calculado sobre receita líquida de fees. Exclusividade condicionada ao
          cumprimento de meta mínima de 20 merchants ativos.
        </p>
      </div>
    </section>
  );
}
