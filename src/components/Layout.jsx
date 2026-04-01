import { NavLink, useLocation } from "react-router-dom";

function BrandSwitch() {
  const location = useLocation();
  const inEmbodied = location.pathname.startsWith("/embodied-labs");

  return (
    <div className="brand-switch">
      <NavLink className={!inEmbodied ? "active" : ""} to="/">
        Optic
      </NavLink>
      <NavLink className={inEmbodied ? "active" : ""} to="/embodied-labs">
        Embodied Labs
      </NavLink>
    </div>
  );
}

export function AppShell({ theme = "optic", nav, children }) {
  return (
    <div className={`app-shell theme-${theme}`}>
      <div className="page-glow page-glow-left" aria-hidden="true"></div>
      <div className="page-glow page-glow-right" aria-hidden="true"></div>
      <div className="page-noise" aria-hidden="true"></div>

      <header className="site-header">
        <NavLink className="brand" to={theme === "optic" ? "/" : "/embodied-labs"}>
          <span className="brand-mark">{theme === "optic" ? "O" : "E"}</span>
          <span className="brand-text">
            <strong>{theme === "optic" ? "OPTIC" : "EMBODIED LABS"}</strong>
            <span>
              {theme === "optic"
                ? "Perception Infrastructure"
                : "Frontier Lab for Physical AI"}
            </span>
          </span>
        </NavLink>

        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => (isActive ? "active" : "")}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <BrandSwitch />
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <p>
          {theme === "optic"
            ? "Optic.ai / perception infrastructure for physical AI"
            : "Embodied Labs / frontier research and transfer engine"}
        </p>
        <p>Depth remains separate as downstream consequence and decision infrastructure.</p>
      </footer>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export function PageHero({ eyebrow, title, body, actions, side }) {
  return (
    <section className="section hero-section">
      <div className="section-inner hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="hero-lede">{body}</p>
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </div>
        <div className="hero-visual">{side}</div>
      </div>
    </section>
  );
}

export function Card({ className = "", children }) {
  return <article className={`content-card ${className}`.trim()}>{children}</article>;
}
