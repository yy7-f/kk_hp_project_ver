"use client";

import { useEffect, useRef } from "react";

const values = [
  { icon: "fa-compass", label: "Clarity" },
  { icon: "fa-calendar-check", label: "Consistency" },
  { icon: "fa-hand-holding-heart", label: "Kindness" },
];

export default function Pledge() {
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
              }, index * 200);
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
      id="pledge"
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-soft relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Quote Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-0 text-6xl md:text-8xl text-[#ff6b35]/20 hidden md:block">
            "
          </div>
          <div className="absolute bottom-0 right-0 text-6xl md:text-8xl text-[#ff6b35]/20 hidden md:block">
            "
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl italic text-[#2c3e50] font-light max-w-3xl mx-auto leading-relaxed">
            Even a small step can light the path.
          </p>
        </div>

        {/* Values Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="fade-in-up bg-white p-8 rounded-xl shadow-medium text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-hover min-w-[200px]"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-sunset flex items-center justify-center mb-4 mx-auto">
                <i className={`fas ${value.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#2c3e50]">
                {value.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
