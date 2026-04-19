import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

/* ─── Data ─────────────────────────────────────────────── */

const categories = [
  { label: "Rackets",       emoji: "🏸", href: "#", bg: "from-brand-600 to-brand-800" },
  { label: "Shuttlecocks",  emoji: "🪶", href: "#", bg: "from-yellow-400 to-yellow-600" },
  { label: "Footwear",      emoji: "👟", href: "#", bg: "from-blue-500 to-blue-700" },
  { label: "Apparel",       emoji: "👕", href: "#", bg: "from-purple-500 to-purple-700" },
  { label: "Bags",          emoji: "🎒", href: "#", bg: "from-orange-400 to-orange-600" },
  { label: "Accessories",   emoji: "🧤", href: "#", bg: "from-pink-400 to-pink-600" },
];

const products = [
  {
    id: 1,
    name: "Yonex Astrox 88D Pro",
    category: "Racket",
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.8,
    reviews: 312,
    badge: "Best Seller",
    badgeType: "green",
    emoji: "🏸",
    bg: "bg-brand-50",
  },
  {
    id: 2,
    name: "Victor Hypernano X 900",
    category: "Racket",
    price: 149.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 198,
    badge: "New",
    badgeType: "new",
    emoji: "🏸",
    bg: "bg-blue-50",
  },
  {
    id: 3,
    name: "Yonex Aerosensa 50",
    category: "Shuttlecock",
    price: 24.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 540,
    badge: "Top Pick",
    badgeType: "green",
    emoji: "🪶",
    bg: "bg-yellow-50",
  },
  {
    id: 4,
    name: "Li-Ning Saga Lite",
    category: "Footwear",
    price: 109.99,
    originalPrice: 139.99,
    rating: 4.6,
    reviews: 87,
    badge: "Sale",
    badgeType: "sale",
    emoji: "👟",
    bg: "bg-purple-50",
  },
  {
    id: 5,
    name: "Victor BR9200 Bag",
    category: "Bag",
    price: 79.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 62,
    badge: null,
    badgeType: null,
    emoji: "🎒",
    bg: "bg-orange-50",
  },
  {
    id: 6,
    name: "Yonex SHB 65Z3",
    category: "Footwear",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 203,
    badge: "Sale",
    badgeType: "sale",
    emoji: "👟",
    bg: "bg-pink-50",
  },
  {
    id: 7,
    name: "Babolat Satelite Gravity",
    category: "Racket",
    price: 99.99,
    originalPrice: null,
    rating: 4.4,
    reviews: 41,
    badge: "New",
    badgeType: "new",
    emoji: "🏸",
    bg: "bg-brand-50",
  },
  {
    id: 8,
    name: "Yonex AC102EX Grip",
    category: "Accessory",
    price: 8.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 1021,
    badge: null,
    badgeType: null,
    emoji: "🧤",
    bg: "bg-gray-50",
  },
];

const flashSale = [
  { id: 1, name: "Victor Jetspeed S 12",  emoji: "🏸", price: 74.99,  originalPrice: 129.99, pct: 42 },
  { id: 2, name: "Li-Ning G-Force 9000",  emoji: "🏸", price: 59.99,  originalPrice: 99.99,  pct: 40 },
  { id: 3, name: "Yonex BG65 String Set", emoji: "🧵", price: 12.99,  originalPrice: 19.99,  pct: 35 },
  { id: 4, name: "Forza X5 Wristband",    emoji: "🧤", price:  4.99,  originalPrice:  7.99,  pct: 38 },
];

const brands = [
  { name: "Yonex",  emoji: "🥇" },
  { name: "Victor", emoji: "🥈" },
  { name: "Li-Ning",emoji: "🥉" },
  { name: "Babolat",emoji: "🎖️" },
  { name: "Forza",  emoji: "🏅" },
  { name: "Carlton",emoji: "🎗️" },
];

const perks = [
  { icon: "🚚", title: "Free Shipping",       desc: "On all orders over $50" },
  { icon: "↩️", title: "Easy Returns",         desc: "30-day hassle-free returns" },
  { icon: "✅", title: "100% Authentic",       desc: "All products are genuine" },
  { icon: "💬", title: "Expert Advice",        desc: "Chat with our badminton pros" },
];

const reviews = [
  { name: "Raj P.",    stars: 5, text: "Best racket shop online. Fast delivery and great prices!", location: "London, UK" },
  { name: "Sophie L.", stars: 5, text: "The Yonex selection here is unbeatable. Will shop again.", location: "Sydney, AU" },
  { name: "Kevin T.",  stars: 4, text: "Great quality products, packaging was solid. Highly recommend.", location: "Toronto, CA" },
];

/* ─── Helpers ───────────────────────────────────────────── */

function Stars({ count }: { count: number }) {
  return (
    <span className="stars text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < Math.floor(count) ? "★" : i < count ? "⯨" : "☆"}</span>
      ))}
    </span>
  );
}

function PriceTag({ price, original }: { price: number; original: number | null }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className={`text-lg font-bold ${original ? "text-sale-600" : "text-gray-900"}`}>
        ${price.toFixed(2)}
      </span>
      {original && (
        <span className="text-sm text-gray-400 line-through">${original.toFixed(2)}</span>
      )}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────── */

export default function StorePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Announcement bar ── */}
      <div className="bg-brand-700 py-2 text-center text-sm font-medium text-white">
        🎉 Free shipping on orders over $50 · Use code <strong>SMASH10</strong> for 10% off
      </div>

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex shrink-0 items-center gap-1.5">
            <span className="text-2xl">🏸</span>
            <span className="text-lg font-extrabold tracking-tight">
              Pro<span className="text-brand-600">Badminton</span><span className="text-gray-900">World</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden gap-6 text-sm font-medium text-gray-600 lg:flex">
            {["Rackets", "Shuttlecocks", "Footwear", "Apparel", "Bags", "Sale"].map((item) => (
              <a
                key={item}
                href="#"
                className={`transition-colors hover:text-brand-700 ${item === "Sale" ? "font-bold text-sale-600 hover:text-sale-700" : ""}`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search */}
          <div className="ml-auto hidden flex-1 max-w-sm lg:flex">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔍</span>
              <input
                type="search"
                placeholder="Search rackets, shoes, shuttles…"
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="ml-4 flex items-center gap-3">
            <button className="hidden text-gray-600 transition hover:text-brand-700 sm:block" aria-label="Wishlist">
              <span className="text-xl">♡</span>
            </button>
            <button className="relative text-gray-600 transition hover:text-brand-700" aria-label="Cart">
              <span className="text-xl">🛒</span>
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white">3</span>
            </button>
            <Button size="sm" className="hidden sm:inline-flex">Sign in</Button>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-court-shadow">
        <div className="absolute inset-0 opacity-10 [background-image:repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_0,transparent_50%)] [background-size:20px_20px]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:flex-row lg:px-8 lg:py-32">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="badge-green mb-5 inline-block animate-fade-in-up">New Season Collection 2025</span>
            <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Gear Up for <br />
              <span className="text-brand-300">Championship</span>{" "}
              Performance
            </h1>
            <p className="mx-auto mt-5 max-w-lg animate-fade-in-up text-base text-brand-100 lg:mx-0">
              Shop the world's finest badminton equipment — rackets, footwear, shuttlecocks
              and more, trusted by professionals and weekend warriors alike.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="bg-brand-400 text-brand-950 hover:bg-brand-300">
                Shop Now
              </Button>
              <Button size="lg" variant="ghost" className="border border-white/30 text-white hover:bg-white/10">
                View Sale →
              </Button>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative flex h-64 w-64 shrink-0 items-center justify-center sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-brand-600/20 blur-3xl" />
            <span className="relative text-[9rem] drop-shadow-2xl animate-shuttle-arc">🏸</span>
          </div>
        </div>
      </section>

      {/* ── Perks strip ── */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-5 sm:grid-cols-4 sm:px-6 lg:px-8">
          {perks.map((p) => (
            <div key={p.title} className="flex items-center gap-3">
              <span className="text-2xl">{p.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-800">{p.title}</p>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Shop by Category ── */}
      <section className="section">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">Shop by Category</h2>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className={`group flex flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br ${cat.bg} p-5 text-white transition hover:scale-105 hover:shadow-lg`}
            >
              <span className="text-3xl">{cat.emoji}</span>
              <span className="text-xs font-semibold">{cat.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Best Sellers ── */}
      <section className="section pt-0">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Best Sellers</h2>
          <a href="#" className="text-sm font-semibold text-brand-600 hover:underline">View all →</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              {/* Image placeholder */}
              <div className={`${p.bg} flex h-48 items-center justify-center`}>
                <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
                  {p.emoji}
                </span>
              </div>

              <div className="p-4">
                {p.badge && (
                  <span className={`badge mb-2 ${p.badgeType === "sale" ? "badge-sale" : p.badgeType === "new" ? "badge-new" : "badge-green"}`}>
                    {p.badge}
                  </span>
                )}
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{p.category}</p>
                <h3 className="mt-1 text-sm font-semibold text-gray-900 leading-snug">{p.name}</h3>

                <div className="mt-2 flex items-center gap-1.5">
                  <Stars count={p.rating} />
                  <span className="text-xs text-gray-400">({p.reviews})</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <PriceTag price={p.price} original={p.originalPrice} />
                  <button className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-700">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Flash Sale ── */}
      <section className="section pt-0">
        <div className="rounded-3xl bg-gradient-to-r from-sale-600 to-rose-600 p-8 text-white">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="badge bg-white/20 text-white text-xs mb-2 inline-block">⚡ Limited Time</span>
              <h2 className="text-2xl font-extrabold">Flash Sale</h2>
              <p className="text-sm text-rose-100 mt-1">Deals end in: 06h 42m 18s</p>
            </div>
            <a href="#" className="text-sm font-semibold underline underline-offset-2 hover:no-underline self-start sm:self-auto">
              View all deals →
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {flashSale.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition hover:bg-white/20">
                <span className="text-3xl">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold leading-snug truncate">{item.name}</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-bold">${item.price.toFixed(2)}</span>
                    <span className="text-xs line-through text-rose-200">${item.originalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-white text-sale-600 px-2 py-0.5 text-xs font-bold">
                  -{item.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="section pt-0">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Top Brands</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {brands.map((b) => (
            <a
              key={b.name}
              href="#"
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-brand-300 hover:shadow-md"
            >
              <span>{b.emoji}</span> {b.name}
            </a>
          ))}
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="section bg-brand-50 rounded-3xl mx-4 sm:mx-6 lg:mx-8 py-12 sm:py-16 my-0">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">What Customers Say</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="card p-6">
                <Stars count={r.stars} />
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">"{r.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900">Get Exclusive Deals</h2>
          <p className="mt-3 text-sm text-gray-500">
            Join 40,000+ badminton fans. Be first to know about new arrivals, flash sales, and tournament news.
          </p>
          <form className="mt-6 flex gap-3 flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-gray-200 px-5 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
            <Button size="md" className="rounded-full whitespace-nowrap">Subscribe Free</Button>
          </form>
          <p className="mt-3 text-xs text-gray-400">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 bg-gray-900 text-gray-400">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 sm:grid-cols-4 lg:px-8">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-1.5 text-white mb-3">
              <span className="text-xl">🏸</span>
              <span className="text-sm font-extrabold">ProBadmintonWorld</span>
            </div>
            <p className="text-xs leading-relaxed">
              Your one-stop shop for premium badminton gear, trusted by players at every level worldwide.
            </p>
          </div>
          {[
            { heading: "Shop",    links: ["Rackets", "Shuttlecocks", "Footwear", "Apparel", "Bags", "Sale"] },
            { heading: "Support", links: ["Track Order", "Returns", "Size Guide", "FAQ", "Contact Us"] },
            { heading: "Company", links: ["About", "Careers", "Press", "Privacy Policy", "Terms"] },
          ].map((col) => (
            <div key={col.heading}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-300">{col.heading}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 px-4 py-5 text-center text-xs sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Pro Badminton World. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
