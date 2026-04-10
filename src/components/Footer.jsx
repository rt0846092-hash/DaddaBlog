/* ── Footer ──────────────────────────────────────────────────────────── */
export default function Footer({setActiveCategory, handleHome}) {
  const socials = [
     { icon: <i class="fa-brands fa-x-twitter"></i>, href: "https://twitter.com", label: "Twitter" },
  { icon: <i class="fa-brands fa-linkedin"></i>, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <i className="fa-brands fa-instagram"></i>, href: "https://instagram.com", label: "Instagram" },
  { icon: <i className="fa-brands fa-github"></i>, href: "https://github.com", label: "GitHub" },
];

  return (
    <footer className="footer" id="contact">
      <div className="footer-glow" />
      <div className="container footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <span className="logo">✦ Dadda</span>
          <p>Stories that inspire, inform, and ignite curiosity. Written for thinkers, dreamers, and doers.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
  <h4>Quick Links</h4>
  <button onClick={() => {
    handleHome();
    setTimeout(() => {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}>Home</button>
  <button onClick={() => {
    handleHome();
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}>About</button>
  <button onClick={() => {
    handleHome();
    setTimeout(() => {
      document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}>Blog</button>
  <button onClick={() => {
    handleHome();
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}>Contact</button>
</div>       

        {/* Categories */}
        <div className="footer-links">
          <h4>Categories</h4>
             <button
                onClick={() => {
                  handleHome(); // 🔥 go back to home
                  setActiveCategory("Technology");

              setTimeout(() => {
                  document.getElementById("blog")?.scrollIntoView({
                  behavior: "smooth",
               });
               }, 100);
               }}
                >
               Technology
            </button>
             <button onClick={() => {
                 handleHome();
                 setActiveCategory("Travel");
                setTimeout(() => {
                   document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                   }}>
                  Travel
            </button>    
         <button onClick={() => {
              handleHome();
              setActiveCategory("Lifestyle");
              setTimeout(() => {
                document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}>
              Lifestyle
            </button>

          <button onClick={() => {
              handleHome();
              setActiveCategory("Design");
              setTimeout(() => {
                document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}>
              Design
            </button>
        </div>

        {/* Social */}
        <div className="footer-social-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="social-icon" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
          <p className="footer-email">hello@dadda.blog</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dadda Blog. All rights reserved.</p>
        <p>Made with ❤️ &amp; React</p>
      </div>
    </footer>
  );
}