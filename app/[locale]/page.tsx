import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BrandMark from "@/components/brand-mark";
import HeroPortrait from "@/components/hero-portrait";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import SocialLinks from "@/components/social-links";
import { projectShowcase, servicePaths } from "@/lib/site-content";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

function HeroSceneFallback({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={[
        "relative h-[250px] w-full overflow-hidden rounded-[2rem] border border-amber-200/10 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_34%),radial-gradient(circle_at_bottom,rgba(34,211,238,0.12),transparent_26%)] shadow-[0_0_60px_rgba(56,189,248,0.12)]",
        "sm:h-[320px] md:h-[360px]",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_40%,rgba(2,6,23,0.38)_100%)]" />
    </div>
  );
}

const highlights = [
  ["Path definition at the outset", "The initial stage determines whether the project requires a full website, a landing page, or a broader structural revision."],
  ["Execution aligned with function", "Technical and visual decisions are tied to message clarity and usage flow rather than surface appearance alone."],
  ["A coherent bilingual structure", "Arabic and English versions are developed within one unified system that preserves consistency in structure and identity."],
];

const projects = projectShowcase.en;
const services = servicePaths.en;

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "/en/services" },
  { label: "Technologies", href: "/en/technologies" },
  { label: "Projects", href: "/en/projects" },
  { label: "Contact", href: "/en/contact" },
];

const footerNotes = [
  {
    label: "Open for new projects",
    value: "Current work scope includes business websites, landing pages, and digital interfaces centered on clarity and performance.",
  },
  {
    label: "Work style",
    value: "A structured working method that combines visual refinement, functional consistency, and message clarity.",
  },
  {
    label: "Best way to reach me",
    value: "The contact page is the dedicated place for sharing initial requirements and starting the project discussion.",
  },
];

const trustSignals = [
  {
    label: "Execution model",
    value: "From initial requirement capture to a publishable interface within a structured delivery process.",
  },
  {
    label: "Project focus",
    value: "Business websites, landing pages, and digital interfaces with a clear structural basis.",
  },
  {
    label: "Decision filter",
    value: "The degree to which the site clarifies value and directs the user toward the intended action.",
  },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en") {
    return {};
  }

  const title = "Muaz Alshmoty | Web Developer & Digital Experience Builder";
  const description =
    "Portfolio of Muaz Alshmoty featuring web development, landing pages, UI engineering, and digital presence services for modern brands.";

  return {
    title,
    description,
    alternates: {
      canonical: "/en",
      languages: {
        ar: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/en`,
      siteName: "MUAZ TECH",
      locale: "en_US",
      alternateLocale: ["ar_AR"],
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "MUAZ TECH portfolio preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function EnglishPage({ params }: PageProps) {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  return (
    <main dir="ltr" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-amber-400/16 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
        <a href="#home" className="text-sm font-semibold tracking-[0.35em] text-white/90">
          <BrandMark compact />
        </a>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white/70 backdrop-blur md:flex lg:gap-6 lg:px-5 lg:py-3 lg:text-sm">
            <Link href="/en/services" className="transition hover:text-amber-200">Services</Link>
            <Link href="/en/technologies" className="transition hover:text-amber-200">Technologies</Link>
            <Link href="/en/projects" className="transition hover:text-amber-200">Projects</Link>
            <Link href="/en/contact" className="transition hover:text-amber-200">Contact</Link>
          </nav>
          <Link
            href="/"
            hrefLang="ar"
            lang="ar"
            className="translate-y-2 inline-flex items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2.5 text-sm font-semibold text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50 sm:translate-y-0"
          >
            العربية
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 pb-2 sm:px-6 md:hidden">
        <nav className="mx-auto flex w-full items-center justify-center gap-2 overflow-x-auto rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-2 py-2 text-xs text-white/78 shadow-[0_16px_40px_rgba(2,6,23,0.2)] backdrop-blur [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link
            href="/en/services"
            className="shrink-0 rounded-full border border-transparent bg-white/[0.04] px-4 py-2 transition hover:border-amber-200/25 hover:text-amber-100"
          >
            Services
          </Link>
          <Link
            href="/en/technologies"
            className="shrink-0 rounded-full border border-transparent bg-white/[0.04] px-4 py-2 transition hover:border-amber-200/25 hover:text-amber-100"
          >
            Technologies
          </Link>
          <Link
            href="/en/projects"
            className="shrink-0 rounded-full border border-transparent bg-white/[0.04] px-4 py-2 transition hover:border-amber-200/25 hover:text-amber-100"
          >
            Projects
          </Link>
          <Link
            href="/en/contact"
            className="shrink-0 rounded-full border border-transparent bg-white/[0.04] px-4 py-2 transition hover:border-amber-200/25 hover:text-amber-100"
          >
            Contact
          </Link>
        </nav>
      </div>

      <section
        id="home"
        className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-6 px-4 pb-12 pt-2 sm:gap-14 sm:px-6 sm:pb-20 sm:pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10"
      >
        <div className="order-2 space-y-6 sm:space-y-8 lg:order-1">
          <div className="sm:hidden">
            <HeroPortrait variant="integrated" />
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-medium text-amber-100">
            <span>Available for Work</span>
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.55)]" />
          </div>

          <div className="space-y-4 sm:space-y-5">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-[0.24em] text-white/45 sm:text-sm">
              <span>WEB DEVELOPER</span>
              <span className="text-white/25">/</span>
              <span>DIGITAL MARKETER</span>
            </p>
            <h1 className="flex max-w-4xl flex-col gap-2 text-[1.9rem] font-semibold leading-[1.35] tracking-tight text-white sm:text-[2.35rem] lg:text-[3rem]">
              <span className="block">
                I&apos;m <span className="text-amber-200">Muaz Alshmoty</span> | <span className="text-amber-200">M</span>UAZ <span className="text-amber-200">T</span>ECH
              </span>
              <span className="block leading-[1.55] sm:leading-[1.5] lg:leading-[1.45]">
                I develop websites and landing pages that improve offer clarity and support a more explicit decision path.
              </span>
            </h1>
            <p className="max-w-3xl text-[15px] leading-7 text-white/70 sm:text-lg sm:leading-8 lg:text-xl">
              My work combines web development, information structure, and interface clarity so the site functions as an effective communication and presentation system, not merely a visual layer.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/en/contact"
              className="w-full rounded-full bg-amber-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-amber-200 sm:w-auto"
            >
              Submit a project inquiry
            </Link>
          </div>

          <p className="text-sm leading-7 text-white/55">
            The initial exchange is intended to determine the most appropriate format for the project: a full website, a landing page, or a broader structural revision.
          </p>

          <div className="mx-auto grid max-w-md justify-items-center gap-4 sm:max-w-none sm:grid-cols-2 sm:justify-items-stretch xl:grid-cols-3">
            {highlights.map(([title, text]) => (
              <div key={title} className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl sm:max-w-none sm:text-start">
                <p className="mb-2 text-sm font-semibold text-white">{title}</p>
                <p className="text-sm leading-6 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 relative mx-auto hidden w-full max-w-xl sm:block sm:min-h-[460px] lg:order-2 lg:min-h-[520px]">
          <div className="pointer-events-none absolute inset-x-0 top-5 -z-10 opacity-90 sm:top-14">
            <HeroSceneFallback className="mx-auto max-w-[14.75rem] scale-[0.8] opacity-45 sm:max-w-lg sm:scale-[0.94] sm:opacity-65" />
          </div>
          <HeroPortrait />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-6 pt-6 sm:px-6 sm:pt-8 lg:px-10">
        <div className="mb-6 max-w-3xl rounded-[1.75rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03)_34%,rgba(2,6,23,0.4)_100%)] p-5 sm:rounded-none sm:border-0 sm:bg-none sm:p-0">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">SERVICES</p>
          <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">Core execution paths</h2>
          <p className="max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            This section presents the primary execution paths directly. Detailed scope, requirements, and fit criteria remain on the dedicated services page.
          </p>
        </div>

        <div className="mx-auto grid max-w-md gap-4 sm:max-w-none sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group w-full rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 text-center shadow-[0_18px_50px_rgba(2,6,23,0.16)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/20 sm:text-start"
            >
              <p className="mb-3 text-lg font-semibold text-white transition group-hover:text-amber-100">{service.title}</p>
              <p className="text-sm leading-7 text-white/62">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-5">
          <Link
            href="/en/services"
            className="inline-flex w-full items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50 sm:w-auto"
          >
            Review the services page
          </Link>
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-10">
        <div className="mb-8 max-w-3xl rounded-[1.75rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03)_34%,rgba(2,6,23,0.4)_100%)] p-5 sm:rounded-none sm:border-0 sm:bg-none sm:p-0">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">PROJECT PREVIEW</p>
          <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">Selected case study</h2>
          <p className="max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            This section presents one representative case to show interface logic, treatment structure, and execution direction, while the broader project set remains on the dedicated projects page.
          </p>
        </div>
        <div className="grid auto-rows-fr gap-5 lg:max-w-4xl">
          {projects.slice(0, 1).map((project, index) => (
            <article
              key={project.title}
              className={[
                "group flex h-full min-h-[30rem] flex-col rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.7))] p-5 shadow-[0_18px_50px_rgba(2,6,23,0.16)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/20 sm:min-h-[34rem] sm:p-6",
                project.featured ? "border-amber-200/20 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(255,255,255,0.04)_22%,rgba(255,255,255,0.03)_100%)]" : "",
              ].join(" ")}
            >
              <div className="relative mb-5 min-h-[180px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-4 sm:min-h-[200px]">
                <div className={["absolute inset-0 bg-gradient-to-br", project.previewClassName].join(" ")} />
                <div className="absolute inset-x-0 top-0 h-12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
                <div className="relative z-10 flex items-center gap-2 text-[10px] text-white/45">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
                </div>

                <div className="relative z-10 mt-4 rounded-[1.3rem] border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-xl">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{project.previewLabel}</p>
                      <p className="mt-1 hidden text-xs text-white/45 sm:block">Preview layout</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="rounded-full border border-amber-200/20 bg-amber-200/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-amber-100">
                          Featured
                        </span>
                      )}
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/55">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {project.previewMode === "real-estate" ? (
                    <div className="space-y-3">
                      <div className="rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(15,23,42,0.3))] p-3">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-200/25 bg-amber-200/10 text-[10px] font-semibold tracking-[0.18em] text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.18)]">
                              AQ
                            </div>
                            <div>
                              <p className="text-sm font-semibold tracking-[0.22em] text-white">AQARI</p>
                              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/45">Real Estate SaaS</p>
                            </div>
                          </div>
                          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/55">
                            Live
                          </span>
                        </div>

                        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px] text-white/55">
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2">Search</div>
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2">Maps</div>
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2">Contracts</div>
                        </div>
                      </div>

                      <div className="hidden grid-cols-2 gap-3 sm:grid">
                        <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-3">
                          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/35">
                            <span>Listings</span>
                            <span>120+</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/8">
                            <div className="h-2 w-[88%] rounded-full bg-[linear-gradient(90deg,rgba(253,224,71,0.9),rgba(56,189,248,0.9))]" />
                          </div>
                        </div>

                        <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-3">
                          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/35">
                            <span>Leads</span>
                            <span>340+</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/8">
                            <div className="h-2 w-[76%] rounded-full bg-[linear-gradient(90deg,rgba(251,191,36,0.95),rgba(125,211,252,0.92))]" />
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-3 text-xs leading-5 text-white/58">
                        A unified platform for listings, follow-up, and real-estate management designed to serve both user flow and office operations.
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-3">
                        <p className="text-sm font-semibold text-white">{project.previewHeadline}</p>
                        <p className="mt-1 text-xs leading-6 text-white/50">{project.previewSubline}</p>
                      </div>
                      {project.previewBars.map((bar, barIndex) => (
                        <div key={`${project.title}-${barIndex}`} className="space-y-2">
                          <div className="h-2 rounded-full bg-white/8">
                            <div
                              className="h-2 rounded-full bg-[linear-gradient(90deg,rgba(253,224,71,0.9),rgba(56,189,248,0.9))]"
                              style={{ width: `${bar}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-[10px] uppercase tracking-[0.18em] text-white/35">
                            <span>Block {barIndex + 1}</span>
                            <span>{bar}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="font-mono text-xs tracking-[0.3em] text-amber-200/70">0{index + 1}</p>
                <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                  {project.tag}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={`${project.title}-${item}`}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-white/68"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="min-h-[4.5rem]">
                <p className="leading-7 text-white/65">{project.homeSummary ?? project.summary}</p>
              </div>
              <div className="mb-4 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4">
                <p className="text-sm leading-7 text-white/62">
                  This card provides a concise technical snapshot, while the broader case breakdown remains on the projects page.
                </p>
              </div>

              <div className="mt-auto border-t border-white/10 pt-5">
                <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/35">Selected work</span>
                <a
                  href={project.href ?? "/en/projects"}
                  target={project.href ? "_blank" : undefined}
                  rel={project.href ? "noreferrer" : undefined}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2.5 text-center text-sm font-semibold text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50"
                >
                  <span>{project.primaryCta}</span>
                  <span aria-hidden="true">←</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/en/projects" className="inline-flex w-full items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50 sm:w-auto">
            Review the projects page
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-8">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">CREDENTIALS</p>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">Academic foundation</h2>
            </div>
            <span className="inline-flex self-start rounded-full border border-amber-200/20 bg-amber-200/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-amber-100 sm:self-auto">
              Academic Foundation
            </span>
          </div>
          <div className="rounded-[1.5rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/[0.10] to-transparent p-5 sm:p-6">
            <p className="mb-2 text-lg font-semibold text-white sm:text-xl">Academic background from Medipol University</p>
            <p className="max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Alongside practical experience, this academic background gives me a stronger knowledge base that supports clearer thinking, better interface decisions, and more mature digital product work.
            </p>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {trustSignals.map((item) => (
              <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-slate-950/40 px-4 py-4">
                <p className="mb-2 text-sm font-semibold text-white">{item.label}</p>
                <p className="text-sm leading-7 text-white/58">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-10">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">CONTACT</p>
          <h2 className="mb-4 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">Project intake</h2>
          <p className="max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            The contact page serves as the formal intake point for new work, using a concise brief form to define scope, operating requirements, and initial context before technical review begins.
          </p>
          <div className="mt-8 rounded-[1.85rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.72))] p-5 shadow-[0_22px_70px_rgba(2,6,23,0.18)] backdrop-blur-xl sm:p-8">
            <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">PROJECT INTAKE</p>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Contact-page components</h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68 sm:text-base">
              The page includes a structured brief form for collecting core requirements, then prepares the project request in an initial draft suitable for executive review.
            </p>
            <div className="mt-6">
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
              >
                Submit project request
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_18%,rgba(2,6,23,0.95)_100%)] p-6 shadow-[0_28px_90px_rgba(2,6,23,0.34)] backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-amber-300/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />
          </div>
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr_0.9fr] lg:gap-10">
            <div className="space-y-4">
              <div className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                <BrandMark />
              </div>
              <p className="max-w-md text-base leading-8 text-white/68 sm:text-lg">
                I build websites and digital interfaces centered on clear structure, reliable performance, and professional presentation of the service or product.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-amber-200/15 bg-amber-200/10 px-3 py-2 text-xs font-medium text-amber-100">
                  Next.js
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/75">
                  UI Engineering
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/75">
                  Digital Presence
                </span>
              </div>
            </div>
            <div>
              <p className="mb-4 font-mono text-xs tracking-[0.32em] text-amber-200/70">NAVIGATION</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {footerLinks.map((link) => (
                  <a key={link.href} href={link.href} className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/72 transition hover:border-amber-200/25 hover:bg-amber-200/[0.06] hover:text-amber-100">
                    <span>{link.label}</span>
                    <span className="text-white/25 transition group-hover:text-amber-100/70">/</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-4 font-mono text-xs tracking-[0.32em] text-amber-200/70">FOOTER NOTES</p>
              <div className="space-y-3">
                {footerNotes.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/8 bg-slate-950/40 px-4 py-4">
                    <p className="mb-2 text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-sm leading-7 text-white/58">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative mt-8 border-t border-white/10 pt-5 text-center text-sm text-white/50">
            <SocialLinks locale="en" />

            <div className="mt-5 flex flex-col items-center gap-4">
              <BrandMark compact className="shrink-0" />
              <p className="max-w-xl leading-7 text-white/58">All rights reserved to MUAZ TECH</p>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTopButton ariaLabel="Back to top" />
    </main>
  );
}