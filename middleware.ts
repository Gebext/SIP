import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "id"],
  defaultLocale: "id",
});

export const config = {
  matcher: ["/", "/(en|id)/:path*"], // Fixed the regex for locale matching
};
