
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const FeaturedArticles = [
  {
    title: "Revolutionizing Digital Ecosystems",
    date: "2024-11-30",
    category: "Announcement",
    image: "https://picsum.photos/800/600",
    excerpt:
      "Exploring innovative strategies that transform traditional paradigms and unlock unprecedented potential for growth and development.",
  },
  {
    title: "The Future of Collaborative Innovation",
    date: "2024-11-27",
    category: "Product",
    image: "https://picsum.photos/801/600",
    excerpt:
      "Reimagining interconnected systems through cutting-edge technologies and human-centered design principles that drive meaningful change.",
  },
  {
    title: "Navigating Complex Technological Landscapes",
    date: "2024-11-14",
    category: "Education",
    image: "https://picsum.photos/801/601",
    excerpt:
      "Deep dive into emerging trends, strategic insights, and transformative approaches that are reshaping our understanding of technological advancement.",
  },
];

const articles = [
  {
    title: "Breakthrough Strategies in Global Connectivity",
    date: "2024-11-05",
    category: "Partnership",
    image: "/placeholder.svg",
    excerpt:
      "Uncovering revolutionary methods for enhancing communication, collaboration, and synergy across diverse technological ecosystems.",
  },
  {
    title: "Pioneering Interdisciplinary Solutions",
    date: "2024-10-31",
    category: "Product",
    image: "/placeholder.svg",
    excerpt:
      "Investigating groundbreaking approaches that bridge multiple domains and create integrated solutions for complex challenges.",
  },
  {
    title: "Celebrating Innovation and Community",
    date: "2024-10-31",
    category: "Announcement",
    image: "/placeholder.svg",
    excerpt:
      "Highlighting remarkable achievements, recognizing visionary contributors, and charting exciting pathways for future collaborative endeavors.",
  },
  {
    title: "Revolutionizing Industry Standards with Synergy",
    date: "2024-11-10",
    category: "Partnership",
    image: "/placeholder.svg",
    excerpt:
      "Exploring collaborative strategies to unify industry benchmarks and drive global standards for innovation.",
  },
  {
    title: "Unveiling the Future of Integrated Ecosystems",
    date: "2024-11-15",
    category: "Product",
    image: "/placeholder.svg",
    excerpt:
      "Delving into cutting-edge technologies that redefine product ecosystems and ensure seamless interoperability.",
  },
  {
    title: "Empowering Communities Through Technological Advances",
    date: "2024-11-20",
    category: "Announcement",
    image: "/placeholder.svg",
    excerpt:
      "Announcing new initiatives to bridge technology and community needs for sustainable progress.",
  },
];

function Page() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleFilterArticleByCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-4">
      {/* Main Content */}
      <main className="container py-12 px-8">
        <div className="space-y-8 flex flex-col">
          {/* Blog Header */}
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary">
              Blog
            </Badge>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              News, insights and more
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Learn more about SIP and the latest from our team.
            </p>
          </div>

          {/* Featured Articles Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FeaturedArticles.map((article, i) => (
              <Card key={i} borderless>
                <CardHeader className="p-0">
                  <img
                    src={article.image}
                    alt={`${article.title} thumbnail`}
                    width={400}
                    height={300}
                    className="rounded-t-lg object-cover w-full aspect-[4/3]"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <p className="text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Categories */}
          <div className="flex gap-2 flex-wrap">
            {["all", ...Array.from(new Set(articles.map((item) => item.category)))].map(
              (category, i) => (
                <Button
                  key={i}
                  onClick={() => handleFilterArticleByCategory(category)}
                  variant={
                    selectedCategory.toLowerCase() === category.toLowerCase()
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  className="capitalize"
                >
                  {category}
                </Button>
              )
            )}
          </div>

          {/* Article List */}
          <div className="space-y-4">
            {(selectedCategory == "all"
              ? articles
              : articles.filter(
                  (article) =>
                    article.category.toLowerCase() ===
                    selectedCategory.toLowerCase()
                )
            ).map((article, i) => (
              <div key={i}>
                <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center py-4">
                  <h3 className="font-semibold hover:text-muted-foreground">
                    <Link href="#">{article.title}</Link>
                  </h3>
                  <div className="flex items-center gap-4 md:gap-32 text-sm text-muted-foreground">
                    <span>{article.category}</span>
                    <span className="md:hidden">/</span>
                    <span>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <Separator />
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full md:w-[400px] self-center">
            Click to load More...
          </Button>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-secondary text-secondary-foreground py-16">
        <div className="container grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">USUAL</span>
            </Link>
            <p className="text-muted-foreground">
              Usual is a secure and decentralized Fiat Stablecoin issuer that redistributes ownership and governance through
              the $USUAL token.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="email@usual.company" />
              <Button variant="outline">Subscribe</Button>
            </div>
          </div>

          {[
            {
              title: "About",
              links: ["Home", "Blog", "Contact", "Brand Kit"],
            },
            {
              title: "Product",
              links: ["Documentation", "Whitepaper", "Changelog", "Feature requests"],
            },
            {
              title: "Ecosystem",
              links: ["Mirror", "Careers", "Build with us"],
            },
            {
              title: "Legal & Security",
              links: ["Terms of Services", "Privacy Policy", "Risk Policy", "Audit", "Bug Bounty"],
            },
          ].map((section, i) => (
            <div key={i} className="space-y-4">
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer> */}
    </div>
  );
}

export default Page;
