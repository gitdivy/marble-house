import { client } from "@/lib/sanityClient"
import { productBySlugQuery } from "@/lib/queries"

import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import ProductDetails from "@/components/product/ProductDetails"

import { notFound } from "next/navigation"

type Props = {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: Props) {

  const product = await client.fetch(productBySlugQuery, {
    slug: params.slug
  })

  if (!product) {
    notFound()
  }

  return (

    <main className="max-w-7xl mx-auto px-6 py-24">

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-16">

        <ProductGallery images={product.images} />

        <ProductInfo product={product} />

      </div>

      {/* Product Details */}
      <div className="mt-24">

        <ProductDetails product={product} />

      </div>

    </main>

  )
}