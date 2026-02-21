"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const featuredApps = [
  {
    slug: "japanese",
    title: "Japanese Learning Path",
    description:
      "Structured flashcard practice through hiragana, katakana, and kanji from JLPT N5 to N1.",
    icon: "fa-language",
    categories: ["Education"],
  },
  {
    slug: "math",
    title: "Math Quest",
    description:
      "Problem-solving challenges across arithmetic, fractions, and algebra, with 16 zones to progress through.",
    icon: "fa-calculator",
    categories: ["Education"],
  },
  {
    slug: "typing",
    title: "Typing Quest",
    description:
      "Build typing speed and accuracy using real passages from books, speeches, philosophy, and film.",
    icon: "fa-keyboard",
    categories: ["Education", "Productivity & Focus"],
  },
  {
    slug: "meditation",
    title: "MindPeace",
    description:
      "Guided meditation from 1 to 30 minutes, with multiple techniques for all levels of experience.",
    icon: "fa-spa",
    categories: ["Wellbeing & Reflection", "Productivity & Focus"],
  },
];

const services = [
  {
    icon: "fa-seedling",
    title: "Education",
    features: [
      "Japanese learning (lessons + practice)",
      "Math practice (daily drills)",
      "Typing practice (speed + accuracy)",
      "Coding basics (Scratch, Python) — pilot workshops",
    ],
  },
  {
    icon: "fa-layer-group",
    title: "Productivity & Focus",
    features: [
      "Focus-first routines and habit systems",
      "Planning tools for clear vision and goals",
      "Actionable steps for long-term growth",
    ],
  },
  {
    icon: "fa-spa",
    title: "Wellbeing & Reflection",
    features: [
      "Meditation and calm training tools",
      "Simple movement and fitness routines",
      "Daily practices that support balance and energy",
    ],
    disclaimer: true,
  },
];

export default function Services() {
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
              }, index * 150);
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
      id="services"
      ref={sectionRef}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
            Our Apps
          </h2>
          <p className="text-lg text-[#7f8c8d] max-w-2xl mx-auto">
            Three categories of tools designed to support learning, focus, and
            daily wellbeing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in-up bg-[#f8f9fa] p-8 rounded-xl transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-hover group"
            >
              <div className="w-[70px] h-[70px] rounded-full bg-gradient-sunset flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-medium">
                <i className={`fas ${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-semibold text-[#2c3e50] mb-4">
                {service.title}
              </h3>
              <ul className="space-y-3 list-none p-0">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-[#7f8c8d] pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-[#ff6b35] before:font-bold"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              {service.disclaimer && (
                <p className="mt-6 text-xs text-[#7f8c8d] italic border-t border-[#e9ecef] pt-4">
                  These tools are intended for general wellbeing and self-reflection
                  and do not replace professional medical or psychological care.
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Featured Apps */}
        <div className="mt-16 pt-12 border-t border-[#e9ecef]">
          <h3 className="text-xs font-semibold text-[#7f8c8d] uppercase tracking-widest mb-6">
            Featured Apps
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredApps.map((app, index) => (
              <Link
                key={index}
                href={`/apps/${app.slug}`}
                className="fade-in-up group block bg-[#f8f9fa] rounded-xl p-5 no-underline transition-all duration-200 hover:bg-white hover:shadow-medium hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-sunset flex items-center justify-center mb-4">
                  <i className={`fas ${app.icon} text-white text-sm`}></i>
                </div>
                <h4 className="text-[15px] font-semibold text-[#2c3e50] mb-1 group-hover:text-[#ff6b35] transition-colors leading-snug">
                  {app.title}
                </h4>
                <p className="text-[10px] font-semibold text-[#ff6b35] uppercase tracking-wider mb-2">
                  {app.categories.join(" · ")}
                </p>
                <p className="text-xs text-[#7f8c8d] leading-relaxed">
                  {app.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Apps Button */}
        <div className="text-center mt-12">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-sunset text-white text-lg font-semibold rounded-xl no-underline shadow-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
          >
            View All Apps
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
