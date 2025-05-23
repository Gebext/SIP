"use client";

import EachFokusSection from "@/components/shared/eachfokuslayanan";
import Navigation from "@/components/ui/navbar";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Header from "@/components/shared/header";
import { motion } from "framer-motion";
import Head from "next/head";

interface FokusSectionData {
  title: string;
  heading: string;
  description: string;
  image: string;
  imageRight: boolean;
}

const fokusSections: FokusSectionData[] = [
  {
    title: "riset",
    heading: "risetTitle",
    description: "risetDesc",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageRight: false,
  },
  {
    title: "dataAndAnalysis",
    heading: "ddaTitle",
    description: "ddaDesc",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageRight: true,
  },
  {
    title: "formula",
    heading: "rdfTitle",
    description: "rdfDesc",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageRight: false,
  },
  {
    title: "admove",
    heading: "aaTitle",
    description: "aaDesc",
    image:
      "https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageRight: true,
  },
];

export default function FokusLayanan() {
  const t = useTranslations();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Ambil metadata dari JSON

  return (
    <>
      <Head>
        {/* Title dan Meta Description */}
        <title>{t("fokusLayananMeta.title")}</title>
        <meta
          name="description"
          content={t("fokusLayananMeta.ogDescription")}
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={t("fokusLayananMeta.ogTitle")} />
        <meta
          property="og:description"
          content={t("fokusLayananMeta.ogDescription")}
        />
        <meta property="og:image" content={t("fokusLayananMeta.ogImage")} />
        <meta property="og:url" content={t("fokusLayananMeta.ogUrl")} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content={t("fokusLayananMeta.twitterCard")} />
        <meta
          name="twitter:title"
          content={t("fokusLayananMeta.twitterTitle")}
        />
        <meta
          name="twitter:description"
          content={t("fokusLayananMeta.twitterDescription")}
        />
        <meta
          name="twitter:image"
          content={t("fokusLayananMeta.twitterImage")}
        />

        {/* Canonical URL */}
        <link rel="canonical" href={t("fokusLayananMeta.canonicalUrl")} />
      </Head>

      <section className="bg-black text-white">
        <main className="container py-8 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
          <section className="md:h-screen">
            <Header />
            <div className="max-w-5xl lg:py-32 md:py-64 py-24 mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-sm font-light mb-6"
              >
                / {t("fokusLayanan")}
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="text-md md:text-4xl lg:text-4xl font-light leading-tight"
              >
                {t("risetInformasiAnalisis3")}
                <br />
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-neutral-400 lg:text-xl md:text-2xl my-4 font-light w-full lg:leading-relaxed lg:w-full"
              >
                {t("risetInformasiAnalisis2")}
              </motion.h2>
            </div>
          </section>

          <section>
            <div className="bg-black text-white">
              <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
                {fokusSections.map((section, index) => (
                  <motion.div
                    key={index}
                    id={section.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 * index, duration: 1 }}
                  >
                    <EachFokusSection
                      title={t(section.title)}
                      heading={t(section.heading)}
                      description={t(section.description)}
                      image={section.image}
                      imageRight={section.imageRight}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <Navigation
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            locale={locale}
          />
        </main>
      </section>
    </>
  );
}
