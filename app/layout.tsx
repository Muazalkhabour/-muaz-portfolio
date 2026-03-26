import type { Metadata } from "next";
import { Geist_Mono, Tajawal } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
    default: "معاذ الشمطي | مطور ويب",
    template: "%s | معاذ الشمطي",
  },
  description: "موقع شخصي احترافي لمعاذ الشمطي مبني باستخدام Next.js وTailwind CSS وFramer Motion مع مشهد ثلاثي الأبعاد حقيقي.",
  applicationName: "MUAZ Portfolio",
  keywords: ["معاذ الشمطي", "مطور ويب", "Next.js", "Portfolio", "واجهة مستخدم", "Three.js"],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "معاذ الشمطي | مطور ويب",
    description: "بورتفوليو شخصي حديث يعرض الأعمال، التقنيات، ووسائل التواصل ضمن تجربة تفاعلية ثلاثية الأبعاد.",
    url: siteUrl,
    siteName: "MUAZ Portfolio",
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "معاذ الشمطي | مطور ويب",
    description: "بورتفوليو شخصي حديث بتصميم احترافي ومشهد ثلاثي الأبعاد حقيقي.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${tajawal.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
