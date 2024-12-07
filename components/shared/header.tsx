"use client";

import { useState } from "react";
import Navigation from "@/components/ui/navbar";
import { useLocale } from "next-intl";
import LanguageSwitcher from "./languageswitcher";
import Logo from "../../public/sip-logo.png";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`w-full py-8  lg:px-0 ${className}`}>
      <div className="flex justify-between items-center">
        <Image src={Logo} alt="logo" className="w-12" />
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
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
      </div>
      <Navigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        locale={locale}
      />
    </header>
  );
}
