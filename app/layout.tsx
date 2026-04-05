import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollToTop from "@/components/ScrollToTop";
import ScriptLoader from "@/components/ScriptLoader";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Klinik Psikolog Berre Yılmaz - Psikolojik Danışmanlık",
    template: "%s | Klinik Psikolog Berre Yılmaz"
  },
  description: "Gebze/Kocaeli'de bireysel terapi, çift terapisi ve online terapi hizmetleri. 3+ yıllık deneyim ile profesyonel psikolojik destek.",
  keywords: "psikolog gebze, klinik psikolog, çift terapisi, bireysel terapi, online terapi, psikolojik danışmanlık, berre yılmaz, kocaeli psikolog",
  authors: [{ name: "Berre Yılmaz" }],
  creator: "Berre Yılmaz",
  publisher: "Klinik Psikolog Berre Yılmaz",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Klinik Psikolog Berre Yılmaz",
    title: "Klinik Psikolog Berre Yılmaz - Psikolojik Danışmanlık",
    description: "Gebze/Kocaeli'de bireysel terapi, çift terapisi ve online terapi hizmetleri.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.psikologberreyilmaz.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="shortcut icon" href="/images/site_logo/favourite_icon.svg" />
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/fontawesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/animate.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/slick-theme.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/odometer.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
      </head>
      <body>
        <GoogleAnalytics />
        <div className="page_wrapper">
          <ScrollToTop />
          <BackToTop />
          <Header />
          <main className="page_content">
            {children}
          </main>
          <Footer />
        </div>
        <ScriptLoader />
      </body>
    </html>
  );
}
