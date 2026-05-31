"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced, faPhone } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Attorneys", href: "#attorneys" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Consultation", href: "#consultation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1E293B]/95 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 leading-none">
            <div className="w-8 h-8 border border-[#C9A227]/60 flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faScaleBalanced} className="text-[#C9A227] w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-[#F8F5F0] text-xl font-semibold tracking-wide leading-none">
                BLACKSTONE
              </span>
              <span className="text-[#C9A227] text-[9px] tracking-[0.35em] uppercase font-light">
                Legal Group
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-[#F8F5F0]/80 hover:text-[#C9A227] text-sm tracking-widest uppercase transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A227] group-hover:w-full transition-all duration-400" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+12125550100"
              className="flex items-center gap-2 text-[#F8F5F0]/60 hover:text-[#C9A227] text-sm transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faPhone} className="w-3 h-3" />
              (212) 555-0100
            </a>
            <button
              onClick={() => handleNavClick("#consultation")}
              className="border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#1E293B] text-xs tracking-[0.2em] uppercase px-6 py-2.5 transition-all duration-300 font-medium"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-[#F8F5F0] origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-[#F8F5F0]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-[#F8F5F0] origin-center transition-all"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#1E293B] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="font-display text-[#F8F5F0] text-4xl hover:text-[#C9A227] transition-colors duration-300"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => handleNavClick("#consultation")}
              className="mt-4 border border-[#C9A227] text-[#C9A227] text-sm tracking-[0.2em] uppercase px-8 py-3"
            >
              Free Consultation
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
