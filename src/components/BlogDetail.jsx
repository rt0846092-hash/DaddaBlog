import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { posts } from "../data/posts";

const categoryColors = {
  Tech: "cat-tech",
  Travel: "cat-travel",
  Lifestyle: "cat-lifestyle",
};

/* Turn **bold** and *italic* into real formatting */
const renderInline = (text) =>
  text.split(/(\*\*.+?\*\*|\*[^*]+?\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });

const renderContent = (text) =>
  text
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line, i) => {
      const isHeading = /^\*\*[^*]+\*\*$/.test(line.trim());
      return isHeading ? (
        <h2 key={i} className="content-heading">{line.trim().slice(2, -2)}</h2>
      ) : (
        <p key={i} className="content-para">{renderInline(line)}</p>
      );
    });

/* ── BlogDetail ──────────────────────────────────────────────────────── */
export default function BlogDetail({ post, onBack, onRead, onCategory }) {
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Reading progress bar
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [post]);

  // Up to 3 other posts, same category first
  const related = [
    ...posts.filter((p) => p.id !== post.id && p.category === post.category),
    ...posts.filter((p) => p.id !== post.id && p.category !== post.category),
  ].slice(0, 3);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link:", window.location.href);
    }
  };

  return (
    <article className="detail-page">
      <div
        className="reading-progress"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Back button */}
      <div className="container">
        <button className="back-btn" onClick={onBack}>
          ← Back to Posts
        </button>
      </div>

      {/* Hero image */}
      <div className="detail-hero">
        <img src={post.image} alt="" className="detail-img" />
        <div className="detail-hero-overlay" />
      </div>

      {/* Content */}
      <div className="container">
        <div className="detail-content">
          {/* Meta */}
          <div className="detail-meta">
            <button
              className={`card-cat detail-cat ${categoryColors[post.category] ?? ""}`}
              onClick={() => onCategory(post.category)}
              title={`See all ${post.category} posts`}
            >
              {post.category}
            </button>
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

          {/* Actions */}
          <div className="detail-actions">
            <button className="btn-primary back-bottom-btn" onClick={onBack}>
              ← Back to All Posts
            </button>
            <button className="share-btn" onClick={copyLink}>
              {copied ? "✓ Link copied" : "🔗 Copy link"}
            </button>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="related-section">
            <h2 className="related-title">
              Keep <span className="gradient-text">Reading</span>
            </h2>
            <div className="blog-grid">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} onRead={onRead} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
