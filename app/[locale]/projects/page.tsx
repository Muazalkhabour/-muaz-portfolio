import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteSubpageFrame from "@/components/site-subpage-frame";
import { projectPrinciples, projectShowcase } from "@/lib/site-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const [featuredProject, ...otherProjects] = projectShowcase.en;
const featuredProjectHref = featuredProject.href ?? "/en/projects";
const featuredProjectResults = featuredProject.results ?? [];
const projectOverviewSignals = [
  { value: "1", label: "Featured case" },
  { value: `${otherProjects.length}`, label: "Additional cases" },
  { value: `${featuredProjectResults.length || 3}`, label: "Impact signals" },
];
const featuredCaseStudyFrames = [
  {
    title: "Product context",
    description: "A real-estate product that needs discovery, listing evaluation, follow-up, and administration to function inside one operational interface.",
  },
  {
    title: "Core requirements",
    description: "Reduce fragmented transitions between client-facing flow and office operations while preserving clarity of action and data structure.",
  },
  {
    title: "Execution decision",
    description: "Separate the journey into clear layers: discovery, comparison, follow-up, and management, with procedural information prioritized in the interface.",
  },
  {
    title: "Operational effect",
    description: "Turn the product into both a presentation layer and an operating tool, reducing friction between offer visibility and execution.",
  },
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
    title: "Projects | MUAZ TECH",
    description: "A projects page presenting digital case studies with a clear view of the problem, treatment, and resulting value.",
    alternates: {
      canonical: "/en/projects",
      languages: {
        ar: "/projects",
        en: "/en/projects",
        "x-default": "/projects",
      },
    },
    openGraph: {
      title: "Projects | MUAZ TECH",
      description: "Digital case studies presented with structured detail on design and implementation decisions inside a consistent visual identity.",
      url: `${siteUrl}/en/projects`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function EnglishProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  return (
    <SiteSubpageFrame
      locale="en"
      eyebrow="PROJECTS"
      title="Case studies read through decision, treatment, and resulting impact"
      description="This page presents project work as execution cases: what the original problem was, how the decision was shaped, and what effect the final structure created for usage and operations."
      currentLabel="Projects"
      alternateHref="/projects"
      alternateLabel="العربية"
      navLinks={[
        { label: "Services", href: "/en/services" },
        { label: "Technologies", href: "/en/technologies" },
        { label: "Projects", href: "/en/projects" },
        { label: "FAQ", href: "/en/faq" },
        { label: "Contact", href: "/en/contact" },
      ]}
      primaryAction={{ label: "Open AQARI project", href: featuredProjectHref }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-200/15 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(15,23,42,0.78))] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.22)] backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.12),transparent_26%)]" />
            <div className="relative">
              <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">FEATURED PROJECT</p>
              <span className="inline-flex rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1.5 text-[11px] font-medium text-amber-100">
                Objective: {featuredProject.objective}
              </span>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">{featuredProject.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">{featuredProject.summary}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {projectOverviewSignals.map((item) => (
                  <div key={item.label} className="rounded-[1.3rem] border border-white/10 bg-slate-950/36 px-4 py-4 text-center">
                    <p className="text-2xl font-semibold text-amber-100">{item.value}</p>
                    <p className="mt-2 text-xs leading-6 text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {featuredCaseStudyFrames.map((item) => (
                <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-slate-950/40 px-4 py-4">
                  <p className="mb-2 text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-sm leading-7 text-white/66">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3 text-sm leading-7 text-white/64">
              <p className="font-mono text-xs tracking-[0.28em] text-amber-200/65">CASE ANALYSIS</p>
              <p><span className="font-semibold text-white">Core problem:</span> {featuredProject.challenge}</p>
              <p><span className="font-semibold text-white">Execution treatment:</span> {featuredProject.solution}</p>
              <p><span className="font-semibold text-white">Resulting impact:</span> {featuredProject.value}</p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {featuredProjectResults.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-white/66">
                  {item}
                </div>
              ))}
            </div>
            <a
              href={featuredProjectHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              View the live project
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.72))] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl sm:p-8">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">PROJECT PRINCIPLES</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Case-study reading framework</h2>
            <p className="mt-4 text-sm leading-7 text-white/64">
              Projects here are not presented as visual snapshots alone, but as structured readings of decision logic, treatment layers, and their relation to actual use.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featuredProject.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/78">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {projectPrinciples.en.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-slate-950/40 px-4 py-4 text-sm leading-7 text-white/66">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_20%,rgba(15,23,42,0.72)_100%)] p-6 backdrop-blur-xl sm:p-8">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">OTHER PROJECTS</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Additional case studies</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/64 sm:text-base">
            These cases represent different execution scopes, but they are all read through the same method: understand context, define treatment, and measure resulting value.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {otherProjects.map((project) => (
              <div key={project.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 transition hover:border-amber-200/20 hover:bg-slate-950/55">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/55">
                    {project.tag}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-flex rounded-full border border-amber-200/16 bg-amber-200/10 px-3 py-1.5 text-[11px] font-medium text-amber-100">
                    Objective: {project.objective}
                  </span>
                </div>
                <p className="text-sm leading-7 text-white/63">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={`${project.title}-${item}`} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-white/72">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 space-y-3 text-sm leading-7 text-white/62">
                  <p className="font-mono text-[11px] tracking-[0.24em] text-amber-200/62">CASE SNAPSHOT</p>
                  <p><span className="font-semibold text-white">Problem:</span> {project.challenge}</p>
                  <p><span className="font-semibold text-white">Treatment:</span> {project.solution}</p>
                  <p><span className="font-semibold text-white">Impact:</span> {project.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/en/contact" className="inline-flex rounded-full border border-amber-200/20 bg-amber-200/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50">
              Submit a project inquiry
            </Link>
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}