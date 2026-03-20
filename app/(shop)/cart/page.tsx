"use client"

import { useCart } from "@/lib/cart-context"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {

  const { cart, removeItem, increaseQty, decreaseQty } = useCart()

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  if (cart.length === 0) {
    return (

      <div className="max-w-4xl mx-auto py-32 text-center">

        <h1 className="text-3xl font-light mb-4">
          Your cart is empty
        </h1>

        <Link
          href="/collection"
          className="border px-6 py-3 inline-block hover:bg-black hover:text-white transition"
        >
          Continue Shopping
        </Link>

      </div>

    )
  }

  return (

    <div className="max-w-6xl mx-auto px-6 py-32">

      <h1 className="text-3xl font-light mb-12">
        Your Cart
      </h1>

      <div className="grid md:grid-cols-[2fr_1fr] gap-16">

        {/* Cart Items */}
        <div className="space-y-8">

          {cart.map((item) => (

            <div
              key={item.id}
              className="flex gap-6 border-b pb-6"
            >

              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />

              <div className="flex-1">

                <h2 className="text-lg">
                  {item.name}
                </h2>

                <p className="text-neutral-500">
                  ₹{item.price}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-4 mt-3">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="border px-2"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="border px-2"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-6 text-sm text-red-500"
                  >
                    Remove
                  </button>

                </div>

              </div>

              <div className="text-right">

                ₹{item.price * item.quantity}

              </div>

            </div>

          ))}

        </div>

        {/* Order Summary */}
        <div className="border p-8 h-fit space-y-6">

          <h2 className="text-xl">
            Order Summary
          </h2>

          <div className="flex justify-between">

            <span>Subtotal</span>
            <span>₹{subtotal}</span>

          </div>

          <div className="flex justify-between text-neutral-500">

            <span>Shipping</span>
            <span>Calculated at checkout</span>

          </div>

          <Link
            href="/checkout"
            className="block text-center bg-black text-white py-3 hover:opacity-90 transition"
          >
            Proceed to Checkout
          </Link>

        </div>

      </div>

    </div>

  )
}