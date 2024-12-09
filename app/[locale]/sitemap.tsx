import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [
    { url: "https://sip-jkt.com", lastModified: new Date() },
    { url: "https://sip-jkt.com/about", lastModified: new Date() },
    { url: "https://sip-jkt.com/fokus-layanan", lastModified: new Date() },
  ];

  // Menambahkan halaman dinamis jika ada, contoh:
  // const dynamicPages = await fetchSomeDynamicPages(); // Fetch halaman dinamis dari database atau API

  // Gabungkan halaman statis dan dinamis
  const allPages = [...pages];

  return allPages.map((page) => ({
    url: page.url,
    lastModified: page.lastModified,
  }));
}
