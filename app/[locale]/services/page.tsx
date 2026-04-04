import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteSubpageFrame from "@/components/site-subpage-frame";
import { serviceDecisionGuides, servicePaths } from "@/lib/site-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const workflow = [
  {
    step: "01",
    title: "Define the goal",
    description: "I identify the project type, the core message, and the audience that needs to understand the value quickly.",
  },
  {
    step: "02",
    title: "Plan structure and content",
    description: "Sections, headlines, trust points, and conversion flow are shaped before detailed implementation begins.",
  },
  {
    step: "03",
    title: "Design and build",
    description: "The idea becomes a modern responsive interface that stays aligned with the site identity and real use.",
  },
  {
    step: "04",
    title: "Refine and launch",
    description: "The final flow is reviewed so contact, conversion, and responsiveness are ready before handoff.",
  },
];

type PageProps = { params: Promise<{ locale: string }>; };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  return {
    title: "Services | MUAZ TECH",
    description: "The main services page covering web development, landing pages, product interfaces, and digital presence work.",
    alternates: {
      canonical: "/en/services",
      languages: {
        ar: "/services",
        en: "/en/services",
        "x-default": "/services",
      },
    },
    openGraph: {
      title: "Services | MUAZ TECH",
      description: "A unified services page presenting all core offerings within the same visual identity of the site.",
      url: `${siteUrl}/en/services`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function EnglishServicesPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  return (
    <SiteSubpageFrame
      locale="en"
      eyebrow="SERVICES"
      title="Define the most appropriate implementation path for the project"
      description="This page presents the service paths as distinct execution frameworks, helping determine whether the project is better served by a business website, landing page, product interface, or integrated digital presence model."
      currentLabel="Services"
      alternateHref="/services"
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
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">DECISION GUIDE</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">How is the appropriate path determined?</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">The decision should begin with project type and communication objective rather than the service label alone. Each path here corresponds to a distinct output model and usage structure.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {serviceDecisionGuides.en.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-amber-200/25">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 min-h-[8rem] text-sm leading-7 text-white/64">{item.description}</p>
                <p className="mt-4 text-sm font-semibold text-amber-100 transition group-hover:text-amber-50">{item.cta}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {servicePaths.en.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/25">
              <p className="mb-3 text-lg font-semibold text-white">{service.title}</p>
              <p className="min-h-[7rem] text-sm leading-7 text-white/63">{service.description}</p>
              <Link href={service.href} className="mt-6 inline-flex rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/82 transition hover:border-amber-200/30 hover:text-amber-100">
                {service.pageCta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">OUTCOME CHECK</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Decision criteria before selecting a service path</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">Do you need room to explain multiple services, or just one focused offer?</div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">Is the main goal to present the business more clearly, or to drive one faster next action?</div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">Do you need a scalable foundation for later growth, or a quicker page designed around one campaign or service?</div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">WORKFLOW</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Workflow from initiation to delivery</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">Although services differ in scope, the working method remains consistent: define the objective, structure the content, implement the interface, and review the final result against the intended use.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item) => (
              <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5">
                <p className="font-mono text-xs tracking-[0.32em] text-amber-200/70">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}
