export default function ProductDetails({ product }: any) {
  return (
    <section className="mt-24 border-t pt-16">

      <h2 className="text-2xl font-serif mb-10">
        Details
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">

        <div>
          <p className="text-neutral-500 mb-1">Material</p>
          <p>{product.material || "Natural Marble"}</p>
        </div>

        <div>
          <p className="text-neutral-500 mb-1">Finish</p>
          <p>{product.finish || "Honed"}</p>
        </div>

        <div>
          <p className="text-neutral-500 mb-1">Weight</p>
          <p>{product.weight || "—"}</p>
        </div>

        <div>
          <p className="text-neutral-500 mb-1">Origin</p>
          <p>{product.origin || "Rajasthan, India"}</p>
        </div>

      </div>

    </section>
  );
}