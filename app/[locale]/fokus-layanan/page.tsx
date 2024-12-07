"use client";

import EachFokusSection from "@/components/shared/eachfokuslayanan";
import Navigation from "@/components/ui/navbar";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Header from "@/components/shared/header";
import { motion } from "framer-motion";

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
    heading: "ddaDesc",
    description: "ddaTitle",
    image:
      "https://media.istockphoto.com/id/2098359215/id/foto/konsep-pemasaran-digital-pebisnis-menggunakan-laptop-dengan-dasbor-iklan-analisis-strategi.jpg?s=2048x2048&w=is&k=20&c=SwBziGI7dV_sMv-XQbucwO184fZuLMh5Z0AhUawe2yc=",
    imageRight: true,
  },
  {
    title: "formula",
    heading: "rdfDesc",
    description: "rdfTitle",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    imageRight: false,
  },
  {
    title: "admove",
    heading: "aaDesc",
    description: "aaTitle",
    image:
      "https://media.istockphoto.com/id/497130603/id/foto/pria-berdiri-melawan-papan-tulis-memecahkan-persamaan-fisika-tampilan-belakang-retro.jpg?s=2048x2048&w=is&k=20&c=SzkzsfnxoaF3HQvae9q42PjjV8CcrwYODBjUyLuVirw=",
    imageRight: true,
  },
];

export default function FokusLayanan() {
  const t = useTranslations();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <section className="bg-black text-white">
      <main className="container py-8 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        <section className="h-screen">
          <Header />
          <div className="max-w-5xl lg:py-32 md:py-64 py-16 mx-auto">
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
              {t("risetInformasiAnalisis")}
              <br />
              {t("risetInformasiAnalisis2")}
              <br />
              {t("risetInformasiAnalisis3")}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-neutral-400 text-sm md:text-xl my-4 font-light w-full leading-relaxed lg:w-full"
            >
              {t("risetInformasiAnalisis4")}
            </motion.h2>
          </div>
        </section>

        <section>
          <div className="min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
              {fokusSections.map((section, index) => (
                <motion.div
                  key={index}
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
  );
}
