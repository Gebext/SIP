"use client"

import { useState } from "react";
import Hero from "@/components/shared/hero";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      <header className="py-2">
        <h1 className="text-center text-5xl lg:text-6xl font-serif tracking-tight">SIP.</h1>
      </header>
      <nav className="border-y">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
         
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600"
            onClick={toggleMenu}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 mx-auto">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Fokus Layanan
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Blog
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 py-2 bg-gray-100">
            <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900 py-2">
              About
            </Link>
            <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900 py-2">
              Fokus Layanan
            </Link>
            <Link href="/blog" className="block text-sm text-gray-600 hover:text-gray-900 py-2">
              Blog
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
