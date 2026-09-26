import { posts, categories } from "../data/posts";

/* Stats are calculated from the real posts, so they stay accurate as posts are added */
const totalMinutes = posts.reduce((sum, p) => sum + (parseInt(p.readTime, 10) || 0), 0);

const stats = [
  { value: posts.length, label: "Articles" },
  { value: categories.length - 1, label: "Categories" },
  { value: `${totalMinutes} min`, label: "Of Reading" },
  { value: "2025", label: "Est." },
];

/* ── About ───────────────────────────────────────────────────────────── */
export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-inner">
        {/* Text */}
        <div className="about-text">
          <span className="section-tag">About Dadda Blog</span>
          <h2>
            A blog built for <span className="gradient-text">curious minds.</span>
          </h2>
          <p>
            Dadda Blog is an independent blog dedicated to ideas that matter. We cover the
            intersection of technology, travel, and lifestyle — with long-form writing that
            respects your intelligence and your time.
          </p>
          <p>
            No ads. No clickbait. Just thoughtful, well-researched stories written with
            care, and a reading experience that stays out of the way.
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
              <img src="/dadda-icon.svg" alt="" className="ac-logo" width="44" height="44" />
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