import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Youtube } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark overlay to enhance contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90" />

      {/* Neon gradient edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#00FF7F] to-transparent blur-[2px] opacity-80" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#00FF7F] to-transparent blur-[2px] opacity-60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80 backdrop-blur">
          Cyber-luxury resources
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00FF7F] shadow-[0_0_8px_2px_#00FF7F]" />
        </span>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
          <span className="text-white">Elevate Your Edits. </span>
          <span className="bg-gradient-to-r from-[#32FF6A] to-[#00FF7F] bg-clip-text text-transparent drop-shadow-[0_0_20px_#00FF7F55]">
            Master Every Frame.
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
          Premium editing resources for creators and editors. Futuristic presets, clean motion, and studio-grade color.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://payhip.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#00FF7F] px-6 py-3 font-semibold text-black shadow-[0_0_20px_#00FF7F66] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#00FF7F]/60"
          >
            Shop Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:border-[#00FF7F]/40 hover:text-white"
          >
            <Youtube className="h-5 w-5 text-[#00FF7F]" />
            Watch Tutorials
          </a>
        </div>

        {/* Assurance badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">Instant Download</span>
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">Secure Checkout via Payhip</span>
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">Commercial Use License</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
