"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { SubscriptionToast } from "@/components/ui/subscription-toast";
import {
  FaWhatsapp,
  FaTelegram,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
  icon?: JSX.Element;
}

// Data untuk link social media
const socialLinks: LinkItem[] = [
  { label: "Whatsapp", href: "https://wa.me/123456789", icon: <FaWhatsapp /> },
  { label: "Telegram", href: "https://t.me/yourchannel", icon: <FaTelegram /> },
  {
    label: "Twitter",
    href: "https://x.com/i/flow/login?redirect_after_login=%2FSIP_SamudraInti",
    icon: <FaTwitter />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sip_samudrainti/",
    icon: <FaInstagram />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pt-samudra-intidaya-perkasa-sip-453b51340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    icon: <FaLinkedin />,
  },
];

// Data untuk navigasi
const navigationLinks: { label: string; href: string }[] = [
  { label: "home", href: "/" },
  { label: "tentangKami", href: "/tentang-kami" },
  { label: "fokusLayanan", href: "/fokus-layanan" },
  { label: "blog", href: "/blog" },
];

const officeLocations = [
  {
    id: "jakarta",
    name: "kantorResmi",
    companyName: "PT. Samudra Intidaya Perkasa (SIP)",
    address: [
      "Gedung Mandira Lantai 3 No. 308",
      "Jl. R.P. Soeroso No. 33",
      "Menteng - Jakarta Pusat 10350",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4276.421212198338!2d106.83149734569771!3d-6.192814977844081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43e979ba7b9%3A0xebcc2399febc545f!2sGEDUNG%20MANDIRA!5e1!3m2!1sid!2sid!4v1733371605234!5m2!1sid!2sid",
  },
];

export default function Footer() {
  const local = useLocale();
  const [activeMap, setActiveMap] = useState("jakarta");
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const t = useTranslations();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`/api/subscribe`, {
        email,
      });
      setEmail("");
      setShowToast(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-20">
      <div className="container py-8 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-white text-7xl md:text-8xl mb-10">
          {t("letstalk")}
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
                {t(office.name)}
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
                    title={t(office.name)}
                    aria-label={`Map showing location of ${t(office.name)}`}
                  ></iframe>
                )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Office Locations */}
          {officeLocations.map((office) => (
            <div key={office.id} className="space-y-2">
              <h3 className="text-lg text-gray-300">{t(office.name)}</h3>
              <h3 className="text-gray-300 text-sm">{office.companyName}</h3>
              <div className="space-y-1 text-sm text-gray-400">
                {office.address.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Navigation Links */}
          <div className="space-y-4">
            <ul className="space-y-3 text-sm text-gray-400">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={`/${local}${link.href}`}
                    className="hover:text-white"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <ul className="space-y-3 text-sm text-gray-400">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-2"
                  >
                    {link.icon && <span>{link.icon}</span>}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("subs")}</h3>
            <form onSubmit={(e) => handleSubscribe(e)} className="flex gap-4">
              <Input
                type="email"
                placeholder={t("enterEmail")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow bg-neutral-800 text-white border-neutral-700"
              />
              <Button type="submit" variant="secondary">
                {t("subscribe")}
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PT. Samudra Intidaya Perkasa
            (SIP). All rights reserved.
          </p>
        </div>
      </div>
      {showToast && (
        <SubscriptionToast
          message="Thank you for subscribing!"
          onClose={() => setShowToast(false)}
        />
      )}
    </footer>
  );
}
