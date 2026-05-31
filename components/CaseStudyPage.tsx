"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/caseStudies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faTag,
  faUser,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { caseStudies } from "@/lib/caseStudies";

function RevealBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CaseStudyPage({ caseStudy: cs }: { caseStudy: CaseStudy }) {
  const currentIndex = caseStudies.findIndex((c) => c.slug === cs.slug);
  const prev = caseStudies[currentIndex - 1];
  const next = caseStudies[currentIndex + 1];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src={cs.heroImage}
          alt={cs.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/60 to-[#1E293B]/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6 text-[#F8F5F0]/50 text-xs tracking-widest uppercase"
          >
            <Link href="/#case-studies" className="hover:text-[#C9A227] transition-colors duration-200 flex items-center gap-2">
              <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" />
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-[#C9A227]">{cs.category}</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(2.2rem,5.5vw,5rem)] font-bold text-[#F8F5F0] leading-[1.05] max-w-4xl"
            >
              {cs.title}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-[#F8F5F0]/60 text-lg mt-4 max-w-2xl"
          >
            {cs.subtitle}
          </motion.p>

          {/* Outcome badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 inline-flex items-center gap-3"
          >
            <span className="bg-[#C9A227] text-[#1E293B] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2">
              {cs.outcome}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Meta bar */}
      <div className="bg-[#1E293B] border-b border-[#F8F5F0]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: faUser, label: "Lead Attorney", value: cs.attorney },
            { icon: faTag, label: "Practice Area", value: cs.category },
            { icon: faCalendar, label: "Year", value: cs.year },
            { icon: faClock, label: "Duration", value: cs.duration },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <FontAwesomeIcon icon={item.icon} className="text-[#C9A227] w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#F8F5F0]/40 text-[10px] tracking-[0.3em] uppercase mb-0.5">{item.label}</p>
                <p className="text-[#F8F5F0] text-sm font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key stats */}
      <div className="bg-[#C9A227]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {cs.keyStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-[#1E293B] text-4xl lg:text-5xl font-bold leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-[#1E293B]/60 text-[10px] tracking-[0.3em] uppercase font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Body content */}
      <article className="bg-[#F8F5F0] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main narrative */}
            <div className="lg:col-span-8 space-y-16">
              {/* Challenge */}
              <RevealBlock delay={0.1}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-px bg-[#C9A227]" />
                  <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase font-medium">The Challenge</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[#1E293B] mb-6 leading-snug">
                  What Was at Stake
                </h2>
                <p className="text-[#1E293B]/70 text-base lg:text-lg leading-relaxed">
                  {cs.challenge}
                </p>
              </RevealBlock>

              {/* Divider */}
              <div className="w-full h-px bg-[#1E293B]/10" />

              {/* Strategy */}
              <RevealBlock delay={0.15}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-px bg-[#C9A227]" />
                  <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase font-medium">Our Strategy</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[#1E293B] mb-6 leading-snug">
                  How We Approached It
                </h2>
                <p className="text-[#1E293B]/70 text-base lg:text-lg leading-relaxed">
                  {cs.strategy}
                </p>
              </RevealBlock>

              {/* Image break */}
              <RevealBlock delay={0.2}>
                <div className="relative aspect-[16/7] overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1E293B]/10" />
                </div>
              </RevealBlock>

              {/* Result */}
              <RevealBlock delay={0.1}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-px bg-[#C9A227]" />
                  <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase font-medium">The Result</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[#1E293B] mb-6 leading-snug">
                  What We Achieved
                </h2>
                <p className="text-[#1E293B]/70 text-base lg:text-lg leading-relaxed">
                  {cs.result}
                </p>
              </RevealBlock>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Attorney card */}
              <RevealBlock delay={0.3} className="bg-[#1E293B] p-8 sticky top-24">
                <p className="text-[#C9A227] text-[10px] tracking-[0.35em] uppercase mb-4">Lead Counsel</p>
                <h3 className="font-display text-[#F8F5F0] text-2xl font-semibold mb-1">{cs.attorney}</h3>
                <p className="text-[#F8F5F0]/50 text-sm mb-6">{cs.attorneyTitle}</p>
                <div className="h-px bg-[#F8F5F0]/10 mb-6" />
                <p className="text-[#C9A227] text-[10px] tracking-[0.35em] uppercase mb-3">Related Practices</p>
                <div className="flex flex-wrap gap-2">
                  {cs.relatedPractices.map((p) => (
                    <span
                      key={p}
                      className="border border-[#F8F5F0]/15 text-[#F8F5F0]/60 text-[10px] tracking-widest uppercase px-3 py-1.5"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="h-px bg-[#F8F5F0]/10 my-6" />
                <Link
                  href="/#consultation"
                  className="block w-full bg-[#C9A227] hover:bg-[#e4b93a] text-[#1E293B] font-semibold text-xs tracking-[0.15em] uppercase px-6 py-3.5 text-center transition-all duration-300"
                >
                  Discuss Your Matter
                </Link>
              </RevealBlock>

              {/* Tags */}
              <RevealBlock delay={0.35} className="p-8 border border-[#1E293B]/10">
                <p className="text-[#1E293B]/40 text-[10px] tracking-[0.35em] uppercase mb-4">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#C9A227]/40 text-[#C9A227] text-[10px] tracking-widest uppercase px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </RevealBlock>
            </aside>
          </div>
        </div>
      </article>

      {/* Prev / Next navigation */}
      <div className="bg-[#1E293B] border-t border-[#F8F5F0]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-0 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#F8F5F0]/10">
          {prev ? (
            <Link
              href={`/case-studies/${prev.slug}`}
              className="group flex items-center gap-5 py-10 pr-10 hover:bg-[#F8F5F0]/5 transition-colors duration-300 px-6 lg:px-0"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-[#C9A227] w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300 flex-shrink-0" />
              <div>
                <p className="text-[#F8F5F0]/40 text-[10px] tracking-widest uppercase mb-1">Previous</p>
                <p className="font-display text-[#F8F5F0] text-lg font-semibold group-hover:text-[#C9A227] transition-colors duration-300 leading-snug">{prev.title}</p>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/case-studies/${next.slug}`}
              className="group flex items-center justify-end gap-5 py-10 sm:pl-10 hover:bg-[#F8F5F0]/5 transition-colors duration-300 px-6 lg:px-0 text-right"
            >
              <div>
                <p className="text-[#F8F5F0]/40 text-[10px] tracking-widest uppercase mb-1">Next</p>
                <p className="font-display text-[#F8F5F0] text-lg font-semibold group-hover:text-[#C9A227] transition-colors duration-300 leading-snug">{next.title}</p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} className="text-[#C9A227] w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
            </Link>
          ) : <div />}
        </div>
      </div>

      <Footer />
    </>
  );
}
