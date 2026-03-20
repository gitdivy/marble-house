export default function CraftPage() {
  return (
    <div className="pt-40 pb-32">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-32">

        <h1 className="text-5xl md:text-6xl font-light tracking-wide leading-tight mb-8">
          The Craft of Marble
        </h1>

        <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          Each piece begins as raw stone — shaped by hand, refined with patience,
          and finished to reveal the natural elegance of marble.
        </p>

      </section>


      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="h-px bg-neutral-200" />
      </div>


      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 space-y-14 text-neutral-700 text-[17px] leading-loose">

        <p>
          At Marble House, we work with skilled artisans who have spent decades mastering the art of stone carving.
          Every object is shaped through a slow, deliberate process that honors the material.
        </p>

        <p>
          From selecting the right marble block to hand-finishing each surface, no two pieces are ever identical.
          The variations in vein, texture, and tone are what make every object unique.
        </p>

        <p>
          We believe marble is not just a material — it is a timeless medium of expression.
        </p>

      </section>


      {/* SIGNATURE SECTION */}
      <section className="mt-32 text-center">

        <p className="text-sm tracking-widest text-neutral-400 mb-4">
          MARBLE HOUSE
        </p>

        <p className="text-neutral-600 italic">
          A quiet house of marble objects shaped with patience.
        </p>

      </section>

    </div>
  )
}