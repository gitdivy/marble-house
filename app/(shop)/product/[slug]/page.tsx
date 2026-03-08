import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDetails from "@/components/product/ProductDetails";

export default function ProductPage() {
  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto">

      {/* Top Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        <ProductGallery />

        <ProductInfo />

      </section>

      {/* Story Section */}
      <section className="mt-28 max-w-3xl">

        <h2 className="text-2xl font-serif mb-6">
          The Story
        </h2>

        <p className="text-neutral-600 leading-relaxed">
          Each Marble House piece begins as a raw stone block.
          Our artisans shape the material slowly, respecting the
          natural veins and imperfections of the marble.
        </p>

      </section>

      {/* Details */}
      <ProductDetails />

    </main>
  );
}