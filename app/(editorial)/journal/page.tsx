"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const articles = [
  {
    slug: "marble-craftsmanship",
    title: "The Art of Marble Craftsmanship",
    excerpt:
      "From quarry to atelier, explore the meticulous process behind shaping marble into timeless objects.",
    image: "/images/journal1.jpg",
  },
  {
    slug: "designing-with-stone",
    title: "Designing with Natural Stone",
    excerpt:
      "Why marble continues to inspire contemporary interiors and modern product design.",
    image: "/images/journal2.jpg",
  },
  {
    slug: "atelier-story",
    title: "Inside the Marble House Atelier",
    excerpt:
      "A look into the artisans, tools, and traditions behind our craft.",
    image: "/images/journal3.jpg",
  },
]

export default function JournalPage() {
  return (
    <main className="bg-white text-neutral-900 pt-12">

      {/* HERO */}

      <section className="py-32 px-6 md:px-12 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-wide">
            Journal
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-lg text-neutral-600">
            Stories of craft, design, and material exploration.
          </p>
        </motion.div>

      </section>

      {/* ARTICLES GRID */}

      <section className="px-6 md:px-12 pb-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/journal/${article.slug}`}>

                <div className="group cursor-pointer">

                    <div className="relative h-[360px] w-full overflow-hidden rounded-xl">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-6 space-y-3">

                      <h2 className="text-xl md:text-2xl font-light tracking-wide">
                        {article.title}
                      </h2>

                      <p className="text-neutral-600 leading-relaxed">
                        {article.excerpt}
                      </p>

                    </div>

                </div>

              </Link>
            </motion.div>
          ))}

        </div>

      </section>

    </main>
  )
}