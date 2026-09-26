/* ── Hero ────────────────────────────────────────────────────────────── */
export default function Hero({ onExplore }) {
  return (
    <section className="hero" id="home">
      {/* Background blobs */}
      <div className="hero-blob b1" />
      <div className="hero-blob b2" />
      <div className="hero-blob b3" />

      <div className="hero-content">
        <span className="hero-badge">Creative Writing &amp; Ideas</span>

        <h1 className="hero-title">
          Stories that<br />
          <em className="hero-em">Move</em> the World.
        </h1>

        <p className="hero-sub">
          Explore ideas across Technology, Travel &amp; Lifestyle —<br />
          written for the endlessly curious.
        </p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={onExplore}>
            Explore Posts
          </button>
          <button
            className="btn-ghost"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About Us
          </button>
        </div>
      </div>

      {/* Floating category pills */}
      <div className="hero-pills" aria-hidden="true">
        <span className="pill p1">💻 Tech</span>
        <span className="pill p2">✈️ Travel</span>
        <span className="pill p3">🌿 Lifestyle</span>
        <span className="pill p4">✍️ Stories</span>
      </div>
    </section>
  );
}