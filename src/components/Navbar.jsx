import { useState, useEffect } from "react";

/* ── Navbar ─────────────────────────────────────────────────────────── */
export default function Navbar({page,handleHome, darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Home", "About", "Blog", "Contact"];

 const scrollTo = (id) => {
  setMenuOpen(false);
  
  if (id === "Home") {
    if (page === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handleHome();
    }
    return;
  }
  
  if (page === "detail") {
    handleHome();
    setTimeout(() => {
      document.getElementById(id.toLowerCase())?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
    return;
  }

  const el = document.getElementById(id.toLowerCase());
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <button className="logo" onClick={handleHome}>
          <span className="logo-dot">✦</span> Dadda Blog
        </button>

        {/* Desktop Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
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
            title="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}