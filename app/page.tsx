"use client";
import { motion } from "framer-motion";
import CraftProcess from "@/components/sections/CraftProcess"
import CollectionOverview from "@/components/sections/CollectionOverview"
import AtelierTeaser from "@/components/sections/AtelierTeaser"
import Image from "next/image";
export default function Home() {
  return (
    <>
    {/*Hero Section*/}
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-20 md:pt-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Hero-banner.webp"
          alt="Marble Sculpture"
          fill
          priority
          className="object-cover object-[60%_center] md:object-center"
      />
      </div>
      {/*<div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"/>*/}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F6F2EC] to-transparent" />
      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-20">
        <div className="max-w-[420px] md:max-w-[520px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
          
        <h1 className="text-[36px] sm:text-[42px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-[#1C1A18]">
          Stone, In Its Purest Form.
        </h1>


        <p className="mt-4 text-[15px] md:text-[17px] text-[#4B4742] leading-relaxed max-w-[380px] md:max-w-none">
            Small-batch marble art crafted with timeless precision and global elegance.
        </p>


        <button className="mt-8 md:mt-10 inline-block text-[13px] tracking-[0.35em] uppercase border-b border-[#1C1A18] pb-2 hover:opacity-60 transition duration-300"> 
           Explore Collection
        </button>

          </motion.div>

      </div>
      </div>
    </section>
    {/*statement section*/}
    <section className="bg-[#F6F2EC] py-20 md:py-28">
  <div className="max-w-4xl mx-auto px-6 md:px-20">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >

      <h2 className="
      text-[26px]
      sm:text-[30px]
      md:text-[42px]
      leading-[1.3]
      tracking-[-0.01em]
      text-[#1C1A18]
      max-w-[640px]
      ">
        Marble is not shaped by tools alone.
        It is shaped by patience, by pressure, by time.
      </h2>

      <p className="
      mt-8
      text-[15px]
      md:text-[17px]
      text-[#6F6A64]
      leading-relaxed
      max-w-[520px]
      ">
        Each piece from our atelier is carved in small batches,
        refined by hand, and designed to exist beyond trend.
      </p>

    </motion.div>

  </div>
</section>
{/*section*/}
<section className="bg-[#F6F2EC] py-20">
  <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mt-4 md:mt-12 max-w-6xl mx-auto px-6 md:px-20">

    {/* IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="overflow-hidden max-w-[520px] mx-auto md:mx-0 md:justify-self-center">
        <Image
          src="/Calacatta_Horizon_Bowl.webp"
          alt="Calacatta Horizon Bowl"
          width={500}
          height={500}
          className="transition duration-700 hover:scale-105"
        />
      </div>
    </motion.div>

    {/* CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
      <p className="text-[11px] tracking-[0.3em] uppercase text-[#9B948C]">
        Featured Piece
      </p>

      <h3 className="mt-4 text-[32px] md:text-[40px] leading-[1.1] text-[#1C1A18]">
        Calacatta Horizon Bowl
      </h3>

      <p className="mt-6 text-[16px] text-[#6F6A64] leading-relaxed max-w-md">
        Sculpted from premium Calacatta marble, each bowl reveals
        unique veining that cannot be replicated.
        Produced in limited small batches.
      </p>

      <button className="mt-8 text-[12px] tracking-[0.3em] uppercase border-b border-[#1C1A18] pb-2 hover:opacity-60 transition">
        View Piece
      </button>
    </motion.div>

  </div>
</section>
<CraftProcess />
<CollectionOverview />
<AtelierTeaser />
</>
  );
}
