"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";
import { Article } from "../../page";

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
  meta?: {}; // eslint-disable-line
};

// type currentArticle = {
//   id: number;
//   documentId: string;
//   title: string;
//   description: string;
//   slug: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
//   blocks: {
//       __component: string;
//       id: number;
//       body: string;
//   }[];
// }

export default function BlogContent({
  markDownContent,
  title,
  date,
  author,
  articlesInfo,
  slugName
}: {
  title?: string;
  markDownContent?: string;
  date?: string;
  author?: string;
  articlesInfo: Article[];
  slugName?:string
}) {
  return (
    <div className=" bg-black text-white text-foreground">
      <div className="px-4  sm:px-6 lg:px-8 py-12 ">
        {/* Header container with Back to Blog, Date, and Title */}
        <div className="mb-20">
          <Button
            variant="ghost"
            asChild
            className="mb-4 p-0 hover:bg-transparent"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-lg font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to blog
            </Link>
          </Button>
          {/* Date */}
          <div className="text-muted-foreground mb-2">{date}</div>
          {/* Title */}
          <h1 className="text-6xl font-bold tracking-tight">
            {title || "Blog Title"}
          </h1>
          <h3 className="text-lg text-muted-foreground tracking-tight capitalize mt-5">
            by {author}
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-16">
          {/* Main content */}
          <div className="flex-1">
            {/* Featured Image */}
            {/* Article content placeholder */}
            <div className="prose max-w-none text-white prose-h1:text-white prose-h2:text-white prose-h3:text-white">
              <Markdown>{markDownContent}</Markdown>
            </div>
          </div>

          {/* Right sidebar - sticky */}
          <div className="hidden lg:block w-80 relative">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle>Newest Blog Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-4">Jump to</h3>
                  <nav className="flex flex-col space-y-3">
                    {articlesInfo.filter((link)=>link.slug!==slugName).map((link, index) => (
                      <div key={index}>
                        <Link
                          href={`/blog/${link.slug}`}
                          className="text-muted-foreground hover:text-foreground transition-colors mb-2"
                        >
                          {link.title}
                        </Link>
                        {index < articlesInfo.length - 1 && <Separator />}{" "}
                        {/* Add separator between links */}
                      </div>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
