"use client";

import { motion } from "framer-motion";

const sponsors = [
  {
    name: "Amber",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "GSR",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "Mantle",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "IDSG",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "Kraken",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    name: "Morpho",
    logo: "/placeholder.svg?height=40&width=120",
  },
];

export default function SponsorMarquee() {
  return (
    <div className="bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-2xl md:text-3xl font-light mb-12 text-center">
          Trusted by industry leaders around the world
        </h2>

        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            {/* First Set of Logos */}
            <motion.div
              className="flex gap-16 items-center min-w-full"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex items-center justify-center w-[120px] opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </motion.div>

            {/* Duplicated Set of Logos */}
            <motion.div
              className="flex gap-16 items-center min-w-full absolute left-full"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {sponsors.map((sponsor) => (
                <div
                  key={`${sponsor.name}-duplicate`}
                  className="flex items-center justify-center w-[120px] opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
