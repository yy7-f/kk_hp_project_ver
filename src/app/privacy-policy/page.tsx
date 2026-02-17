// src/app/privacy-policy/page.tsx
export const metadata = {
  title: "Privacy Policy | SunlitPath",
  description:
    "Privacy Policy for SunlitPath. Learn how we use cookies and third-party services like Google AdSense.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24">
      <section className="max-w-[900px] mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-6">
          Privacy Policy
        </h1>

        <div className="prose prose-slate max-w-none">
          <p>
            SunlitPath (“we”, “our”, “us”) operates this website to provide free
            educational and wellbeing apps. This Privacy Policy explains how we
            handle information when you use our site.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect limited information automatically through standard web
            technologies, such as IP address, device type, browser type, and
            pages visited, to maintain security and improve the site.
          </p>

          <h2>Cookies</h2>
          <p>
            Cookies are small text files stored on your device. We and our
            partners may use cookies to deliver and measure ads, understand
            usage, and improve performance.
          </p>

          <h2>Advertising (Google AdSense)</h2>
          <p>
            We may display ads served by Google and other third-party advertising
            partners. These partners may use cookies and/or device identifiers to
            show ads based on your interests and measure ad performance.
          </p>
          <ul>
            <li>
              Third-party vendors, including Google, use cookies to serve ads
              based on prior visits to this website and/or other websites.
            </li>
            <li>
              Google’s use of advertising cookies enables it and its partners to
              serve ads to users based on their visits to this site and/or other
              sites on the internet.
            </li>
            <li>
              You can opt out of showing personalized ads in your Google Ads
              settings.
            </li>
          </ul>

          <h2>Children’s Privacy</h2>
          <p>
            Our content is intended for general audiences, including students
            with guidance from parents/teachers. We do not knowingly collect
            personal information from children. If you believe a child has
            provided personal information, please contact us and we will take
            appropriate action.
          </p>

          <h2>External Links</h2>
          <p>
            Our site may contain links to external sites. We are not responsible
            for the privacy practices of those sites.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:hello@sunlitpath.com">hello@sunlitpath.com</a>.
          </p>

          <h2>Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>

          <p className="text-sm text-[#6b7280] mt-8">
            Effective date: {new Date().toISOString().slice(0, 10)}
          </p>
        </div>
      </section>
    </main>
  );
}
