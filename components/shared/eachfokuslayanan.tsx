"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface SectionProps {
  title: string;
  heading: string;
  description: string;
  image: string;
  imageRight: boolean;
}

export default function EachFokusSection({
  title,
  heading,
  description,
  image,
  imageRight,
}: SectionProps) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <section className="grid md:grid-cols-2 gap-12 items-center py-16">
      {/* Image Section */}
      <div
        className={`relative h-[400px] ${
          imageRight ? "order-2 md:order-2" : "order-2 md:order-1"
        }`}
      >
        <Image
          width={700}
          height={700}
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div
        className={`space-y-6 ${
          imageRight ? "order-1 md:order-1" : "order-1 md:order-2"
        }`}
      >
        <h2 className="text-zinc-400 text-sm uppercase tracking-wider">
          {title}
        </h2>
        <div>
          <button
            onClick={toggleDescription}
            className="flex items-center justify-between w-full text-left focus:outline-none"
          >
            <h3 className="md:text-4xl text-3xl font-light leading-tight">
              {heading}
            </h3>
            <motion.div
              animate={{ rotate: isDescriptionVisible ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-6 h-6 text-zinc-400" />
            </motion.div>
          </button>
          <AnimatePresence>
            {isDescriptionVisible && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-zinc-400 text-lg mt-4">{description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
