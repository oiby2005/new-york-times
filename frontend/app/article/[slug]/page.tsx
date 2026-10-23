import React from "react";
import ArticlePageTemplate from "@/components/article/ArticlePageTemplate";
import { getArticleBySlug, HOMEPAGE_ARTICLES } from "@/components/article/articleData";
import { WRITERS } from "@/components/writer/writerData";

export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = new Set<string>();
  for (const writer of Object.values(WRITERS)) {
    for (const card of writer.featured) {
      if (card.slug) slugs.add(card.slug);
    }
    for (const art of writer.latest) {
      if (art.slug) slugs.add(art.slug);
    }
  }
  for (const slug of Object.keys(HOMEPAGE_ARTICLES)) {
    slugs.add(slug);
  }
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default async function DynamicArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return <ArticlePageTemplate article={article} />;
}
