"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, User, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useCart } from "@/lib/cart-context"

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const { cart } = useCart()

  return (
    <header className="fixed top-6 left-0 right-0 z-50">

      {/* Floating container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between bg-white/60 backdrop-blur-lg border border-neutral-100 rounded-3xl px-8 py-4 shadow-sm">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Marble House Logo"
              width={160}
              height={40}
              className="opacity-90 hover:opacity-100 transition"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8 text-sm">

            <div
              onMouseEnter={() => setActiveMenu("collection")}
              onMouseLeave={() => setActiveMenu(null)}
              className="relative"
            >
              <Link href="/collection">Collection</Link>

              {activeMenu === "collection" && (
                <div className="absolute top-10 left-0 bg-white border shadow-lg rounded-xl p-8 w-[700px] grid grid-cols-4 gap-6">

                  <div>
                    <h4 className="font-semibold mb-3">Idols</h4>
                    <ul className="space-y-2 text-neutral-600">
                      <li><Link href="#">Ganesha</Link></li>
                      <li><Link href="#">Krishna</Link></li>
                      <li><Link href="#">Shiva</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Decor</h4>
                    <ul className="space-y-2 text-neutral-600">
                      <li><Link href="#">Candle Holders</Link></li>
                      <li><Link href="#">Incense Holders</Link></li>
                      <li><Link href="#">Tulsi Pots</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Bathroom</h4>
                    <ul className="space-y-2 text-neutral-600">
                      <li><Link href="#">Marble Sinks</Link></li>
                      <li><Link href="#">Soap Dishes</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Kitchen</h4>
                    <ul className="space-y-2 text-neutral-600">
                      <li><Link href="#">Bowls</Link></li>
                      <li><Link href="#">Mortar & Pestle</Link></li>
                    </ul>
                  </div>

                </div>
              )}
            </div>

            <Link href="/about">Our Crafts</Link>
            <Link href="/journal">Journal</Link>

          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-6">

            <Search size={18} className="cursor-pointer" />

            <Link href="/account">
              <User size={18} />
            </Link>

            <Link href="/cart">

              <motion.div
                key={cart.length}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 0.3 }}
                className="relative cursor-pointer"
              >

                <ShoppingBag size={20} />

                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 text-xs bg-black text-white w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}

              </motion.div>

            </Link>

          </div>

        </div>
      </div>

    </header>
  )
}