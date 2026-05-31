"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

/* ─── Label ─────────────────────────────────────────────── */
export function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[#F8F5F0]/50 text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">
      {children}
    </label>
  );
}

/* ─── Text / Email / Tel Input ───────────────────────────── */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export function FormInput({ label, className = "", ...props }: InputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <div
        className={`relative border transition-all duration-300 ${
          focused ? "border-[#C9A227]" : "border-[#F8F5F0]/15 hover:border-[#F8F5F0]/30"
        }`}
      >
        <input
          {...props}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
          className={`w-full bg-transparent text-[#F8F5F0] placeholder-[#F8F5F0]/25 text-sm px-4 py-3.5 outline-none ${className}`}
        />
        {/* gold bottom line */}
        <motion.span
          className="absolute bottom-0 left-0 h-[1px] bg-[#C9A227]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0, width: "100%" }}
        />
      </div>
    </div>
  );
}

/* ─── Custom Select ──────────────────────────────────────── */
interface SelectProps {
  label: string;
  options: string[];
  value: string;
  placeholder?: string;
  onChange: (val: string) => void;
  required?: boolean;
}
export function FormSelect({ label, options, value, placeholder = "Select an option", onChange }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <FieldLabel>{label}</FieldLabel>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-4 py-3.5 border transition-all duration-300 text-sm text-left ${
          open ? "border-[#C9A227]" : "border-[#F8F5F0]/15 hover:border-[#F8F5F0]/30"
        } ${value ? "text-[#F8F5F0]" : "text-[#F8F5F0]/30"}`}
      >
        {value || placeholder}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 text-[#C9A227]/70" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ originY: 0 }}
            className="absolute left-0 right-0 top-full mt-1 z-50 bg-[#1a2436]/95 backdrop-blur-xl border border-[#F8F5F0]/10 shadow-2xl overflow-hidden"
          >
            {options.map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => { onChange(opt); setOpen(false); }}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors duration-150 ${
                    value === opt
                      ? "bg-[#C9A227]/10 text-[#C9A227]"
                      : "text-[#F8F5F0]/70 hover:bg-[#F8F5F0]/5 hover:text-[#F8F5F0]"
                  }`}
                >
                  {opt}
                  {value === opt && <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-[#C9A227]" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Custom Date Picker ─────────────────────────────────── */
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function formatDate(d: Date | null) {
  if (!d) return "";
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

interface DatePickerProps {
  label: string;
  value: Date | null;
  onChange: (d: Date) => void;
}
export function FormDatePicker({ label, value, onChange }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => value ?? new Date());
  const ref = useRef<HTMLDivElement>(null);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div ref={ref} className="relative">
      <FieldLabel>{label}</FieldLabel>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-4 py-3.5 border transition-all duration-300 text-sm text-left ${
          open ? "border-[#C9A227]" : "border-[#F8F5F0]/15 hover:border-[#F8F5F0]/30"
        } ${value ? "text-[#F8F5F0]" : "text-[#F8F5F0]/30"}`}
      >
        {value ? formatDate(value) : "Select a date"}
        <FontAwesomeIcon icon={faCalendarDays} className="w-3.5 h-3.5 text-[#C9A227]/70" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{ originY: 0 }}
            className="absolute left-0 right-0 top-full mt-1 z-50 bg-[#1a2436]/95 backdrop-blur-xl border border-[#F8F5F0]/10 shadow-2xl p-4"
          >
            {/* Month nav */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={prevMonth}
                className="w-7 h-7 flex items-center justify-center text-[#F8F5F0]/40 hover:text-[#C9A227] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
              </button>
              <span className="font-display text-[#F8F5F0] text-sm font-semibold">
                {MONTHS[month]} {year}
              </span>
              <button
                type="button"
                onClick={nextMonth}
                className="w-7 h-7 flex items-center justify-center text-[#F8F5F0]/40 hover:text-[#C9A227] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 mb-2">
              {DAYS.map((d) => (
                <span key={d} className="text-center text-[#F8F5F0]/30 text-[10px] tracking-widest uppercase py-1">
                  {d}
                </span>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-7 gap-y-1">
              {cells.map((day, i) => {
                if (!day) return <span key={`e-${i}`} />;
                const thisDate = new Date(year, month, day);
                thisDate.setHours(0, 0, 0, 0);
                const isPast = thisDate < today;
                const isSelected =
                  value &&
                  value.getFullYear() === year &&
                  value.getMonth() === month &&
                  value.getDate() === day;
                const isToday = thisDate.getTime() === today.getTime();

                return (
                  <button
                    key={day}
                    type="button"
                    disabled={isPast}
                    onClick={() => { onChange(thisDate); setOpen(false); }}
                    className={`h-8 w-full flex items-center justify-center text-sm transition-all duration-150 rounded-none
                      ${isSelected ? "bg-[#C9A227] text-[#1E293B] font-bold" : ""}
                      ${isToday && !isSelected ? "border border-[#C9A227]/50 text-[#C9A227]" : ""}
                      ${!isSelected && !isToday && !isPast ? "text-[#F8F5F0]/80 hover:bg-[#F8F5F0]/10" : ""}
                      ${isPast ? "text-[#F8F5F0]/20 cursor-not-allowed" : "cursor-pointer"}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Textarea ───────────────────────────────────────────── */
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}
export function FormTextarea({ label, className = "", ...props }: TextareaProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <div
        className={`relative border transition-all duration-300 ${
          focused ? "border-[#C9A227]" : "border-[#F8F5F0]/15 hover:border-[#F8F5F0]/30"
        }`}
      >
        <textarea
          {...props}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
          className={`w-full bg-transparent text-[#F8F5F0] placeholder-[#F8F5F0]/25 text-sm px-4 py-3.5 outline-none resize-none ${className}`}
        />
        <motion.span
          className="absolute bottom-0 left-0 h-[1px] bg-[#C9A227]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0, width: "100%" }}
        />
      </div>
    </div>
  );
}
