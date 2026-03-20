"use client"

import Image from "next/image"
import { notFound } from "next/navigation"

const articles: Record<
  string,
  { title: string; image: string; content: string }
> = {
  "marble-craftsmanship": {
    title: "The Art of Marble Craftsmanship",
    image: "/images/journal1.jpg",
    content: `
Marble has been a symbol of timeless beauty for centuries.
From ancient architecture to contemporary interiors,
the material continues to inspire designers and artisans.

Each piece begins as raw stone extracted from the quarry.
Through careful cutting, shaping, and polishing,
it transforms into objects that blend natural beauty
with functional design.
`,
  },
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = articles[params.slug]

  if (!article) return notFound()

  return (
    <main className="bg-white text-neutral-900">

      {/* HERO IMAGE */}

      <section className="relative h-[70vh] w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </section>

      {/* ARTICLE CONTENT */}

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-4xl font-light mb-10">
            {article.title}
          </h1>

          <div className="prose prose-lg text-neutral-700 leading-relaxed whitespace-pre-line">
            {article.content}
          </div>

        </div>
      </section>

    </main>
  )
}