// src/app/contact/page.tsx
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact | SunlitPath",
  description:
    "Contact SunlitPath. Questions, feedback, partnerships, or school/NGO inquiries are welcome.",
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-6">
          Contact
        </h1>
        <Contact />
        <div className="mt-10 text-sm text-[#6b7280]">
          <p>
            Prefer email?{" "}
            <a
              href="mailto:hello@sunlitpath.com"
              className="underline hover:text-[#ff6b35]"
            >
              hello@sunlitpath.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
