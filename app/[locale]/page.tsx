import Head from "next/head";
import Hero from "@/components/shared/hero";
import Fokus from "@/components/shared/fokuslayanansection";
import IntroductionHome from "@/components/shared/introduction";
import { useTranslations } from "next-intl"; // Import untuk menangani terjemahan

export default function Home() {
  const t = useTranslations(); // Mengambil pesan dari locale

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://sip-jkt.com",
    name: t("meta.ogTitle"), // Menggunakan siteTitle dari en.json atau id.json
    description: t("meta.ogDescription"), // Menggunakan siteDescription dari en.json atau id.json
  };

  return (
    <>
      <Head>
        {/* Title dan Meta Description */}
        <title>{`${t(
          "meta.ogTitle"
        )} | PT Samudra Intidaya Perkasa (SIP)`}</title>
        <meta name="description" content={t("meta.ogDescription")} />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content={`${t("meta.ogTitle")} | PT Samudra Intidaya Perkasa (SIP)`}
        />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:image" content={t("meta.ogImage")} />
        <meta property="og:url" content={t("meta.ogUrl")} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${t(
            "meta.twitterTitle"
          )} | PT Samudra Intidaya Perkasa (SIP)`}
        />
        <meta
          name="twitter:description"
          content={t("meta.twitterDescription")}
        />
        <meta name="twitter:image" content={t("meta.twitterImage")} />

        {/* Metadata Tambahan */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={t("meta.canonicalUrl")} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main>
        <Hero />
        <IntroductionHome />
        <Fokus />
      </main>
    </>
  );
}
