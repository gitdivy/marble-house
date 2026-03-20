import ProductCard from "@/components/product/ProductCard"
import Filters from "@/components/product/Filters"
import { getAllProducts } from "@/lib/sanity/products"

export default async function CollectionPage() {

  const products = await getAllProducts()

  return (
    <main className="pt-40 pb-24">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 text-center mb-24">

        <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6">
          Collection
        </h1>

        <p className="text-neutral-600 max-w-xl mx-auto leading-relaxed">
          A curated selection of marble objects shaped with precision,
          patience, and timeless craftsmanship.
        </p>

      </section>


      {/* FILTERS */}
      <div className="max-w-7xl mx-auto px-6">
        <Filters />
      </div>


      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 mt-16">

        {products?.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            {products.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}

          </div>

        ) : (

          <div className="text-center text-neutral-500 py-20">
            No products found.
          </div>

        )}

      </section>

    </main>
  )
}