import { categories } from "../data/posts";

/* ── SearchFilter ────────────────────────────────────────────────────── */
export default function SearchFilter({ search, setSearch, active, setActive }) {
  return (
    <div className="controls-section" id="blog">
      <div className="container">
        {/* Search */}
        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search articles…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="search-clear" onClick={() => setSearch("")}>✕</button>
          )}
        </div>

        {/* Category Filters */}
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}