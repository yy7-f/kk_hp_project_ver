import Link from "next/link";

export default function TypingPage() {
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
              <i className="fas fa-keyboard text-white text-2xl"></i>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50]">
                Typing Quest
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
              Typing Quest is a free web-based typing practice application that
              helps users improve typing speed and accuracy through structured
              practice and interactive challenges. The application combines
              traditional typing exercises with a game-like battle system where
              users defeat monsters by typing sentences correctly.
            </p>
            <p>
              All data is stored locally on your device. No account or
              registration is required. The application works offline once
              loaded, making it accessible for practice anytime.
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
                  Children learning touch typing for the first time
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Students working to improve typing speed and accuracy
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Adults practicing English typing skills
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Teachers managing classroom typing practice sessions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Anyone seeking structured typing practice with progress
                  tracking
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
                    <strong className="text-[#2c3e50]">Practice Mode</strong> –
                    Type sentences at adjustable difficulty levels (1-5) with
                    customizable length and timer settings. Complete sessions of
                    10 questions to track improvement.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">Battle Mode</strong> –
                    Defeat monsters across 8 stages by typing accurately and
                    quickly. Earn experience points, level up, and unlock new
                    stages as you progress.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">Typing Lessons</strong> –
                    Learn touch typing fundamentals including home row
                    positioning, finger placement, speed techniques, and accuracy
                    improvement strategies.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      Progress Tracking
                    </strong>{" "}
                    – View detailed statistics on typing speed (measured in
                    characters per minute), accuracy percentage, error counts,
                    and session history.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      Achievement System
                    </strong>{" "}
                    – Unlock achievements by reaching milestones in accuracy,
                    speed, battle completion, practice streaks, and monster
                    collection.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">Multiple Profiles</strong>{" "}
                    – Create separate profiles for different users or switch
                    between personal and classroom profiles. Each profile
                    maintains independent progress.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      Monster Collection
                    </strong>{" "}
                    – Track monsters encountered and unlocked through battle
                    victories.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">Classroom Mode</strong> –
                    Teachers can manage multiple student profiles and monitor
                    progress.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-[#2c3e50]">
                      Offline Capability
                    </strong>{" "}
                    – Practice without an internet connection after the initial
                    page load.
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
              Users begin with Practice Mode to build basic typing skills at
              comfortable difficulty levels. The application provides immediate
              visual feedback showing correct and incorrect keystrokes as users
              type each sentence.
            </p>
            <p>
              In Battle Mode, typing performance directly affects battle
              outcomes. Higher typing speed and accuracy result in stronger
              attacks against monsters. Users earn experience points, level up
              their character stats (HP, Attack), and unlock progressively
              challenging stages.
            </p>
            <p>
              The Lessons section provides reference material covering touch
              typing technique, proper hand positioning, and strategies for
              improving both speed and accuracy. Users can review these lessons
              at any time between practice sessions.
            </p>
            <p>
              Daily practice builds streak counters tracked in the achievement
              system. Progress statistics show improvement trends over time,
              including average speed, accuracy rates, and error patterns.
            </p>
          </div>
        </section>

        {/* Platform Availability */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">
            Platform Availability
          </h2>
          <div className="space-y-4">
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
                    Access through any modern web browser (Chrome, Firefox,
                    Safari, Edge)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-soft p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-mobile-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">
                    Progressive Web App
                  </h3>
                  <p className="text-[#7f8c8d] leading-relaxed">
                    Can be installed on desktop and mobile devices for offline
                    use and app-like experience
                  </p>
                </div>
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
            Start practicing your typing skills today with Typing Quest.
          </p>
          <a
            href="https://typing.sunlit-path.com/"
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
