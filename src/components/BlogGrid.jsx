import BlogCard from "./BlogCard";

/* ── BlogGrid ────────────────────────────────────────────────────────── */
export default function BlogGrid({ posts, onRead }) {
  return (
    <section className="blog-section">
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <h2>
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p>Hand-picked reads for the endlessly curious.</p>
        </div>

        {posts.length === 0 ? (
          <div className="no-results">
            <span>🔍</span>
            <p>No posts found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} onRead={onRead} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}