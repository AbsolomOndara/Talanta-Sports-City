import { useState } from "react";

const socials = [
  { name: "Instagram", short: "◎", href: "https://instagram.com/talantasportscity/" },
  { name: "X", short: "𝕏", href: "https://x.com/talantacity" },
  { name: "TikTok", short: "♪", href: "https://tiktok.com/@talantasportscity" },
  { name: "YouTube", short: "▶", href: "https://youtube.com/@TalantaSportsCity" },
  { name: "Facebook", short: "f", href: "https://facebook.com/TalantaSportsCity" },
];

function StadiumMark() {
  return (
    <svg className="stadium-mark" viewBox="0 0 126 38" role="img" aria-label="Talanta Sports City">
      <path d="M8 27 21 8l11 17L43 8l12 19L66 8l13 19L90 8l13 19 13-19" />
      <path d="M5 29c19 7 97 7 116 0M16 24h94M24 13v11m17-11v11m18-11v11m17-11v11m18-11v11" />
      <path className="mark-accent" d="m63 5 4 5-4 5-4-5z" />
    </svg>
  );
}

function App() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("This frontend preview does not send or store your email address.");
  }

  return (
    <main className="page" id="home">
      <section className="hero" aria-label="Bayern Munich versus Ajax at Talanta Sports City">
        <img
          className="hero-art"
          src="/images/talanta-hero.webp"
          alt="Raila Odinga International Stadium at sunset, with Bayern Munich and Ajax players and the match date, 5 January 2027."
          fetchPriority="high"
        />
        <header className="hero-header">
          <a className="brand" href="#home" aria-label="Talanta Sports City homepage">
            <StadiumMark />
          </a>
          <a className="header-cta" href="#notify">GET NOTIFIED</a>
        </header>
        <div className="sr-only">
          <p>Raila Odinga International Stadium at Talanta Sports City, Nairobi, Kenya.</p>
          <h1>Bayern Munich vs Ajax, 5 January 2027.</h1>
          <p>Tickets on sale from 5 November.</p>
        </div>
      </section>

      <section className="notify" id="notify" aria-labelledby="notify-heading">
        <div className="notify-main">
          <h2 id="notify-heading">TICKETS ON SALE <span>5 NOVEMBER</span></h2>
          <div className="notify-form-wrap">
            <p className="notify-intro">Notify me of any updates and news.</p>
            <form className="notify-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
                required
              />
              <button type="submit">NOTIFY ME</button>
            </form>
            <p className="consent">
              By submitting your email, you also agree for us to send you news and updates about Talanta Sports City.
            </p>
            {message && <p className="form-message" role="status">{message}</p>}
          </div>
        </div>

        <footer className="footer">
          <div className="footer-left">
            <a className="footer-brand" href="#home">TALANTA SPORTS CITY</a>
            <a href="https://talantasportscity.com/privacy" target="_blank" rel="noreferrer">PRIVACY</a>
            <a href="https://talantasportscity.com/terms" target="_blank" rel="noreferrer">TERMS</a>
          </div>
          <nav className="socials" aria-label="Social media">
            {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={`Talanta Sports City on ${social.name}`}>
                <span aria-hidden="true">{social.short}</span>
              </a>
            ))}
          </nav>
        </footer>
      </section>
    </main>
  );
}

export default App;
