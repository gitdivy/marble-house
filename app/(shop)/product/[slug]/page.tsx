import { getProduct } from "@/lib/sanity/products"

import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import ProductDetails from "@/components/product/ProductDetails"

import { PortableText } from "@portabletext/react"

export default async function ProductPage({
  params,
}: {
  params: { slug: string }
}) {

  const product = await getProduct(params.slug)

  if (!product) {
    return (
      <div className="pt-40 text-center text-neutral-500">
        This piece is no longer available.
      </div>
    )
  }

  return (
    <main className="pt-32 pb-32">

      {/* ================= TOP ================= */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

        {/* LEFT — GALLERY */}
        <div>
          <ProductGallery images={product.images} />
        </div>

        {/* RIGHT — INFO (STICKY) */}
        <div className="lg:sticky lg:top-32 h-fit">

          <ProductInfo product={product} />

          {/* SHORT TEXT */}
          <p className="mt-6 text-neutral-600 leading-relaxed">
            Each piece is handcrafted from natural marble,
            carrying unique variations in tone and texture.
          </p>

        </div>

      </section>


      {/* ================= DIVIDER ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <div className="h-px bg-neutral-200" />
      </div>


      {/* ================= STORY ================= */}
      <section className="max-w-3xl mx-auto px-6 mt-20">

        <h2 className="text-2xl font-light mb-8">
          The Story
        </h2>

        {/* ✅ FIX: Rich Text Rendering */}
        <div className="prose prose-neutral max-w-none text-[16px] leading-relaxed">

          <PortableText value={product.description} />

        </div>

      </section>


      {/* ================= DETAILS ================= */}
      <section className="max-w-3xl mx-auto px-6 mt-24">

        <h2 className="text-2xl font-light mb-10">
          Details
        </h2>

        <div className="grid grid-cols-2 gap-y-6 text-sm">

          {product.material && (
            <>
              <div className="text-neutral-500">Material</div>
              <div>{product.material}</div>
            </>
          )}

          {product.finish && (
            <>
              <div className="text-neutral-500">Finish</div>
              <div>{product.finish}</div>
            </>
          )}

          {product.weight && (
            <>
              <div className="text-neutral-500">Weight</div>
              <div>{product.weight}</div>
            </>
          )}

          {product.origin && (
            <>
              <div className="text-neutral-500">Origin</div>
              <div>{product.origin}</div>
            </>
          )}

        </div>

      </section>


      {/* SPACING */}
      <div className="h-24" />

    </main>
  )
}