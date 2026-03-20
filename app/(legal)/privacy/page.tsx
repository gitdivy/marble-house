export default function PrivacyPage() {
  return (
    <div className="pt-40 pb-32">

      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 mb-20">

        <h1 className="text-4xl md:text-5xl font-light mb-6">
          Privacy Policy
        </h1>

        <p className="text-neutral-600 max-w-xl">
          We respect your privacy and are committed to protecting your personal information.
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
          <h2 className="text-xl font-medium mb-4">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as your name,
            email address, shipping address, and payment details when placing an order.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-xl font-medium mb-4">How We Use Your Information</h2>
          <p>
            Your information is used to process orders, communicate updates, and improve
            your experience with Marble House.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-xl font-medium mb-4">Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information
            from unauthorized access, disclosure, or misuse.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-xl font-medium mb-4">Third-Party Services</h2>
          <p>
            We may use trusted third-party services for payments and shipping. These services
            operate under their own privacy policies.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-xl font-medium mb-4">Contact</h2>
          <p>
            If you have any questions about this policy, please contact us at
            hello@marblehouse.com.
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