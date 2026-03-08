"use client";

import { useCart } from "@/lib/cart-context";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ProductInfo() {

  const { addToCart } = useCart();

  const controls = useAnimation();
  const imgRef = useRef(null);

  async function handleAddToCart() {

    await controls.start({
      scale: 0.7,
      opacity: 0.5,
      y: -50,
      transition: { duration: 0.3 }
    });

    addToCart({
      id: "lotus-basin",
      name: "Lotus Luxe Basin",
      price: 28000,
      image: "/images/basin.jpg",
      quantity: 1
    });

    controls.start({
      scale: 1,
      opacity: 1,
      y: 0
    });

  }

  return (

    <div className="flex flex-col justify-center gap-8">

      {/* Animated Product Image */}
      <motion.div
        animate={controls}
        ref={imgRef}
      >
        <Image
          src="/images/basin.jpg"
          alt="Lotus Luxe Basin"
          width={500}
          height={500}
        />
      </motion.div>

      <div>

        <h1 className="text-3xl font-serif mb-2">
          Lotus Luxe Basin
        </h1>

        <p className="text-neutral-500 mb-6">
          Marble Basin
        </p>

        <p className="text-xl mb-8">
          ₹28,000
        </p>

        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-8 py-4 w-fit hover:bg-neutral-800 transition"
        >
          Add to Cart
        </button>

      </div>

    </div>

  );
}