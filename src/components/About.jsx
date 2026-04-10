/* ── About ───────────────────────────────────────────────────────────── */
export default function About() {
  const stats = [
    { value: "120+", label: "Articles" },
    { value: "40K", label: "Readers" },
    { value: "3", label: "Categories" },
    { value: "2025", label: "Est." },
  ];

  return (
    <section className="about-section" id="about">
      <div className="container about-inner">
        {/* Text */}
        <div className="about-text">
          <span className="section-tag">About Inkwell</span>
          <h2>
            A blog built for <span className="gradient-text">curious minds.</span>
          </h2>
          <p>
            Dadda Blog is an independent blog dedicated to ideas that matter. We cover the
            intersection of technology, travel, and lifestyle — with long-form writing that
            respects your intelligence and your time.
          </p>
          <p>
            No ads. No clickbait. Just thoughtful, well-researched stories from writers
            who care deeply about their craft.
          </p>
          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="about-visual">
          <div className="about-card">
            <div className="ac-top">
              <span className="ac-logo">✦</span>
              <span className="ac-name">Dadda Blog</span>
            </div>
            <div className="ac-quote">
              "We write for the reader who takes ideas seriously."
            </div>
            <div className="ac-tags">
              <span>#Technology</span>
              <span>#Travel</span>
              <span>#Lifestyle</span>
            </div>
          </div>
          <div className="about-blob" />
        </div>
      </div>
    </section>
  );
}