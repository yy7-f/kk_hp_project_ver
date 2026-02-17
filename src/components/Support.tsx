export default function Support() {
  return (
    <section id="support" className="py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
          Support the Project
        </h2>
        <p className="text-lg text-[#7f8c8d] mb-12 max-w-2xl mx-auto">
          Feedback and early users help shape what comes next.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-sunset text-white font-semibold rounded-xl no-underline shadow-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
          >
            <i className="fas fa-rocket"></i>
            Explore Apps
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#ff6b35] font-semibold rounded-xl no-underline border-2 border-[#ff6b35] transition-all duration-300 hover:bg-[#ff6b35] hover:text-white hover:-translate-y-1"
          >
            <i className="fas fa-comment"></i>
            Give Feedback
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#ff6b35] font-semibold rounded-xl no-underline border-2 border-[#ff6b35] transition-all duration-300 hover:bg-[#ff6b35] hover:text-white hover:-translate-y-1"
          >
            <i className="fas fa-handshake"></i>
            Collaborate
          </a>
        </div>
      </div>
    </section>
  );
}
