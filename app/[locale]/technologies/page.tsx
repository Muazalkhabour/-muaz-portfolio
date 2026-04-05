import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteSubpageFrame from "@/components/site-subpage-frame";
import TechnologyGroupCard from "@/components/technology-group-card";
import { marketingChannels, technologyGroups } from "@/lib/site-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const principles = ["Performance-first", "Conversion-aware UI", "Responsive by default", "Structured content flow"];

const technologyUseCases = [
  {
    title: "Core interface layer",
    description:
      "Next.js, React, and TypeScript are used to build interfaces that can be expanded, maintained, and developed without losing structural clarity inside the product.",
  },
  {
    title: "Experience and motion layer",
    description:
      "Motion and visual treatment are used when they support comprehension and visual sequence, not as isolated effects detached from the actual usage path.",
  },
  {
    title: "Data and integration layer",
    description:
      "When the project needs dashboards, data logic, or operating integrations, this layer is built to support the product directly rather than remain a secondary technical add-on.",
  },
];

const marketingWorkflow = [
  {
    title: "Connect message to page structure",
    description:
      "Marketing thinking is used to arrange headings, trust points, and reading flow so the value is understood quickly before any action is requested.",
  },
  {
    title: "Prepare the page for conversion",
    description:
      "A landing page or business page is not treated as presentation alone, but as a conversion path that should clarify the offer, reduce hesitation, and lead to one clear next step.",
  },
  {
    title: "Align site with campaigns and platforms",
    description:
      "When paid traffic or social activity exists, the site is structured to receive that traffic through a message that stays consistent from ad or platform to destination page.",
  },
  {
    title: "Improve the professional reading of the business",
    description:
      "Digital marketing also shapes positioning here: how the business is read, what should appear first, and how the service or offer is framed more convincingly.",
  },
];

const marketingExamples = [
  {
    title: "In landing pages",
    objective: "Direct conversion",
    points: [
      "Shape the main headline so the offer is understood within seconds rather than through a generic opening line.",
      "Organize the page around one explicit action such as inquiry, form submission, or direct contact.",
      "Reduce distraction and align the page directly with the campaign or ad that brought the visitor in.",
    ],
  },
  {
    title: "In business websites",
    objective: "Clear business presence",
    points: [
      "Organize services and pages so the visitor understands what the business offers before getting lost across sections.",
      "Build a clearer trust sequence through credentials, projects, and method placed in deliberate positions.",
      "Prepare the site to function later as a base for professional visibility, content, and ads without rebuilding the message from zero.",
    ],
  },
];

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
    description: "The technologies and tools used to build digital interfaces and products, with clearer context on performance, motion, integration, and marketing support.",
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
      description: "A technical stack overview showing how tools are applied in actual implementation and connected to campaigns and digital channels.",
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
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(15,23,42,0.76))] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">TECH STACK ROLE</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">How are these technologies used in the work itself?</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Technologies are not listed here as names alone, but as execution layers with a specific role in interface building, usage support, or product operation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {technologyUseCases.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">How does digital marketing enter the working method?</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">The website is not treated here as a separate object, but as part of a wider system that includes messaging, conversion flow, platforms, and advertising where relevant. Marketing thinking therefore shapes page structure itself, not external promotion alone.</p>
          </div>
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            {marketingWorkflow.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/35 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              </div>
            ))}
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
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(15,23,42,0.72))] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">APPLIED MARKETING</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Direct examples of how marketing shapes execution</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Digital marketing shows up here inside the structure itself: how the page is built, where trust points are placed, and how the user is guided toward the intended action depending on project type.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {marketingExamples.map((example) => (
              <div key={example.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5">
                <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                <div className="mt-3">
                  <span className="inline-flex rounded-full border border-amber-200/16 bg-amber-200/10 px-3 py-1.5 text-[11px] font-medium text-amber-100">
                    Objective: {example.objective}
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {example.points.map((point) => (
                    <div key={point} className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white/64">
                      {point}
                    </div>
                  ))}
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
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            These principles do not regulate development alone. They define the relationship between performance, clarity, and the ability to direct the user toward the right action inside the page or product.
          </p>
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
