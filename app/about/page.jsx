'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="bg-darkprimary text-fontWhite font-geist px-6 sm:px-20 py-16 min-h-screen">
      {/* Animated Hero Section */}
      <motion.h1
        className="text-5xl sm:text-6xl font-bold text-yellow mb-4 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About <span className="text-fontWhite">InspiWord</span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl max-w-2xl mx-auto text-center text-fontWhite/80 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        InspiWord is more than a blog — it’s a space to share stories, spark creativity, and ignite ideas.
      </motion.p>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto space-y-12">
        {[
          { year: '2024', event: 'Launched InspiWord with a mission to share inspiring content daily.' },
          { year: '2025', event: 'Grew into a platform for writers and creators across the globe.' },
          { year: 'Future', event: 'Expanding with new categories, podcasts, and community features.' }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="border-l-4 border-yellow pl-6 relative"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="absolute -left-3 top-1 w-6 h-6 bg-yellow rounded-full border-4 border-darkprimary" />
            <h3 className="text-xl font-bold">{item.year}</h3>
            <p className="text-fontWhite/80 mt-2">{item.event}</p>
          </motion.div>
        ))}
      </section>

      {/* Our Values */}
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {[
          { title: 'Creativity', desc: 'We believe in the power of original thought and expressive storytelling.' },
          { title: 'Authenticity', desc: 'We value real voices, honest perspectives, and meaningful writing.' },
          { title: 'Community', desc: 'We’re building a supportive space for creators and readers alike.' }
        ].map((val, idx) => (
          <motion.div
            key={val.title}
            className="p-6 bg-[#222] rounded-xl border border-yellow/30 hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h4 className="text-yellow text-xl font-bold mb-2">{val.title}</h4>
            <p className="text-sm text-fontWhite/80">{val.desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
