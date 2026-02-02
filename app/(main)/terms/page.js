import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:underline mb-8"
      >
        ← Back to Home
      </Link>
      <h1 className="font-heading text-3xl sm:text-4xl text-text-secondary">
        Terms & Conditions
      </h1>
      <p className="mt-2 text-sm text-text-muted">Last updated: {new Date().toLocaleDateString("en-IN")}</p>
      <div className="mt-10 prose prose-brand max-w-none text-text-muted space-y-6">
        <p>
          Welcome to the Megica Group of Companies website. By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this site.
        </p>
        <h2 className="text-xl font-semibold text-text-secondary mt-8">Use of Website</h2>
        <p>
          This website is provided for information about our products, services, and business. You may use it for lawful purposes only and in accordance with these terms. You must not use the site in any way that could damage, disable, or impair it or interfere with others’ use.
        </p>
        <h2 className="text-xl font-semibold text-text-secondary mt-8">Enquiries and Dealership</h2>
        <p>
          Submitting an enquiry or dealership application does not create a binding contract. We will respond to your request and may require further information or documentation. Any agreement will be subject to separate written terms.
        </p>
        <h2 className="text-xl font-semibold text-text-secondary mt-8">Contact</h2>
        <p>
          For questions about these Terms and Conditions, please visit our <Link href="/contact" className="text-brand-accent hover:underline">Contact</Link> page.
        </p>
      </div>
    </div>
  );
}
