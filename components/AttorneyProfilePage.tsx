"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faGraduationCap,
  faScaleBalanced,
  faBriefcase,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Attorney, attorneys } from "@/lib/attorneys";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[#C9A227]">{icon}</span>
        <h2 className="font-display text-[#F8F5F0] text-xl font-semibold tracking-wide">{title}</h2>
        <span className="flex-1 h-px bg-[#F8F5F0]/10" />
      </div>
      {children}
    </motion.div>
  );
}

export default function AttorneyProfilePage({ attorney }: { attorney: Attorney }) {
  const slugIndex = attorneys.findIndex((a) => a.slug === attorney.slug);
  const prev = attorneys[slugIndex - 1];
  const next = attorneys[slugIndex + 1];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] bg-[#1E293B] overflow-hidden">
        <Image
          src={attorney.heroImage}
          alt={attorney.name}
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/40 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-12 pb-16">
          <Link
            href="/attorneys"
            className="flex items-center gap-2 text-[#F8F5F0]/50 hover:text-[#C9A227] text-xs tracking-[0.3em] uppercase mb-8 transition-colors w-fit"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" />
            All Attorneys
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#C9A227] text-xs tracking-[0.4em] uppercase mb-3">{attorney.specialty}</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold text-[#F8F5F0] leading-[1.05] mb-2">
              {attorney.name}
            </h1>
            <p className="text-[#F8F5F0]/55 text-lg">{attorney.title}</p>
          </motion.div>
        </div>
      </section>

      {/* Meta bar */}
      <div className="bg-[#C9A227] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center gap-6 text-[#1E293B]">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faScaleBalanced} className="w-4 h-4" />
            <span className="text-sm font-semibold">Bar: {attorney.bar}</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
            <a href={`mailto:${attorney.email}`} className="text-sm font-semibold hover:underline">
              {attorney.email}
            </a>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 border border-[#1E293B]/30 hover:bg-[#1E293B]/10 flex items-center justify-center transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-[#1E293B] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
          {/* Main */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <p className="text-[#F8F5F0]/70 text-lg leading-[1.85]">{attorney.bio}</p>
            </motion.div>

            <Section title="Notable Achievements" icon={<FontAwesomeIcon icon={faStar} className="w-4 h-4" />}>
              <ul className="space-y-4">
                {attorney.notable.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-1 h-1 rounded-full bg-[#C9A227] mt-2.5 flex-shrink-0" />
                    <span className="text-[#F8F5F0]/65 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Areas of Practice" icon={<FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />}>
              <div className="flex flex-wrap gap-2">
                {attorney.practice.map((p) => (
                  <span
                    key={p}
                    className="border border-[#F8F5F0]/15 text-[#F8F5F0]/60 text-xs tracking-widest uppercase px-4 py-2"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="Education" icon={<FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4" />}>
              <ul className="space-y-3">
                {attorney.education.map((e, i) => (
                  <li key={i} className="text-[#F8F5F0]/65 leading-relaxed flex items-start gap-4">
                    <span className="w-1 h-1 rounded-full bg-[#C9A227] mt-2.5 flex-shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="relative overflow-hidden aspect-[3/4]">
              <Image
                src={attorney.image}
                alt={attorney.name}
                fill
                sizes="380px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/60 to-transparent" />
            </div>

            <div className="border border-[#F8F5F0]/10 p-7">
              <p className="font-display text-[#F8F5F0] text-xl font-semibold mb-2">
                Schedule a Consultation
              </p>
              <p className="text-[#F8F5F0]/50 text-sm mb-5 leading-relaxed">
                Speak directly with {attorney.name.split(" ")[0]} about your legal matter.
              </p>
              <Link
                href="/#consultation"
                className="block text-center bg-[#C9A227] hover:bg-[#b8911f] text-[#1E293B] font-semibold text-sm tracking-[0.15em] uppercase py-3.5 transition-colors"
              >
                Book Free Consultation
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Prev / Next */}
      {(prev || next) && (
        <div className="border-t border-[#F8F5F0]/10 bg-[#1E293B]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2">
            {prev ? (
              <Link
                href={`/attorneys/${prev.slug}`}
                className="group flex flex-col gap-1 py-8 pr-8 border-r border-[#F8F5F0]/10 hover:bg-[#F8F5F0]/[0.02] transition-colors"
              >
                <span className="text-[#F8F5F0]/30 text-xs tracking-widest uppercase flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="w-3 h-3 group-hover:-translate-x-1 transition-transform"
                  />
                  Previous
                </span>
                <span className="font-display text-[#F8F5F0] text-lg font-medium group-hover:text-[#C9A227] transition-colors">
                  {prev.name}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/attorneys/${next.slug}`}
                className="group flex flex-col gap-1 py-8 pl-8 text-right hover:bg-[#F8F5F0]/[0.02] transition-colors"
              >
                <span className="text-[#F8F5F0]/30 text-xs tracking-widest uppercase flex items-center gap-2 justify-end">
                  Next
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="w-3 h-3 rotate-180 group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <span className="font-display text-[#F8F5F0] text-lg font-medium group-hover:text-[#C9A227] transition-colors">
                  {next.name}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
