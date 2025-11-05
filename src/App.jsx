import React from 'react';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import FeaturedBundle from './components/FeaturedBundle';
import Community from './components/Community';
import { Youtube, Instagram, Discord, Mail } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <Hero />

      {/* Product Showcase */}
      <ProductGrid />

      {/* Featured Bundle */}
      <FeaturedBundle />

      {/* Community: Testimonials + YouTube */}
      <Community />

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-8">
        <h2 className="mb-6 text-2xl font-semibold">FAQ</h2>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0A0A0A]">
          <details className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-white/90">
              How do I receive my files after purchase?
              <span className="ml-4 text-[#00FF7F] transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-white/70">
              Downloads are delivered instantly via Payhip after checkout and sent to your email. You can re-download anytime.
            </p>
          </details>
          <details className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-white/90">
              What software do these work with?
              <span className="ml-4 text-[#00FF7F] transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-white/70">
              Presets are designed for Adobe After Effects and Premiere Pro. Many assets also work in other editors with adjustment layers.
            </p>
          </details>
          <details className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-white/90">
              Can I use these in commercial projects?
              <span className="ml-4 text-[#00FF7F] transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-white/70">
              Yes. A standard commercial license is included for client work and monetized videos. Resale or redistribution is not permitted.
            </p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-white/10 bg-[#050505]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold">FrameForge</div>
            <p className="mt-2 max-w-sm text-sm text-white/60">
              Premium editing resources for creators. Futuristic design, clean motion, and neon clarity.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 text-sm text-white/70">
            <div className="space-y-2">
              <a href="#about" className="block hover:text-white">About</a>
              <a href="#terms" className="block hover:text-white">Terms</a>
              <a href="#refunds" className="block hover:text-white">Refunds</a>
              <a href="#contact" className="block hover:text-white">Contact</a>
            </div>
            <div className="space-y-2">
              <a href="#products" className="block hover:text-white">Shop</a>
              <a href="https://payhip.com/" target="_blank" rel="noreferrer" className="block hover:text-white">Payhip</a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="block hover:text-white">YouTube</a>
              <a href="#faq" className="block hover:text-white">FAQ</a>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <p className="text-sm text-white/70">Subscribe for drops and free presets</p>
            <form
              className="mt-3 flex w-full max-w-md items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing!');
              }}
            >
              <div className="flex-1">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-emerald-500/30 focus:border-emerald-400/40 focus:ring"
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00FF7F] px-4 py-3 text-sm font-semibold text-black shadow-[0_0_18px_#00FF7F66] hover:brightness-95"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-4 flex items-center gap-4 text-white/70">
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-white"><Youtube className="h-5 w-5 text-[#00FF7F]" /></a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white"><Instagram className="h-5 w-5 text-[#00FF7F]" /></a>
              <a href="https://discord.com/" target="_blank" rel="noreferrer" aria-label="Discord" className="hover:text-white"><Discord className="h-5 w-5 text-[#00FF7F]" /></a>
              <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-white"><Mail className="h-5 w-5 text-[#00FF7F]" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">© {new Date().getFullYear()} FrameForge. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default App;
