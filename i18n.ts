import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "id"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  // Dynamically import messages based on the locale
  const messages = await import(`./messages/${locale}.json`);

  return {
    messages: messages.default,
  };
});
