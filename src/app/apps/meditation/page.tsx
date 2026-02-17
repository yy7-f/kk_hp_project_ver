import Link from "next/link";

export default function MeditationPage() {
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
              <i className="fas fa-spa text-white text-2xl"></i>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50]">
                MindPeace: Meditation
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-[#ff6b35] border border-[#ff6b35]">
              Live
            </span>
            <span className="px-3 py-1 bg-white rounded-full text-sm text-[#7f8c8d] border border-[#e9ecef]">
              <i className="fab fa-apple mr-1"></i> iOS
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
              MindPeace is a meditation practice app that helps users develop and
              maintain a regular mindfulness routine. The app provides structured
              sessions across various meditation techniques, from simple breathing
              exercises to more focused practices.
            </p>
            <p>
              Users can explore different approaches to meditation, track their
              practice history, and progress through increasingly longer sessions
              as they build consistency in their daily routine.
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
                  People new to meditation looking for guided practice sessions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Those with some experience who want to explore different
                  meditation techniques
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Anyone interested in building a regular mindfulness practice
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#f8f9fa] rounded-lg">
              <i className="fas fa-check-circle text-[#ff6b35] mt-1"></i>
              <div>
                <p className="text-[#7f8c8d]">
                  Users who prefer structured progression through meditation
                  exercises
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
                    Guided meditation sessions ranging from 1 to 30 minutes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    Multiple meditation styles including breathing exercises, body
                    awareness, visualization, and observation practices
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    Four progression levels (Beginner, Intermediate, Advanced,
                    Expert) with sessions suited to each stage
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    Practice tracking that records completed sessions over time
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    Progress indicators showing session count and practice
                    consistency
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    Emotion reflection feature to note feelings before practice
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    Guest mode for trying the app without creating an account
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff6b35] mt-1 font-bold">•</span>
                  <span>
                    Integration with Apple Health to record mindfulness sessions
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
              Users typically begin with shorter sessions (1-5 minutes) and
              gradually work up to longer practices. The app organizes meditation
              exercises by technique and duration, allowing users to choose what
              fits their schedule and interest on any given day.
            </p>
            <p>
              Completed sessions are logged automatically, and users can view
              their practice history through a calendar and statistics display. A
              level system provides optional structure for those who enjoy
              tracking milestones.
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
                <i className="fab fa-apple text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">
                  iOS
                </h3>
                <p className="text-[#7f8c8d] leading-relaxed">
                  Available for iPhone and iPad
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-16">
          <div className="bg-[#f8f9fa] border-l-4 border-[#ff6b35] p-6 rounded-r-xl">
            <p className="text-sm text-[#7f8c8d] italic leading-relaxed">
              These tools are intended for general wellbeing and self-reflection
              and do not replace professional medical or psychological care.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">
            Start Building Your Practice
          </h2>
          <p className="text-lg text-[#7f8c8d] mb-8">
            Start building your meditation practice today.
          </p>
          <a
            href="https://apps.apple.com/us/app/mindpeace-meditation/id6756659671"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-sunset text-white text-lg font-semibold rounded-xl no-underline shadow-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
          >
            <i className="fab fa-apple text-2xl"></i>
            Download on the App Store
          </a>
        </section>
      </main>
    </div>
  );
}
