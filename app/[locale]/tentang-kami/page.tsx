"use client";

import Header from "@/components/shared/header";
import Navigation from "@/components/ui/navbar";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function AboutSection() {
  const t = useTranslations();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <section className="bg-black">
      <main className="container py-8 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        <Header />
        {/* Animated Introduction Section */}
        <div className="min-h-screen flex text-white px-4 py-12 md:px-6 lg:px-8">
          <div className="flex justify-end"></div>
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <span className="text-sm md:text-base opacity-80">
                / {t("perkenalan")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight tracking-tight"
            >
              {t("kamiAdalah")}
              <br />
              <span className="border-t border-white/20 block pt-4 mt-4">
                {t("orangVisioner")}
              </span>
              <span className="block">{t("orangProfessional")}</span>
            </motion.h1>
            {/* Animated Section */}
            <div className="bg-black text-white flex flex-col items-start md:justify-between md:py-32   md:p-16">
              {/* Animated Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-5xl"
              >
                <div className="md:flex flex flex-row-reverse py-4 md:py-0 md:flex-row md:gap-12 items-start">
                  <motion.div
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-24 h-24"
                  >
                    <svg
                      viewBox="0 0 100 100"
                      className="lg:block hidden w-full h-full"
                    >
                      {[...Array(24)].map((_, i) => (
                        <line
                          key={i}
                          x1="50"
                          y1="10"
                          x2="50"
                          y2="20"
                          stroke="currentColor"
                          strokeWidth="1"
                          transform={`rotate(${i * 15} 50 50)`}
                          className="origin-center  lg:block hidden"
                        />
                      ))}
                    </svg>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="md:flex-1 text-xl md:text-4xl md:leading-relaxed"
                  >
                    {t("perkenalanDesc")}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <Navigation
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          locale={locale}
        />
      </main>
    </section>
  );
}
