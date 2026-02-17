import Link from "next/link";

const apps = [
  {
    slug: "japanese",
    title: "Japanese Learning Path",
    description:
      "Practice hiragana, katakana, and kanji with flashcards and spaced repetition. Organized by JLPT levels N5-N1.",
    icon: "fa-language",
    category: "Education",
    status: "Live",
    platforms: ["Web"],
  },
  {
    slug: "spanish",
    title: "Spanish Battle Drill",
    description:
      "Practice Spanish vocabulary, verb conjugations, and grammar through interactive questions with 4,000+ practice exercises.",
    icon: "fa-book-open",
    category: "Education",
    status: "Live",
    platforms: ["Web"],
  },
  {
    slug: "math",
    title: "Math Quest",
    description:
      "Practice arithmetic, fractions, and algebra through problem-solving challenges. Progress through 16 zones with 100+ collectibles.",
    icon: "fa-calculator",
    category: "Education",
    status: "Live",
    platforms: ["Web"],
  },
  {
    slug: "typing",
    title: "Typing Quest",
    description:
      "Improve typing speed and accuracy through structured practice sessions and battle challenges. Track progress with detailed statistics.",
    icon: "fa-keyboard",
    category: "Education",
    status: "Live",
    platforms: ["Web"],
  },
  {
    slug: "meditation",
    title: "MindPeace: Meditation",
    description:
      "Build a regular meditation practice with guided sessions from 1-30 minutes. Multiple techniques for all experience levels.",
    icon: "fa-spa",
    category: "Wellbeing",
    status: "Live",
    platforms: ["iOS"],
  },
];

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-soft border-b border-[#e9ecef]">
        <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#ff6b35] hover:text-[#f7931e] mb-6 no-underline font-medium transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4">
            Our Apps
          </h1>
          <p className="text-lg md:text-xl text-[#7f8c8d] max-w-3xl">
            Free educational and wellbeing tools designed to support learning,
            focus, and daily practice.
          </p>
        </div>
      </header>

      {/* Apps Grid */}
      <main className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="block bg-white border border-[#e9ecef] rounded-xl p-8 no-underline transition-all duration-300 hover:-translate-y-2 hover:shadow-hover group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-sunset flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                <i className={`fas ${app.icon} text-white text-2xl`}></i>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase tracking-wider text-[#ff6b35] font-semibold">
                  {app.category}
                </span>
                <span className="text-xs text-[#7f8c8d]">•</span>
                <span className="text-xs text-[#7f8c8d]">{app.status}</span>
              </div>

              <h2 className="text-2xl font-bold text-[#2c3e50] mb-3 group-hover:text-[#ff6b35] transition-colors">
                {app.title}
              </h2>

              <p className="text-[#7f8c8d] leading-relaxed mb-4">
                {app.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-[#7f8c8d]">
                <i className="fas fa-desktop"></i>
                <span>{app.platforms.join(", ")}</span>
              </div>

              <div className="mt-6 flex items-center text-[#ff6b35] font-semibold group-hover:gap-3 transition-all">
                Learn More
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
