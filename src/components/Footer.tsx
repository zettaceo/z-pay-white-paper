import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-row">
          <div className="footer-brand">
            <div className="brand-badge" style={{ width: 32, height: 32, borderRadius: 9 }}>
              <Image
                src="/assets/logo/zpay-logo.png"
                alt="Z-PAY"
                width={32}
                height={32}
              />
            </div>
            <div>
              <div className="footer-brand-name">Z-PAY</div>
              <div className="footer-brand-sub">
                SETTLEMENT LAYER · ZETTA ECOSYSTEM
              </div>
            </div>
          </div>
          <p className="footer-legal">
            Z-PAY é infraestrutura de orquestração de pagamentos. Não constitui
            serviço financeiro, recomendação de investimento ou garantia de
            resultado. Parte do ecossistema ZETTA WORD. © 2025 ZETTA WORD ·{" "}
            <a href="mailto:contact@zettaceo.com" style={{ color: "inherit" }}>
              contact@zettaceo.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
