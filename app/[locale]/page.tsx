import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandMark from "@/components/brand-mark";
import HeroPortrait from "@/components/hero-portrait";
import ScrollToTopButton from "@/components/scroll-to-top-button";

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

const services = [
  {
    title: "Professional Web Development",
    description: "Modern business websites and landing pages built with clear structure, fast performance, and polished user experience.",
  },
  {
    title: "Digital Presence Strategy",
    description: "A practical understanding of online presence, messaging, and platform alignment that helps brands communicate more clearly.",
  },
  {
    title: "Conversion-Oriented Landing Pages",
    description: "Landing pages designed to clarify value, strengthen trust, and guide visitors toward a direct action.",
  },
  {
    title: "Integrated Brand Experience",
    description: "Connecting website, identity, and digital channels to create a more professional and consistent online presence.",
  },
];

const platformGroups = [
  {
    label: "Social Reach",
    title: "Instagram / Facebook / TikTok / Snapchat",
    description: "For fast visibility, visual identity, and audience engagement.",
    accentClass: "from-amber-200/14 via-orange-300/8 to-transparent",
  },
  {
    label: "Professional Presence",
    title: "LinkedIn / YouTube",
    description: "For deeper content, authority building, and professional positioning.",
    accentClass: "from-cyan-300/14 via-sky-300/8 to-transparent",
  },
  {
    label: "Paid Growth",
    title: "Google Ads / Meta Ads",
    description: "For paid expansion, stronger reach, and sharper targeting.",
    accentClass: "from-emerald-300/14 via-teal-300/8 to-transparent",
  },
];

const techGroups = [
  {
    title: "Frontend Foundations",
    label: "Core UI",
    description: "Technologies I rely on to build modern, scalable, and reliable user interfaces.",
    items: ["Next.js", "React", "TypeScript"],
    accentClass: "from-amber-200/14 via-orange-300/8 to-transparent",
  },
  {
    title: "Motion & Experience",
    label: "Visual Depth",
    description: "Tools I use when motion and immersive visuals serve the experience and strengthen the product story.",
    items: ["Framer Motion", "Three.js", "Tailwind CSS"],
    accentClass: "from-cyan-300/16 via-sky-300/8 to-transparent",
  },
  {
    title: "Data & Systems",
    label: "Logic Layer",
    description: "A dependable backend and data foundation for products that need clarity, structure, and long-term maintainability.",
    items: ["Node.js", "Prisma", "PostgreSQL"],
    accentClass: "from-emerald-300/16 via-teal-300/8 to-transparent",
  },
];

const projects = [
  {
    title: "AQARI",
    summary:
      "A real estate SaaS platform designed to bring search, listings, contracts, and management workflows into one clear experience that improves trust, usability, and day-to-day operations.",
    tag: "Real Estate SaaS",
    stack: ["Property Search", "Contracts", "Admin Dashboard"],
    href: "https://aqari-saas.vercel.app/",
    primaryCta: "View live project",
    secondaryCta: "Request a similar platform",
    previewLabel: "Search, listings, contracts",
    previewBars: [88, 76, 92],
    previewClassName: "from-amber-200/25 via-cyan-300/10 to-transparent",
    previewMode: "real-estate" as const,
    featured: true,
  },
  {
    title: "Live Analytics Dashboard",
    summary:
      "A dashboard concept focused on real-time metrics, cleaner visibility, and faster operational decision-making through a structured interface.",
    tag: "Dashboard",
    stack: ["React", "Realtime Data", "Charts"],
    primaryCta: "Explore the concept",
    secondaryCta: "Discuss a similar build",
    previewLabel: "Live metrics overview",
    previewHeadline: "Instant visibility into the metrics that shape decisions",
    previewSubline: "A cleaner dashboard that surfaces performance, movement, and useful signals at the right moment.",
    previewBars: [56, 88, 72],
    previewClassName: "from-cyan-300/20 via-sky-300/10 to-transparent",
  },
  {
    title: "Smart Workflow Platform",
    summary:
      "A digital product concept that combines automation and AI-assisted workflows within a clearer and more efficient interface.",
    tag: "AI Tools",
    stack: ["Next.js", "AI Workflows", "Automation"],
    primaryCta: "Discuss the idea",
    secondaryCta: "Start a conversation",
    previewLabel: "Workflow orchestration",
    previewHeadline: "Smarter workflow automation with clearer structure",
    previewSubline: "A product interface that connects tasks, tools, and AI workflows in a more efficient flow.",
    previewBars: [74, 69, 86],
    previewClassName: "from-emerald-300/20 via-teal-300/10 to-transparent",
  },
];

const contactChannels = [
  {
    label: "WhatsApp",
    href: "https://wa.me/905356577992",
    description: "Fast contact for project discussions and direct communication.",
    cta: "Start chatting",
    featured: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/muaz__92/",
    description: "Follow visual work, updates, and selected highlights.",
    cta: "Follow now",
  },
  {
    label: "GitHub",
    href: "https://github.com/Muazalkhabour",
    description: "Explore repositories and product-oriented frontend work.",
    cta: "View profile",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/muaz.alkhabour",
    description: "Stay connected and follow my professional presence online.",
    cta: "Open profile",
  },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const footerNotes = [
  {
    label: "Open for new projects",
    value: "Available for business websites, landing pages, and digital products focused on clarity and performance.",
  },
  {
    label: "Work style",
    value: "Structured execution, refined interfaces, and messaging that supports the brand with more clarity.",
  },
  {
    label: "Best way to reach me",
    value: "The contact section above is the primary place to access all communication channels quickly.",
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
            <a href="#services" className="transition hover:text-amber-200">Services</a>
            <a href="#tech" className="transition hover:text-amber-200">Tech</a>
            <a href="#projects" className="transition hover:text-amber-200">Projects</a>
            <a href="#contact" className="transition hover:text-amber-200">Contact</a>
          </nav>
          <a
            href="/"
            hrefLang="ar"
            lang="ar"
            className="translate-y-2 inline-flex items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2.5 text-sm font-semibold text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50 sm:translate-y-0"
          >
            العربية
          </a>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 pb-2 sm:px-6 md:hidden">
        <nav className="mx-auto flex w-full items-center justify-center gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/5 px-2 py-2 text-xs text-white/75 backdrop-blur [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <a
            href="#services"
            className="shrink-0 rounded-full border border-transparent bg-white/[0.04] px-4 py-2 transition hover:border-amber-200/25 hover:text-amber-100"
          >
            Services
          </a>
          <a
            href="#tech"
            className="shrink-0 rounded-full border border-transparent bg-white/[0.04] px-4 py-2 transition hover:border-amber-200/25 hover:text-amber-100"
          >
            Tech
          </a>
          <a
            href="#projects"
            className="shrink-0 rounded-full border border-transparent bg-white/[0.04] px-4 py-2 transition hover:border-amber-200/25 hover:text-amber-100"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="shrink-0 rounded-full border border-transparent bg-white/[0.04] px-4 py-2 transition hover:border-amber-200/25 hover:text-amber-100"
          >
            Contact
          </a>
        </nav>
      </div>

      <section
        id="home"
        className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-8 px-4 pb-12 pt-2 sm:gap-14 sm:px-6 sm:pb-20 sm:pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10"
      >
        <div className="order-2 space-y-6 sm:space-y-8 lg:order-1">
          <div className="sm:hidden">
            <HeroPortrait variant="integrated" />
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-medium text-amber-100">
            <span>Available for Work</span>
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.55)]" />
          </div>

          <div className="space-y-5">
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
                I build modern websites, professional landing pages, and stronger digital experiences.
              </span>
            </h1>
            <p className="max-w-3xl text-base leading-8 text-white/70 sm:text-lg sm:leading-8 lg:text-xl">
              I combine web development, UI design, landing page strategy, and digital presence thinking to help brands communicate clearly, convert better, and appear more professionally online.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://wa.me/905356577992"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-amber-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-amber-200 sm:w-auto"
            >
              Start a project
            </a>
            <a
              href="#projects"
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/85 backdrop-blur transition hover:border-amber-200/40 hover:text-amber-100 sm:w-auto"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="w-full rounded-full border border-amber-200/20 bg-amber-200/10 px-6 py-3 text-center text-sm font-semibold text-amber-100 backdrop-blur transition hover:border-amber-200/40 hover:bg-amber-200/15 hover:text-amber-50 sm:w-auto"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="order-1 relative mx-auto hidden w-full max-w-xl sm:block sm:min-h-[460px] lg:order-2 lg:min-h-[520px]">
          <div className="pointer-events-none absolute inset-x-0 top-5 -z-10 opacity-90 sm:top-14">
            <HeroSceneFallback className="mx-auto max-w-[14.75rem] scale-[0.8] opacity-45 sm:max-w-lg sm:scale-[0.94] sm:opacity-65" />
          </div>
          <HeroPortrait />
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="mb-6 max-w-3xl">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">SERVICES</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Web development, landing pages, and stronger digital presence</h2>
          <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            I do not aim for visual appeal alone. I build professional digital experiences that support the brand image, message clarity, and the result a project is trying to achieve.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/25 hover:bg-amber-200/[0.06]">
              <p className="mb-3 text-lg font-semibold text-white">{service.title}</p>
              <p className="text-sm leading-7 text-white/65">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-10">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">PLATFORMS</p>
          <h2 className="max-w-3xl text-2xl font-semibold text-white sm:text-3xl">A clearer digital presence across platforms and paid channels</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            I connect website strategy with social platforms and digital advertising so the brand message stays more consistent, visible, and effective across every touchpoint.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {platformGroups.map((group) => (
              <div key={group.title} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/25 sm:p-7">
                <div className={["pointer-events-none absolute inset-0 bg-gradient-to-br", group.accentClass].join(" ")} />
                <div className="relative">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] text-white/58 uppercase">
                    {group.label}
                  </span>
                  <p className="mt-4 text-sm font-semibold leading-7 text-white sm:text-base">{group.title}</p>
                  <p className="mt-2 text-sm leading-7 text-white/60">{group.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">TECH STACK</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Technology chosen to build clear, fast, and scalable products</h2>
          <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            I do not present tools as a list of names. I use them as a practical system for better performance, stronger structure, and cleaner product execution.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {techGroups.map((group) => (
            <div key={group.title} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/25 sm:p-7">
              <div className={["pointer-events-none absolute inset-0 bg-gradient-to-br", group.accentClass].join(" ")} />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] text-white/58 uppercase">
                    {group.label}
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.18em] text-amber-200/70">Core tools</span>
                </div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{group.title}</h3>
                <p className="mt-3 min-h-[5.5rem] text-sm leading-7 text-white/65 sm:text-base">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={`${group.title}-${item}`} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-xs font-medium text-white/82 backdrop-blur-xl">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">FEATURED PROJECTS</p>
        <h2 className="mb-8 text-2xl font-semibold text-white sm:text-3xl">Selected work in websites and digital products</h2>
        <p className="mb-8 max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
          A selection of projects and product concepts focused on message clarity, interface quality, and practical digital value.
        </p>
        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={[
                "group flex h-full min-h-[42rem] flex-col rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/20 sm:min-h-[43rem] sm:p-6",
                project.featured ? "border-amber-200/20 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(255,255,255,0.04)_22%,rgba(255,255,255,0.03)_100%)]" : "",
              ].join(" ")}
            >
              <div className="relative mb-6 min-h-[210px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-4">
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
                      <p className="mt-1 text-xs text-white/45">Preview layout</p>
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

                      <div className="grid grid-cols-2 gap-3">
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
                        A clearer platform for listings, follow-up, and real estate management designed to serve both the buyer journey and office operations.
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

              <div className="mb-10 flex items-center justify-between gap-4">
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
              <div className="min-h-[11.5rem]">
                <p className="leading-7 text-white/65">{project.summary}</p>
              </div>

              <div className="mt-auto flex flex-col gap-4 border-t border-white/10 pt-5">
                <span className="text-xs uppercase tracking-[0.2em] text-white/35">Selected work</span>
                <div className="grid w-full gap-3">
                <a
                  href={project.href ?? "#contact"}
                  target={project.href ? "_blank" : undefined}
                  rel={project.href ? "noreferrer" : undefined}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2.5 text-center text-sm font-semibold text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50"
                >
                  <span>{project.primaryCta}</span>
                  <span aria-hidden="true">←</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-center text-sm font-semibold text-white/78 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <span>{project.secondaryCta}</span>
                </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-8">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">CREDENTIALS</p>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">Credentials that support trust and credibility</h2>
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
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-10">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">CONTACT</p>
          <h2 className="mb-4 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">Ready to turn your idea into a professional digital experience</h2>
          <p className="max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            If you need a professional website, a stronger landing page, or a clearer digital presence, I can help you build a sharper experience that presents your project with more confidence and clarity.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {contactChannels.map((channel) => (
              <a key={channel.label} href={channel.href} target="_blank" rel="noreferrer" className={[
                "group rounded-3xl border p-5 backdrop-blur-xl transition hover:-translate-y-1",
                channel.featured ? "border-amber-200/20 bg-amber-200/[0.08] hover:border-amber-200/35" : "border-white/10 bg-slate-950/40 hover:border-amber-200/20",
              ].join(" ")}>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-white">{channel.label}</p>
                  <span className="font-mono text-[11px] tracking-[0.25em] text-amber-200/70">OPEN</span>
                </div>
                <p className="text-sm leading-7 text-white/60">{channel.description}</p>
                <p className="mt-5 text-sm font-semibold text-amber-100 transition group-hover:text-amber-50">{channel.cta}</p>
              </a>
            ))}
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
                I build modern websites and clearer digital experiences that help brands appear more professional and communicate with greater confidence.
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
          <div className="relative mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-5 text-center text-sm text-white/50">
            <BrandMark compact className="shrink-0" />
            <p className="max-w-xl leading-7 text-white/58">All rights reserved to MUAZ TECH</p>
            <a
              href="#home"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white/72 transition hover:border-amber-200/25 hover:text-amber-100"
            >
              <span>Back to top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>

      <ScrollToTopButton ariaLabel="Scroll back to the top of the page" />
    </main>
  );
}