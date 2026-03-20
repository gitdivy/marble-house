export default function ContactPage() {
  return (
    <div className="pt-40 pb-32">

      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 mb-24">

        <h1 className="text-5xl font-light mb-6">
          Contact
        </h1>

        <p className="text-neutral-600 max-w-lg">
          For inquiries, custom commissions, or collaborations,
          we invite you to get in touch.
        </p>

      </section>


      {/* CONTACT GRID */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <div>
          <p className="text-sm tracking-wide text-neutral-400 mb-3">
            EMAIL
          </p>
          <p className="text-lg">koshindiapvtltd@gmail.com</p>
        </div>

        <div>
          <p className="text-sm tracking-wide text-neutral-400 mb-3">
            PHONE
          </p>
          <p className="text-lg">+91 90790 64465</p>
        </div>

        <div>
          <p className="text-sm tracking-wide text-neutral-400 mb-3">
            LOCATION
          </p>
          <p className="text-lg">Rajsamand, Rajasthan, India</p>
        </div>

      </section>


      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="h-px bg-neutral-200" />
      </div>


      {/* FOOT NOTE */}
      <section className="max-w-3xl mx-auto px-6 mt-16 text-center text-neutral-500 text-sm">

        <p>
          We typically respond within 24–48 hours.
        </p>

      </section>

    </div>
  )
}