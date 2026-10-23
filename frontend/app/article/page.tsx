import React from "react";
import ArticlePageTemplate from "@/components/article/ArticlePageTemplate";
import { MAIN_ARTICLE } from "@/components/article/articleData";

export default function DefaultArticlePage() {
  return <ArticlePageTemplate article={MAIN_ARTICLE} />;
}
