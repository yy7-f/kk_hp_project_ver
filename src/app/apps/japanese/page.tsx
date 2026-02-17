import Link from "next/link";

export default function JapanesePage() {
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
              <i className="fas fa-language text-white text-2xl"></i>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50]">
                Japanese Learning Path
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
              Japanese Learning Path is a free educational web platform designed
              to help students practice and improve their Japanese language
              skills. The app provides structured practice tools for reading,
              writing, listening, and vocabulary building, with content organized
              around the Japanese Language Proficiency Test (JLPT) levels N5
              through N1.
            </p>
            <p>
              Users can practice hiragana, katakana, and kanji characters, review
              vocabulary and grammar patterns, and track their study progress
              over time. The platform uses spaced repetition techniques to help
              students review material at optimal intervals.
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
                <strong className="text-[#2c3e50]">Complete beginners</strong>
                <p className="text-[#7f8c8d] text-sm mt-1">
                  Learning hiragana and katakana for the first time
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <strong className="text-[#2c3e50]">JLPT test-takers</strong>
                <p className="text-[#7f8c8d] text-sm mt-1">
                  Preparing for N5, N4, N3, N2, or N1 exams
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <strong className="text-[#2c3e50]">
                  Intermediate learners
                </strong>
                <p className="text-[#7f8c8d] text-sm mt-1">
                  Expanding vocabulary and kanji knowledge
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <strong className="text-[#2c3e50]">
                  Self-directed students
                </strong>
                <p className="text-[#7f8c8d] text-sm mt-1">
                  Who prefer flexible, independent study
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <strong className="text-[#2c3e50]">
                  Teachers and classrooms
                </strong>
                <p className="text-[#7f8c8d] text-sm mt-1">
                  Seeking supplementary practice resources
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
          <div className="space-y-8">
            <div className="bg-[#f8f9fa] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-3 flex items-center gap-2">
                <i className="fas fa-font text-[#ff6b35]"></i>
                Character Practice
              </h3>
              <ul className="space-y-2 text-[#7f8c8d]">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>
                    Hiragana and katakana flashcards with multiple practice modes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>
                    Kanji study organized by JLPT level (over 2,000 characters)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>
                    Interactive writing practice with visual stroke order
                    guidance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Audio pronunciation for listening practice</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-3 flex items-center gap-2">
                <i className="fas fa-book text-[#ff6b35]"></i>
                Vocabulary & Grammar
              </h3>
              <ul className="space-y-2 text-[#7f8c8d]">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Vocabulary lists sorted by JLPT level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Grammar pattern explanations and example sentences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Custom flashcard decks for personalized study</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Searchable reference lists for quick lookup</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-3 flex items-center gap-2">
                <i className="fas fa-gamepad text-[#ff6b35]"></i>
                Practice Modes
              </h3>
              <ul className="space-y-2 text-[#7f8c8d]">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>
                    Flashcard sessions with spaced repetition scheduling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>
                    Battle modes (Speed, Survival, Quiz) for timed practice
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Mistake review to focus on challenging items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>
                    Writing exercises for hiragana, katakana, kanji, and
                    vocabulary
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-3 flex items-center gap-2">
                <i className="fas fa-chart-line text-[#ff6b35]"></i>
                Progress Tracking
              </h3>
              <ul className="space-y-2 text-[#7f8c8d]">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Study history showing daily practice sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Experience points and level progression</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Statistics on accuracy rates and cards mastered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Learning roadmap with visual progress indicators</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-3 flex items-center gap-2">
                <i className="fas fa-tools text-[#ff6b35]"></i>
                Study Tools
              </h3>
              <ul className="space-y-2 text-[#7f8c8d]">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Japanese journal for writing practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Personal notebook for study notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>JLPT test-taking strategies and tips</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span>Reading practice with example sentences</span>
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
              Users typically start by learning hiragana and katakana through
              flashcard practice and writing exercises. As they progress, they
              can move on to kanji, vocabulary, and grammar study organized by
              JLPT level.
            </p>
            <p>
              The spaced repetition system schedules review sessions based on
              individual performance—items that are difficult to remember appear
              more frequently, while mastered content is reviewed less often.
              This approach helps students focus their study time on material
              that needs the most attention.
            </p>
            <p>
              Progress is tracked through experience points, level advancement,
              and detailed statistics. Students can view their study history,
              accuracy rates, and mastery progress to see how their skills
              develop over time.
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
                  Web Browser
                </h3>
                <p className="text-[#7f8c8d] leading-relaxed">
                  Access the platform from any desktop or mobile web browser. No
                  installation required. The app works on desktop computers,
                  tablets, and smartphones with a modern web browser. An internet
                  connection is required for initial access, with some practice
                  features available offline once loaded.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Disclaimer */}
        <section className="mb-16">
          <div className="bg-[#f8f9fa] border-l-4 border-[#ff6b35] p-6 rounded-r-xl">
            <p className="text-sm text-[#7f8c8d] italic leading-relaxed">
              Japanese Learning Path is an independent educational project and is
              not affiliated with, endorsed by, or connected to the official
              Japanese Language Proficiency Test (JLPT), the Japan Educational
              Exchanges and Services (JEES), or the Japan Foundation. This
              platform is a supplementary study tool and does not guarantee test
              results or language proficiency outcomes.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">
            Getting Started
          </h2>
          <p className="text-lg text-[#7f8c8d] mb-8">
            Visit the platform to begin practicing Japanese characters,
            vocabulary, and grammar at your own pace.
          </p>
          <a
            href="https://japanese.sunlit-path.com"
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
