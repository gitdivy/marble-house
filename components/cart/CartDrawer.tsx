"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"

type Props = {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: Props) {

  const { cart, removeItem, increaseQty, decreaseQty } = useCart()

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (

    <AnimatePresence>

      {open && (

        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed right-0 top-0 h-full w-[420px] bg-white z-50 shadow-2xl flex flex-col"
          >

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">

              <h2 className="text-lg font-medium">
                Your Cart
              </h2>

              <button onClick={onClose}>
                <X size={20} />
              </button>

            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">

              {cart.length === 0 && (
                <p className="text-neutral-500">
                  Your cart is empty
                </p>
              )}

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex gap-4"
                >

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />

                  <div className="flex-1">

                    <h3 className="text-sm font-medium">
                      {item.name}
                    </h3>

                    <p className="text-sm text-neutral-500">
                      ₹{item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 border"
                      >
                        -
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-2 border"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-4 text-xs text-red-500"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* Footer */}
            <div className="border-t p-6 space-y-4">

              <div className="flex justify-between text-sm">

                <span>Subtotal</span>
                <span>₹{subtotal}</span>

              </div>

              <button className="w-full bg-black text-white py-3 hover:opacity-90 transition">
                Checkout
              </button>

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>

  )
}