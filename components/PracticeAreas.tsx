"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faGavel,
  faCity,
  faUsers,
  faLightbulb,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const practices: { number: string; title: string; description: string; icon: IconDefinition }[] = [
  {
    number: "01",
    title: "Corporate Law",
    description:
      "From mergers and acquisitions to corporate governance, we counsel Fortune 500 companies and emerging businesses alike through every stage of their legal lifecycle.",
    icon: faBuilding,
  },
  {
    number: "02",
    title: "Civil Litigation",
    description:
      "Our trial lawyers are seasoned veterans of the courtroom, delivering aggressive, strategic representation in complex commercial and civil disputes.",
    icon: faGavel,
  },
  {
    number: "03",
    title: "Real Estate",
    description:
      "We navigate the full spectrum of real estate transactions — from high-rise acquisitions to residential closings — with precision and speed.",
    icon: faCity,
  },
  {
    number: "04",
    title: "Family Law",
    description:
      "Compassionate yet resolute advocacy for divorce, custody, adoption, and estate matters, protecting what matters most to our clients.",
    icon: faUsers,
  },
  {
    number: "05",
    title: "Intellectual Property",
    description:
      "Protecting innovations through strategic patent prosecution, trademark registration, and IP litigation across domestic and international markets.",
    icon: faLightbulb,
  },
  {
    number: "06",
    title: "Criminal Defense",
    description:
      "Uncompromising defense at every level — from white-collar investigations to federal indictments — with discretion and relentless preparation.",
    icon: faShield,
  },
];

function PracticeCard({ practice, index }: { practice: (typeof practices)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" }}
      animate={inView ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border border-[#1E293B]/10 bg-[#F8F5F0] hover:bg-[#1E293B] p-8 transition-all duration-500 cursor-default"
    >
      {/* Number */}
      <span className="text-[#C9A227]/30 group-hover:text-[#C9A227]/50 font-display text-6xl font-bold absolute top-6 right-6 transition-colors duration-500 select-none">
        {practice.number}
      </span>

      {/* Icon */}
      <div className="mb-6 w-10 h-10 flex items-center justify-center border border-[#C9A227]/40 group-hover:border-[#C9A227] group-hover:bg-[#C9A227]/10 transition-all duration-500">
        <FontAwesomeIcon
          icon={practice.icon}
          className="text-[#C9A227] w-4 h-4"
        />
      </div>

      {/* Gold top accent */}
      <div className="w-8 h-0.5 bg-[#C9A227] mb-6" />

      <h3 className="font-display text-2xl font-semibold text-[#1E293B] group-hover:text-[#F8F5F0] transition-colors duration-500 mb-4 leading-tight">
        {practice.title}
      </h3>
      <p className="text-[#1E293B]/60 group-hover:text-[#F8F5F0]/70 text-sm leading-relaxed transition-colors duration-500">
        {practice.description}
      </p>

      {/* Arrow */}
      <div className="mt-8 flex items-center gap-2 text-[#C9A227] text-xs tracking-[0.2em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        Learn More
        <span className="text-base">→</span>
      </div>
    </motion.div>
  );
}

export default function PracticeAreas() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="practice-areas" className="bg-[#F8F5F0] py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div ref={titleRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="block w-10 h-px bg-[#C9A227]" />
            <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase font-medium">
              What We Do
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              animate={titleInView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[#1E293B] max-w-2xl leading-[1.1]"
            >
              Comprehensive Legal Expertise
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#1E293B]/60 text-lg mt-6 max-w-xl leading-relaxed"
          >
            Our multidisciplinary team covers every facet of law with the
            depth, breadth, and sophistication that complex matters demand.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E293B]/10">
          {practices.map((p, i) => (
            <PracticeCard key={p.number} practice={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
