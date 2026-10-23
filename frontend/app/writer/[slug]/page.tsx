import React from "react";
import WriterPageTemplate from "@/components/writer/WriterPageTemplate";
import { getWriterBySlug } from "@/components/writer/writerData";

export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "michael-crowley" },
    { slug: "maggie-haberman" },
    { slug: "siobhan-ogrady" },
  ];
}

export default async function DynamicWriterPageFallback({ params }: PageProps) {
  const { slug } = await params;
  const writer = getWriterBySlug(slug);
  return <WriterPageTemplate writer={writer} />;
}
