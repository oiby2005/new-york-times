import React, { Suspense } from "react";
import CategoryPageTemplate from "@/components/category/CategoryPageTemplate";
import { CATEGORY_MAP } from "@/components/category/categoryData";
import { MEGAMENU_DATA } from "@/components/sections/megamenuData";

export function generateStaticParams() {
  const slugs: { slug: string[] }[] = [];

  // Main categories
  Object.keys(CATEGORY_MAP).forEach((cat) => {
    slugs.push({ slug: [cat] });
  });

  // Subcategories from megamenu
  Object.values(MEGAMENU_DATA).forEach((data) => {
    data.subcategories.forEach((sub) => {
      const subSlug = sub
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      if (subSlug) {
        slugs.push({ slug: [subSlug] });
      }
    });
  });

  return slugs;
}

interface SectionSlugPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function SectionContent({ params }: SectionSlugPageProps) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || ["us"];
  const currentSlug = slugArray[slugArray.length - 1] || "us";

  return <CategoryPageTemplate categorySlug={currentSlug} />;
}

export default function SectionSlugPage({ params }: SectionSlugPageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <SectionContent params={params} />
    </Suspense>
  );
}
