import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <a
        className="brand"
        href="https://z-pay-eight.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="brand-badge">
          <Image
            src="/assets/logo/zpay-logo.png"
            alt="Z-PAY"
            width={38}
            height={38}
            priority
          />
        </div>
        <div>
          <div className="brand-name">Z-PAY</div>
          <div className="brand-sub">SETTLEMENT LAYER</div>
        </div>
      </a>
      <a
        className="btn-back"
        href="https://z-pay-eight.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ← Z-PAY
      </a>
    </nav>
  );
}
