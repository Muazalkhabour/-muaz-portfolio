import type { Metadata } from "next";
import { Geist_Mono, Tajawal } from "next/font/google";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const siteName = "MUAZ TECH";
const seoTitle = "معاذ الشمطي | مطور ويب وتطوير واجهات رقمية احترافية";
const seoDescription =
  "موقع معاذ الشمطي لعرض خدمات تطوير الويب، تصميم الواجهات الحديثة، بناء صفحات الهبوط، وتحسين الحضور الرقمي عبر تجربة سريعة واحترافية.";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | معاذ الشمطي",
  },
  description: seoDescription,
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  keywords: [
    "معاذ الشمطي",
    "MUAZ TECH",
    "مطور ويب",
    "تطوير مواقع",
    "تصميم واجهات",
    "Next.js",
    "Portfolio",
    "صفحات هبوط",
    "تسويق رقمي",
    "واجهة مستخدم",
  ],
  authors: [{ name: "معاذ الشمطي", url: siteUrl }],
  creator: "معاذ الشمطي",
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "/",
    languages: {
      ar: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName,
    locale: "ar_AR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MUAZ TECH portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: Promise<{ locale?: string }>;
}>) {
  const localePromise: Promise<{ locale?: string }> =
    params ?? Promise.resolve({ locale: undefined });

  return localePromise.then(({ locale }) => {
    const currentLocale = locale === "en" ? "en" : "ar";
    const currentDirection = currentLocale === "ar" ? "rtl" : "ltr";

    return (
      <html lang={currentLocale} dir={currentDirection}>
        <body
          className={`${tajawal.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    );
  });
}
