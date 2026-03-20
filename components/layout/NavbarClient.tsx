"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, User, ShoppingBag, Menu, X } from "lucide-react"
import CartDrawer from "@/components/cart/CartDrawer"
import { useCart } from "@/lib/cart-context"

export default function NavbarClient({ categories }: any) {

     console.log("NAVBAR CATEGORIES:", categories)

  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // 🔥 Preview image state
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const closeTimer = useRef<NodeJS.Timeout | null>(null)
  const { cartCount } = useCart()

  // ✨ Luxury hover delay
  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)

    setActiveMenu("collection")

    // Set default preview (first subcategory image)
    if (categories?.length > 0) {
      const firstImage = categories?.[0]?.children?.[0]?.image
      setPreviewImage(firstImage || null)
    }
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null)
      setPreviewImage(null)
    }, 150)
  }

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-3 items-center bg-white/60 backdrop-blur-xl border border-neutral-100 rounded-3xl px-8 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

            {/* LEFT */}
            <div className="flex items-center gap-3">

              <button onClick={() => setMobileMenu(true)} className="lg:hidden p-2">
                <Menu size={22}/>
              </button>

              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Marble House"
                  width={160}
                  height={40}
                  className="opacity-90 hover:opacity-100 transition"
                />
              </Link>

            </div>

            {/* CENTER NAV */}
            <nav className="hidden lg:flex justify-center gap-14 text-sm">

              {/* COLLECTION */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >

                <Link href="/collection" className="py-2 inline-block">
                  Collection
                </Link>

                <AnimatePresence>
                  {activeMenu === "collection" && (

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
                    >

                      {/* 🔥 MEGA MENU WITH PREVIEW */}
                      <div className="bg-white border border-neutral-100 shadow-[0_30px_80px_rgba(0,0,0,0.12)] rounded-2xl p-10 w-[1100px] max-w-[95vw] grid grid-cols-6 gap-12">

                        {/* LEFT: CATEGORY COLUMNS */}
                        {categories?.slice(0, 5).map((cat: any) => (
                          <div key={cat._id}>

                            <h4 className="font-medium tracking-wide mb-4 text-black">
                              {cat.title}
                            </h4>

                            <ul className="space-y-2 text-neutral-600">

                              {cat.children?.length > 0 ? (
                                cat.children.map((sub: any) => (
                                  <li key={sub._id}>
                                    <Link
                                      href={`/collection/${sub.slug}`}
                                      onMouseEnter={() => setPreviewImage(sub.image)}
                                      className="hover:text-black transition-colors duration-300"
                                    >
                                      {sub.title}
                                    </Link>
                                  </li>
                                ))
                              ) : (
                                <li>
                                  <Link
                                    href={`/collection/${cat.slug}`}
                                    onMouseEnter={() => setPreviewImage(null)}
                                    className="hover:text-black transition-colors duration-300"
                                  >
                                    View All
                                  </Link>
                                </li>
                              )}

                            </ul>

                          </div>
                        ))}

                        {/* RIGHT: PREVIEW PANEL */}
                        <div className="flex items-center justify-center">

                          <AnimatePresence mode="wait">
                            {previewImage && (
                              <motion.img
                                key={previewImage}
                                src={previewImage}
                                alt="Preview"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="w-48 h-48 object-contain"
                              />
                            )}
                          </AnimatePresence>

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

            {/* RIGHT */}
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
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 0.3 }}
                  className="relative"
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
        <div className="fixed inset-0 bg-white z-[60] px-8 pt-10 flex flex-col gap-8">

          <div className="flex justify-between items-center">
            <Image src="/logo.svg" alt="Marble House" width={140} height={40}/>
            <button onClick={() => setMobileMenu(false)}>
              <X size={26}/>
            </button>
          </div>

          {categories?.map((cat: any) => (
            <div key={cat._id}>
              <p className="font-medium">{cat.title}</p>
              <div className="ml-4 mt-2 space-y-2 text-neutral-600">
                {cat.children?.map((sub: any) => (
                  <Link
                    key={sub._id}
                    href={`/collection/${sub.slug}`}
                    onClick={() => setMobileMenu(false)}
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>
      )}

      {/* SEARCH */}
      {searchOpen && (
        <div className="fixed inset-0 bg-white z-[70] flex items-start justify-center pt-32 px-6">
          <div className="w-full max-w-xl">
            <div className="flex justify-between mb-6">
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

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

    </>
  )
}