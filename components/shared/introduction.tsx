"use client";

import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import SponsorMarquee from "./partnership-marquee";

export default function IntroductionHome() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.8, duration: 1, ease: "easeOut" },
    },
  };

  const sparkleVariants = {
    hidden: { scale: 0, rotate: 0 },
    visible: {
      scale: 1,
      rotate: 360,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-neutral-200 p-8 lg:px-32 flex flex-col justify-between"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center justify-center mb-12">
        <motion.h1
          className="text-[#e6ddd5] text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-12 tracking-tight text-center"
          variants={headingVariants}
        >
          Accelerating Global
          <br />
          Brands
          <span className="inline-flex items-center mx-4">
            <span className="h-px w-12 bg-current" />
            <motion.span className="inline-block" variants={sparkleVariants}>
              <Sparkle className="w-8 h-8 mx-2 text-[#e6ddd5]" />
            </motion.span>
          </span>
          Years ahead.
        </motion.h1>
        <motion.p
          className="text-neutral-400 text-xl md:text-2xl font-light w-full leading-relaxed text-center"
          variants={textVariants}
        >
          Lorem ipsum dolor sit.—camet consectetur adipisicing elit.—Est vel
          dolorum, officia earum nemo quia. Ipsam, repudiandae.
        </motion.p>
      </div>

      {/* Marquee at the bottom */}
      <div className="mt-auto">
        <SponsorMarquee />
      </div>
    </motion.div>
  );
}
