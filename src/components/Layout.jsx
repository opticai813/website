import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function BrandSwitch({ className = "", onNavigate }) {
  const location = useLocation();
  const inEmbodied = location.pathname.startsWith("/embodied-labs");

  return (
    <div className={`brand-switch ${className}`.trim()}>
      <NavLink className={!inEmbodied ? "active" : ""} onClick={onNavigate} to="/">
        Optic
      </NavLink>
      <NavLink
        className={inEmbodied ? "active" : ""}
        onClick={onNavigate}
        to="/embodied-labs"
      >
        Embodied Labs
      </NavLink>
    </div>
  );
}

function NavigationMenu({ nav, mobile = false, onNavigate }) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!openMenu || mobile) return undefined;

    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [mobile, openMenu]);

  return (
    <nav
      className={mobile ? "mobile-nav" : "site-nav"}
      aria-label={mobile ? "Mobile primary" : "Primary"}
      ref={navRef}
    >
      {nav.map((item) => {
        const displayMark = item.label === "PIE" ? "\u03C0" : item.mark;

        if (!item.items) {
          return (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                mobile
                  ? `mobile-nav-link ${isActive ? "active" : ""}`.trim()
                  : isActive
                    ? "active"
                    : ""
              }
              onClick={onNavigate}
              to={item.to}
            >
              {item.label}
            </NavLink>
          );
        }

        const active = item.items.some((child) => location.pathname === child.to);
        const open = openMenu === item.label;

        if (mobile) {
          return (
            <div
              className={`mobile-nav-group ${active ? "active" : ""} ${open ? "open" : ""}`}
              key={item.label}
            >
              <button
                className="mobile-nav-trigger"
                type="button"
                aria-expanded={open}
                onClick={() =>
                  setOpenMenu((current) => (current === item.label ? null : item.label))
                }
              >
                <span className="mobile-nav-trigger-label">
                  <span>{item.label}</span>
                  {displayMark ? (
                    <span className="nav-menu-trigger-mark" aria-hidden="true">
                      {displayMark}
                    </span>
                  ) : null}
                </span>
                <span className="mobile-nav-trigger-icon" aria-hidden="true">
                  {open ? "−" : "+"}
                </span>
              </button>
              <div className="mobile-nav-panel">
                {item.items.map((child) => (
                  <NavLink
                    key={child.to}
                    className={({ isActive }) =>
                      `mobile-nav-sublink ${isActive ? "active" : ""}`.trim()
                    }
                    onClick={onNavigate}
                    to={child.to}
                  >
                    <strong>{child.label}</strong>
                    <span>{child.description}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          );
        }

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
                  {displayMark}
                </span>
              ) : null}
            </button>
            <div className="nav-menu-panel">
              <div className="nav-menu-panel-head">
                <p className="panel-label">
                  {item.label}
                  {displayMark ? (
                    <span className="nav-menu-panel-mark"> {displayMark}</span>
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
                    onClick={onNavigate}
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
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
            <span className={`brand-mark ${theme === "optic" ? "brand-mark-image-wrap" : ""}`}>
              {theme === "optic" ? (
                <img
                  className="brand-mark-image"
                  src="/assets/optic-wolf-mark.png"
                  alt=""
                  aria-hidden="true"
                />
              ) : (
                "E"
              )}
            </span>
            <span className="brand-text">
              <strong>{theme === "optic" ? "OPTIC" : "EMBODIED LABS"}</strong>
              <span>
                {theme === "optic"
                  ? "AI Perception Infrastructure"
                  : "Frontier Lab for Physical AI"}
              </span>
            </span>
          </NavLink>

          <div className="site-header-nav">
            <NavigationMenu nav={nav} />
          </div>

          <div className="site-header-actions">
            <BrandSwitch className="brand-switch-desktop" />
            <button
              className={`mobile-menu-button ${mobileMenuOpen ? "open" : ""}`}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMobileMenuOpen((current) => !current)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div className={`mobile-nav-shell ${mobileMenuOpen ? "open" : ""}`}>
          <NavigationMenu
            mobile
            nav={nav}
            onNavigate={() => setMobileMenuOpen(false)}
          />
          <BrandSwitch
            className="brand-switch-mobile"
            onNavigate={() => setMobileMenuOpen(false)}
          />
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
