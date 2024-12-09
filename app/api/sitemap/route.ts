import { NextResponse } from "next/server";

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://sip-jkt.com/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://sip-jkt.com/en</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://sip-jkt.com/id</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      <!-- Tambahkan URL lainnya di sini -->
    </urlset>`;

  return NextResponse.json(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
