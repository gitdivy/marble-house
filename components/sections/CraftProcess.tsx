"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function CraftProcess() {
  return (
    <section className="bg-[#F1EFEA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.08] tracking-tight">
              Constructed <br /> in Stone.
            </h2>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-700 text-base md:text-lg leading-relaxed max-w-md">
              Every piece begins as geological mass.
              Selected for its structural integrity and mineral clarity.
              Each surface is aligned and proportioned with architectural discipline.
              Nothing ornamental. Only permanence.
            </p>
          </motion.div>

        </div>

        <motion.div
          className="mt-20 md:mt-28 relative w-full h-[55vh] md:h-[75vh]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/Lotus_sink.jpeg"
            alt="White Lotus Marble Basin"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}