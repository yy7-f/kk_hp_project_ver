import Link from "next/link";

export default function SpanishPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-soft border-b border-[#e9ecef]">
        <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-20">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-[#ff6b35] hover:text-[#f7931e] mb-6 no-underline font-medium transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Apps
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-sunset flex items-center justify-center flex-shrink-0">
              <i className="fas fa-book-open text-white text-2xl"></i>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50]">
                Spanish Battle Drill
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-[#ff6b35] border border-[#ff6b35]">
              Live
            </span>
            <span className="px-3 py-1 bg-white rounded-full text-sm text-[#7f8c8d] border border-[#e9ecef]">
              <i className="fas fa-desktop mr-1"></i> Web
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">Overview</h2>
          <div className="prose prose-lg max-w-none text-[#7f8c8d] leading-relaxed space-y-4">
            <p>
              Spanish Battle Drill is a web-based Spanish learning tool that
              combines traditional study materials with interactive
              question-and-answer sessions. Users practice vocabulary, verb
              conjugation, phrases, and grammar through a game-inspired format
              where they answer questions while engaging with virtual characters
              in turn-based encounters.
            </p>
            <p>
              The application includes over 4,000 practice questions and more
              than 500 detailed lesson articles covering fundamental to advanced
              Spanish concepts. Progress is tracked locally in the user's
              browser, requiring no account creation or login.
            </p>
          </div>
        </section>

        {/* Who It's For */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">
            Who It's For
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Students beginning their Spanish language studies
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Intermediate learners seeking structured practice across
                  multiple topics
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Advanced learners reviewing verb conjugations and grammatical
                  structures
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Self-directed learners who prefer interactive practice over
                  passive reading
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Anyone looking for supplemental Spanish practice materials at
                  no cost
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">
            Key Features
          </h2>
          <div className="space-y-6">
            <div className="bg-[#f8f9fa] p-6 rounded-xl">
              <ul className="space-y-3 text-[#7f8c8d]">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      4,000+ Practice Questions
                    </strong>{" "}
                    spanning vocabulary (English-Spanish translations), verb
                    conjugations (present, preterite, imperfect, future,
                    subjunctive), common phrases, and grammar rules
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      540+ Lesson Articles
                    </strong>{" "}
                    with detailed explanations organized by category (grammar,
                    vocabulary, verbs, phrases) and difficulty level (beginner,
                    intermediate, advanced)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      Turn-Based Practice Format
                    </strong>{" "}
                    where correct answers advance progress and incorrect answers
                    provide immediate feedback
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      Searchable Lesson Library
                    </strong>{" "}
                    with filtering by category, level, and topic tags
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      Local Progress Tracking
                    </strong>{" "}
                    that saves completion history in the browser without
                    requiring an account
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      Monster Collection System
                    </strong>{" "}
                    featuring 40+ collectible characters across 8 themed zones
                    as a motivational layer
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      XP and Reward Tracking
                    </strong>{" "}
                    to visualize learning progress over time
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      No Registration Required
                    </strong>{" "}
                    – practice begins immediately upon visiting the site
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice & Progression */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">
            Practice & Progression
          </h2>
          <div className="prose prose-lg max-w-none text-[#7f8c8d] leading-relaxed space-y-4">
            <p>
              Users typically select a learning category (vocabulary, verb
              conjugation, phrases, or grammar) and choose a difficulty level.
              During practice sessions, they answer multiple-choice questions in
              a turn-based format. Correct answers contribute to session
              progress, while incorrect answers are noted for review.
            </p>
            <p>
              The application tracks cumulative experience points, coins earned
              through practice, and which characters have been encountered. Users
              can browse their collection, review previously studied topics, and
              access detailed lesson articles for reference at any time.
            </p>
            <p>
              Lesson articles provide structured explanations with examples,
              allowing users to study specific topics in depth before or after
              practicing related questions.
            </p>
          </div>
        </section>

        {/* Platform Availability */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">
            Platform Availability
          </h2>
          <div className="bg-gradient-soft p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center flex-shrink-0">
                <i className="fas fa-desktop text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">
                  Web
                </h3>
                <p className="text-[#7f8c8d] leading-relaxed">
                  Accessible through modern web browsers on desktop and mobile
                  devices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">
            Start Practicing Today
          </h2>
          <p className="text-lg text-[#7f8c8d] mb-8">
            Start practicing Spanish vocabulary, verb conjugations, and phrases
            today.
          </p>
          <a
            href="https://spanish.sunlit-path.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-sunset text-white text-lg font-semibold rounded-xl no-underline shadow-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
          >
            Launch App
            <i className="fas fa-external-link-alt"></i>
          </a>
        </section>
      </main>
    </div>
  );
}
