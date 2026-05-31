"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faXTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const footerLinks = {
  "Practice Areas": [
    "Corporate Law",
    "Civil Litigation",
    "Real Estate",
    "Family Law",
    "Intellectual Property",
    "Criminal Defense",
  ],
  Company: ["About Us", "Our Attorneys", "Case Studies", "Careers", "Press & Media"],
  Legal: ["Privacy Policy", "Terms of Use", "Disclaimer", "Accessibility"],
};

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-[#F8F5F0]">
      {/* Top CTA strip */}
      <div className="border-b border-[#F8F5F0]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-semibold mb-1">
              Ready to protect what matters most?
            </p>
            <p className="text-[#F8F5F0]/50 text-sm">
              Our attorneys are standing by. Contact us today.
            </p>
          </div>
          <a
            href="tel:+12125550100"
            className="flex-shrink-0 bg-[#C9A227] hover:bg-[#e4b93a] text-[#1E293B] font-semibold text-sm tracking-[0.15em] uppercase px-8 py-3.5 transition-all duration-300"
          >
            (212) 555-0100
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <p className="font-display text-xl font-semibold tracking-wide">BLACKSTONE</p>
            <p className="text-[#C9A227] text-[10px] tracking-[0.4em] uppercase">Legal Group</p>
          </div>
          <p className="text-[#F8F5F0]/45 text-sm leading-relaxed max-w-xs">
            Premier legal counsel with over three decades of excellence. Serving
            clients across New York, Washington D.C., and internationally.
          </p>

          <div className="mt-8 space-y-3 text-sm text-[#F8F5F0]/50">
            <p className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#C9A227] w-3.5 h-3.5 flex-shrink-0" />
              1 Blackstone Plaza, 50th Floor, New York, NY 10019
            </p>
            <p className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="text-[#C9A227] w-3.5 h-3.5 flex-shrink-0" />
              (212) 555-0100
            </p>
            <p className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#C9A227] w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-[#C9A227]">info@blackstonelegal.com</span>
            </p>
          </div>

          {/* Social icons */}
          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: faLinkedinIn, label: "LinkedIn" },
              { icon: faXTwitter, label: "X" },
              { icon: faFacebookF, label: "Facebook" },
              { icon: faInstagram, label: "Instagram" },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 border border-[#F8F5F0]/15 hover:border-[#C9A227] flex items-center justify-center text-[#F8F5F0]/40 hover:text-[#C9A227] transition-all duration-300"
              >
                <FontAwesomeIcon icon={icon} className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([group, items]) => (
          <div key={group}>
            <p className="text-[#C9A227] text-[10px] tracking-[0.35em] uppercase font-semibold mb-5">
              {group}
            </p>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#F8F5F0]/50 hover:text-[#F8F5F0] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="w-2.5 h-2.5 text-[#C9A227]/50 group-hover:text-[#C9A227] opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F8F5F0]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F8F5F0]/30 text-xs">
            © {new Date().getFullYear()} Blackstone Legal Group LLP. All rights reserved.
          </p>
          <p className="text-[#F8F5F0]/20 text-xs text-center sm:text-right max-w-md">
            Attorney advertising. Prior results do not guarantee a similar outcome.
            Blackstone Legal Group LLP is a limited liability partnership.
          </p>
        </div>
      </div>
    </footer>
  );
}
