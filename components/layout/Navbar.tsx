"use client"

import { useState, useRef } from "react"
import CartDrawer from "@/components/cart/CartDrawer"
import Link from "next/link"
import { Search, User, ShoppingBag, Menu, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "@/lib/cart-context"
import { Category } from "@/types/category"

export default function Navbar({ categories }: { categories: Category[] }) {

  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

    const closeTimer = useRef<NodeJS.Timeout | null>(null)

  const { cartCount } = useCart()

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMenu("collection")
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 pt-[env(safe-area-inset-top)]">

        <div className="max-w-7xl mx-auto px-6">

          {/* Navbar Container */}
          <div className="grid grid-cols-3 items-center bg-white/60 backdrop-blur-lg border border-neutral-100 rounded-3xl px-8 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

            {/* LEFT : LOGO */}
            <div className="flex items-center justify-start">

              <button
                onClick={() => setMobileMenu(true)}
                className="lg:hidden p-2"
              >
                <Menu size={22}/>
              </button>

              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Marble House Logo"
                  width={160}
                  height={40}
                  className="opacity-90 hover:opacity-100 transition"
                />
              </Link>

            </div>


            {/* CENTER : NAVIGATION */}
            <nav className="hidden lg:flex justify-center gap-12 text-sm">

              {/* COLLECTION */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("collection")}
                onMouseLeave={() => setActiveMenu(null)}
              >

                <Link href="/collection" className="py-2 inline-block">
                  Collection
                </Link>

                <AnimatePresence>
                {activeMenu === "collection" && (

                  <motion.div
                    initial={{opacity:0,y:10}}
                    animate={{opacity:1,y:0}}
                    exit={{opacity:0,y:10}}
                    transition={{duration:0.2}}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                  >

                    <div className="bg-white border shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-2xl p-10 w-[900px] max-w-[90vw] grid grid-cols-5 gap-12">

                      {/* Idols */}
                      <div>
                        <h4 className="font-medium tracking-wide mb-4">Idols</h4>
                        <ul className="space-y-2 text-neutral-600">
                          <li><Link href="#">Ganesha</Link></li>
                          <li><Link href="#">Krishna</Link></li>
                          <li><Link href="#">Shiva</Link></li>
                        </ul>
                      </div>

                      {/* Decor */}
                      <div>
                        <h4 className="font-medium tracking-wide mb-4">Decor</h4>
                        <ul className="space-y-2 text-neutral-600">
                          <li><Link href="#">Candle Holders</Link></li>
                          <li><Link href="#">Incense Holders</Link></li>
                        </ul>
                      </div>

                      {/* Bathroom */}
                      <div>
                        <h4 className="font-medium tracking-wide mb-4">Bathroom</h4>
                        <ul className="space-y-2 text-neutral-600">
                          <li><Link href="#">Marble Sinks</Link></li>
                          <li><Link href="#">Soap Dishes</Link></li>
                        </ul>
                      </div>

                      {/* Kitchen */}
                      <div>
                        <h4 className="font-medium tracking-wide mb-4">Kitchen</h4>
                        <ul className="space-y-2 text-neutral-600">
                          <li><Link href="#">Bowls</Link></li>
                          <li><Link href="#">Mortar & Pestle</Link></li>
                        </ul>
                      </div>

                      {/* Temples */}
                      <div>
                        <h4 className="font-medium tracking-wide mb-4">Temples</h4>
                        <ul className="space-y-2 text-neutral-600">
                          <li><Link href="#">Temples for Home</Link></li>
                          <li><Link href="#">Customized Temples</Link></li>
                          <li><Link href="#">Marble Tulsi Pot</Link></li>
                          <li><Link href="#">Marble Pots</Link></li>
                        </ul>
                      </div>

                    </div>

                  </motion.div>

                )}
                </AnimatePresence>

              </div>

              <Link href="/about" className="py-2 inline-block">
                Our Crafts
              </Link>
              <Link href="/journal" className="py-2 inline-block">
                Journal
              </Link>

            </nav>


            {/* RIGHT : ICONS */}
            <div className="flex items-center justify-end gap-6">

              <button onClick={() => setSearchOpen(true)}>
                <Search size={20}/>
              </button>

              <Link href="/account">
                <User size={20}/>
              </Link>

              <button onClick={() => setCartOpen(true)}>
                <motion.div
                  key={cartCount}
                  initial={{scale:1}}
                  animate={{scale:[1,1.15,1]}}
                  transition={{duration:0.3}}
                  className="relative cursor-pointer"
                >

                  <ShoppingBag size={22}/>

                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 text-xs bg-black text-white w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}

                </motion.div>
              </button>

            </div>

          </div>

        </div>

      </header>


      {/* MOBILE MENU */}
      {mobileMenu && (

        <div className="fixed inset-0 bg-white z-[60] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] px-8 flex flex-col gap-8">

          <div className="flex items-center justify-between">

            <Image
              src="/logo.svg"
              alt="Marble House"
              width={140}
              height={40}
            />

            <button onClick={() => setMobileMenu(false)}>
              <X size={26}/>
            </button>

          </div>

          <Link href="/collection" onClick={() => setMobileMenu(false)}>Collection</Link>
          <Link href="/about" onClick={() => setMobileMenu(false)}>Our Crafts</Link>
          <Link href="/journal" onClick={() => setMobileMenu(false)}>Journal</Link>
          <Link href="/account" onClick={() => setMobileMenu(false)}>Account</Link>

        </div>

      )}


      {/* SEARCH MODAL */}
      {searchOpen && (

        <div className="fixed inset-0 bg-white z-[70] flex items-start justify-center pt-32 px-6">

          <div className="w-full max-w-xl">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-xl">Search</h2>

              <button onClick={() => setSearchOpen(false)}>
                <X size={24}/>
              </button>

            </div>

            <input
              type="text"
              placeholder="Search marble pieces..."
              className="w-full border-b border-neutral-300 pb-3 text-lg outline-none"
            />

          </div>

        </div>

      )}

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />

    </>
  )
}