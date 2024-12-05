"use client";

import { useState } from "react";
import Navigation from "../ui/navbar";
import { motion } from "framer-motion";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <header className=" top-0 w-full p-8 flex justify-between items-center z-10">
        <div className="flex items-center justify-end w-full gap-4">
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
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <motion.div
        className="min-h-screen bg-black flex flex-col items-center justify-center relative px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eclipse effect */}
        <motion.div
          className="absolute top-[15%] w-64 h-64 bg-white rounded-full blur-3xl opacity-20"
          variants={eclipseVariants}
        />

        {/* Logo */}
        {/* <motion.img
          src="../../public/sip-logo.png"
          alt="SIP Logo"
          className="mb-8"
          variants={itemVariants}
        /> */}

        {/* Main content */}
        <motion.div
          className="relative space-y-6 text-center"
          variants={itemVariants}
        >
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight tracking-tight">
            Lorem ipsum dolor sit
            <br />
            amet consectetur.
          </h1>
        </motion.div>
      </motion.div>

      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
