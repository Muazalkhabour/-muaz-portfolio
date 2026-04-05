import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactBriefForm from "@/components/contact-brief-form";
import SiteSubpageFrame from "@/components/site-subpage-frame";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const deliverables = [
  "A structured page architecture aligned with the business message",
  "A responsive interface prepared for both mobile and desktop use",
  "Visual and content treatment supporting trust and access to the intended action",
  "Alignment between the website, brand identity, and broader digital presence",
];

const fitCases = [
  {
    title: "Businesses that need a clearer online presence",
    description: "When the current interface does not reflect the actual level of the service or present the organization with sufficient clarity.",
  },
  {
    title: "Brands moving beyond a basic page",
    description: "When information is scattered or limited and the website needs to present the business within a more structured framework.",
  },
  {
    title: "Projects that need a base for future growth",
    description: "When the project requires a base that can later absorb new service pages, case studies, or additional content.",
  },
];

const serviceProcess = [
  {
    step: "01",
    title: "Requirement capture and scope definition",
    description: "Page types, primary objective, and target audience are defined before detailed execution begins.",
  },
  {
    step: "02",
    title: "Structure and content flow",
    description: "The page architecture is built to support readability, navigation, and understanding without unnecessary density.",
  },
  {
    step: "03",
    title: "Design and implementation",
    description: "The interface is executed with a consistent identity, stable responsiveness, and visual treatment that does not compete with the message.",
  },
  {
    step: "04",
    title: "Review and handoff",
    description: "Copy, interaction points, and navigation are reviewed before the final version is approved for handoff or release.",
  },
];

const priorities = [
  "Message clarity in the opening screen",
  "Visual consistency without noise",
  "A structure that supports later scale",
  "A clear method for inquiry or contact",
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
    title: "Professional Web Development | MUAZ TECH",
    description: "A professional web-development service for building a clearer business presence, scalable structure, and a cleaner path to the intended action.",
    alternates: {
      canonical: "/en/services/web-development",
      languages: {
        ar: "/services/web-development",
        en: "/en/services/web-development",
        "x-default": "/services/web-development",
      },
    },
    openGraph: {
      title: "Professional Web Development | MUAZ TECH",
      description: "A detailed service page showing how a business website is built from objective, structure, and content through launch-ready execution.",
      url: `${siteUrl}/en/services/web-development`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function EnglishWebDevelopmentPage({ params }: PageProps) {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  return (
    <SiteSubpageFrame
      locale="en"
      eyebrow="WEB DEVELOPMENT"
      title="Professional website development for businesses, services, and digital products"
      description="This service is intended for organizations that need a website built with a structured interface, consistent identity, and a presentation model that supports understanding and use."
      currentLabel="Service"
      alternateHref="/services/web-development"
      alternateLabel="العربية"
      navLinks={[
        { label: "Services", href: "/en/services" },
        { label: "Technologies", href: "/en/technologies" },
        { label: "Projects", href: "/en/projects" },
        { label: "FAQ", href: "/en/faq" },
        { label: "Contact", href: "/en/contact" },
      ]}
      primaryAction={{ label: "Submit request for this service", href: "#project-brief" }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-4 font-mono text-sm tracking-[0.35em] text-amber-200/70">DELIVERABLES</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">What does this service include?</h2>
            <div className="mt-6 grid gap-3">
              {deliverables.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-slate-950/40 px-4 py-4 text-sm leading-7 text-white/68">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-4 font-mono text-sm tracking-[0.35em] text-amber-200/70">RESULT PRIORITIES</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Execution priorities</h2>
            <div className="mt-6 space-y-3">
              {priorities.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-white/68">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">FIT</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">When is this service the right fit?</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {fitCases.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">PROCESS</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Project workflow</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceProcess.map((item) => (
              <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5">
                <p className="font-mono text-xs tracking-[0.32em] text-amber-200/70">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div id="project-brief">
            <ContactBriefForm locale="en" />
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 backdrop-blur-xl sm:p-6">
              <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">BEST VALUE</p>
              <h3 className="text-xl font-semibold text-white">Where is this service most useful?</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                This service is most useful when the organization needs a website that presents it more accurately and gives users a structured understanding of the service or product.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-5 backdrop-blur-xl sm:p-6">
              <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">RELATED PATHS</p>
              <h3 className="text-xl font-semibold text-white">Related services</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                If the requirement is limited to a campaign page or a single offer, the landing-page service may be more suitable than a full website at this stage.
              </p>
              <Link href="/en/services/landing-pages" className="mt-5 inline-flex rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:border-amber-200/30 hover:text-amber-100">
                View landing-page service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}