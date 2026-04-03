import type { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "معاذ الشمطي | MUAZ TECH",
    short_name: "MUAZ TECH",
    description: "موقع احترافي لعرض خدمات تطوير الويب، تصميم الواجهات، وصفحات الهبوط وبناء الحضور الرقمي.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    lang: "ar",
    dir: "rtl",
    categories: ["portfolio", "business", "technology", "design"],
    orientation: "portrait",
    scope: "/",
    id: siteUrl,
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}