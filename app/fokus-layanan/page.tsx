"use client";

import EachFokusSection from "@/components/shared/eachfokuslayanan";
import Navigation from "@/components/ui/navbar";
import { useState } from "react";

interface FokusSectionData {
  title: string;
  heading: string;
  description: string;
  imageRight: boolean;
}

const fokusSections: FokusSectionData[] = [
  {
    title: "Digital Strategy",
    heading: "Intelligent strategies that speak to today's Consumer.",
    description:
      "Consumer Insights & Trends, Go-To-Market Planning, Data Science & Analytics, Product Strategy & Roadmapping.",
    imageRight: false,
  },
  {
    title: "Branding",
    heading: "We make better Brands and make Brands better.",
    description:
      "Brand Strategy, Brand Identity & Positioning, Visual Language, Brand Messaging, Brand Implementation & Guidelines.",
    imageRight: true,
  },
  {
    title: "User Experience",
    heading: "Crafting intuitive experiences for all users.",
    description:
      "Experience Design, Usability Testing, Information Architecture, Accessibility & Inclusivity Design.",
    imageRight: false,
  },
  {
    title: "Technology",
    heading: "Innovative technologies tailored to your needs.",
    description:
      "Full-Stack Development, Mobile Applications, Cloud Solutions, Emerging Technologies like AI and Blockchain.",
    imageRight: true,
  },
];




export default function FokusLayanan() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <section className="h-screen">
        <div className="flex justify-end">
          <div className="flex items-center gap-4">
            <div className="text-gray-100 text-xl font-light font-serif">SIP.</div>
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
        <div className="max-w-5xl py-64 mx-auto">
          <h2 className="text-sm font-light mb-6">/ Expertise</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Elevating Brands through
            <br />
            innovation in Digital
            <br />
            Transformation.
          </h1>
        </div>
      </section>

      <section>
        <div className="min-h-screen bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
            {/* Digital Strategy Section */}
            {fokusSections.map((section, index) => (
              <EachFokusSection
                key={index}
                title={section.title}
                heading={section.heading}
                description={section.description}
                imageRight={section.imageRight}
              />
            ))}
          </div>
        </div>
      </section>

      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </section>
  );
}
