import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScriptLoader from "@/components/ScriptLoader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - Talking Minds – Psychotherapist Site Template",
  description: "Private Mental Health Consultation from a Professional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/site_logo/favourite_icon.svg" />
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/fontawesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/animate.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/cursor.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/slick-theme.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/odometer.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
      </head>
      <body>
        <div className="page_wrapper">
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
