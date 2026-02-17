// src/app/about/page.tsx
import About from "@/components/About";

export const metadata = {
  title: "About | SunlitPath",
  description:
    "Learn about SunlitPath — practical apps for learning, focus, wellbeing, and life direction.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-6">
          About
        </h1>
        <About />
      </section>
    </main>
  );
}
