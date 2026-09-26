import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchFilter from "./components/SearchFilter";
import BlogGrid from "./components/BlogGrid";
import BlogDetail from "./components/BlogDetail";
import About from "./components/About";
import Footer from "./components/Footer";
import { posts, getPostBySlug } from "./data/posts";
import "./App.css";

const SITE_TITLE = "Dadda Blog — Stories on Tech, Travel & Lifestyle";

/* Read the current post from the URL hash, e.g. #/post/future-of-ai */
const postFromHash = () => {
  const match = window.location.hash.match(/^#\/post\/([\w-]+)/);
  return match ? getPostBySlug(match[1]) : null;
};

const getInitialDarkMode = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
  } catch { /* storage unavailable */ }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
};

/* ── App ─────────────────────────────────────────────────────────────── */
export default function App() {
  const [selected, setSelected] = useState(postFromHash);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  const page = selected ? "detail" : "home";

  // Apply and remember the theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try { localStorage.setItem("theme", darkMode ? "dark" : "light"); } catch { /* ignore */ }
  }, [darkMode]);

  // Keep the page in sync with the URL, so links are shareable and Back works
  useEffect(() => {
    const onHashChange = () => {
      setSelected(postFromHash());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Browser tab title follows the open post
  useEffect(() => {
    document.title = selected ? `${selected.title} · Dadda Blog` : SITE_TITLE;
  }, [selected]);

  // Filter posts by search + category
  const query = search.trim().toLowerCase();
  const filtered = posts.filter((p) => {
    const matchSearch =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  const openPost = (post) => {
    window.location.hash = `/post/${post.slug}`;
  };

  // Go back to the list, optionally scrolling to a section once it has rendered
  const goHome = (sectionId) => {
    if (selected) {
      window.location.hash = "/";
    }
    if (sectionId) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    }
  };

  const showCategory = (category) => {
    setActiveCategory(category);
    setSearch("");
    goHome("blog");
  };

  return (
    <div className="app">
      <Navbar
        page={page}
        goHome={goHome}
        darkMode={darkMode}
        toggleDark={() => setDarkMode((d) => !d)}
      />

      {page === "home" && (
        <main>
          <Hero onExplore={() => goHome("blog")} />
          <SearchFilter
            search={search}
            setSearch={setSearch}
            active={activeCategory}
            setActive={setActiveCategory}
          />
          <BlogGrid posts={filtered} onRead={openPost} />
          <About />
        </main>
      )}

      {page === "detail" && (
        <main>
          <BlogDetail
            post={selected}
            onBack={() => goHome("blog")}
            onRead={openPost}
            onCategory={showCategory}
          />
        </main>
      )}

      <Footer goHome={goHome} showCategory={showCategory} />
    </div>
  );
}
