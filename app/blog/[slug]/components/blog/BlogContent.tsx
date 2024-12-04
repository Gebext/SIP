"use client"

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import strapiClient from "@/helper/apiClient";
import { useState } from "react";

export type currentArticleType = {
  data?: [{
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
  }];
  meta?: {};
}

type currentArticle = {
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

export default function BlogContent({ slugName }: { slugName?: string }) {
  // const [article,setArticle]= useState<currentArticle|null>(null)

  // const fetchCurrentArticle = async() => {
  //   try {
  //     const response = (await strapiClient.get<currentArticleType>("/articles")).data
  //     const articles = response.data
  //     const currentArticle = articles?.find(
  //       (article) => article.slug === slugName
  //     )
  //     setArticle(currentArticle??null)
  //   } catch (error) {
  //     console.log(error); 
  //   }
  // }

  




  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-12 ">
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
          <div className="text-muted-foreground mb-2">Nov 14, 2024</div>

          {/* Title */}
          <h1 className="text-5xl font-bold tracking-tight">
            Welcome to a New Yield Era
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-16">
          {/* Main content */}
          <div className="flex-1">
            {/* Featured Image */}
            <Card className="mb-8">
              <CardContent className="p-0">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Welcome to a New DeFi Era"
                    fill
                    unoptimized
                  />
                </div>
              </CardContent>
            </Card>

            {/* Article content placeholder */}
            <div className="prose max-w-none dark:prose-invert">
              <h1>Article content goes here...</h1>
              {Array(20)
                .fill(0)
                .map((_, i) => (
                  <p key={i}>
                    This is paragraph {i + 1} of the article content.
                  </p>
                ))}
            </div>
          </div>

          {/* Right sidebar - sticky */}
          <div className="hidden lg:block w-80 relative">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle>Announcement</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-4">Jump to</h3>
                  <nav className="flex flex-col space-y-3">
                    <Link
                      href="#pills-campaign"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Pills Campaign: The Grand Finale (Last week of November)
                    </Link>
                    <Separator />
                    <Link
                      href="#yield-discovery"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Yield Discovery Era (Last week of November)
                    </Link>
                    <Separator />
                    <Link
                      href="#airdrop"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      $USUAL Airdrop (mid-December)
                    </Link>
                    <Separator />
                    <Link
                      href="#allocation"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      $USUAL Allocation
                    </Link>
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


