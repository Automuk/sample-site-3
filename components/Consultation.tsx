"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faHandshake,
  faClock,
  faUserTie,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  FormInput,
  FormSelect,
  FormDatePicker,
  FormTextarea,
} from "@/components/ui/FormFields";

const practiceOptions = [
  "Corporate Law",
  "Civil Litigation",
  "Real Estate",
  "Family Law",
  "Intellectual Property",
  "Criminal Defense",
  "Other",
];

export default function Consultation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practice: "",
    message: "",
    date: null as Date | null,
  });

  const setField = (field: string, value: string | Date) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="consultation"
      className="bg-[#1E293B] py-28 lg:py-40 relative overflow-hidden"
    >
      {/* Background decorative text */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[18vw] font-bold text-[#F8F5F0]/[0.025] select-none leading-none pointer-events-none whitespace-nowrap">
        CONSULT
      </span>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: copy */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="block w-10 h-px bg-[#C9A227]" />
              <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase font-medium">
                Get Started
              </span>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                animate={inView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[clamp(2.5rem,4.5vw,4rem)] font-bold text-[#F8F5F0] leading-[1.1]"
              >
                Schedule Your Free Consultation
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-[#F8F5F0]/60 text-base leading-relaxed mb-10"
            >
              Your first consultation is completely confidential and at no cost.
              One of our senior attorneys will personally review your matter and
              advise you on the best path forward.
            </motion.p>

            {[
              { icon: faLock, label: "100% Confidential" },
              { icon: faHandshake, label: "No Obligation" },
              { icon: faClock, label: "Response Within 24 Hours" },
              { icon: faUserTie, label: "Speak Directly with a Senior Attorney" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-3 mb-4 last:mb-0"
              >
                <div className="w-7 h-7 border border-[#C9A227]/30 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={item.icon} className="text-[#C9A227] w-3 h-3" />
                </div>
                <span className="text-[#F8F5F0]/60 text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Right: form with glass card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative backdrop-blur-xl bg-white/[0.04] border border-[#F8F5F0]/10 shadow-2xl p-12 flex flex-col items-center justify-center text-center min-h-[580px]"
              >
                {/* corner accents */}
                <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C9A227]/60" />
                <span className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C9A227]/60" />
                <span className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#C9A227]/60" />
                <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C9A227]/60" />

                <div className="w-16 h-16 border border-[#C9A227] flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-[#C9A227] w-7 h-7" />
                </div>
                <h3 className="font-display text-[#F8F5F0] text-2xl font-semibold mb-4">
                  Consultation Requested
                </h3>
                <p className="text-[#F8F5F0]/60 text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out. A member of our team will contact
                  you within 24 hours to confirm your appointment.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative backdrop-blur-xl bg-white/[0.04] border border-[#F8F5F0]/10 shadow-2xl p-8 lg:p-10"
              >
                {/* corner accents */}
                <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C9A227]/60 pointer-events-none" />
                <span className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C9A227]/60 pointer-events-none" />
                <span className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#C9A227]/60 pointer-events-none" />
                <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C9A227]/60 pointer-events-none" />

                {/* Name row */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5"
                >
                  <FormInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Jonathan"
                    value={form.firstName}
                    onChange={(e) => setField("firstName", e.target.value)}
                    required
                  />
                  <FormInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={(e) => setField("lastName", e.target.value)}
                    required
                  />
                </motion.div>

                {/* Email / Phone row */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.42 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5"
                >
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="j.doe@email.com"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    required
                  />
                  <FormInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                  />
                </motion.div>

                {/* Practice area */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.49 }}
                  className="mb-5"
                >
                  <FormSelect
                    label="Practice Area"
                    options={practiceOptions}
                    value={form.practice}
                    placeholder="Select a practice area"
                    onChange={(val) => setField("practice", val)}
                    required
                  />
                </motion.div>

                {/* Date picker */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.56 }}
                  className="mb-5"
                >
                  <FormDatePicker
                    label="Preferred Date"
                    value={form.date}
                    onChange={(d) => setField("date", d)}
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.63 }}
                  className="mb-8"
                >
                  <FormTextarea
                    label="Brief Description of Matter"
                    name="message"
                    rows={4}
                    placeholder="Describe your legal matter in a few sentences..."
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  type="submit"
                  className="w-full bg-[#C9A227] hover:bg-[#e4b93a] text-[#1E293B] font-semibold text-sm tracking-[0.15em] uppercase py-4 transition-all duration-300"
                >
                  Request Consultation
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}