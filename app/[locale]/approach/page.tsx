import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteSubpageFrame from "@/components/site-subpage-frame";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const corePrinciples = [
  {
    title: "Read requirements before naming the output",
    description: "The decision starts with operating objective, user type, and intended action rather than the service label or interface form alone.",
  },
  {
    title: "Choose the correct execution model",
    description: "A full website, landing page, or structural revision is selected according to content density and the expected usage path.",
  },
  {
    title: "Build a clear content and interface structure",
    description: "Content and interface layers are organized to preserve message clarity and prevent separation between presentation and action.",
  },
  {
    title: "Connect interface decisions to operating context",
    description: "The interface is not treated in isolation, but aligned with platforms, messaging, and launch conditions inside one coherent system.",
  },
];

const overviewSignals = [
  { value: "3", label: "Primary execution models" },
  { value: "4", label: "Decision and operating layers" },
  { value: "1", label: "Unified intake path" },
];

const workflowSteps = [
  "Capture the baseline inputs: project type, current state, language scope, and expected launch timing.",
  "Translate the request into a defined execution model with priorities and operating constraints set early.",
  "Build a content and interface structure driven by usage logic rather than visual treatment alone.",
  "Review the output as a presentation, operating, and communication layer before treating it as final delivery.",
];

const decisionFrames = [
  {
    title: "When is a business website the right path?",
    description: "When the project needs a multi-page structure, broader service presentation, and scalable room for message and content growth.",
  },
  {
    title: "When is a landing page the better choice?",
    description: "When the objective is a focused offer, a campaign-specific message, and one direct action with the lowest possible distraction.",
  },
  {
    title: "When is structural revision required?",
    description: "When a current site exists but the weakness lies in message order, content hierarchy, or interface logic rather than code alone.",
  },
];

type PageProps = { params: Promise<{ locale: string }>; };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  return {
    title: "Approach | MUAZ TECH",
    description: "An explanation of the working method that turns project objective and requirements into execution decisions, interface structure, and usable flow.",
    alternates: {
      canonical: "/en/approach",
      languages: {
        ar: "/approach",
        en: "/en/approach",
        "x-default": "/approach",
      },
    },
    openGraph: {
      title: "Approach | MUAZ TECH",
      description: "A method that connects objective, content, interface, and launch context into a digital output that can actually be executed.",
      url: `${siteUrl}/en/approach`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function EnglishApproachPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  return (
    <SiteSubpageFrame
      locale="en"
      eyebrow="APPROACH"
      title="An approach that turns requirements into a clear execution path"
      description="This page explains the working method from reading the request to selecting the execution model, organizing the structure, and aligning the output with usage and operating context."
      currentLabel="Approach"
      alternateHref="/approach"
      alternateLabel="العربية"
      navLinks={[
        { label: "Services", href: "/en/services" },
        { label: "Technologies", href: "/en/technologies" },
        { label: "Projects", href: "/en/projects" },
        { label: "FAQ", href: "/en/faq" },
        { label: "Contact", href: "/en/contact" },
      ]}
      primaryAction={{ label: "Start a project inquiry", href: "/en/contact" }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.78))] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.22)] backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.14),transparent_28%)]" />
            <div className="relative">
              <p className="mb-3 font-mono text-xs tracking-[0.32em] text-amber-200/70">EXECUTION LOGIC</p>
              <h2 className="max-w-2xl text-2xl font-semibold leading-[1.5] text-white sm:text-3xl">
                The method does not start from visual form, but from turning the request into an execution decision that can be built and evaluated.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-white/68 sm:text-base">
                Requirements are first read within usage and operating context, then the execution model is selected and the interface is built as a presentation, operating, and communication layer at once.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {overviewSignals.map((item) => (
                  <div key={item.label} className="rounded-[1.3rem] border border-white/10 bg-slate-950/36 px-4 py-4 text-center">
                    <p className="text-2xl font-semibold text-amber-100">{item.value}</p>
                    <p className="mt-2 text-xs leading-6 text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {corePrinciples.map((item, index) => (
              <div
                key={item.title}
                className={[
                  "rounded-[1.6rem] border p-5 shadow-[0_20px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl",
                  index === 0
                    ? "border-amber-200/18 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(15,23,42,0.72))]"
                    : "border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.72))]",
                ].join(" ")}
              >
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/66">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-8">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">WORKFLOW</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Execution sequence</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {workflowSteps.map((item, index) => (
              <div key={item} className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/36 px-4 py-4">
                <div className="absolute inset-y-4 left-4 w-px bg-white/10" />
                <div className="relative flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 text-xs font-semibold text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.14)]">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-7 text-white/68">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">DECISION FRAMES</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">How is the execution model selected?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
            The output is not chosen as a service label alone, but according to the relationship between objective, content scope, information density, and the action path required from the user.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {decisionFrames.map((item, index) => (
              <div
                key={item.title}
                className={[
                  "rounded-[1.75rem] border p-5",
                  index === 1
                    ? "border-amber-200/18 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(15,23,42,0.72))]"
                    : "border-white/10 bg-slate-950/40",
                ].join(" ")}
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}