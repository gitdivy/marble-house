export default function TermsPage() {
  return (
    <div className="pt-40 pb-32">

      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 mb-20">

        <h1 className="text-4xl md:text-5xl font-light mb-6">
          Terms & Conditions
        </h1>

        <p className="text-neutral-600 max-w-xl">
          These terms govern your use of Marble House and the purchase of our products.
        </p>

      </section>


      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="h-px bg-neutral-200" />
      </div>


      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 space-y-14 text-neutral-700 leading-relaxed text-[16px]">

        {/* SECTION */}
        <div>
          <h2 className="text-xl font-medium mb-4">Use of Website</h2>
          <p>
            By accessing our website, you agree to use it only for lawful purposes
            and in accordance with these terms.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-xl font-medium mb-4">Product Information</h2>
          <p>
            Each product is handcrafted from natural marble. Variations in color,
            texture, and pattern are inherent and not considered defects.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-xl font-medium mb-4">Pricing & Payments</h2>
          <p>
            All prices are listed in INR and are subject to change without notice.
            Payments are securely processed through trusted providers.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-xl font-medium mb-4">Shipping & Delivery</h2>
          <p>
            Delivery timelines are estimates and may vary depending on location
            and external factors.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-xl font-medium mb-4">Returns</h2>
          <p>
            Returns are accepted only in case of damage during transit, as outlined
            in our Returns Policy.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-xl font-medium mb-4">Limitation of Liability</h2>
          <p>
            Marble House shall not be liable for indirect or incidental damages
            arising from the use of our products or website.
          </p>
        </div>

      </section>


      {/* FOOT NOTE */}
      <section className="max-w-3xl mx-auto px-6 mt-20 text-sm text-neutral-500">

        <p>
          Last updated: March 2026
        </p>

      </section>

    </div>
  )
}