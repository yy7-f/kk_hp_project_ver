import Link from "next/link";

export default function MathPage() {
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
              <i className="fas fa-calculator text-white text-2xl"></i>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50]">
                Math Quest
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
              Math Quest is a browser-based math learning game where students
              practice arithmetic, fractions, and algebra by solving problems to
              defeat monsters. Players progress through 16 zones, each
              introducing different operations and challenges. The game combines
              problem-solving practice with a collection system, allowing
              learners to build skills while tracking their progress.
            </p>
            <p>
              All gameplay happens in the browser. No registration or account is
              required—progress is saved locally.
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
                  Elementary and middle school students practicing core math
                  skills
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Parents looking for supplemental math practice tools for their
                  children
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Teachers seeking interactive resources to reinforce classroom
                  concepts
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Anyone wanting to improve speed and accuracy in arithmetic and
                  algebra
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
                      16 Progressive Zones
                    </strong>{" "}
                    — Start with basic addition in the Meadow and work toward
                    algebraic equations in later zones
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      100+ Collectible Monsters
                    </strong>{" "}
                    — Encounter creatures with varying rarity levels as you
                    advance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      Interactive Math Lessons
                    </strong>{" "}
                    — Theory-based lessons covering specific topics with
                    examples and practice problems
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">Practice Mode</strong> —
                    Focused drills on individual operations without the pressure
                    of gameplay
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">Mistake Review</strong> —
                    Review past errors to identify patterns and improve
                    understanding
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      Progress Tracking
                    </strong>{" "}
                    — Monitor XP, level, combo streaks, and problem accuracy
                    over time
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">Topics Covered</strong> —
                    Addition, subtraction, multiplication, division, fractions,
                    decimals, percentages, algebra, and more
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
              Players typically start in the first zone and solve math problems
              to defeat monsters. Correct answers award experience points (XP)
              and advance the player's level. As levels increase, new zones
              unlock with different operations and higher difficulty.
            </p>
            <p>
              The Practice Mode allows focused work on a single operation (e.g.,
              multiplication) without the game structure. Math Lessons provide
              explanations and worked examples for learners who want to review
              theory before practicing.
            </p>
            <p>
              Progress is saved automatically in the browser, so users can return
              and continue where they left off.
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
                  Browser-based application accessible on any modern web browser
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">
            Start Practicing
          </h2>
          <p className="text-lg text-[#7f8c8d] mb-8">
            Start practicing math by solving problems and collecting monsters.
          </p>
          <a
            href="https://math.sunlit-path.com/"
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
