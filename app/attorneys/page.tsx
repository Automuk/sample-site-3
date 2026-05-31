"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faScaleBalanced, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { attorneys } from "@/lib/attorneys";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Card({ attorney, index }: { attorney: (typeof attorneys)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden"
    >
      <Link href={`/attorneys/${attorney.slug}`} className="block">
        <div className="relative overflow-hidden aspect-[3/4]">
          <Image
            src={attorney.image}
            alt={attorney.name}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/20 to-transparent z-[1]" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#1E293B]/90 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-[3]">
            <p className="text-[#F8F5F0]/75 text-sm leading-relaxed mb-5">{attorney.bio}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faScaleBalanced} className="text-[#C9A227] w-3 h-3" />
                <span className="text-[#C9A227] text-xs tracking-widest uppercase">Bar: {attorney.bar}</span>
              </div>
              <div className="flex items-center gap-2 text-[#C9A227] text-xs tracking-widest uppercase">
                View Profile
                <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Name block */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-[2]">
            <p className="text-[#C9A227] text-xs tracking-[0.3em] uppercase mb-1">{attorney.specialty}</p>
            <h3 className="font-display text-[#F8F5F0] text-xl font-semibold">{attorney.name}</h3>
            <p className="text-[#F8F5F0]/60 text-sm mt-0.5">{attorney.title}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function AttorneysPage() {
  const heroRef = useRef(null);
  const inView = useInView(heroRef, { once: true });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1E293B] pt-40 pb-20 relative overflow-hidden">
        <span className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[18vw] font-bold text-[#F8F5F0]/[0.025] select-none leading-none pointer-events-none whitespace-nowrap">
          COUNSEL
        </span>
        <div ref={heroRef} className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="block w-10 h-px bg-[#C9A227]" />
            <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase font-medium">Our Team</span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(3rem,7vw,6rem)] font-bold text-[#F8F5F0] leading-[1.05]"
            >
              Our Attorneys
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-[#F8F5F0]/55 text-lg max-w-xl leading-relaxed"
          >
            Every attorney at Blackstone is hand-selected for both their
            intellectual rigor and their unwavering commitment to client outcomes.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#1E293B] pb-28 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attorneys.map((a, i) => (
              <Card key={a.slug} attorney={a} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
