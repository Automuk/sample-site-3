import { notFound } from "next/navigation";
import { getAttorneyBySlug, attorneys } from "@/lib/attorneys";
import AttorneyProfilePage from "@/components/AttorneyProfilePage";

export async function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const attorney = getAttorneyBySlug(slug);
  if (!attorney) return {};
  return {
    title: `${attorney.name} | Blackstone Legal Group`,
    description: attorney.bio,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const attorney = getAttorneyBySlug(slug);
  if (!attorney) notFound();
  return <AttorneyProfilePage attorney={attorney} />;
}
