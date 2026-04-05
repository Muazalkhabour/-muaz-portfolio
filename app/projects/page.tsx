import type { Metadata } from "next";
import Link from "next/link";
import SiteSubpageFrame from "@/components/site-subpage-frame";
import { projectPrinciples, projectShowcase } from "@/lib/site-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const [featuredProject, ...otherProjects] = projectShowcase.ar;
const featuredProjectHref = featuredProject.href ?? "/projects";
const featuredProjectResults = featuredProject.results ?? [];
const projectOverviewSignals = [
  { value: "1", label: "دراسة مميزة" },
  { value: `${otherProjects.length}`, label: "حالات إضافية" },
  { value: `${featuredProjectResults.length || 3}`, label: "مؤشرات أثر" },
];
const featuredCaseStudyFrames = [
  {
    title: "سياق المنتج",
    description: "منصة عقارية تحتاج إلى توحيد الاكتشاف، تقييم العروض، المتابعة، والإدارة ضمن واجهة واحدة قابلة للاستخدام اليومي.",
  },
  {
    title: "المتطلبات المحورية",
    description: "تقليل الانتقال غير المنظم بين المستخدم النهائي وفريق التشغيل، مع الحفاظ على وضوح الإجراء والبيانات في كل طبقة.",
  },
  {
    title: "القرار التنفيذي",
    description: "تقسيم الرحلة إلى طبقات واضحة: اكتشاف، مقارنة، متابعة، وإدارة، مع إعطاء الأولوية للمعلومة الإجرائية داخل الواجهة.",
  },
  {
    title: "الأثر التشغيلي",
    description: "تحويل المنصة إلى أداة تشغيل وعرض في الوقت نفسه، بما يرفع وضوح الاستخدام ويختصر المسار بين العرض والإجراء.",
  },
];

export const metadata: Metadata = {
  title: "المشاريع | MUAZ TECH",
  description: "صفحة المشاريع تعرض دراسات حالة رقمية مع توضيح المشكلة، المعالجة، والقيمة الناتجة عن كل مشروع.",
  alternates: {
    canonical: "/projects",
    languages: {
      ar: "/projects",
      en: "/en/projects",
      "x-default": "/projects",
    },
  },
  openGraph: {
    title: "المشاريع | MUAZ TECH",
    description: "دراسات حالة رقمية تعرض بنية المشروع والقرارات التصميمية والتنفيذية ضمن تجربة متسقة مع هوية الموقع.",
    url: `${siteUrl}/projects`,
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <SiteSubpageFrame
      locale="ar"
      eyebrow="PROJECTS"
      title="دراسات حالة تقرأ المشروع من زاوية القرار، المعالجة، والأثر"
      description="تعرض هذه الصفحة الأعمال بوصفها حالات تنفيذية واضحة: ما المشكلة الأصلية، كيف صيغ القرار، وما الأثر الذي نتج عن البنية النهائية على مستوى الاستخدام والتشغيل."
      currentLabel="المشاريع"
      alternateHref="/en/projects"
      alternateLabel="EN"
      navLinks={[
        { label: "الخدمات", href: "/services" },
        { label: "التقنيات", href: "/technologies" },
        { label: "المشاريع", href: "/projects" },
        { label: "الأسئلة", href: "/faq" },
        { label: "تواصل", href: "/contact" },
      ]}
      primaryAction={{ label: "استعراض مشروع AQARI", href: featuredProjectHref }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-200/15 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(15,23,42,0.78))] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.22)] backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.12),transparent_26%)]" />
            <div className="relative">
              <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">FEATURED PROJECT</p>
              <span className="inline-flex rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1.5 text-[11px] font-medium text-amber-100">
                الهدف: {featuredProject.objective}
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
              <p><span className="font-semibold text-white">المشكلة الأساسية:</span> {featuredProject.challenge}</p>
              <p><span className="font-semibold text-white">المعالجة التنفيذية:</span> {featuredProject.solution}</p>
              <p><span className="font-semibold text-white">الأثر الناتج:</span> {featuredProject.value}</p>
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
              شاهد المشروع مباشرًا
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.72))] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl sm:p-8">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">PROJECT PRINCIPLES</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">إطار قراءة دراسات الحالة</h2>
            <p className="mt-4 text-sm leading-7 text-white/64">
              لا تُعرض المشاريع هنا بوصفها لقطات بصرية فقط، بل ضمن تسلسل يوضح منطق القرار، طبقات المعالجة، وصلتها بالاستخدام الفعلي.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featuredProject.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/78">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {projectPrinciples.ar.map((item) => (
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
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">دراسات حالة إضافية</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/64 sm:text-base">
            تمثل هذه الحالات نطاقات تنفيذ مختلفة، لكنها تُقرأ كلها ضمن المنهج نفسه: فهم السياق، اختيار المعالجة، وقياس القيمة الناتجة من البنية النهائية.
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
                    الهدف: {project.objective}
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
                  <p><span className="font-semibold text-white">المشكلة:</span> {project.challenge}</p>
                  <p><span className="font-semibold text-white">المعالجة:</span> {project.solution}</p>
                  <p><span className="font-semibold text-white">الأثر:</span> {project.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex rounded-full border border-amber-200/20 bg-amber-200/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50">
              إرسال طلب مشروع
            </Link>
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}