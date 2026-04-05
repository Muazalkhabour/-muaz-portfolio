import type { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/technologies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${siteUrl}/approach`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${siteUrl}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/landing-pages`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${siteUrl}/en/services/web-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/en/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${siteUrl}/en/technologies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/en/approach`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.71,
    },
    {
      url: `${siteUrl}/en/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: `${siteUrl}/en/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${siteUrl}/en/services/landing-pages`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.68,
    },
    {
      url: `${siteUrl}/en/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.72,
    },
  ];
}