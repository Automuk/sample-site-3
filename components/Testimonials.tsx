"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Blackstone didn't just win our case — they dismantled the opposition's entire theory in under a week. The level of preparation and intellectual rigor was extraordinary.",
    name: "Richard Alderton",
    title: "CEO, Alderton Capital Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote:
      "Victoria Harrington saved our company from a catastrophic class action. Her strategic instincts and composure under pressure were unlike anything I've seen.",
    name: "Sarah Kim",
    title: "General Counsel, TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote:
      "Marcus structured our entire global patent portfolio in eight months. Competitors tried to challenge us twice — both attempts were dismissed.",
    name: "Dr. Amir Patel",
    title: "Founder, NovaSemi Technologies",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&auto=format&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-[#F8F5F0] py-28 overflow-hidden relative">
      {/* Decorative */}
      <span className="absolute left-0 top-1/2 -translate-y-1/2 font-display text-[20vw] font-bold text-[#1E293B]/[0.03] select-none leading-none pointer-events-none whitespace-nowrap">
        TRUST
      </span>

      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16 justify-center"
        >
          <span className="block w-10 h-px bg-[#C9A227]" />
          <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase font-medium">
            Client Voices
          </span>
          <span className="block w-10 h-px bg-[#C9A227]" />
        </motion.div>

        {/* Quote display */}
        <div className="relative min-h-[280px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              {/* Large quote mark */}
              <span className="font-display text-8xl text-[#C9A227]/20 leading-none block -mb-8">
                "
              </span>
              <blockquote className="font-display text-[clamp(1.2rem,2.2vw,1.7rem)] text-[#1E293B] leading-relaxed font-medium max-w-3xl mx-auto mb-10">
                {testimonials[current].quote}
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9A227] flex-shrink-0">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[#1E293B] font-semibold text-sm">
                    {testimonials[current].name}
                  </p>
                  <p className="text-[#1E293B]/50 text-xs">{testimonials[current].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 ${
                i === current
                  ? "w-8 h-1 bg-[#C9A227]"
                  : "w-4 h-1 bg-[#1E293B]/20 hover:bg-[#1E293B]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
