"use client";

const items = [
  "Corporate Law",
  "Civil Litigation",
  "Real Estate",
  "Family Law",
  "Intellectual Property",
  "Criminal Defense",
  "Tax Law",
  "Estate Planning",
  "Employment Law",
  "Securities",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#C9A227] py-4 overflow-hidden border-y border-[#b8921f]">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-[#1E293B] text-xs font-semibold tracking-[0.35em] uppercase whitespace-nowrap px-8 flex items-center gap-8"
          >
            {item}
            <span className="text-[#1E293B]/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
