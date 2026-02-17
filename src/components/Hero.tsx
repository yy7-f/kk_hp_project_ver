export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 px-4 bg-gradient-soft overflow-hidden"
    >
      {/* Floating background element */}
      <div
        className="absolute w-96 h-96 rounded-full bg-[#ff6b35]/10 -z-10 animate-float"
        style={{
          top: "10%",
          right: "10%",
        }}
      ></div>

      <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text">SunlitPath</span> apps for learning,
            focus, and life direction
          </h1>
          <p className="text-lg md:text-xl text-[#7f8c8d] mb-8 leading-relaxed">
            A personal project building web and mobile apps for education,
            productivity, and wellbeing — designed to help people build habits,
            gain clarity, and turn goals into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3.5 bg-gradient-sunset text-white font-semibold rounded-xl no-underline shadow-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-hover"
            >
              Explore Apps
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-white text-[#ff6b35] font-semibold rounded-xl no-underline border-2 border-[#ff6b35] transition-all duration-300 hover:bg-[#ff6b35] hover:text-white hover:-translate-y-1"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Visual Element */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <i
              className="fas fa-sun text-[12rem] md:text-[15rem] animate-rotate hover:animate-rotate-fast transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd23f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(255, 107, 53, 0.3))",
              }}
            ></i>
          </div>
        </div>
      </div>
    </section>
  );
}
