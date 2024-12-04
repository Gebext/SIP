'use client'

import { useState } from 'react'
import Navigation from '../ui/navbar'

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-white">
      <header className="absolute top-0 w-full p-8 flex justify-between items-center z-10">
        <div className="flex gap-4 text-gray-600">
          <span>/ 01</span>
          <span>/ Digital Agency</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-gray-900 text-xl font-light font-serif">
            SIP.
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </header>
      
      <main className="min-h-screen flex items-center px-8">
        <h1 className="text-gray-900 text-6xl md:text-7xl lg:text-8xl font-light leading-tight max-w-4xl">
          Elevating Brands through Digital Innovation.
        </h1>
      </main>

      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  )
}
