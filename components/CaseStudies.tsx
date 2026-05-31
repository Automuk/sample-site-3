"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { caseStudies as cases } from "@/lib/caseStudies";

export default function CaseStudies() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  return (
    <section id="case-studies" className="bg-[#F8F5F0] py-28 lg:py-40 !pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={titleRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="block w-10 h-px bg-[#C9A227]" />
            <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase font-medium">
              Case Studies
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[#1E293B] leading-[1.1]"
            >
              Victories That Define Us
            </motion.h2>
          </div>
        </div>

        {/* Case selector + display */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Tabs */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-0 border-b lg:border-b-0 lg:border-r border-[#1E293B]/10">
            {cases.map((c, i) => (
              <motion.button
                key={c.id}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className={`text-left px-6 py-5 flex-shrink-0 lg:flex-shrink border-r lg:border-r-0 lg:border-b border-[#1E293B]/10 last:border-0 transition-all duration-300 group ${
                  active === i
                    ? "bg-[#1E293B]"
                    : "bg-transparent hover:bg-[#1E293B]/5"
                }`}
              >
                <span
                  className={`text-xs tracking-widest uppercase block mb-1 transition-colors duration-300 ${
                    active === i ? "text-[#C9A227]" : "text-[#1E293B]/40 group-hover:text-[#C9A227]"
                  }`}
                >
                  {c.id} — {c.category}
                </span>
                <span
                  className={`font-display font-semibold text-base leading-snug transition-colors duration-300 ${
                    active === i ? "text-[#F8F5F0]" : "text-[#1E293B] group-hover:text-[#1E293B]"
                  }`}
                >
                  {c.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Active case display */}
          <div className="lg:col-span-3 relative overflow-hidden min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={cases[active].image}
                    alt={cases[active].title}
                    fill
                    sizes="(max-width:1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <span className="bg-[#C9A227] text-[#1E293B] text-xs font-semibold tracking-widest uppercase px-3 py-1">
                      {cases[active].outcome}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="bg-[#1E293B] p-8 flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cases[active].tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#F8F5F0]/20 text-[#F8F5F0]/50 text-[10px] tracking-widest uppercase px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-[#F8F5F0] text-2xl font-semibold mb-4">
                    {cases[active].title}
                  </h3>
                  <p className="text-[#F8F5F0]/60 text-sm leading-relaxed mb-6">
                    {cases[active].description}
                  </p>
                  <Link
                    href={`/case-studies/${cases[active].slug}`}
                    className="inline-flex items-center gap-2 text-[#C9A227] text-xs tracking-[0.2em] uppercase font-medium group hover:gap-3 transition-all duration-300"
                  >
                    Read Full Case Study
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
