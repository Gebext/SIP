'use client'

import Link from 'next/link'

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  return (
    <div
      className={`fixed inset-0 bg-neutral-900 transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <nav className="h-full flex flex-col justify-between p-8 text-neutral-200">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-2"
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="mt-20">
          <ul className="space-y-4 text-6xl font-light">
            <li>
              <Link href="/tentang-kami" className="hover:text-white transition-colors">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/fokus-layanan" className="hover:text-white transition-colors">
                Fokus Layanan
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-neutral-400">
          <div>
            <h3 className="font-medium mb-4">Jakarta</h3>
            <p className="text-sm">
              Jl. Casablanca Raya Kav. 88
              <br />
              Jakarta Selatan
              <br />
              12870, Indonesia
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Bali</h3>
            <p className="text-sm">
              Jalan Merta Agung, No.25,
              <br />
              Kerobokan Kelod, Badung
              <br />
              80361, Indonesia
            </p>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="/karir" className="hover:text-white transition-colors">
                  Karir
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

