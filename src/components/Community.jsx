import React from 'react';
import { Star, Youtube } from 'lucide-react';

const testimonials = [
  {
    user: '@pixelshift',
    text: 'These CCs saved my deadline. Skin tones look clean without crushing shadows.',
    rating: 5,
  },
  {
    user: '@framesbyari',
    text: 'The shake presets feel premium — not the usual sloppy wiggle.',
    rating: 5,
  },
  {
    user: '@mkvisuals',
    text: 'Love the minimalist text rigs. Perfect for tech editorials.',
    rating: 5,
  },
];

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Quick Color Workflow' },
  { id: 'kXYiU_JCYtU', title: 'Text Animations in Minutes' },
  { id: 'e-ORhEE9VVg', title: 'Stylish Glitch FX Walkthrough' },
];

const StarRow = ({ count }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
    ))}
  </div>
);

const Community = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Loved by Editors. Backed by Tutorials.</h2>
        <p className="mt-3 text-white/70">Real feedback from creators and quick videos to get you up to speed.</p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.user} className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6">
            <StarRow count={t.rating} />
            <p className="mt-3 text-white/80">“{t.text}”</p>
            <p className="mt-2 text-sm text-white/50">{t.user}</p>
          </div>
        ))}
      </div>

      {/* YouTube */}
      <div className="mt-12">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Recent Tutorials</h3>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200"
          >
            <Youtube className="h-4 w-4" /> Visit Channel
          </a>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {videos.map((v) => (
            <div key={v.id} className="min-w-[320px] max-w-sm flex-1">
              <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-2 text-sm text-white/70">{v.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
