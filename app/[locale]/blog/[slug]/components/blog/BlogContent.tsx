"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
import { Article } from "../../page";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export type currentArticleType = {
  data?: [
    {
      id: number;
      documentId: string;
      title: string;
      description: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      blocks: {
        __component: string;
        id: number;
        body: string;
      }[];
    }
  ];
  meta?: {
    pagination: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
  };
};

export default function BlogContent({
  markDownContent,
  title,
  date,
  author,
  category = "",
  coverImage,
}: {
  title?: string;
  markDownContent?: string;
  date?: string;
  author?: string;
  articlesInfo: Article[];
  slugName?: string;
  category?: string;
  coverImage?: string;
}) {
  const locale = useLocale();
  const link = `/${locale}/blog`;
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="space-y-12 md:space-y-24">
          {/* Back Button */}
          <Button
            variant="ghost"
            asChild
            className="p-0 hover:bg-transparent text-gray-500 hover:text-white transition-colors"
          >
            <Link href={link} className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to blog
            </Link>
          </Button>

          {/* Title and Category */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-gray-500 text-lg">/ Blog — {category}</p>

            {/* Mobile Metadata */}
            <div className="md:hidden space-y-4">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-gray-500 text-sm">{t("tanggal")}</p>
                  <p className="text-sm">{date}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{t("penulis")}</p>
                  <p className="text-sm capitalize">{author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Cover Image Section */}
      {coverImage && (
        <div className="w-full aspect-[21/9] relative bg-gray-900">
          <Image
            src={coverImage}
            alt={title || "Article cover"}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12 md:py-24 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Metadata Column - Hidden on Mobile */}
          <div className="hidden md:block md:col-span-3">
            <div className="space-y-4 sticky top-8">
              <div className="space-y-1">
                <p className="text-gray-500 text-sm">{t("tanggal")}</p>
                <p className="text-sm">{date}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-sm">{t("penulis")}</p>
                <p className="text-sm capitalize">{author}</p>
              </div>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="col-span-1 md:col-span-7">
            <div className="prose prose-invert max-w-none">
              <Markdown>{markDownContent}</Markdown>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
