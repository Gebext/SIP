"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Fokus() {
  const locale = useLocale();
  const t = useTranslations();
  const router = useRouter();

  const expertise = [
    { id: "01", title: t("riset"), target: "riset" },
    { id: "02", title: t("dataAndAnalysis"), target: "dataAndAnalysis" },
    { id: "03", title: t("formula"), target: "formula" },
    { id: "04", title: t("admove"), target: "admove" },
  ];

  const handleScrollToSection = (target: string) => {
    router.push(`/${locale}/fokus-layanan#${target}`);
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center py-20 lg:px-32 px-4">
      <section className="container py-8 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        <header className="mb-6">
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            className="text-neutral-400"
          >
            <Link href={`/${locale}/fokus-layanan`}>
              / {t("fokusLayananSec")}
            </Link>
          </motion.span>
        </header>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-md md:text-2xl lg:text-3xl font-light leading-tight mb-24 md:w-1/2"
        >
          {t("risetInformasiAnalisis")}
        </motion.h1>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                ease: "easeInOut",
                duration: 0.8,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-baseline cursor-pointer hover:text-zinc-300"
              onClick={() => handleScrollToSection(item.target)}
            >
              <h2 className="text-xl md:text-6xl lg:text-7xl font-light tracking-tight">
                {item.title}
              </h2>
              <span className="text-zinc-600 text-sm ml-4">{item.id}</span>
              {index % 2 === 0 && index < expertise.length - 1 && (
                <span className="text-xl md:text-6xl lg:text-7xl mx-4 text-zinc-600">
                  /
                </span>
              )}
            </motion.div>
          ))}

          <motion.div
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors pt-8 group"
          >
            <Link href={`/${locale}/fokus-layanan`} className="text-lg">
              {t("exploreAll")}
            </Link>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </motion.div>
      </section>
    </section>
  );
}
