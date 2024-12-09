import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://sip-jkt.com";

export async function GET() {
  const robots = `
    User-agent: *
    Allow: /

    Sitemap: ${BASE_URL}/api/sitemap
  `;

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
