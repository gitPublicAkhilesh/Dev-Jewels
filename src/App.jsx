import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import { ArrowDown, ArrowRight, Heart, Menu, X, MessageCircle, Search, SlidersHorizontal, Gem, MapPin, Phone, Clock, Instagram } from "lucide-react";
import { SITE, formatINR, generalEnquiryLink, productEnquiryLink } from "./config";
import { CATEGORIES, MATERIALS, PRICE_MAX, PRICE_MIN, matchesCategory, products } from "./data/products";
export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Jewellery");
  const [material, setMaterial] = useState("All");
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
  const [sort, setSort] = useState("featured");
  const [favourites, setFavourites] = useState([]);
  const [active, setActive] = useState(null);
  const [menu, setMenu] = useState(false);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const lenisRef = useRef(null);
  const modalCloseRef = useRef(null);
  const menuCloseRef = useRef(null);
  const lastFocusedElement = useRef(null);
  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const lenis = new Lenis();
    lenisRef.current = lenis;
    let raf;
    const tick = t => {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);
  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    if (active || menu) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
    };
  }, [active, menu]);
  useEffect(() => {
    if (!active && !menu) return undefined;

    const handleKeyDown = event => {
      if (event.key === "Escape") {
        setActive(null);
        setMenu(false);
        return;
      }

      if (event.key !== "Tab") return;
      const overlay = active ? document.querySelector('[role="dialog"]') : document.querySelector(".mobile-menu");
      const focusable = overlay?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    (active ? modalCloseRef : menuCloseRef).current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (active) lastFocusedElement.current?.focus();
    };
  }, [active, menu]);
  const filtered = useMemo(() => {
    let p = products.filter(x => matchesCategory(x, category) && x.price <= maxPrice && (material === "All" || x.material === material) && `${x.name} ${x.description} ${x.metalDetail}`.toLowerCase().includes(query.toLowerCase()));
    if (sort === "price-low") p.sort((a, b) => a.price - b.price);
    if (sort === "price-high") p.sort((a, b) => b.price - a.price);
    if (sort === "name") p.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "featured") p.sort((a, b) => Number(b.featured) - Number(a.featured));
    return p;
  }, [query, category, material, maxPrice, sort]);
  const toggle = id => setFavourites(v => v.includes(id) ? v.filter(x => x !== id) : [...v, id]);
  const openProduct = product => {
    lastFocusedElement.current = document.activeElement;
    setActive(product);
  };
  const go = id => {
    setMenu(false);
    const target = document.querySelector(id);
    if (!target) return;

    if (lenisRef.current && !prefersReducedMotion) {
      lenisRef.current.scrollTo(target);
    } else {
      target.scrollIntoView({ behavior: "auto" });
    }
  };
  return <>
<header className="site-header is-scrolled">
<div className="container header-inner">
<a href="#home" className="logo" aria-label={`${SITE.name} — ${SITE.hindiName}`}>
<Gem size={30} className="logo-gem" />
<span className="logo-text">
<span className="logo-name">{SITE.name}</span>
<span className="logo-hindi" lang="hi">{SITE.hindiName}</span>
</span>
</a>
<nav className="main-nav">{SITE.nav.map(n => <a className="nav-link" key={n.label} href={n.href}>{n.label}</a>)}</nav>
<div className="header-actions">
<a className="btn btn-outline btn-sm header-wa" href={generalEnquiryLink()} target="_blank" rel="noreferrer"><MessageCircle size={14} /> WhatsApp
</a>
<button className="nav-toggle" onClick={() => setMenu(true)} aria-label="Open menu" aria-expanded={menu} aria-controls="mobile-navigation">
<Menu />
</button>
</div>
</div>
</header>
 <main>
<section className="hero" id="home">
 <div className="hero-backdrop" role="img" aria-label="Gold-themed Shree Malti Jewellers storefront with its signboard and entrance" style={{ backgroundImage: `url("${SITE.heroImage}")` }} />
<div className="container hero-inner">
<motion.div className="hero-copy" initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}>
<p className="eyebrow">
<span className="eyebrow-rule" /> {SITE.eyebrow}</p>
<h1 className="hero-title">
<span className="hero-title-hindi" lang="hi">{SITE.hindiName}</span>
<span className="hero-title-english">{SITE.name}</span>
</h1>
<p className="hero-tagline">{SITE.tagline}</p>
<p className="hero-sub">{SITE.intro}</p>
<div className="hero-ctas">
<button className="btn btn-solid" onClick={() => go("#collection")}>Explore Our Collections <ArrowRight size={16} />
</button>
<a className="btn btn-outline" href={generalEnquiryLink()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Contact Us on WhatsApp</a>
</div>
 </motion.div>
</div>
<button className="hero-scroll" onClick={() => go("#collection")}>
<span>Scroll to discover</span>
<ArrowDown size={15} />
</button>
</section>
 <div className="marquee" aria-label="Shree Malti Jewellers collections">
<div className="marquee-track">{[0, 1].map(group => <div className="marquee-group" key={group} aria-hidden={group === 1}>{["Handcrafted in India", "22K Gold", "Polki & Diamond", "Bridal Couture", "925 Silver", "Heritage Craftsmanship"].map(x => <span className="marquee-item" key={x}>{x}<span>✦</span>
</span>)}</div>)}</div>
</div>
 <section className="section collection" id="collection">
<div className="container">
<motion.div className="collection-head" initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}>
<div>
<p className="eyebrow">
<span className="eyebrow-rule" /> Our Collections</p>
<h2 className="section-title">Our Jewellery <em>Collections</em>
</h2>
<p className="collection-intro">Explore gold, silver, diamond, bridal, and traditional Indian jewellery for weddings, celebrations, and special moments.</p>
</div>
<p className="results-count">{filtered.length} pieces to discover</p>
</motion.div>
<div className="category-pills">{CATEGORIES.map(c => <button key={c} className={`category-pill ${category === c ? "is-active" : ""}`} onClick={() => setCategory(c)} aria-pressed={category === c}>{c}</button>)}</div>
<div className="filters">
<label className="search-box search-input-wrap">
<Search size={17} />
<input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search jewellery..." aria-label="Search jewellery" />
</label>
<div className="filters-row filter-controls">
<label className="filter-select select-wrap">
<SlidersHorizontal size={16} />
<select value={material} onChange={e => setMaterial(e.target.value)} aria-label="Filter by material">
<option value="All">All materials</option>{MATERIALS.map(m => <option key={m}>{m}</option>)}</select>
</label>
<label className="filter-select select-wrap sort-field">
<select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort products">
<option value="featured">Featured first</option>
<option value="price-low">Price: low to high</option>
<option value="price-high">Price: high to low</option>
<option value="name">Name A–Z</option>
</select>
</label>
<label className="price-filter price-field"><span>Up to {formatINR(maxPrice)}</span><input type="range" min={PRICE_MIN} max={PRICE_MAX} step="5000" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} aria-label="Maximum product price" />
</label>
<button className="btn btn-ghost btn-reset" onClick={() => {
                setQuery("");
                setCategory("All Jewellery");
                setMaterial("All");
                setMaxPrice(PRICE_MAX);
                setSort("featured");
              }}>Reset</button>
</div>
</div>
<div className="product-grid">{filtered.map((p, index) => <motion.article layout key={p.id} className="product-card" initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} whileHover={prefersReducedMotion ? undefined : { y: -4 }} transition={{ duration: prefersReducedMotion ? 0 : 0.48, delay: prefersReducedMotion ? 0 : Math.min(index * 0.035, 0.18), ease: [0.22, 1, 0.36, 1] }}>
<div className="card-media-wrap">
<button className="card-media" type="button" onClick={() => openProduct(p)} aria-label={`View ${p.name} details`} aria-haspopup="dialog">
<img src={p.image} alt={p.alt} loading="lazy" />
<span className="card-tag">{p.tag}</span>
</button>
<button className={`fav-btn ${favourites.includes(p.id) ? "is-fav" : ""}`} type="button" onClick={() => toggle(p.id)} aria-label={`${favourites.includes(p.id) ? "Remove" : "Save"} ${p.name} ${favourites.includes(p.id) ? "from" : "to"} favourites`} aria-pressed={favourites.includes(p.id)}>
<Heart size={18} fill={favourites.includes(p.id) ? "currentColor" : "none"} />
</button>
</div>
<div className="card-body">
<p className="card-meta">{p.metalDetail}</p>
<button className="card-name" onClick={() => openProduct(p)}>{p.name}</button>
<p className="card-price">{formatINR(p.price)}</p>
<a className="card-wa" href={productEnquiryLink(p)} target="_blank" rel="noreferrer">
<MessageCircle size={14} /> Enquire on WhatsApp</a>
</div>
</motion.article>)}</div>{!filtered.length && <div className="empty-state">
<Gem size={32} />
<h3 className="empty-title">No pieces found</h3>
<p>Try changing your search or filters.</p>
<button className="btn btn-outline" onClick={() => {
              setQuery("");
              setCategory("All Jewellery");
              setMaterial("All");
              setMaxPrice(PRICE_MAX);
            }}>Clear filters</button>
</div>}</div>
</section>
 <section className="section section-dark" id="about">
<motion.div className="container about-inner" initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}>
<div>
<p className="eyebrow eyebrow-gold">
<span className="eyebrow-rule" /> The Shree Malti Story</p>
<h2 className="section-title title-light">Tradition in every <em>design</em>
</h2>
<p className="about-lead">{SITE.intro}</p>
<div className="about-values">{[["Thoughtful Designs", "Jewellery selected for weddings, celebrations, and everyday moments."], ["Personal Service", "A welcoming and personal showroom experience."], ["Made for Moments", "Find a piece for the milestones and memories you treasure."]].map(([t, d]) => <div className="about-value" key={t}>
<span className="about-value-icon">
<Gem size={20} />
</span>
<div>
<h3 className="about-value-title">{t}</h3>
<p className="about-value-text">{d}</p>
</div>
</div>)}</div>
</div>
<div className="about-media">
<div className="about-img-main">
<img src={SITE.aboutImageMain} alt={SITE.aboutImageMainAlt} loading="lazy" />
</div>
<div className="about-img-secondary-wrap">
<div className="about-img-secondary">
<img src={SITE.aboutImageSecondary} alt={SITE.aboutImageSecondaryAlt} loading="lazy" />
</div>
</div>
</div>
</motion.div>
</section>
 <section className="section contact" id="contact">
<motion.div className="container contact-inner" initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}>
<div>
<p className="eyebrow">
<span className="eyebrow-rule" /> Visit our showroom</p>
<h2 className="section-title">Your next treasure<br />
<em>awaits you.</em>
</h2>
<p className="contact-lead">Come by, explore the collection in person, and let us help you find something special.</p>
</div>
<div className="contact-card-wrap">
<ul className="contact-list">
<li className="contact-row">
<span className="contact-icon">
<MapPin />
</span>
<span className="contact-text">
<span className="contact-label">Find us</span>
<a className="contact-value contact-link" href={SITE.mapsUrl} target="_blank" rel="noreferrer">{SITE.address}</a>
</span>
</li>
<li className="contact-row">
<span className="contact-icon">
<Phone />
</span>
<span className="contact-text">
<span className="contact-label">Call us</span>
<a className="contact-value contact-link" href={`tel:${SITE.whatsappNumber}`}>{SITE.phoneDisplay}</a>
</span>
</li>
<li className="contact-row">
<span className="contact-icon">
<Clock />
</span>
<span className="contact-text">
<span className="contact-label">Opening hours</span>
<span className="contact-value">{SITE.hours}</span>
</span>
</li>
</ul>
<a className="btn btn-solid contact-cta" href={generalEnquiryLink()} target="_blank" rel="noreferrer">Plan your visit <ArrowRight size={16} />
</a>
</div>
</motion.div>
</section>
</main>
 <footer className="site-footer">
<div className="container footer-inner">
<div className="footer-brand">
<a href="#home" className="logo logo-light" aria-label={`${SITE.name} — ${SITE.hindiName}`}>
<Gem size={30} className="logo-gem" />
<span className="logo-text">
<span className="logo-name">{SITE.name}</span>
<span className="logo-hindi" lang="hi">{SITE.hindiName}</span>
</span>
</a>
<p className="footer-blurb">Tradition in every design. Elegance in every moment.</p>
<div className="footer-socials">
<a href={SITE.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
<Instagram />
</a>
</div>
</div>
<div>
<h3 className="footer-heading">Explore</h3>
<nav className="footer-nav">{SITE.nav.map(n => <a className="footer-link" key={n.label} href={n.href}>{n.label}</a>)}</nav>
</div>
<div className="footer-contact">
<h3 className="footer-heading">Come say hello</h3>
<p className="footer-line">{SITE.address}</p>
<p className="footer-line">{SITE.phoneDisplay}</p>
<p className="footer-line">{SITE.hours}</p>
</div>
</div>
<div className="container footer-base">
<span>© {new Date().getFullYear()} {SITE.name}</span>
<span className="footer-mark">✦</span>
<span>Made with care in India</span>
</div>
</footer>
 <a className="wa-float" href={generalEnquiryLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
<MessageCircle size={26} />
</a>
 <AnimatePresence>{menu && <motion.div className="mobile-menu" id="mobile-navigation" data-lenis-prevent initial={prefersReducedMotion ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: prefersReducedMotion ? 0 : 12 }} transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}>
<div className="mobile-menu-top">
<span className="logo logo-light">
<Gem size={30} className="logo-gem" />
<span className="logo-text">
<span className="logo-name">{SITE.name}</span>
<span className="logo-hindi" lang="hi">{SITE.hindiName}</span>
</span>
</span>
<button className="nav-toggle" ref={menuCloseRef} onClick={() => setMenu(false)} aria-label="Close menu">
<X />
</button>
</div>
<nav className="mobile-nav">{SITE.nav.map(n => <a className="mobile-nav-link" key={n.label} href={n.href} onClick={() => setMenu(false)}>{n.label}</a>)}<a className="btn btn-gold" href={generalEnquiryLink()}>Enquire on WhatsApp</a>
</nav>
</motion.div>}</AnimatePresence>
 <AnimatePresence>{active && <motion.div className="modal-backdrop" initial={prefersReducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: prefersReducedMotion ? 0 : 0.2 }} onMouseDown={e => {
        if (e.target === e.currentTarget) setActive(null);
      }}>
<motion.div className="modal-panel" data-lenis-prevent initial={prefersReducedMotion ? false : { y: 14, opacity: 0, scale: 0.99 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: prefersReducedMotion ? 0 : 10, opacity: 0, scale: 0.99 }} transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }} role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
<button className="modal-close" ref={modalCloseRef} onClick={() => setActive(null)} aria-label="Close product details">
<X />
</button>
<div className="modal-media">
<img src={active.image} alt={active.alt} />
</div>
<div className="modal-body">
<p className="eyebrow">
<span className="eyebrow-rule" /> {active.metalDetail}</p>
<h2 className="modal-name" id="product-modal-title">{active.name}</h2>
<p className="modal-price">{formatINR(active.price)}</p>
<p className="modal-desc">{active.description}</p>
<div className="modal-actions">
<a className="btn btn-whatsapp" href={productEnquiryLink(active)} target="_blank" rel="noreferrer">
<MessageCircle size={16} /> Enquire on WhatsApp</a>
<button className="btn btn-outline" onClick={() => toggle(active.id)} aria-pressed={favourites.includes(active.id)}>
<Heart size={16} /> {favourites.includes(active.id) ? "Saved" : "Save piece"}</button>
</div>
<p className="modal-note">Prices and availability are subject to confirmation.</p>
</div>
</motion.div>
</motion.div>}</AnimatePresence>
</>;
}
