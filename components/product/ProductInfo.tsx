"use client";

import { useCart } from "@/lib/cart-context";

type Product = {
  name: string;
  price: number;
  slug: {
    current: string;
  };
  image: string;
  category?: string;
};

export default function ProductInfo({ product }: { product: Product }) {

  const { addItem } = useCart();

  function handleAddToCart() {
    addItem({
      id: product.slug.current,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  return (

    <div className="space-y-6">

      {/* Category */}
      {product.category && (
        <p className="text-sm tracking-widest uppercase text-neutral-500">
          {product.category}
        </p>
      )}

      {/* Name */}
      <h1 className="text-4xl font-light tracking-tight leading-tight">
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-xl">
        ₹{product.price}
      </p>

      {/* Add To Cart */}
      <button
        onClick={handleAddToCart}
        className="mt-6 px-8 py-3 border border-black hover:bg-black hover:text-white transition"
      >
        Add To Cart
      </button>

    </div>

  );
}