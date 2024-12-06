"use client";

import { useState, useEffect } from "react";
import Navigation from "../ui/navbar";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Logo from "../../public/sip-logo.png";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

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

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.2, 1],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Sparkling gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(29, 78, 216, 0.3), transparent 70%)",
            "radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.3), transparent 70%)",
            "radial-gradient(circle at 80% 20%, rgba(29, 78, 216, 0.3), transparent 70%)",
            "radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.3), transparent 70%)",
            "radial-gradient(circle at 20% 20%, rgba(29, 78, 216, 0.3), transparent 70%)",
          ],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Sparkling particles */}
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0],
            scale: [0, Math.random() * 0.5 + 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 w-full h-screen bg-black bg-opacity-50 lg:px-32">
        <header className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-20">
          <div className="flex items-center justify-between w-full gap-4">
            <div>
              <Image src={Logo} alt="logo" className="w-12" />
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
          className="w-full h-screen flex flex-col items-center justify-center px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated glow effect */}
          <motion.div
            className="absolute w-96 h-96 bg-white rounded-full filter blur-3xl"
            variants={glowVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Rotating sparkling circle */}
          <motion.div
            className="absolute w-full h-full opacity-20"
            style={{ borderRadius: "40%" }}
            animate={controls}
          >
            {[...Array(100)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute bg-purple-500 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, Math.random() * 0.5 + 0.5, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
                style={{
                  width: Math.random() * 2 + 1 + "px",
                  height: Math.random() * 2 + 1 + "px",
                }}
              />
            ))}
          </motion.div>

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
            <motion.p
              className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover the power of our innovative platform
            </motion.p>
          </motion.div>
        </motion.div>

        <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </div>
  );
}
