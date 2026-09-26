# ✦ Dadda Blog

A modern, responsive blog built with React and Vite. Readers can browse articles on technology, travel, and lifestyle, search and filter them, and read each post on its own shareable page.

**Live demo:** https://dadda-blog-fobkz5vzx-rt0846092-3762s-projects.vercel.app

## Features

- **Search and filter** by keyword or category, with an empty state when nothing matches
- **Shareable post links:** every post has its own URL (for example `#/post/future-of-ai`), and the browser Back button works as expected
- **Reading experience:** a progress bar while you read, formatted headings, bold and italic text, and a "Keep Reading" section with related posts
- **Copy link** button to share a post
- **Dark mode** that follows your system setting and remembers your choice
- **Responsive design** for mobile, tablet, and desktop
- **Accessible:** keyboard focus styles, labelled buttons, and support for reduced-motion settings

## Tech stack

- React 19 with hooks (`useState`, `useEffect`)
- Vite
- Plain CSS with custom properties for theming
- Font Awesome icons

## How it works

Posts live in `src/data/posts.jsx`. Categories, the footer links, and the About stats are all calculated from that file, so adding a post updates everything automatically. Routing uses the URL hash, so no router library or server configuration is needed.

## Getting started

```bash
git clone https://github.com/rt0846092-hash/DaddaBlog.git
cd DaddaBlog
npm install
npm run dev
```

## Project structure

```
src/
├── App.jsx              # Page state, routing, search and filtering
├── components/          # Navbar, Hero, SearchFilter, BlogGrid, BlogCard, BlogDetail, About, Footer
└── data/posts.jsx       # Blog posts and categories
```

## Author

Roshan Tamang · [GitHub](https://github.com/rt0846092-hash) · [LinkedIn](https://www.linkedin.com/in/roshan-tamang-663015283)
