"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

const navigationLinks = [
  { label: "home", href: "/" },
  { label: "tentangKami", href: "/tentang-kami" },
  { label: "fokusLayanan", href: "/fokus-layanan" },
  { label: "blog", href: "/blog" },
];

const officeLocations = [
  {
    city: "jakarta",
    address: [
      "Samudra Intidaya Perkasa",
      "Gedung Mandira Lantai 3 NO. 308",
      "Jl. R.P. Soeroso No. 33",
      "Menteng - Jakarta Pusat 10350",
    ],
  },
];

const additionalLinks = [
  { label: "hubungiKami", href: "/contact" },
  { label: "karir", href: "/karir" },
];

export default function Navigation({
  isOpen,
  onClose,
  locale,
}: NavigationProps) {
  const t = useTranslations();
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    setIsClosing(true);
    setTimeout(() => {
      router.push(`/${locale}${href}`); // Ensure locale is prefixed for correct navigation
      onClose();
    }, 300); // Adjust this delay to match your animation duration
  };

  return (
    <AnimatePresence>
      {(isOpen || isClosing) && (
        <motion.div
          className="fixed inset-0 bg-neutral-900 z-50"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <nav className="h-full flex flex-col justify-between p-8 text-neutral-200">
            <motion.button
              onClick={onClose}
              className="absolute top-8 right-8 p-2"
              aria-label="Close menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </motion.button>

            <div className="mt-20">
              <motion.ul
                className="space-y-4 text-5xl font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              >
                {navigationLinks.map((link) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    <a
                      href={`/${locale}${link.href}`} // Dynamically create href with locale
                      className="hover:text-white transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                    >
                      {t(link.label)} {/* Translate label */}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              {officeLocations.map((office) => (
                <div key={office.city}>
                  <h3 className="font-medium mb-4">{t(office.city)}</h3>
                  <p className="text-sm">
                    {office.address.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
