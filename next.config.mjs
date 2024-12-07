// ** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  // Your other Next.js config options here
};

export default withNextIntl(nextConfig);
