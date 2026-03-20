import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanityClient";

export default function ProductCard({ product }: any) {

  const imageUrl = product.image || "/images/placeholder.jpg";

  return (

    <Link href={`/product/${product.slug}`}>

      <div className="group cursor-pointer">

        {/* Product Image */}
        <div className="relative w-full aspect-square overflow-hidden bg-neutral-100">

          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

        </div>

        {/* Product Info */}
        <div className="mt-4">

          <h3 className="font-serif text-lg">
            {product.name}
          </h3>

          <p className="text-neutral-500 text-sm">
            {product.category}
          </p>

          <p className="mt-1">
            ₹{product.price}
          </p>

        </div>

      </div>

    </Link>
  );
}