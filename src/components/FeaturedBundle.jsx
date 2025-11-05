import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const FeaturedBundle = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Creator’s Pack — Ultimate Editing Kit</h2>
        <p className="mt-3 text-white/70">
          A curated bundle of CCs, shakes, text rigs, and glitch effects with 20% off. One kit to master any timeline.
        </p>
      </div>

      {/* Glowing animated border card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070707] p-6 sm:p-10">
        <div className="pointer-events-none absolute -inset-1 rounded-3xl [background:radial-gradient(40%_60%_at_50%_0%,rgba(0,255,127,0.25),transparent),radial-gradient(40%_60%_at_0%_100%,rgba(50,255,106,0.25),transparent)] blur-xl" />
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="aspect-video w-full rounded-xl border border-white/10 bg-gradient-to-br from-[#0E0E0E] to-black" />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold text-white">What’s inside</h3>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>• 12 premium CCs for different moods</li>
              <li>• 18 shake presets from subtle to extreme</li>
              <li>• 10 futuristic text animations</li>
              <li>• 8 glitch & artifact effects</li>
              <li>• Quick-start tutorial video included</li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://payhip.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00FF7F] px-5 py-3 font-semibold text-black shadow-[0_0_20px_#00FF7F66] transition hover:scale-[1.01]"
              >
                Get the Bundle
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-white/60">
                <ShieldCheck className="h-4 w-4 text-emerald-400" /> Secure checkout via Payhip
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBundle;
