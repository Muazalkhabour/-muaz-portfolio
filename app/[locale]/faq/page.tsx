import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FAQSection from "@/components/faq-section";
import SiteSubpageFrame from "@/components/site-subpage-frame";
import { faqItems } from "@/lib/site-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const decisionNotes = [
  "This page presents the main criteria for deciding between a full website and a landing page before implementation begins.",
  "If the current site fails to clarify value or direct the next action, the issue is usually structural rather than merely cosmetic.",
  "The brief form is the appropriate next step when the objective is to move toward a more defined scope of work.",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": faqItems.en.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${siteUrl}/en`,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "FAQ",
          "item": `${siteUrl}/en/faq`,
        },
      ],
    },
  ],
};

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  return {
    title: "FAQ | MUAZ TECH",
    description: "A dedicated FAQ page answering pre-implementation questions such as format choice and the type of intervention required for the project.",
    alternates: {
      canonical: "/en/faq",
      languages: {
        ar: "/faq",
        en: "/en/faq",
        "x-default": "/faq",
      },
    },
    openGraph: {
      title: "FAQ | MUAZ TECH",
      description: "Direct answers to the main questions that precede website or landing-page implementation.",
      url: `${siteUrl}/en/faq`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function EnglishFAQPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  return (
    <SiteSubpageFrame
      locale="en"
      eyebrow="FAQ"
      title="Reference questions for evaluating the decision before implementation"
      description="This page brings together the questions that commonly arise before work begins, including whether the project requires a full website or a landing page and whether the required intervention is partial or structural."
      currentLabel="FAQ"
      alternateHref="/faq"
      alternateLabel="العربية"
      navLinks={[
        { label: "Services", href: "/en/services" },
        { label: "Technologies", href: "/en/technologies" },
        { label: "Projects", href: "/en/projects" },
        { label: "FAQ", href: "/en/faq" },
        { label: "Contact", href: "/en/contact" },
      ]}
      primaryAction={{ label: "Go to the contact page", href: "/en/contact" }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <FAQSection
        eyebrow="DECISION FAQ"
        title="Reference answers to the questions that precede implementation"
        description="The purpose of this section is to provide a clearer basis for decision-making before time and budget are committed to an unsuitable path."
        items={faqItems.en}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-8">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">BEFORE YOU START</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">When is the decision sufficiently defined for implementation?</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {decisionNotes.map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Go to contact page
            </Link>
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}