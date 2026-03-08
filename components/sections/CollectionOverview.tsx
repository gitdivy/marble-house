"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
  {
    title: "Idols",
    image: "/Buddha_category.jpg",
    link: "/collection?category=idols",
  },
  {
    title: "Decorative Objects",
    image: "/decor_category.png",
    link: "/collection?category=decor",
  },
  {
    title: "Bathroom",
    image: "/collection-bathroom.png",
    link: "/collection?category=bathroom",
  },
  {
    title: "Kitchen",
    image: "/collection-kitchen.png",
    link: "/collection?category=kitchen",
  },
]

export default function CollectionOverview() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* Section Heading */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight">
            The Collection
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-14">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={item.link} className="group block">

                <div className="relative w-full h-[50vh] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 font-serif text-2xl tracking-tight group-hover:opacity-70 transition-opacity duration-300">
                  {item.title}
                </h3>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}