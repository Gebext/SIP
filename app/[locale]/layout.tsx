import "../globals.css";
import Footer from "@/components/shared/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; // Await the params Promise
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Meta Tags Umum */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PT Samudra Intidaya Perkasa" />
        <meta
          name="description"
          content="Temukan bagaimana PT Samudra Intidaya Perkasa (SIP) membantu Anda meraih masa depan dengan inovasi dan transformasi digital."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:locale"
          content={locale === "id" ? "id_ID" : "en_US"}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@yourtwitterhandle" />
        <link rel="icon" href="/favicon.ico" />

        {/* Dynamic Meta Title */}
        <title>PT. Samudra Intidaya Perkasa (SIP)</title>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <main>
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
