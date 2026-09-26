import { categories } from "../data/posts";

const EMAIL = "rt0846092@gmail.com";

const socials = [
  { icon: <i className="fa-brands fa-github" />, href: "https://github.com/rt0846092-hash", label: "GitHub" },
  { icon: <i className="fa-brands fa-linkedin" />, href: "https://www.linkedin.com/in/roshan-tamang-663015283", label: "LinkedIn" },
  { icon: <i className="fa-solid fa-envelope" />, href: `mailto:${EMAIL}`, label: "Email" },
];

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "Blog", id: "blog" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

/* ── Footer ──────────────────────────────────────────────────────────── */
export default function Footer({ goHome, showCategory }) {
  return (
    <footer className="footer" id="contact">
      <div className="footer-glow" />
      <div className="container footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <span className="logo">Dadda Blog</span>
          <p>Stories that inspire, inform, and ignite curiosity. Written for thinkers, dreamers, and doers.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          {quickLinks.map((l) => (
            <button key={l.id} onClick={() => goHome(l.id)}>{l.label}</button>
          ))}
        </div>

        {/* Categories — built from the posts, so they always match */}
        <div className="footer-links">
          <h4>Categories</h4>
          {categories.filter((c) => c !== "All").map((cat) => (
            <button key={cat} onClick={() => showCategory(cat)}>{cat}</button>
          ))}
        </div>

        {/* Social */}
        <div className="footer-social-col">
          <h4>Get in Touch</h4>
          <div className="social-icons">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-icon"
                aria-label={s.label}
                title={s.label}
                {...(s.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <a className="footer-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dadda Blog by Roshan Tamang.</p>
        <p>Made with ❤️ &amp; React</p>
      </div>
    </footer>
  );
}
