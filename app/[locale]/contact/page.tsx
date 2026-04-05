import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactBriefForm from "@/components/contact-brief-form";
import SiteSubpageFrame from "@/components/site-subpage-frame";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const responseNotes = [
  "A structured intake reduces the time required to read current state and define an executable starting point.",
  "When the idea is still forming, primary objective, current-site status, and language scope help define the initial decision more precisely.",
  "The objective of this stage is to turn the request into inputs that can be reviewed technically and operationally.",
];

const conversionSignals = [
  "An initial determination of the most appropriate execution path based on current state: website, landing page, or structural revision.",
  "Reduced message back-and-forth through an intake form covering project type, primary objective, language scope, and baseline operating requirements.",
  "A discussion centered on intended outcome, execution scope, and launch timing before secondary detail.",
];

const nextSteps = [
  "I review the idea, current state, and the primary objective of the project: direct conversion, business presence, or a campaign-led path.",
  "I define the right execution model according to content scope, language needs, and launch constraints.",
  "We move from there to an initial estimate and a practical next execution step.",
];

type PageProps = { params: Promise<{ locale: string }>; };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  return {
    title: "Contact | MUAZ TECH",
    description: "A project intake page for defining current state, primary objective, and scope before the detailed technical discussion.",
    alternates: {
      canonical: "/en/contact",
      languages: {
        ar: "/contact",
        en: "/en/contact",
        "x-default": "/contact",
      },
    },
    openGraph: {
      title: "Contact | MUAZ TECH",
      description: "Receive project inquiries through an initial intake that defines scope, objective, and the right execution path early.",
      url: `${siteUrl}/en/contact`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function EnglishContactPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  return (
    <SiteSubpageFrame
      locale="en"
      eyebrow="CONTACT"
      title="Project inquiries and technical contact"
      description="This page is dedicated to receiving initial project requests through a short intake form that captures current state, primary objective, and baseline requirements before detailed discussion."
      currentLabel="Contact"
      alternateHref="/contact"
      alternateLabel="العربية"
      navLinks={[
        { label: "Services", href: "/en/services" },
        { label: "Technologies", href: "/en/technologies" },
        { label: "Projects", href: "/en/projects" },
        { label: "FAQ", href: "/en/faq" },
        { label: "Contact", href: "/en/contact" },
      ]}
      primaryAction={{ label: "Submit project request", href: "/en/contact#project-brief" }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {conversionSignals.map((item) => (
            <div key={item} className="rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.72))] p-5 shadow-[0_20px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl">
              <p className="text-sm leading-7 text-white/74">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div id="project-brief">
            <ContactBriefForm locale="en" />
          </div>
          <div className="space-y-4">
            <div className="rounded-[1.9rem] border border-amber-200/20 bg-gradient-to-br from-amber-200/14 to-white/5 p-5 backdrop-blur-xl sm:p-6">
              <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">CLOSING PATH</p>
              <h3 className="text-xl font-semibold text-white">What follows the submission of the project request?</h3>
              <div className="mt-4 space-y-3">
                {nextSteps.map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1.3rem] border border-white/10 bg-slate-950/36 px-4 py-4">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 text-[11px] font-semibold text-amber-100">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
              <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">ONE CHANNEL</p>
              <h3 className="text-xl font-semibold text-white">The intake form is the starting point on this page</h3>
              <p className="mt-3 text-sm leading-7 text-white/63">
                Once the form is completed, WhatsApp opens with a structured initial draft. For that reason, the page avoids distributing the intake step across multiple competing channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_28%,rgba(2,6,23,0.72)_100%)] p-6 backdrop-blur-xl sm:p-8">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">CONTACT NOTES</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">What makes the initial contact stage more efficient?</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {responseNotes.map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}
