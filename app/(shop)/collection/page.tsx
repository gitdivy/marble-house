import ProductCard from "@/components/product/ProductCard";
import Filters from "@/components/product/Filters";
import { client } from "@/lib/sanityClient";
import { allProductsQuery } from "@/lib/queries";

async function getProducts() {
  return await client.fetch(allProductsQuery);
}

export default async function CollectionPage() {

  const products = await getProducts();

  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto">

      {/* Page Title */}
      <div className="mb-16">
        <h1 className="text-4xl font-serif mb-3">
          Collection
        </h1>

        <p className="text-neutral-500">
          Timeless marble objects crafted by artisans.
        </p>
      </div>

      {/* Filters */}
      <Filters />

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">

        {products.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}

      </section>

    </main>
  );
}