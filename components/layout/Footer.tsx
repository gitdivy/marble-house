"use client"

import Link from "next/link"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-200">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Image
            src="/logo_white.svg"
            alt="Kosh Tarasha Logo"
            width={180}
            height={40}
            className="opacity-90"
            />

            <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-xs">
              A quiet house of marble objects shaped with patience,
              discipline, and respect for stone.
            </p>

            <div className="flex gap-4 mt-6 text-sm">
              <Link href="#" className="hover:text-white">Instagram</Link>
              <Link href="#" className="hover:text-white">Pinterest</Link>
            </div>
          </div>

          {/* Collection */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-neutral-400">
              Collection
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/collection?category=idols" className="hover:text-white">Idols</Link></li>
              <li><Link href="/collection?category=decor" className="hover:text-white">Decorative Objects</Link></li>
              <li><Link href="/collection?category=bathroom" className="hover:text-white">Bathroom</Link></li>
              <li><Link href="/collection?category=kitchen" className="hover:text-white">Kitchen</Link></li>
            </ul>
          </div>

          {/* House */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-neutral-400">
              The House
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/journal" className="hover:text-white">Journal</Link></li>
              <li><Link href="/craft" className="hover:text-white">Craft</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-neutral-400">
              Support
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/shipping" className="hover:text-white">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-neutral-800">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between text-sm text-neutral-500">

          <p>
            © {new Date().getFullYear()} Marble House
          </p>

          <p>
            Crafted with patience, shaped in stone.
          </p>

        </div>

      </div>

    </footer>
  )
}