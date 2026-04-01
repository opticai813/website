import { useEffect, useRef, useState } from "react";
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

function NavigationMenu({ nav }) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!openMenu) return undefined;

    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [openMenu]);

  return (
    <nav className="site-nav" aria-label="Primary" ref={navRef}>
      {nav.map((item) => {
        const displayMark = item.label === "PIE" ? "π" : item.mark;

        if (!item.items) {
          return (
            <NavLink
              key={item.to}
              className={({ isActive }) => (isActive ? "active" : "")}
              to={item.to}
            >
              {item.label}
            </NavLink>
          );
        }

        const active = item.items.some((child) => location.pathname === child.to);
        const open = openMenu === item.label;

        return (
          <div
            className={`nav-menu ${active ? "active" : ""} ${open ? "open" : ""}`}
            key={item.label}
          >
            <button
              className="nav-menu-trigger"
              type="button"
              aria-expanded={open}
              onClick={() =>
                setOpenMenu((current) => (current === item.label ? null : item.label))
              }
            >
              <span className="nav-menu-trigger-text">{item.label}</span>
              {displayMark ? (
                <span className="nav-menu-trigger-mark" aria-hidden="true">
                  {item.label === "PIE" ? "\u03C0" : displayMark}
                </span>
              ) : null}
            </button>
            <div className="nav-menu-panel">
              <div className="nav-menu-panel-head">
                <p className="panel-label">
                  {item.label}
                  {displayMark ? (
                    <span className="nav-menu-panel-mark">
                      {" "}
                      {item.label === "PIE" ? "\u03C0" : displayMark}
                    </span>
                  ) : null}
                </p>
                <p>{item.description}</p>
              </div>
              <div className="nav-menu-grid">
                {item.items.map((child) => (
                  <NavLink
                    key={child.to}
                    className={({ isActive }) =>
                      `nav-submenu-link ${isActive ? "active" : ""}`.trim()
                    }
                    to={child.to}
                  >
                    <strong>{child.label}</strong>
                    <span>{child.description}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export function AppShell({ theme = "optic", nav, children }) {
  const footerTitle =
    theme === "optic"
      ? "Reusable perception infrastructure for autonomous machines."
      : "Frontier R&D for embodied perception and machine intelligence.";
  const footerBody =
    theme === "optic"
      ? "Edge-deployable, multi-modal, and interoperable software for defense, robotics, industrial systems, and the next generation of autonomous machine platforms."
      : "Embodied Labs develops experimental systems, evaluation frameworks, and transferable breakthroughs that can mature into deployable platform capabilities such as Optic.";
  const footerGroups =
    theme === "optic"
      ? [
          {
            title: "Platform",
            links: [
              { label: "Overview", to: "/" },
              { label: "PIE Stack", to: "/optic/platform" },
              { label: "Runtime", to: "/optic/developers" },
              { label: "Mission Systems", to: "/optic/government" },
              { label: "Interfaces", to: "/optic/mockups" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "Briefing Room", to: "/optic/documents" },
              { label: "Trajectory", to: "/optic/investor" },
              { label: "Request Demo", to: "/optic/request-demo" },
            ],
          },
        ]
      : [
          {
            title: "Frontier Lab",
            links: [
              { label: "Overview", to: "/embodied-labs" },
              { label: "Research Themes", to: "/embodied-labs/programs" },
              { label: "Transfer Model", to: "/embodied-labs/charter" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "Briefing Room", to: "/embodied-labs/documents" },
              { label: "Partner With the Lab", to: "/embodied-labs/partner" },
            ],
          },
        ];

  return (
    <div className={`app-shell theme-${theme}`}>
      <div className="page-glow page-glow-left" aria-hidden="true"></div>
      <div className="page-glow page-glow-right" aria-hidden="true"></div>
      <div className="page-noise" aria-hidden="true"></div>

      <header className="site-header">
        <div className="site-header-inner">
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

          <NavigationMenu nav={nav} />

          <BrandSwitch />
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="site-footer-brand">
            <p className="panel-label">{theme === "optic" ? "Optic.ai" : "Embodied Labs"}</p>
            <h3>{footerTitle}</h3>
            <p>{footerBody}</p>
          </div>

          {footerGroups.map((group) => (
            <div className="site-footer-column" key={group.title}>
              <p className="panel-label">{group.title}</p>
              <div className="site-footer-links">
                {group.links.map((item) => (
                  <NavLink key={item.to} to={item.to}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
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

export function PageHero({
  className = "",
  eyebrow,
  title,
  body,
  actions,
  side,
  backgroundVideo,
}) {
  return (
    <section className={`section hero-section ${className}`.trim()}>
      {backgroundVideo ? (
        <div className="hero-background" aria-hidden="true">
          <video
            className="hero-background-video"
            src={backgroundVideo.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={backgroundVideo.poster}
          />
          <div className="hero-background-overlay"></div>
        </div>
      ) : null}
      <div className="hero-shell hero-grid">
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
