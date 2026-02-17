// src/app/vision/page.tsx
import Vision from "@/components/Vision";

export const metadata = {
  title: "Vision | SunlitPath",
  description:
    "SunlitPath’s vision: make learning practical, accessible, and motivating through simple apps.",
};

export default function VisionPage() {
  return (
    <main className="pt-24">
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-6">
          Vision
        </h1>
        <Vision />
      </section>
    </main>
  );
}
