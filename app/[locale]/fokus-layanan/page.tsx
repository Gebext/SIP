"use client";

import EachFokusSection from "@/components/shared/eachfokuslayanan";
import Navigation from "@/components/ui/navbar";
import { useState } from "react";
import { useLocale } from "next-intl";

interface FokusSectionData {
  title: string;
  heading: string;
  description: string;
  imageRight: boolean;
}

const fokusSections: FokusSectionData[] = [
  {
    title: "Riset",
    heading: "Melakukan riset kualitatif dan kuantitatif secara komprehensif.",
    description:
      "dengan didukung data yang valid sehingga membantu klien dalam memecahkan kompleksitas dan akar masalah yang dihadapi. Kami melakukan kajian, penelitian dan memberikan layanan di bidang kebijakan publik, ekonomi bisnis dan sosial yang membantu mengidentifikasi masalah, merumuskan strategi kebijakan yang akurat dan memberikan solusi yang tepat dalam pengambilan keputusan secara efektif dan rasional mencerahkan.",
    imageRight: false,
  },
  {
    title: "Rekomendasi dan Formulasi Strategis",
    heading: "Dengan didukung para ahli di bidangnya masing-masing.",
    description:
      "kami memberikan rekomendasi strategis yang berbasiskan integrasi data dan informasi sehingga membantu klien dalam menentukan keputusan strategis yang lebih baik. Klien akan lebih mudah merumuskan pembuatan kebijakan yang akurat, tepat waktu dan berkualitas serta membantu agar proses tahapannya lebih terukur, mulai dari perencanaan, pemantauan, analis data dan fase evaluasinya.",
    imageRight: true,
  },
  {
    title: "Data dan Analisis",
    heading:
      "Berbasiskan jaringan yang luas, kami dapat memperoleh data dan informasi akurat.",
    description:
      "saat melakukan pemetaan kebutuhan dan tantangan klien. Sekmen ini termasuk survei pasar, survei opini publik, survei perilaku yang diperlukan di lapangan. Dengan pendekatan kajian ilmian, klien akan dimudahkan saat hendak mengetahui potensi dan keunggulannya sehingga target klien bisa lebih terukur.",
    imageRight: false,
  },
  {
    title: "AdMove/Advokasi",
    heading:
      "Kami juga turut serta membuka kesempatan kerjasama dengan berbagai stakeholder.",
    description:
      "untuk mendorong terwujudnya berbagai isu strategis yang berkontribusi terhadap peningkatan kualitas keadaban dan kepentingan publik, yang mempercepat terciptanya kesejahteraan dan keadilan sosial melalui program-program yang menyentuh akar rumput dalam bentuk grassroots activation maupun pemetaan lapangan.",
    imageRight: true,
  },
];

export default function FokusLayanan() {
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <section className="h-screen">
        <header className="flex justify-end">
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
                  <path d="M3 12h18M3 6h18M3 18h18" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </header>
        <div className="max-w-5xl py-64 mx-auto">
          <h2 className="text-sm font-light mb-6">/ Fokus Layanan</h2>
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

      <Navigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        locale={locale}
      />
    </section>
  );
}
