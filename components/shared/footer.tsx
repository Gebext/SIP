"use client";

import { useState } from "react";

const navigationLinks = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "#" },
      { label: "Tentang Kami", href: "#" },
      { label: "Fokus Layanan", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Additional",
    links: [
      { label: "Whatsapp", href: "#" },
      { label: "Telegram", href: "#" },
      { label: "X", href: "#" },
    ],
  },
];

const officeLocations = [
  {
    id: "jakarta",
    name: "Jakarta Office",
    address: [
      "Samudra Intidaya Perkasa",
      "Gedung Mandira Lantai 3 NO. 308",
      "Jl. R.P. Soeroso No. 33",
      "Menteng - Jakarta Pusat 10350",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4276.421212198338!2d106.83149734569771!3d-6.192814977844081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43e979ba7b9%3A0xebcc2399febc545f!2sGEDUNG%20MANDIRA!5e1!3m2!1sid!2sid!4v1733371605234!5m2!1sid!2sid",
  },
  // Add more offices as needed
];

export default function Footer() {
  const [activeMap, setActiveMap] = useState("jakarta");

  return (
    <footer className="bg-neutral-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-7xl md:text-8xl mb-10">Let's Talk</h2>

        {/* Google Maps Embed */}
        <div className="mb-20">
          <div className="flex space-x-4 mb-4">
            {officeLocations.map((office) => (
              <button
                key={office.id}
                onClick={() => setActiveMap(office.id)}
                className={`px-4 py-2 rounded ${
                  activeMap === office.id
                    ? "bg-black text-white border-white/20 hover:bg-white/10 hover:text-white"
                    : "bg-white text-black"
                }`}
              >
                {office.name}
              </button>
            ))}
          </div>
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            {officeLocations.map(
              (office) =>
                activeMap === office.id && (
                  <iframe
                    key={office.id}
                    src={office.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title={office.name}
                  ></iframe>
                )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {officeLocations.map((office) => (
            <div key={office.id} className="space-y-4">
              <h3 className="text-lg text-gray-300 mb-6">{office.name}</h3>
              <div className="space-y-1 text-sm text-gray-400">
                {office.address.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          ))}

          {navigationLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <ul className="space-y-3 text-sm text-gray-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <span>© 2024 Fleava.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
