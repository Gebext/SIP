"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Fokus() {
  const expertise = [
    { id: "01", title: "Riset" },
    { id: "02", title: "Formulasi" },
    { id: "03", title: "Data dan Analisis" },
    { id: "04", title: "AdMove/Advokasi" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center py-20 lg:px-32 px-4">
      <div className="container mx-auto">
        <header className="mb-24">
          <motion.span
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-neutral-400"
          >
            / Fokus Layanan
          </motion.span>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex items-baseline"
            >
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight"
                variants={itemVariants}
              >
                {item.title}
              </motion.h2>
              <motion.span
                className="text-zinc-600 text-sm ml-4"
                variants={itemVariants}
              >
                {item.id}
              </motion.span>
              {index % 2 === 0 && index < expertise.length - 1 && (
                <motion.span
                  className="text-4xl md:text-6xl lg:text-7xl mx-4 text-zinc-600"
                  variants={itemVariants}
                >
                  /
                </motion.span>
              )}
            </motion.div>
          ))}

          <motion.div
            variants={linkVariants}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors pt-8 group"
          >
            <Link href="/fokus-layanan" className="text-lg">
              Explore all Fokus Layanan
            </Link>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
