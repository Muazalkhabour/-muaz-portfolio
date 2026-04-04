import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteSubpageFrame from "@/components/site-subpage-frame";
import { projectPrinciples, projectShowcase } from "@/lib/site-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const [featuredProject, ...otherProjects] = projectShowcase.en;
const featuredProjectHref = featuredProject.href ?? "/en/projects";
const featuredProjectResults = featuredProject.results ?? [];

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
      title="Case studies showing how requirements are translated into usable digital products"
      description="This page presents project work analytically: the core problem, the design or technical treatment, and the operational or business value created by the final implementation."
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
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">FEATURED PROJECT</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">{featuredProject.title}</h2>
            <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">{featuredProject.summary}</p>
            <div className="mt-6 space-y-3 text-sm leading-7 text-white/64">
              <p><span className="font-semibold text-white">Challenge:</span> {featuredProject.challenge}</p>
              <p><span className="font-semibold text-white">Solution:</span> {featuredProject.solution}</p>
              <p><span className="font-semibold text-white">Value:</span> {featuredProject.value}</p>
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

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">PROJECT PRINCIPLES</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">What do these case studies show?</h2>
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
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">OTHER PROJECTS</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Additional case studies</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {otherProjects.map((project) => (
              <div key={project.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/55">
                    {project.tag}
                  </span>
                </div>
                <p className="text-sm leading-7 text-white/63">{project.summary}</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-white/62">
                  <p><span className="font-semibold text-white">Challenge:</span> {project.challenge}</p>
                  <p><span className="font-semibold text-white">Solution:</span> {project.solution}</p>
                  <p><span className="font-semibold text-white">Value:</span> {project.value}</p>
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