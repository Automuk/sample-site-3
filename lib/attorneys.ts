export interface Attorney {
  slug: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  image: string;
  heroImage: string;
  bar: string;
  education: string[];
  practice: string[];
  notable: string[];
  email: string;
}

export const attorneys: Attorney[] = [
  {
    slug: "jonathan-blackstone",
    name: "Jonathan Blackstone",
    title: "Founding Partner",
    specialty: "Corporate Law & M&A",
    bio: "With over 30 years at the vanguard of corporate law, Jonathan has orchestrated landmark mergers and regulatory navigations for some of the world's most prominent companies.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=85&auto=format&fit=crop",
    bar: "NY, DC, CA",
    education: [
      "J.D., Yale Law School",
      "M.B.A., Harvard Business School",
      "B.A., Princeton University",
    ],
    practice: ["Corporate Law", "Mergers & Acquisitions", "Regulatory Affairs", "International Law"],
    notable: [
      "Led $2.8B cross-border pharmaceutical merger across three jurisdictions",
      "Counsel to three Fortune 100 boards on governance restructuring",
      "Recognized in Chambers USA: Corporate/M&A — Band 1 for 15 consecutive years",
    ],
    email: "j.blackstone@blackstonelegal.com",
  },
  {
    slug: "victoria-harrington",
    name: "Victoria Harrington",
    title: "Senior Partner",
    specialty: "Civil Litigation",
    bio: "Victoria's record in the courtroom is unmatched — a former federal prosecutor turned fierce civil litigator, she has won over $400M in verdicts and settlements.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=85&auto=format&fit=crop",
    bar: "NY, NJ",
    education: [
      "J.D., Columbia Law School (Law Review, Editor-in-Chief)",
      "B.A., Georgetown University",
    ],
    practice: ["Civil Litigation", "Securities Litigation", "White-Collar Defense", "Appellate"],
    notable: [
      "Secured full dismissal of $500M securities class action at pleadings stage",
      "Former Assistant U.S. Attorney, SDNY — securities fraud division",
      "Named Litigator of the Year, New York Law Journal (2022)",
    ],
    email: "v.harrington@blackstonelegal.com",
  },
  {
    slug: "marcus-osullivan",
    name: "Marcus O'Sullivan",
    title: "Partner",
    specialty: "Intellectual Property",
    bio: "Marcus leads our IP practice with a dual background in electrical engineering and law, securing landmark patents and navigating high-stakes IP litigation globally.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85&auto=format&fit=crop",
    bar: "NY, USPTO",
    education: [
      "J.D., Stanford Law School",
      "M.S., Electrical Engineering, MIT",
      "B.S., Computer Engineering, Cornell University",
    ],
    practice: ["Patent Prosecution", "IP Litigation", "Technology Licensing", "Trade Secrets"],
    notable: [
      "Built 47-patent global portfolio for NovaSemi Technologies across 14 jurisdictions",
      "Defeated 9/9 IPR petitions at the PTAB on behalf of semiconductor clients",
      "Registered Patent Attorney, USPTO",
    ],
    email: "m.osullivan@blackstonelegal.com",
  },
  {
    slug: "elena-vasquez",
    name: "Elena Vasquez",
    title: "Partner",
    specialty: "Real Estate & Finance",
    bio: "Elena structures billion-dollar real estate transactions and complex financings with remarkable precision, representing developers, REITs, and lenders across New York.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85&auto=format&fit=crop",
    bar: "NY, FL",
    education: [
      "J.D., NYU School of Law (cum laude)",
      "B.S., Finance, University of Pennsylvania (Wharton)",
    ],
    practice: ["Commercial Real Estate", "Real Estate Finance", "Land Use & Zoning", "REIT Transactions"],
    notable: [
      "Structured $1.1B Hudson Yards mixed-use development across 12 closings",
      "Counsel to three of New York's top-10 commercial developers",
      "Named Rising Star, Super Lawyers — Real Estate (2019–2023)",
    ],
    email: "e.vasquez@blackstonelegal.com",
  },
  {
    slug: "daniel-osei",
    name: "Daniel Osei",
    title: "Partner",
    specialty: "Criminal Defense",
    bio: "Daniel is one of New York's most respected criminal defense attorneys, with a reputation for meticulous preparation and fearless courtroom advocacy at the federal level.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=1920&q=85&auto=format&fit=crop",
    bar: "NY, CT, DC",
    education: [
      "J.D., Harvard Law School",
      "B.A., Political Science, Yale University",
    ],
    practice: ["Federal Criminal Defense", "White-Collar Crime", "Grand Jury Investigations", "Appeals"],
    notable: [
      "Acquitted client in high-profile federal wire fraud prosecution (SDNY)",
      "Former public defender — 200+ jury trials",
      "Rated AV Preeminent® by Martindale-Hubbell",
    ],
    email: "d.osei@blackstonelegal.com",
  },
  {
    slug: "claire-morrison",
    name: "Claire Morrison",
    title: "Senior Associate",
    specialty: "Family Law",
    bio: "Claire brings compassion and strategic clarity to the most personal legal matters — from high-net-worth divorces to international custody disputes.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1920&q=85&auto=format&fit=crop",
    bar: "NY, NJ",
    education: [
      "J.D., Fordham University School of Law",
      "B.A., Psychology, Boston College",
    ],
    practice: ["Divorce & Separation", "Child Custody", "Prenuptial Agreements", "Estate Planning"],
    notable: [
      "Resolved $80M high-net-worth divorce with complex offshore asset structures",
      "Certified Family Law Mediator, NY State",
      "Volunteer mediator, NYC Family Court — 5 years",
    ],
    email: "c.morrison@blackstonelegal.com",
  },
];

export function getAttorneyBySlug(slug: string): Attorney | undefined {
  return attorneys.find((a) => a.slug === slug);
}
