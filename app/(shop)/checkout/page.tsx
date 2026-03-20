"use client"

import { useCart } from "@/lib/cart-context"
import { useState } from "react"
import Link from "next/link"

export default function CheckoutPage() {

  const { cart } = useCart()

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const [orderPlaced, setOrderPlaced] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  function handleSubmit(e: React.FormEvent) {

    e.preventDefault()

    setOrderPlaced(true)

  }

  /* -----------------------------
     Empty Cart Protection
  ------------------------------ */

  if (cart.length === 0 && !orderPlaced) {
    return (

      <div className="max-w-4xl mx-auto py-40 text-center">

        <h1 className="text-3xl font-light mb-4">
          Your cart is empty
        </h1>

        <Link
          href="/collection"
          className="border px-6 py-3 hover:bg-black hover:text-white transition"
        >
          Continue Shopping
        </Link>

      </div>

    )
  }

  /* -----------------------------
     Order Confirmation Screen
  ------------------------------ */

  if (orderPlaced) {

    return (

      <div className="max-w-4xl mx-auto py-40 text-center">

        <h1 className="text-3xl font-light mb-4">
          Thank you for your order
        </h1>

        <p className="text-neutral-600 mb-8">
          Your order has been placed successfully.
        </p>

        <Link
          href="/collection"
          className="border px-6 py-3 hover:bg-black hover:text-white transition"
        >
          Continue Shopping
        </Link>

      </div>

    )

  }

  return (

    <div className="max-w-6xl mx-auto px-6 py-32">

      <h1 className="text-3xl font-light mb-12">
        Checkout
      </h1>

      <div className="grid md:grid-cols-[2fr_1fr] gap-16">

        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full border p-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full border p-3"
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
            className="w-full border p-3"
          />

          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
            className="w-full border p-3"
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              name="city"
              placeholder="City"
              onChange={handleChange}
              required
              className="border p-3"
            />

            <input
              name="state"
              placeholder="State"
              onChange={handleChange}
              required
              className="border p-3"
            />

          </div>

          <input
            name="zip"
            placeholder="Zip Code"
            onChange={handleChange}
            required
            className="w-full border p-3"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 hover:opacity-90 transition"
          >
            Place Order
          </button>

        </form>

        {/* Order Summary */}
        <div className="border p-8 h-fit">

          <h2 className="text-xl mb-6">
            Order Summary
          </h2>

          {cart.map((item) => (

            <div
              key={item.id}
              className="flex justify-between mb-3"
            >

              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{item.price * item.quantity}
              </span>

            </div>

          ))}

          <div className="border-t pt-4 mt-4 flex justify-between font-medium">

            <span>Total</span>
            <span>₹{subtotal}</span>

          </div>

        </div>

      </div>

    </div>

  )
}