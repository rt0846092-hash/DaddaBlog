import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchFilter from "./components/SearchFilter";
import BlogGrid from "./components/BlogGrid";
import BlogDetail from "./components/BlogDetail";
import About from "./components/About";
import Footer from "./components/Footer";
import { posts } from "./data/posts";
import "./App.css";

/* ── App ─────────────────────────────────────────────────────────────── */
export default function App() {
  const [page, setPage] = useState("home");        // "home" | "detail"
  const [selected, setSelected] = useState(null);  // active post
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // Filter posts by search + category
  const filtered = posts.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  const openPost = (post) => {
    setSelected(post);
    setPage("detail");
  };

  const handleHome = () => {
    setPage("home");
  };

  const scrollToBlog = () => {
    document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navbar  page={page} handleHome={handleHome} darkMode={darkMode} toggleDark={() => setDarkMode((d) => !d)} />

      {page === "home" && (
        <>
          <Hero onExplore={scrollToBlog} />
          <SearchFilter
            search={search}
            setSearch={setSearch}
            active={activeCategory}
            setActive={setActiveCategory}
          />
          <BlogGrid posts={filtered} onRead={openPost} />
          <About />
          <Footer setActiveCategory={setActiveCategory} 
                  handleHome={handleHome}/>
        </>
      )}

      {page === "detail" && selected && (
        <>
          <BlogDetail post={selected} onBack={handleHome} />
          <Footer setActiveCategory={setActiveCategory}
                  handleHome={handleHome}/>
        </>
      )}
    </div>
  );
}