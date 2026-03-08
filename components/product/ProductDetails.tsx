export default function ProductDetails() {
  return (

    <section className="mt-28 border-t pt-16">

      <h2 className="text-2xl font-serif mb-10">
        Details
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

        <div>
          <p className="text-neutral-500">Material</p>
          <p>Natural Marble</p>
        </div>

        <div>
          <p className="text-neutral-500">Finish</p>
          <p>Honed</p>
        </div>

        <div>
          <p className="text-neutral-500">Weight</p>
          <p>8 kg</p>
        </div>

        <div>
          <p className="text-neutral-500">Origin</p>
          <p>Rajasthan, India</p>
        </div>

      </div>

    </section>
  );
}