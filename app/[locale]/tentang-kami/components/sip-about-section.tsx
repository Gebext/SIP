"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function SIPAboutSection() {
  const t = useTranslations();

  return (
    <section className="bg-black text-white  pb-24">
      <div className="container py-8 px-8 sm:px-6 lg:px-12 max-w-[1400px] mx-auto ">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight mb-12"
        >
          {t("tentangSIP")}
          <span className="block">
            {t("samudraIntidaya")} {t("perkasa")}
          </span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-24 h-24 flex-shrink-0"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
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
                  className="origin-center"
                />
              ))}
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-1 text-xl md:text-2xl leading-relaxed space-y-6"
          >
            <p>{t("sipDescription")}</p>
            <p>{t("sipCapabilities")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
