import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://sip-jkt.com";
const locales = ["en", "id"]; // Tambahkan locale lain jika perlu
const paths = ["", "/about", "/services"]; // Tambahkan path halaman lainnya

export async function GET() {
  const urls = locales.flatMap((locale) =>
    paths.map((path) => `${BASE_URL}/${locale}${path}`)
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${url}</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`
        )
        .join("")}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
