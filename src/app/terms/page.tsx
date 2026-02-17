// src/app/terms/page.tsx (optional but recommended)
export const metadata = {
  title: "Terms of Service | SunlitPath",
  description:
    "Terms of Service for SunlitPath. Rules and disclaimers for using our website and apps.",
};

export default function TermsPage() {
  return (
    <main className="pt-24">
      <section className="max-w-[900px] mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-6">
          Terms of Service
        </h1>

        <div className="prose prose-slate max-w-none">
          <p>
            By accessing or using SunlitPath, you agree to these Terms of
            Service. If you do not agree, please do not use the site.
          </p>

          <h2>Use of the Site</h2>
          <p>
            You may use the site for personal, educational, and non-commercial
            purposes unless otherwise stated. You agree not to misuse the site,
            attempt unauthorized access, or disrupt service.
          </p>

          <h2>No Guarantees</h2>
          <p>
            The site and apps are provided “as is” without warranties of any
            kind. We do not guarantee accuracy, availability, or suitability for
            a particular purpose.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, SunlitPath is not liable for
            any indirect, incidental, or consequential damages arising from your
            use of the site.
          </p>

          <h2>Changes</h2>
          <p>
            We may modify these Terms at any time by posting updated Terms on
            this page.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email{" "}
            <a href="mailto:hello@sunlitpath.com">hello@sunlitpath.com</a>.
          </p>

          <p className="text-sm text-[#6b7280] mt-8">
            Effective date: {new Date().toISOString().slice(0, 10)}
          </p>
        </div>
      </section>
    </main>
  );
}
