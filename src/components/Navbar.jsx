import { useState, useEffect } from "react";

/* ── Navbar ─────────────────────────────────────────────────────────── */
export default function Navbar({ page, goHome, darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Home", "About", "Blog", "Contact"];

  const scrollTo = (link) => {
    setMenuOpen(false);

    if (link === "Home") {
      if (page === "home") window.scrollTo({ top: 0, behavior: "smooth" });
      else goHome();
      return;
    }

    const id = link.toLowerCase();
    if (page === "home") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      goHome(id);
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <button className="logo" onClick={() => scrollTo("Home")}>
          <img src="/dadda-icon.svg" alt="" className="logo-mark" width="32" height="32" /> Dadda Blog
        </button>

        {/* Desktop Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} id="main-nav">
          {navLinks.map((link) => (
            <button key={link} className="nav-link" onClick={() => scrollTo(link)}>
              {link}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <button
            className="dark-toggle"
            onClick={toggleDark}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
