import { useEffect } from "react";

/* ── BlogDetail ──────────────────────────────────────────────────────── */
export default function BlogDetail({ post, onBack }) {
  // Scroll to top when detail opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [post]);

  const categoryColors = {
    Tech: "cat-tech",
    Travel: "cat-travel",
    Lifestyle: "cat-lifestyle",
  };

  // Convert markdown-style **bold** to <strong>
  const renderContent = (text) =>
    text.split("\n").map((line, i) => {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} className={line.startsWith("**") && line.endsWith("**") ? "content-heading" : "content-para"}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
          )}
        </p>
      );
    });

  return (
    <article className="detail-page">
      {/* Back button */}
      <div className="container">
        <button className="back-btn" onClick={onBack}>
          ← Back to Posts
        </button>
      </div>

      {/* Hero image */}
      <div className="detail-hero">
        <img src={post.image} alt={post.title} className="detail-img" />
        <div className="detail-hero-overlay" />
      </div>

      {/* Content */}
      <div className="container">
        <div className="detail-content">
          {/* Meta */}
          <div className="detail-meta">
            <span className={`card-cat ${categoryColors[post.category] ?? ""}`}>
              {post.category}
            </span>
            <span className="meta-item">📅 {post.date}</span>
            <span className="meta-item">⏱ {post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="detail-title">{post.title}</h1>

          {/* Description */}
          <p className="detail-description">{post.description}</p>

          {/* Divider */}
          <div className="detail-divider" />

          {/* Body */}
          <div className="detail-body">{renderContent(post.content)}</div>

          {/* Bottom back button */}
          <button className="btn-primary back-bottom-btn" onClick={onBack}>
            ← Back to All Posts
          </button>
        </div>
      </div>
    </article>
  );
}