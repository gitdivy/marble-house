import type { Metadata } from "next"
import "./globals.css"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import { CartProvider } from "@/lib/cart-context"

import { DM_Serif_Display, Inter } from "next/font/google"

// Fonts
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

// SEO Metadata
export const metadata: Metadata = {
  title: "Marble House",
  description: "Minimal global marble art atelier.",
}

// Root Layout (SERVER COMPONENT)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${inter.variable} bg-[#F6F2EC] text-[#2C2A27]`}
      >

        <CartProvider>

          {/* ✅ Navbar now self-fetches data */}
          <Navbar />

          {/* Main Content */}
          {children}

          {/* Footer */}
          <Footer />

        </CartProvider>

      </body>
    </html>
  )
}