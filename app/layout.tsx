import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://juanfelipej.dev"),
  title: {
    default: "Juan Felipe Jaramillo — Cybersecurity Engineer",
    template: "%s · Juan Felipe Jaramillo",
  },
  description:
    "Cybersecurity engineer building with AI — and securing what AI builds. ISC2 CC certified. Based in Bogotá.",
  keywords: [
    "cybersecurity",
    "AI",
    "IBM Guardium",
    "LangGraph",
    "RAG",
    "ISC2",
    "Juan Felipe Jaramillo",
    "Bogotá",
    "Colombia",
  ],
  authors: [{ name: "Juan Felipe Jaramillo Rodríguez" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_CO",
    title: "Juan Felipe Jaramillo — Cybersecurity Engineer",
    description:
      "Cybersecurity engineer building with AI — and securing what AI builds.",
    siteName: "juanfelipej.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Felipe Jaramillo — Cybersecurity Engineer",
    description:
      "Cybersecurity engineer building with AI — and securing what AI builds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Distinctive font pairing — not Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
