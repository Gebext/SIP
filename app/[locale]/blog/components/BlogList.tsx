"use client";

import Header from "@/components/shared/header";
import Navigation from "@/components/ui/navbar";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const locale = useLocale();
  const t = useTranslations();
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
    setLoadCount(5);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container py-8 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        <Header />
        <motion.header
          className="py-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs sm:text-sm font-light mb-4 sm:mb-6">/ Blog</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            {t("blog1")}
          </h1>
        </motion.header>

        {/* Filter Buttons */}
        <motion.div
          className="flex space-x-4 my-8 overflow-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="space-y-12 sm:space-y-16 md:space-y-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredArticles ? (
              filteredArticles?.map((article, i) => (
                <motion.div
                  key={i}
                  className="border-t border-gray-800 pt-8 sm:pt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
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
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-400 text-lg">
                No articles found for this category.
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="w-full mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {loadCount <
            ((selectedCategory === "All" ? articles : filteredArticles)
              ?.length ?? 0) && (
            <motion.button
              className={`px-4 py-2 text-base rounded bg-gray-800 text-gray-400 hover:bg-gray-700`}
              onClick={() => getNextArticles(1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More
            </motion.button>
          )}
        </motion.div>
      </main>
      <Navigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        locale={locale}
      />
    </div>
  );
}

export default BlogList;
