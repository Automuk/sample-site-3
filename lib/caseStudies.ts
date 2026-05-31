export interface CaseStudy {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  outcome: string;
  description: string;
  image: string;
  heroImage: string;
  tags: string[];
  attorney: string;
  attorneyTitle: string;
  year: string;
  duration: string;
  challenge: string;
  strategy: string;
  result: string;
  keyStats: { label: string; value: string }[];
  relatedPractices: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "01",
    slug: "cross-border-pharmaceutical-merger",
    category: "Corporate Law",
    title: "A $2.8B Cross-Border Merger",
    subtitle: "Navigating tri-jurisdictional antitrust scrutiny at record speed",
    outcome: "Deal Closed in 90 Days",
    description:
      "Blackstone navigated complex antitrust scrutiny across three jurisdictions to shepherd a landmark pharmaceutical merger to completion — 40% faster than industry average.",
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1200&q=80&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85&auto=format&fit=crop",
    tags: ["M&A", "Antitrust", "International"],
    attorney: "Jonathan Blackstone",
    attorneyTitle: "Founding Partner",
    year: "2024",
    duration: "90 Days",
    challenge:
      "A leading pharmaceutical conglomerate sought to acquire a mid-cap European biotech firm. The transaction faced simultaneous antitrust review by the DOJ, the European Commission, and the UK Competition and Markets Authority — each with conflicting remediation demands and aggressive review timelines.",
    strategy:
      "Jonathan Blackstone assembled a bespoke cross-border team with fluency in each jurisdiction's regulatory climate. We pre-cleared the transaction informally with the DOJ before filing, engineered voluntary divestitures strategically sequenced to satisfy all three regulators simultaneously, and deployed parallel counsel teams in Brussels and London to ensure synchronized submissions. A custom regulatory tracker allowed real-time alignment across time zones.",
    result:
      "All three regulatory authorities cleared the transaction within the 90-day window — 40% faster than comparable tri-jurisdictional mergers. The voluntary divestiture package we negotiated retained over 94% of the original deal economics. The $2.8B deal closed on time with zero material modifications to the core transaction structure.",
    keyStats: [
      { label: "Transaction Value", value: "$2.8B" },
      { label: "Jurisdictions", value: "3" },
      { label: "Deal Economics Retained", value: "94%" },
      { label: "Days to Close", value: "90" },
    ],
    relatedPractices: ["Corporate Law", "Regulatory", "International"],
  },
  {
    id: "02",
    slug: "techcorp-class-action-defense",
    category: "Civil Litigation",
    title: "Class Action Defense for TechCorp",
    subtitle: "Full dismissal of a $500M securities class action at the pleadings stage",
    outcome: "$0 in Liability",
    description:
      "Our litigation team successfully defended a leading tech company against a $500M securities class action, securing a full dismissal at the pleadings stage.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1920&q=85&auto=format&fit=crop",
    tags: ["Securities", "Class Action", "Federal Court"],
    attorney: "Victoria Harrington",
    attorneyTitle: "Senior Partner",
    year: "2023",
    duration: "8 Months",
    challenge:
      "Following a stock price decline tied to a product recall announcement, TechCorp faced a $500M securities class action alleging fraudulent misrepresentation under Section 10(b) of the Securities Exchange Act. The plaintiff class included major institutional investors and the case was assigned to a notoriously plaintiff-friendly federal judge in the Southern District of New York.",
    strategy:
      "Victoria Harrington led a pre-filing audit of all analyst calls, SEC filings, and internal communications over a 36-month period. We identified a pattern of hedged, forward-looking language that insulated the client under the PSLRA safe harbor provisions. Rather than seek a protracted discovery phase, we moved aggressively for a Rule 12(b)(6) dismissal, filing a 97-page brief that systematically dismantled each element of the scienter allegations.",
    result:
      "The court granted a full dismissal with prejudice at the pleadings stage — before a single deposition was taken. The ruling cited Blackstone's brief extensively and has since been cited in nine subsequent securities cases as precedent for the scope of PSLRA safe harbor protections. TechCorp incurred zero liability.",
    keyStats: [
      { label: "Alleged Damages", value: "$500M" },
      { label: "Actual Liability", value: "$0" },
      { label: "Time to Dismissal", value: "8 Months" },
      { label: "Precedent Citations", value: "9+" },
    ],
    relatedPractices: ["Civil Litigation", "Securities", "Corporate Law"],
  },
  {
    id: "03",
    slug: "hudson-yards-development",
    category: "Real Estate",
    title: "Hudson Yards Mixed-Use Development",
    subtitle: "Structuring one of Manhattan's largest mixed-use closings",
    outcome: "18 Acres, $1.1B Structured",
    description:
      "Elena Vasquez led the legal structuring of one of Manhattan's most complex mixed-use developments, coordinating over 30 financing parties and 12 separate closings.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85&auto=format&fit=crop",
    tags: ["Development", "Finance", "Zoning"],
    attorney: "Elena Vasquez",
    attorneyTitle: "Partner",
    year: "2023",
    duration: "14 Months",
    challenge:
      "A real estate developer engaged Blackstone to structure the acquisition, financing, and entitlement of 18 acres in Manhattan's West Side. The project involved a condominium tower, a Class-A office building, and ground-floor retail — each requiring separate financing stacks, ownership structures, and regulatory approvals. Over 30 lenders, equity partners, and city agencies had to be aligned under a single master closing timeline.",
    strategy:
      "Elena Vasquez designed a bespoke waterfall ownership structure using a series of SPE entities with cross-default protections tailored to each capital tranche. She simultaneously managed the ULURP zoning process, negotiated 421-a tax abatement terms with the City, and coordinated 12 sequential closings — each contingent on the preceding — across a 14-month timeline using a master conditions matrix.",
    result:
      "All 12 closings completed on schedule with no material defaults. The $1.1B financing package was assembled at a blended rate 38 basis points below comparable market transactions. The development received all required zoning variances, and construction broke ground within 30 days of final closing.",
    keyStats: [
      { label: "Total Financing", value: "$1.1B" },
      { label: "Financing Parties", value: "30+" },
      { label: "Separate Closings", value: "12" },
      { label: "Below-Market Rate", value: "38bps" },
    ],
    relatedPractices: ["Real Estate", "Finance", "Land Use"],
  },
  {
    id: "04",
    slug: "novasemi-patent-portfolio",
    category: "Intellectual Property",
    title: "Semiconductor Patent Portfolio",
    subtitle: "47-patent global portfolio built and defended against hostile infringement",
    outcome: "47 Patents Secured",
    description:
      "Marcus O'Sullivan built and defended a comprehensive global patent portfolio for an emerging semiconductor company, blocking a hostile infringement campaign.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=85&auto=format&fit=crop",
    tags: ["Patents", "Licensing", "Litigation"],
    attorney: "Marcus O'Sullivan",
    attorneyTitle: "Partner",
    year: "2022",
    duration: "8 Months",
    challenge:
      "NovaSemi Technologies, a pre-revenue semiconductor startup with breakthrough memory architecture, needed a global patent portfolio built rapidly before entering licensing negotiations with major chipmakers. Within six months of initial filings, a competitor filed IPR petitions against 9 of the earliest applications, threatening to invalidate the core of the portfolio before it could generate revenue.",
    strategy:
      "Marcus O'Sullivan deployed a prosecution-first strategy, filing provisional applications across 14 jurisdictions simultaneously to establish priority dates globally. He restructured claim hierarchies across all applications to create multiple independent fallback positions resistant to IPR attack. When the IPR petitions arrived, Blackstone's responses leveraged a proprietary claim mapping methodology that reframed every cited prior art reference as non-anticipatory.",
    result:
      "All 9 IPR petitions were denied institution by the PTAB. The 47-patent portfolio across 14 jurisdictions was fully secured within 8 months. NovaSemi's first licensing agreement, negotiated using the portfolio as leverage, generated $12M in upfront royalties — before the company shipped a single chip.",
    keyStats: [
      { label: "Patents Secured", value: "47" },
      { label: "Jurisdictions", value: "14" },
      { label: "IPR Petitions Defeated", value: "9/9" },
      { label: "Initial License Revenue", value: "$12M" },
    ],
    relatedPractices: ["Intellectual Property", "Litigation", "Licensing"],
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
