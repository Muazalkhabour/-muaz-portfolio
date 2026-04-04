import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteSubpageFrame from "@/components/site-subpage-frame";
import TechnologyGroupCard from "@/components/technology-group-card";
import { marketingChannels, technologyGroups } from "@/lib/site-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const principles = ["Performance-first", "Conversion-aware UI", "Responsive by default", "Structured content flow"];

const marketingAccentClasses = [
  "from-fuchsia-300/16 via-rose-300/10 to-transparent",
  "from-sky-300/16 via-cyan-300/10 to-transparent",
  "from-amber-200/18 via-orange-300/10 to-transparent",
];

type PageProps = { params: Promise<{ locale: string }>; };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  return {
    title: "Technologies | MUAZ TECH",
    description: "The technologies, tools, and supporting digital channels used in building websites, interfaces, and related digital systems.",
    alternates: {
      canonical: "/en/technologies",
      languages: {
        ar: "/technologies",
        en: "/en/technologies",
        "x-default": "/technologies",
      },
    },
    openGraph: {
      title: "Technologies | MUAZ TECH",
      description: "Technical tools, implementation choices, and supporting digital channels used in building digital products and interfaces.",
      url: `${siteUrl}/en/technologies`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function EnglishTechnologiesPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  return (
    <SiteSubpageFrame
      locale="en"
      eyebrow="TECHNOLOGIES"
      title="Technologies and tools used in product and interface implementation"
      description="This page presents the technical foundation used in execution, clarifying the role of each tool group across interface development, motion treatment, and data or integration layers."
      currentLabel="Technologies"
      alternateHref="/technologies"
      alternateLabel="العربية"
      navLinks={[
        { label: "Services", href: "/en/services" },
        { label: "Technologies", href: "/en/technologies" },
        { label: "Projects", href: "/en/projects" },
        { label: "FAQ", href: "/en/faq" },
        { label: "Contact", href: "/en/contact" },
      ]}
      primaryAction={{ label: "Review related projects", href: "/en/projects" }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {technologyGroups.en.map((group) => (
            <TechnologyGroupCard key={group.title} group={group} toolsLabel="Core tools" />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">DIGITAL MARKETING</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Channels supporting digital presence</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">The website is treated here as one part of a broader system that may also include messaging, platforms, and advertising support where relevant.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {marketingChannels.en.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.64))] p-5 shadow-[0_18px_50px_rgba(2,6,23,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-200/20"
              >
                <div
                  className={[
                    "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-95 transition duration-300 group-hover:opacity-100",
                    marketingAccentClasses[index % marketingAccentClasses.length],
                  ].join(" ")}
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] opacity-80" />

                <div className="relative">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] text-white/62 backdrop-blur-xl">
                    CHANNEL
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">PRINCIPLES</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Execution principles</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {principles.map((item) => (
              <span key={item} className="rounded-full border border-amber-200/15 bg-amber-200/10 px-4 py-2 text-sm font-medium text-amber-100">{item}</span>
            ))}
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}
