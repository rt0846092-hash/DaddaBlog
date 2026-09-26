/* ── BlogCard ────────────────────────────────────────────────────────── */
export default function BlogCard({ post, onRead }) {
  const categoryColors = {
    Tech: "cat-tech",
    Travel: "cat-travel",
    Lifestyle: "cat-lifestyle",
  };

  return (
    <article className="blog-card">
      {/* Image */}
      <div className="card-img-wrap">
        <img src={post.image} alt={post.title} className="card-img" loading="lazy" />
        <span className={`card-cat ${categoryColors[post.category] ?? ""}`}>
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="card-body">
        <div className="card-meta">
          <span>📅 {post.date}</span>
          <span>⏱ {post.readTime}</span>
        </div>

        <h3 className="card-title">{post.title}</h3>
        <p className="card-desc">{post.description}</p>

        <button
          className="card-btn"
          onClick={() => onRead(post)}
          aria-label={`Read more: ${post.title}`}
        >
          Read More <span className="btn-arrow">→</span>
        </button>
      </div>
    </article>
  );
}