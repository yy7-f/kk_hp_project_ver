"use client";

import { useEffect, useRef } from "react";

const visionCards = [
  {
    icon: "fa-graduation-cap",
    title: "Learn Skills",
    description:
      "Bite-sized practice for Japanese, math, typing, and coding basics — designed for steady daily progress.",
  },
  {
    icon: "fa-bolt",
    title: "Build Momentum",
    description:
      "Simple productivity systems for focus, habits, and execution that make progress sustainable.",
  },
  {
    icon: "fa-heart",
    title: "Strengthen Wellbeing",
    description:
      "Practical tools supporting routine awareness through calm, movement, and consistency.",
  },
  {
    icon: "fa-compass",
    title: "Find Direction",
    description:
      "Clear vision and small steps to turn goals and long-term aspirations into reality.",
  },
];

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-up");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-[#7f8c8d] max-w-2xl mx-auto">
            Four pillars guiding everything we build
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {visionCards.map((card, index) => (
            <div
              key={index}
              className="fade-in-up bg-white p-8 rounded-xl border border-[#e9ecef] shadow-light transition-all duration-300 hover:-translate-y-2 hover:shadow-hover group"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-sunset flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:rotate-[10deg] group-hover:scale-110">
                <i className={`fas ${card.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-3 text-center">
                {card.title}
              </h3>
              <p className="text-[#7f8c8d] text-center leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* North Star Section */}
        <div className="border-t border-[#e9ecef] pt-12 text-center">
          <p className="text-sm uppercase tracking-wider text-[#ff6b35] font-semibold mb-4">
            Our North Star
          </p>
          <p className="text-xl md:text-2xl italic text-[#2c3e50] max-w-3xl mx-auto leading-relaxed">
            "Like the Sun, illuminating and energizing all existence — spreading
            smiles and happiness to every being and beyond."
          </p>
        </div>
      </div>
    </section>
  );
}
