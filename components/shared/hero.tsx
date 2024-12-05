"use client";

import { useState } from "react";
import Navigation from "../ui/navbar";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black">
      <header className=" top-0 w-full p-8 flex justify-between items-center z-10">
        <div className="flex gap-4 text-gray-400">
          <span>/ Digital Agency</span>
        </div>
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
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <div className="min-h-screen bg-black flex flex-col items-center justify-center relative px-4">
        {/* Eclipse effect */}
        <div className="absolute top-[15%] w-64 h-64 bg-white rounded-full blur-3xl opacity-20" />

        {/* Main content */}
        <div className="relative space-y-6 text-center">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight tracking-tight">
            Together, we are bigger
            <br />
            Than BlackRock
          </h1>
        </div>
      </div>

      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
