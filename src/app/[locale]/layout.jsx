import "../globals.css";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/common/header";

import { ReactLenis } from "@/utils/lenis";
import Footer from "@/components/common/footer";
import { getTranslations } from "next-intl/server";

const interTight = localFont({
  src: [
    {
      path: "../../fonts/InterTight-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/InterTight-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/InterTight-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/InterTight-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/InterTight-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/InterTight-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/InterTight-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale });

  return {
    title: `Solvex Network | ${t("metadata.title")}`,
    description: t("metadata.title"),
    keywords: t("metadata.title"),
    robots: "index, follow",
    icons: {
      icon: [{ url: "/logo.png", type: "image/png", sizes: "512x512" }, ,],
    },
    // meta: [
    //   {
    //     name: "google-site-verification",
    //     content: "im-2q85dxUJnm9vFy7b2UdfvJKVljHp6Fz9o07cHyWQ",
    //   },
    // ],
  };
}

export default async function LocaleLayout({ params, children }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <ReactLenis root>
        <body
          className={`${interTight.variable} font-inter bg-dark-black overflow-x-hidden antialiased transition-transform duration-300`}
        >
          <main
            id="layout-main"
            className="fluid gridContainer w-full transition-transform duration-300"
          >
            <NextIntlClientProvider>
              <Header />
              {children}
              <Footer />
            </NextIntlClientProvider>
          </main>
        </body>
      </ReactLenis>
    </html>
  );
}
