'use client';

export default function HeroSection() {
  return (
    <section className="bg-darkprimary p-10 text-center font-geist text-fontWhite">
      <h1
  className="
    text-5xl sm:text-6xl font-extrabold mb-4
    bg-gradient-to-r from-yellow via-yellow/80 to-yellow/60
    bg-clip-text text-transparent
     drop-shadow-lg font-geist
     text-animation
  "
>
  Discover <span className="text-yellow">Inspiring Stories</span> Every Day
</h1>

      <p className="text-lg max-w-xl mx-auto mb-6 opacity-90">
        Dive into the latest posts, stories, and updates. Stay inspired with fresh content every day!
      </p>
      <button
        onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
        className="px-6 py-3 bg-yellow hover:bg-yellow/90 text-darkprimary rounded-full font-semibold transition"
      >
        Explore Posts
      </button>
    </section>
  );
}
