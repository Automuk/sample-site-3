"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=85&auto=format&fit=crop";

function RevealWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="word-clip">
      <motion.span
        className="inline-block"
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.span>
    </span>
  );
}

const headingWords = ["Justice,", "Integrity,", "Excellence."];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-end noise"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src={HERO_IMG}
          alt="Law firm"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/70 to-[#1E293B]/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="block w-10 h-px bg-[#C9A227]" />
          <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase font-medium">
            Established 1987 · New York
          </span>
        </motion.div>

        {/* Heading */}
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.05] text-[#F8F5F0] mb-8 flex flex-wrap gap-x-5">
          {headingWords.map((word, i) => (
            <RevealWord key={word} word={word} delay={0.4 + i * 0.14} />
          ))}
        </h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[#F8F5F0]/70 text-lg max-w-xl leading-relaxed mb-12"
        >
          Blackstone Legal Group is a premier full-service law firm dedicated to
          delivering strategic, results-driven legal representation across every
          practice area.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#C9A227] hover:bg-[#e4b93a] text-[#1E293B] font-semibold text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300"
          >
            Book a Consultation
          </button>
          <button
            onClick={() => document.querySelector("#practice-areas")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-[#F8F5F0]/40 hover:border-[#F8F5F0] text-[#F8F5F0] text-sm tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300"
          >
            Our Practice Areas
          </button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute right-12 bottom-0 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-[#F8F5F0]/40 text-[10px] tracking-[0.4em] uppercase -rotate-90 mb-4">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-[#C9A227] to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Bottom stat bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#F8F5F0]/10 hidden lg:grid grid-cols-4"
      >
        {[
          { num: "35+", label: "Years of Experience" },
          { num: "98%", label: "Case Success Rate" },
          { num: "1,200+", label: "Cases Won" },
          { num: "12", label: "Practice Areas" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="px-8 py-5 border-r border-[#F8F5F0]/10 last:border-r-0"
          >
            <p className="font-display text-[#C9A227] text-2xl font-bold">{stat.num}</p>
            <p className="text-[#F8F5F0]/50 text-xs tracking-widest uppercase mt-0.5">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
