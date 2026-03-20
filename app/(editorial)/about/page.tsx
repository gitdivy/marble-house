"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-900">

      {/* HERO */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">

        <Image
          src="/marble-story.jpeg"
          alt="Marble craft"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            The Story of Marble
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-neutral-200">
            Crafted from earth. Refined by artisans. Designed for modern living.
          </p>
        </motion.div>

      </section>

      {/* PHILOSOPHY */}

      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity:0 , y:30 }}
          whileInView={{ opacity:1 , y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >

          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Our Philosophy
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed">
              Marble House believes that materials carry memory.
              Each slab of marble tells a geological story formed over
              millions of years. Our mission is to transform these
              timeless materials into objects that elevate modern spaces.
            </p>

            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              We embrace minimal design, thoughtful craftsmanship,
              and enduring quality that transcends fleeting trends.
            </p>
          </div>

          <div className="relative h-[420px] w-full rounded-xl overflow-hidden">
            <Image
              src="/philosophy.jpeg"
              alt="Marble texture"
              fill
              className="object-cover"
            />
          </div>

        </motion.div>

      </section>


      {/* CRAFT STORY */}

      <section className="bg-neutral-100 py-24 px-6 md:px-12">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="relative h-[420px] w-full rounded-xl overflow-hidden">
            <Image
              src="/craft_sec.png"
              alt="Crafting marble"
              fill
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity:0 , y:30 }}
            whileInView={{ opacity:1 , y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Craft & Process
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed">
              Our artisans combine traditional stone carving
              techniques with contemporary design precision.
              Every edge is refined by hand, every finish
              perfected through meticulous polishing.
            </p>

            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              The result is a collection of objects that balance
              natural beauty with functional design.
            </p>
          </motion.div>

        </div>

      </section>


      {/* ATELIER */}

      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity:0 , y:30 }}
          whileInView={{ opacity:1 , y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.8 }}
          className="text-center"
        >

          <h2 className="text-3xl md:text-4xl font-light mb-10">
            Our Atelier
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-neutral-700 leading-relaxed">
            Located in the heart of the marble craft region,
            our atelier brings together artisans, designers,
            and stone specialists dedicated to transforming
            raw stone into contemporary objects of quiet luxury.
          </p>

        </motion.div>

      </section>


      {/* CTA */}

      <section className="bg-black text-white py-24 text-center px-6">

        <motion.div
          initial={{ opacity:0 , y:30 }}
          whileInView={{ opacity:1 , y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.8 }}
        >

          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Discover the Collection
          </h2>

          <p className="text-neutral-300 max-w-xl mx-auto mb-10">
            Explore our curated selection of marble objects
            designed for contemporary living.
          </p>

          <a
            href="/collection"
            className="inline-block border border-white px-8 py-4 text-sm tracking-wide hover:bg-white hover:text-black transition"
          >
            VIEW COLLECTION
          </a>

        </motion.div>

      </section>

    </main>
  )
}