import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactBriefForm from "@/components/contact-brief-form";
import SiteSubpageFrame from "@/components/site-subpage-frame";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const sections = [
  "An opening section presenting the core offer directly",
  "Trust elements and proof points suitable for the campaign or service",
  "A concise service or offer explanation within a clear reading structure",
  "One primary action repeated in the key positions",
];

const useCases = [
  {
    title: "A paid campaign needs a dedicated page",
    description: "When traffic originates from advertising and the destination page must remain limited to one clearly defined offer.",
  },
  {
    title: "One core service needs a stronger pitch",
    description: "When one service or offer must be presented directly without loading the page with unnecessary secondary information.",
  },
  {
    title: "A launch, offer, or campaign needs urgency",
    description: "Landing pages are suitable when the idea needs to be explained quickly with a direct action such as inquiry, booking, or purchase.",
  },
];

const metrics = [
  "Offer clarity in the opening screen",
  "Reduced choice count to preserve focus",
  "A stable primary action across key sections",
  "Performance suited to fast access and mobile use",
];

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  return {
    title: "Conversion-Focused Landing Pages | MUAZ TECH",
    description: "A landing-page service focused on precise offer presentation, content structure, and directing the user toward one explicit action.",
    alternates: {
      canonical: "/en/services/landing-pages",
      languages: {
        ar: "/services/landing-pages",
        en: "/en/services/landing-pages",
        "x-default": "/services/landing-pages",
      },
    },
    openGraph: {
      title: "Conversion-Focused Landing Pages | MUAZ TECH",
      description: "A detailed service page explaining when a landing page is the appropriate format and how it is implemented within the same site identity.",
      url: `${siteUrl}/en/services/landing-pages`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function EnglishLandingPagesServicePage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  return (
    <SiteSubpageFrame
      locale="en"
      eyebrow="LANDING PAGES"
      title="Landing pages for focused campaigns and single-offer presentation"
      description="This page explains when a landing page is more appropriate than a full website, and how it is structured to support one offer or campaign with one primary action."
      currentLabel="Service"
      alternateHref="/services/landing-pages"
      alternateLabel="العربية"
      navLinks={[
        { label: "Services", href: "/en/services" },
        { label: "Technologies", href: "/en/technologies" },
        { label: "Projects", href: "/en/projects" },
        { label: "FAQ", href: "/en/faq" },
        { label: "Contact", href: "/en/contact" },
      ]}
      primaryAction={{ label: "Submit a landing-page brief", href: "#project-brief" }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-4 font-mono text-sm tracking-[0.35em] text-amber-200/70">CORE SECTIONS</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">What makes a landing page effective?</h2>
            <div className="mt-6 grid gap-3">
              {sections.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-slate-950/40 px-4 py-4 text-sm leading-7 text-white/68">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-4 font-mono text-sm tracking-[0.35em] text-amber-200/70">CONVERSION FOCUS</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Execution priorities for landing pages</h2>
            <div className="mt-6 space-y-3">
              {metrics.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-white/68">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">BEST FIT</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">When should you choose a landing page instead of a full site?</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div id="project-brief">
            <ContactBriefForm locale="en" />
          </div>
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 backdrop-blur-xl sm:p-6">
              <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">BEST VALUE</p>
              <h3 className="text-xl font-semibold text-white">When is a landing page appropriate?</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                A landing page is appropriate when the request centers on one defined offer, one campaign, or one main service that should be presented directly.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-5 backdrop-blur-xl sm:p-6">
              <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">RELATED PATHS</p>
              <h3 className="text-xl font-semibold text-white">If the project scope expands later</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                A focused landing page can later be extended into a full website with additional services, projects, or content while preserving the same identity.
              </p>
              <Link href="/en/services/web-development" className="mt-5 inline-flex rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:border-amber-200/30 hover:text-amber-100">
                Go to web-development service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}