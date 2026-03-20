import ProductCard from "@/components/product/ProductCard"
import { client } from "@/lib/sanityClient"
import { productsByCategoryQuery } from "@/lib/queries"

type Product = {
  _id: string
  name: string
  slug: string
  price: number
  image: string
  category: string
}

async function getProducts(category: string): Promise<Product[]> {
  return await client.fetch(productsByCategoryQuery, { category })
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string }
}) {

  const products = await getProducts(params.category)

  return (
    <main className="pt-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">

          <h1 className="text-4xl md:text-5xl font-serif mb-4 capitalize">
            {params.category}
          </h1>

          <p className="text-neutral-500 max-w-xl">
            Handcrafted marble pieces from our atelier.
          </p>

        </div>

        {/* Empty state */}
        {products.length === 0 ? (

          <div className="text-neutral-500">
            No products available in this category yet.
          </div>

        ) : (

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}

          </section>

        )}

      </div>

    </main>
  )
}