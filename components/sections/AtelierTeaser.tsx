"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AtelierTeaser() {
  return (
    <section className="bg-[#F7F5F1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left Image */}
          <motion.div
            className="relative w-full h-[60vh] md:h-[75vh]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/atelier-house.png"
              alt="Marble atelier"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.08] tracking-tight">
              The House
            </h2>

            <p className="mt-8 text-neutral-800 text-base md:text-lg leading-relaxed max-w-md">
              Marble House is built on a quiet belief — that stone is not shaped
              merely to be sold, but to be preserved. Each piece reflects
              discipline, patience, and the timeless character of Indian marble.
            </p>

            <Link
              href="/about"
              className="inline-block mt-8 text-sm tracking-wide uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity duration-300"
            >
              Discover the House
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  )
}