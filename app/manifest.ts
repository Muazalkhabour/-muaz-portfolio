import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "معاذ الشمطي | مطور ويب",
    short_name: "MUAZ",
    description: "موقع شخصي احترافي لمعاذ الشمطي يعرض الأعمال والخدمات ووسائل التواصل.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    lang: "ar",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}