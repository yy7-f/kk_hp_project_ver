"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Animate counter
            const target = 2025;
            const duration = 1500;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 16);

            setHasAnimated(true);

            return () => clearInterval(timer);
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
  }, [hasAnimated]);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-[#f8f9fa]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
            About SunlitPath
          </h2>
          <p className="text-lg text-[#7f8c8d] max-w-2xl mx-auto">
            Practical tools for learning, focus, and personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Company Info */}
          <div className="bg-white p-8 rounded-xl shadow-medium">
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <p className="text-sm text-[#7f8c8d] uppercase tracking-wide">
                    Project started
                  </p>
                  <p className="text-2xl font-bold text-[#2c3e50]">2025</p>
                </div>
                <div>
                  <p className="text-sm text-[#7f8c8d] uppercase tracking-wide">
                    Created by
                  </p>
                  <p className="text-2xl font-bold text-[#2c3e50]">
                    Yo Fujimoto
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#7f8c8d] uppercase tracking-wide">
                    Based in
                  </p>
                  <p className="text-2xl font-bold text-[#2c3e50]">Tokyo</p>
                </div>
              </div>
            </div>

            <p className="text-[#7f8c8d] leading-relaxed">
              SunlitPath is an educational project building practical apps for
              language learning, math practice, typing skills, and mindfulness
              training. Each tool emphasizes daily practice and steady progress,
              supporting students, self-directed learners, and educators seeking
              supplementary learning resources.
            </p>

            <p className="text-[#7f8c8d] leading-relaxed mt-4">
              The project explores effective learning approaches through web and
              mobile platforms. Content is structured around established
              educational frameworks, such as JLPT levels for Japanese study and
              progressive difficulty for math practice. In parallel, hands-on
              coding workshops using Scratch and Python have been piloted to
              better understand teaching methods and learner needs, helping
              inform the design of accessible and practical learning tools.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-light text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{count}</div>
              <p className="text-sm text-[#7f8c8d] uppercase tracking-wide">
                Year started
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-light text-center">
              <div className="text-4xl font-bold gradient-text mb-2">∞</div>
              <p className="text-sm text-[#7f8c8d] uppercase tracking-wide">
                Iterations
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-light text-center">
              <div className="text-4xl font-bold gradient-text mb-2">🌍</div>
              <p className="text-sm text-[#7f8c8d] uppercase tracking-wide">
                Global Perspective
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
