import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:underline mb-8"
      >
        ← Back to Home
      </Link>
      <h1 className="font-heading text-3xl sm:text-4xl text-text-secondary">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-text-muted">Last updated: {new Date().toLocaleDateString("en-IN")}</p>
      <div className="mt-10 prose prose-brand max-w-none text-text-muted space-y-6">
        <p>
          Megica Group of Companies (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <h2 className="text-xl font-semibold text-text-secondary mt-8">Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, phone number, company name, and enquiry details when you submit forms on our website, including enquiry forms, dealership applications, and contact requests.
        </p>
        <h2 className="text-xl font-semibold text-text-secondary mt-8">How We Use Your Information</h2>
        <p>
          We use the information you provide to respond to your enquiries, process dealership applications, send catalogues or updates you have requested, and improve our services and website experience.
        </p>
        <h2 className="text-xl font-semibold text-text-secondary mt-8">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our practices, please contact us at the details provided on our <Link href="/contact" className="text-brand-accent hover:underline">Contact</Link> page.
        </p>
      </div>
    </div>
  );
}
