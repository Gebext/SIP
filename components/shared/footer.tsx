"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

const navigationLinks = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "Tentang Kami", href: "/about" },
      { label: "Fokus Layanan", href: "/services" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Additional",
    links: [
      { label: "Whatsapp", href: "https://wa.me/123456789" },
      { label: "Telegram", href: "https://t.me/yourchannel" },
      { label: "X", href: "https://twitter.com/yourprofile" },
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
];

const languages = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
];

export default function Footer() {
  const [activeMap, setActiveMap] = useState("jakarta");
  const [email, setEmail] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLanguage = languages.find(
      (lang) => lang.code !== pathname.split("/")[1]
    );
    if (newLanguage) {
      const path = pathname.split("/").slice(2).join("/");
      router.push(`/${newLanguage.code}/${path}`);
    }
  };

  const handleSubscribe = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    try {
      await axios.post(
        `/api/subscribe`, 
        {
          email
        }, 
      );
      setEmail("");
    } catch (error) {
      console.log(error);
    }
   
  };

  return (
    <footer className="bg-neutral-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-7xl md:text-8xl mb-10">
          {"Let's Talk"}
        </h2>

        {/* Google Maps Embed */}
        <div className="mb-20">
          <div className="flex space-x-4 mb-4">
            {officeLocations.map((office) => (
              <button
                key={office.id}
                onClick={() => setActiveMap(office.id)}
                className={`px-4 py-2 rounded ${
                  activeMap === office.id
                    ? "bg-black text-white border-white/20 hover:bg-white/10"
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
                    aria-label={`Map showing location of ${office.name}`}
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

        {/* Email Subscription */}
        <div className="mt-20 mb-10">
          <h3 className="text-xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form onSubmit={(e) => handleSubscribe(e)} className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-neutral-800 text-white border-neutral-700"
            />
            <Button type="submit" variant="secondary">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <span>© 2024 SIP.</span>
          </div>

          {/* Language Switcher */}
          <div className="mt-4 md:mt-0">
            <button
              onClick={toggleLanguage}
              className="bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-2 rounded-full transition-colors duration-200 flex items-center space-x-2"
            >
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-neutral-900 font-semibold text-xs">
                {pathname.split("/")[1].toUpperCase()}
              </span>
              <span className="text-xs font-medium">
                {pathname.split("/")[1] === "id"
                  ? "Bahasa Indonesia"
                  : "English"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
