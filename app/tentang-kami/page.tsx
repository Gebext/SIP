"use client";

import Navigation from "@/components/ui/navbar";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function AboutSection() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="bg-black py-16 px-4 md:px-8 lg:px-16">
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
      {/* Introduction Section */}
      <div className="min-h-screen  flex text-white px-4 py-24 md:px-6 lg:px-8">
        <div className="flex justify-end"></div>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-8">
            <span className="text-sm md:text-base opacity-80">
              / About Fleava
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight tracking-tight">
            We create award
            <br />
            <span className="border-t border-white/20 block pt-4 mt-4">
              winning Websites,
            </span>
            <span className="block">memorable Campaigns,</span>
            <span className="block">&amp; remarkable Brands.</span>
          </h1>
        </div>
      </div>

      {/* Animated Section */}
      <div
        ref={ref}
        className="min-h-screen bg-black text-white flex flex-col items-start justify-between p-8 md:p-16"
      >
        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl"
        >
          <div className="flex gap-12 items-start">
            {/* Rotating SVG Animation */}
            <motion.div
              initial={{ rotate: -90 }}
              animate={isInView ? { rotate: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-24 h-24"
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

            {/* Animated Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex-1 text-2xl md:text-4xl leading-relaxed"
            >
              Based out of <span className="underline">Singapore</span> and{" "}
              <span className="underline">Bali, Indonesia</span>, Fleava has
              become one of the best quality Digital Agencies Worldwide. Our
              focus has always been to create enjoyable, intuitive, engaging,
              and remarkable experiences for people — that's what sets us apart
              from everyone else.
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex lg:justify-center lg:items-center w-full"
        >
          <div className="flex lg:flex-col lg:items-center gap-3 text-sm md:text-base">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M16 2L20 10L28 11L22 17L24 25L16 21L8 25L10 17L4 11L12 10L16 2Z"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
            <div className="uppercase tracking-widest lg:text-center">
              Agency of the year
              <div className="opacity-60 text-sm">Nominated</div>
            </div>
          </div>
        </motion.div>
      </div>

      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </section>
  );
}
