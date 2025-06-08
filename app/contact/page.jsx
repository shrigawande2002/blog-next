'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="bg-darkprimary text-fontWhite font-geist px-6 sm:px-20 py-16 min-h-screen">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl sm:text-6xl font-bold text-yellow mb-4 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact <span className="text-fontWhite">Us</span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl max-w-xl mx-auto text-center text-fontWhite/80 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Have a question or suggestion? Drop us a message below — we’d love to hear from you.
      </motion.p>

      {/* Contact Form UI */}
      <motion.div
        className="max-w-2xl mx-auto bg-[#222] p-8 rounded-xl border border-yellow/30 shadow-lg space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-yellow">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 bg-darkprimary border border-yellow/30 text-fontWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
          />
        </div>

        {/* Query / Message */}
        <div>
          <label htmlFor="query" className="block mb-2 font-semibold text-yellow">
            Your Query
          </label>
          <textarea
            id="query"
            rows={6}
            placeholder="Tell us more about your question or idea..."
            className="w-full px-4 py-3 bg-darkprimary border border-yellow/30 text-fontWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
          />
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            type="button"
            className="bg-yellow text-darkprimary font-bold py-3 px-8 rounded-full hover:bg-yellow/90 transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </motion.div>
    </main>
  );
}
