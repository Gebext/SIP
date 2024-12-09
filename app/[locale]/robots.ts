import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Untuk semua user agent (mesin pencari)
        allow: "/", // Mengizinkan akses ke seluruh situs
        disallow: ["/admin", "/privacy"], // Menyembunyikan halaman admin dan privacy
      },
    ],
    sitemap: "https://sip-jkt.com/sitemap.xml", // Menyertakan URL sitemap Anda
  };
}
