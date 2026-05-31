import { notFound } from "next/navigation";
import { getCaseBySlug, caseStudies } from "@/lib/caseStudies";
import CaseStudyPage from "@/components/CaseStudyPage";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseBySlug(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | Blackstone Legal Group`,
    description: cs.description,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseBySlug(slug);
  if (!cs) notFound();
  return <CaseStudyPage caseStudy={cs} />;
}
