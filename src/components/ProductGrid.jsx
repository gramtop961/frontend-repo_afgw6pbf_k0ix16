import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 'ccs',
    title: 'Color Corrections (CCs)',
    price: '$10 each',
    description: 'Studio-grade tones inspired by cinema LUT workflows. Drag-and-drop for instant polish.',
    href: 'https://payhip.com/',
    image: '/images/ccs.jpg', // optional, replace with your thumbnail path
    accent: 'from-emerald-400/30 to-emerald-500/10',
  },
  {
    id: 'shakes',
    title: 'Shake Presets',
    price: '$1–$2 each',
    description: 'Crisp, controllable camera motion. Micro-jitters to heavy impact shakes.',
    href: 'https://payhip.com/',
    image: '/images/shakes.jpg',
    accent: 'from-emerald-400/30 to-emerald-500/10',
  },
  {
    id: 'texts',
    title: 'Text Animations',
    price: '$3–$4 each',
    description: 'Minimal, futuristic typography moves with clean easing and neon accents.',
    href: 'https://payhip.com/',
    image: '/images/texts.jpg',
    accent: 'from-emerald-400/30 to-emerald-500/10',
  },
  {
    id: 'glitches',
    title: 'Effects & Glitches',
    price: '$8 each',
    description: 'Digital distortion, chromatic splits, and artifact flickers. Controlled chaos.',
    href: 'https://payhip.com/',
    image: '/images/glitches.jpg',
    accent: 'from-emerald-400/30 to-emerald-500/10',
  },
];

const ProductCard = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0E0E0E] to-black p-5 transition-transform hover:-translate-y-0.5">
      <div className={`absolute inset-0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60 bg-gradient-to-r ${item.accent}`} />
      <div className="relative z-10">
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#0B0B0B]">
          {/* Thumbnail placeholder with neon grid */}
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(50,255,106,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(0,255,127,0.12),transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent,transparent_95%,rgba(255,255,255,0.05)_95%),linear-gradient(90deg,transparent,transparent_95%,rgba(255,255,255,0.05)_95%)] bg-[length:100%_24px,24px_100%]" />
          </div>
        </div>
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-white/60">{item.description}</p>
          </div>
          <span className="whitespace-nowrap rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 shadow-[0_0_12px_#00FF7F44]">
            {item.price}
          </span>
        </div>
        <div className="mt-4">
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-200 shadow-[0_0_16px_#00FF7F55] transition hover:bg-emerald-500/25"
          >
            <ShoppingCart className="h-4 w-4" /> Buy on Payhip
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <section id="products" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Shop Editing Resources</h2>
        <p className="mt-3 text-white/70">
          Clean, customizable assets to speed up your workflow. Designed for After Effects and Premiere Pro.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-white/50">
        Secure checkout handled by Payhip. Instant delivery after purchase.
      </p>
    </section>
  );
};

export default ProductGrid;
