import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "id"],
  defaultLocale: "id",
});

export default function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Redirect /robots.txt to /api/robots
  if (url.pathname === "/robots.txt") {
    return NextResponse.rewrite(new URL("/api/robots", request.url));
  }

  // Apply next-intl middleware for locale handling
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(en|id)/:path*", "/robots.txt"], // Tambahkan /robots.txt ke matcher
};
