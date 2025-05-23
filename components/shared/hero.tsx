"use client";

import { useState, useEffect } from "react";
import Navigation from "../ui/navbar";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Header from "./header";
import { TypeAnimation } from "react-type-animation";

const Sparkle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

export default function Hero() {
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sparkles, setSparkles] = useState<number[]>([]);

  useEffect(() => {
    setSparkles(Array.from({ length: 50 }, (_, i) => i));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const eclipseVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.2,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen bg-black lg:px-32">
      <section className="container py-8 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        <Header />
        <motion.div
          className="flex w-full h-[calc(100dvh-98px)] flex-col items-center justify-center relative px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Sparkling effect */}
          {sparkles.map((_, index) => (
            <Sparkle key={index} delay={Math.random() * 5} />
          ))}

          {/* Eclipse effect */}
          <motion.div
            className="absolute top-[15%] w-64 h-64 bg-white rounded-full blur-3xl opacity-20"
            variants={eclipseVariants}
          />

          {/* Main content */}
          <motion.div
            className="relative space-y-6 text-center"
            variants={itemVariants}
          >
            <h1
              className="
            text-white 
              text-5xl md:text-6xl lg:text-7xl 
              font-serif 
              max-w-4xl 
              tracking-tight 
              font-light 
              leading-[1.1] 
              text-shadow-neon
              "
            >
              The <span className="font-bold">SIP</span> Innovation,
              <TypeAnimation
                sequence={["Grab the Future", 1000, "", 500]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </h1>
          </motion.div>
        </motion.div>
      </section>

      <Navigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        locale={locale}
      />
    </div>
  );
}
