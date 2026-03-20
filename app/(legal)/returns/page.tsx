export default function ReturnsPage() {
  return (
    <div className="pt-40 pb-32">

      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 mb-20">

        <h1 className="text-4xl md:text-5xl font-light mb-6">
          Returns
        </h1>

        <p className="text-neutral-600 max-w-xl">
          Each piece is handcrafted from natural marble. We handle every return
          request with care and consideration.
        </p>

      </section>


      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="h-px bg-neutral-200" />
      </div>


      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 space-y-10 text-neutral-700 leading-relaxed text-[16px]">

        <p>
          Due to the handcrafted nature of our products, returns are only accepted
          in the case of damage during shipping.
        </p>

        <p>
          If your item arrives damaged, please contact us within 48 hours of delivery
          with images of the product and packaging.
        </p>

        <p>
          Once verified, we will arrange a replacement or refund as appropriate.
        </p>

        <p>
          Minor variations in texture, color, and veining are natural characteristics
          of marble and are not considered defects.
        </p>

      </section>


      {/* FOOT NOTE */}
      <section className="max-w-3xl mx-auto px-6 mt-20 text-sm text-neutral-500">

        <p>
          For assistance, please contact us at hello@marblehouse.com
        </p>

      </section>

    </div>
  )
}