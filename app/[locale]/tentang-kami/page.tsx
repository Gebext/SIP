import Head from "next/head";
import AboutSection from "./components/about-section";
import SIPAboutSection from "./components/sip-about-section";
import { useTranslations } from "next-intl"; // Import untuk menangani terjemahan

export default function About() {
  const t = useTranslations(); // Mengambil pesan dari locale

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: t("site.title"), // Menggunakan site.title dari en.json atau id.json
      url: "https://sip-jkt.com",
      description: t("site.description"), // Menggunakan site.description dari en.json atau id.json
    },
  };

  return (
    <>
      <Head>
        {/* Title dan Meta Description */}
        <title>{t("meta.aboutTitle")}</title>
        <meta name="description" content={t("meta.aboutDescription")} />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:image" content={t("meta.ogImage")} />
        <meta property="og:url" content={t("meta.ogUrl")} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content={t("meta.twitterCard")} />
        <meta name="twitter:title" content={t("meta.twitterTitle")} />
        <meta
          name="twitter:description"
          content={t("meta.twitterDescription")}
        />
        <meta name="twitter:image" content={t("meta.twitterImage")} />

        {/* Metadata Tambahan */}
        <meta name="robots" content={t("meta.robots")} />
        <link rel="canonical" href={t("meta.canonicalUrl")} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main>
        <AboutSection />
        <SIPAboutSection />
      </main>
    </>
  );
}
