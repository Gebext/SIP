"use client";

import Navigation from "@/components/ui/navbar";
import Link from "next/link";
import { useState } from "react";

function BlogList({
  articles,
}: {
  articles?: {
    title: string;
    slug: string;
    description: string;
    cover: string;
    date: string;
    category: string;
  }[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [loadCount, setLoadCount] = useState(5);

  const getNextArticles = (loadSize: number) => {
    setLoadCount((prevCount) => prevCount + loadSize);
  };

  const categories = [
    "All",
    ...new Set(articles?.map((article) => article.category)),
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles?.slice(0, loadCount)
      : articles
          ?.filter((article) => article.category === selectedCategory)
          .slice(0, loadCount);

  const handleFilterArticleByCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container py-8 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="flex justify-end">
          <div className="flex items-center gap-4">
            <div className="text-gray-100 text-xl font-light font-serif">
              SIP.
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-100 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <header className="py-6 sm:py-8">
          <h2 className="text-xs sm:text-sm font-light mb-4 sm:mb-6">/ Blog</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Elevating Brands through
            <br />
            innovation in Digital
            <br />
            Transformation.
          </h1>
        </header>

        {/* Filter Buttons */}
        <div className="flex space-x-4 mb-8 overflow-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterArticleByCategory(category)}
              className={`px-4 py-2 text-sm rounded ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              } transition`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {filteredArticles ? (
            filteredArticles?.map((article, i) => (
              <div key={i} className="border-t border-gray-800 pt-8 sm:pt-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Left Column - Index and Category */}
                  <div className="md:col-span-2 space-y-1 sm:space-y-2">
                    <p className="text-gray-500 font-mono text-sm sm:text-base">
                      / {String(i + 1).padStart(3, "0")}
                    </p>
                    <p className="text-gray-500 text-sm sm:text-base">
                      / {article.category}
                    </p>
                  </div>

                  {/* Middle Column - Title */}
                  <div className="md:col-span-6">
                    <Link href={`blog/${article.slug}`}>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug sm:leading-tight tracking-tight hover:text-gray-300 transition-colors">
                        {article.title}
                      </h2>
                    </Link>
                  </div>

                  {/* Right Column - Description */}
                  <div className="md:col-span-4">
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 text-lg">
              No articles found for this category.
            </p>
          )}
        </div>

        <div className="w-full mt-20 flex justify-center">
          {loadCount < ((selectedCategory === "All" ? articles : filteredArticles)?.length ?? 0)  && (
            <button
              className={`px-4 py-2 text-base rounded bg-gray-800 text-gray-400 hover:bg-gray-700`}
              onClick={() => getNextArticles(1)}
            >
              Load More
            </button>
          )}
        </div>
      </main>
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}

export default BlogList;
