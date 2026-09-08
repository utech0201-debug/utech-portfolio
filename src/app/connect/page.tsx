import Link from "next/link";

type ConnectPageProps = {
  searchParams?: Promise<{
    phone?: string;
    portfolio?: string;
  }>;
};

export default async function ConnectPage({ searchParams }: ConnectPageProps) {
  const params = (await searchParams) ?? {};
  const phone = params.phone?.replace(/\D/g, "") || "233547912435";
  const portfolio = params.portfolio || "https://utech-portfolio.vercel.app";
  const whatsappMessage = encodeURIComponent(
    "Hello Oscar, I got your UTECH business card and would like to discuss your services."
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMessage}`;

  return (
    <main className="connect-page">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <section className="connect-card" aria-label="UTECH contact options">
        <div className="brand-mark">U</div>
        <p className="brand-name">UTECH</p>
        <p className="eyebrow">DIGITAL SOLUTIONS</p>

        <h1>Let&apos;s connect.</h1>
        <p className="intro">
          Hi, I&apos;m <strong>Oscar Vordzorgbe Dziedzorm</strong>, a Software Developer.
          Choose an option below to continue.
        </p>

        <div className="actions">
          <a className="action whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
            <span className="icon">💬</span>
            <span>
              <strong>Chat on WhatsApp</strong>
              <small>Message me directly</small>
            </span>
            <span className="arrow">→</span>
          </a>

          <a className="action portfolio" href={portfolio} target="_blank" rel="noreferrer">
            <span className="icon">🌐</span>
            <span>
              <strong>Visit My Portfolio</strong>
              <small>See my work &amp; projects</small>
            </span>
            <span className="arrow">→</span>
          </a>
        </div>

        <div className="contact-details">
          <a href="tel:+233547912435">📞 054 791 2435</a>
          <a href="mailto:utech0201@gmail.com">✉️ utech0201@gmail.com</a>
          <a href="mailto:utech.dev2@gmail.com">✉️ utech.dev2@gmail.com</a>
          <span>📍 HO, VOLTA Ghana</span>
        </div>

        <Link className="back-link" href="/">
          ← Back to UTECH Portfolio
        </Link>
      </section>

      <style>{`
        * { box-sizing: border-box; }
        .connect-page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 32px 18px;
          position: relative;
          overflow: hidden;
          background: #05070b;
          color: #f8fafc;
          font-family: Arial, Helvetica, sans-serif;
        }
        .glow {
          position: fixed;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: .18;
          pointer-events: none;
          background: #1687ff;
        }
        .glow-one { top: -150px; left: -120px; }
        .glow-two { right: -140px; bottom: -170px; background: #5b5cff; }
        .connect-card {
          width: min(100%, 500px);
          position: relative;
          z-index: 1;
          padding: 34px 28px 26px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 28px;
          background: rgba(10,14,22,.88);
          box-shadow: 0 30px 80px rgba(0,0,0,.45);
          backdrop-filter: blur(18px);
          text-align: center;
        }
        .brand-mark {
          width: 58px;
          height: 58px;
          margin: 0 auto 10px;
          display: grid;
          place-items: center;
          border-radius: 17px;
          background: linear-gradient(135deg,#1687ff,#5b5cff);
          font-size: 31px;
          font-weight: 900;
          box-shadow: 0 12px 30px rgba(22,135,255,.28);
        }
        .brand-name { margin: 0; font-size: 21px; font-weight: 900; letter-spacing: .22em; }
        .eyebrow { margin: 7px 0 0; font-size: 10px; letter-spacing: .24em; color: #7fbaff; font-weight: 700; }
        h1 { margin: 30px 0 10px; font-size: clamp(34px, 9vw, 48px); line-height: 1; letter-spacing: -.04em; }
        .intro { margin: 0 auto; max-width: 410px; color: #aab4c4; line-height: 1.65; font-size: 15px; }
        .intro strong { color: #fff; }
        .actions { display: grid; gap: 12px; margin-top: 28px; }
        .action {
          display: grid;
          grid-template-columns: 46px 1fr 24px;
          align-items: center;
          gap: 12px;
          padding: 15px;
          border-radius: 17px;
          text-align: left;
          text-decoration: none;
          color: #fff;
          border: 1px solid rgba(255,255,255,.09);
          transition: transform .18s ease, border-color .18s ease, background .18s ease;
        }
        .action:hover { transform: translateY(-2px); border-color: rgba(255,255,255,.2); }
        .whatsapp { background: linear-gradient(135deg,rgba(24,150,78,.28),rgba(14,91,58,.18)); }
        .portfolio { background: linear-gradient(135deg,rgba(22,135,255,.27),rgba(57,57,150,.18)); }
        .icon { width: 46px; height: 46px; display:grid; place-items:center; border-radius: 13px; background: rgba(255,255,255,.09); font-size: 21px; }
        .action strong, .action small { display:block; }
        .action strong { font-size: 15px; }
        .action small { margin-top: 4px; color: #9ca9ba; font-size: 12px; }
        .arrow { color: #8dbfff; font-size: 22px; }
        .contact-details { display:grid; gap: 7px; margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.08); }
        .contact-details a, .contact-details span { color:#8f9bac; text-decoration:none; font-size:12px; }
        .contact-details a:hover { color:#fff; }
        .back-link { display:inline-block; margin-top:22px; color:#72b4ff; text-decoration:none; font-size:12px; }
        .back-link:hover { text-decoration:underline; }
        @media (max-width: 420px) {
          .connect-card { padding: 28px 18px 22px; border-radius: 23px; }
          .action { grid-template-columns: 42px 1fr 20px; padding: 13px; }
          .icon { width:42px; height:42px; }
        }
      `}</style>
    </main>
  );
}
