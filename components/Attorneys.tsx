"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { attorneys } from "@/lib/attorneys";

function AttorneyCard({ attorney, index }: { attorney: (typeof attorneys)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <Image
          src={attorney.image}
          alt={attorney.name}
          fill
          sizes="(max-width:768px) 100vw, 25vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/20 to-transparent z-[1]" />

        {/* Hover bio overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute inset-0 bg-[#1E293B]/90 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-[3]"
        >
          <p className="text-[#F8F5F0]/80 text-sm leading-relaxed mb-4">{attorney.bio}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faScaleBalanced} className="text-[#C9A227] w-3 h-3" />
              <span className="text-[#C9A227] text-xs tracking-widest uppercase">Bar: {attorney.bar}</span>
            </div>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-7 h-7 border border-[#F8F5F0]/20 hover:border-[#C9A227] flex items-center justify-center text-[#F8F5F0]/50 hover:text-[#C9A227] transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Name on image */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-[2]">
          <p className="text-[#C9A227] text-xs tracking-[0.3em] uppercase mb-1">{attorney.specialty}</p>
          <h3 className="font-display text-[#F8F5F0] text-xl font-semibold">{attorney.name}</h3>
          <p className="text-[#F8F5F0]/60 text-sm mt-0.5">{attorney.title}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Attorneys() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="attorneys" className="bg-[#1E293B] py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={titleRef} className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="block w-10 h-px bg-[#C9A227]" />
              <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase font-medium">
                Our Team
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                animate={inView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[#F8F5F0] leading-[1.1]"
              >
                The Counsel You Deserve
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#F8F5F0]/50 text-base max-w-sm leading-relaxed lg:text-right"
          >
            Every attorney at Blackstone is hand-selected for both their
            intellectual rigor and their unwavering commitment to client outcomes.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attorneys.slice(0, 4).map((a, i) => (
            <AttorneyCard key={a.slug} attorney={a} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <Link href="/attorneys" className="border border-[#F8F5F0]/20 hover:border-[#C9A227] text-[#F8F5F0]/70 hover:text-[#C9A227] text-xs tracking-[0.25em] uppercase px-10 py-3.5 transition-all duration-300">
            View All Attorneys
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
