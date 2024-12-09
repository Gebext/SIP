import { NextResponse } from "next/server";

export async function GET() {
  // Define your site's URLs
  const urls = [
    { loc: "https://sip-jkt.com/", changefreq: "daily", priority: 1.0 },
    { loc: "https://sip-jkt.com/en", changefreq: "daily", priority: 0.8 },
    { loc: "https://sip-jkt.com/id", changefreq: "daily", priority: 0.8 },
    // Add more URLs here as needed
  ];

  // Generate the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXML(url.loc)}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  // Return the XML sitemap with the correct content type
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

// Helper function to escape XML special characters
function escapeXML(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
