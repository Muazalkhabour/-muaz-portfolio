"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import BrandMark from "@/components/brand-mark";
import HeroPortrait from "@/components/hero-portrait";
import MobileHeaderNav from "@/components/mobile-header-nav";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import SocialLinks from "@/components/social-links";
import { projectShowcase, servicePaths } from "@/lib/site-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const HeroScene = dynamic(() => import("@/components/hero-scene"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full animate-pulse rounded-[2rem] border border-white/10 bg-white/5 sm:h-[480px]" />
  ),
});

function HeroSceneFallback({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={[
        "relative h-[250px] w-full overflow-hidden rounded-[2rem] border border-amber-200/10 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_34%),radial-gradient(circle_at_bottom,rgba(194,65,12,0.12),transparent_26%)] shadow-[0_0_60px_rgba(251,146,60,0.12)]",
        "sm:h-[320px] md:h-[360px]",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_40%,rgba(2,6,23,0.38)_100%)]" />
    </div>
  );
}

const highlights = [
  ["تحديد نموذج التنفيذ مبكرًا", "تُحسم منذ البداية طبيعة المخرج: موقع كامل، صفحة هبوط، أو مراجعة بنيوية أوسع بحسب الحاجة الفعلية."],
  ["معالجة تقودها وظيفة الواجهة", "تُبنى القرارات التقنية والبصرية هنا وفق وضوح الرسالة ومسار الاستخدام والإجراء المطلوب."],
  ["بنية ثنائية اللغة ضمن نظام واحد", "تُطوَّر النسختان العربية والإنجليزية داخل هيكل موحد يحافظ على الاتساق في المحتوى والهوية ومسار الاستخدام."],
];

const credential = {
  title: "خلفية أكاديمية من Medipol University",
  description:
    "تدعم هذه الخلفية الأكاديمية الخبرة العملية بأساس معرفي يساعد على اتخاذ قرارات أكثر دقة في هندسة الواجهات وبناء المنتجات الرقمية.",
  badge: "Academic Foundation",
};

const trustSignals = [
  {
    label: "أسلوب التنفيذ",
    value: "من قراءة المتطلبات الأولية إلى واجهة جاهزة للنشر ضمن مسار عمل واضح وقابل للمراجعة.",
  },
  {
    label: "تركيز المشروع",
    value: "مواقع مؤسسية، صفحات هبوط، وواجهات رقمية تُبنى على بنية واضحة لا على الزخرفة وحدها.",
  },
  {
    label: "معيار القرار",
    value: "مدى قدرة الموقع على توضيح القيمة وتوجيه المستخدم إلى الإجراء الصحيح ضمن مسار مقصود.",
  },
];

const projects = projectShowcase.ar;
const services = servicePaths.ar;

const footerLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "الخدمات", href: "/services" },
  { label: "التقنيات", href: "/technologies" },
  { label: "المنهج", href: "/approach" },
  { label: "المشاريع", href: "/projects" },
  { label: "تواصل", href: "/contact" },
];

const mobileNavLinks = [
  { label: "الخدمات", href: "/services" },
  { label: "التقنيات", href: "/technologies" },
  { label: "المنهج", href: "/approach" },
  { label: "المشاريع", href: "/projects" },
  { label: "الأسئلة", href: "/faq" },
  { label: "تواصل", href: "/contact" },
];

const footerNotes = [
  {
    label: "جاهز للمشاريع الجديدة",
    value: "يتضمن نطاق العمل مواقع مؤسسية وصفحات هبوط وواجهات رقمية تركّز على الوضوح والكفاءة.",
  },
  {
    label: "أسلوب العمل",
    value: "منهج عمل منظم يجمع بين الدقة البصرية والاتساق الوظيفي ووضوح الرسالة.",
  },
  {
    label: "نقطة الوصول",
    value: "صفحة التواصل هي المكان المخصص لإرسال المتطلبات الأولية وبدء النقاش حول المشروع.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "معاذ الشمطي",
      alternateName: "Muaz Alshmoty",
      url: siteUrl,
      image: `${siteUrl}/icon.svg`,
      jobTitle: "مطور ويب ومصمم واجهات رقمية",
      worksFor: {
        "@type": "Organization",
        name: "MUAZ TECH",
      },
      sameAs: [
        "https://github.com/Muazalkhabour",
        "https://www.instagram.com/muaz__92/",
        "https://www.facebook.com/muaz.alkhabour",
      ],
      knowsAbout: [
        "Next.js",
        "TypeScript",
        "UI Design",
        "Landing Pages",
        "Digital Marketing",
        "Frontend Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "MUAZ TECH",
      inLanguage: "ar",
      description:
        "موقع معاذ الشمطي لعرض خدمات تطوير الويب، تصميم الواجهات الحديثة، بناء صفحات الهبوط، وتحسين الحضور الرقمي.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "MUAZ TECH",
      url: siteUrl,
      description:
        "خدمات تطوير مواقع احترافية، تصميم صفحات هبوط، وبناء حضور رقمي يربط الموقع بالمنصات الاجتماعية بشكل متناسق.",
      areaServed: "Worldwide",
      provider: {
        "@id": `${siteUrl}/#person`,
      },
      serviceType: [
        "Web Development",
        "Landing Page Design",
        "UI Engineering",
        "Digital Presence Strategy",
      ],
    },
  ],
};

export default function Home() {
  const [shouldRenderScene, setShouldRenderScene] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const fadeUp = shouldReduceMotion
    ? {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.7, ease: "easeOut" as const },
      };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    let timerId: number | undefined;

    const syncSceneVisibility = () => {
      window.clearTimeout(timerId);

      if (!mediaQuery.matches) {
        setShouldRenderScene(false);
        return;
      }

      timerId = window.setTimeout(() => {
        setShouldRenderScene(true);
      }, 250);
    };

    syncSceneVisibility();
    mediaQuery.addEventListener("change", syncSceneVisibility);

    return () => {
      window.clearTimeout(timerId);
      mediaQuery.removeEventListener("change", syncSceneVisibility);
    };
  }, []);

  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/2 top-0 h-[30rem] w-[30rem] translate-x-1/2 rounded-full bg-amber-400/16 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
        <a href="#home" className="translate-y-2 text-sm font-semibold tracking-[0.35em] text-white/90 sm:translate-y-0">
          <BrandMark compact />
        </a>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white/70 backdrop-blur md:flex lg:gap-6 lg:px-5 lg:py-3 lg:text-sm">
            <Link href="/services" className="transition hover:text-amber-200">الخدمات</Link>
            <Link href="/technologies" className="transition hover:text-amber-200">التقنيات</Link>
            <Link href="/approach" className="transition hover:text-amber-200">المنهج</Link>
            <Link href="/projects" className="transition hover:text-amber-200">المشاريع</Link>
            <Link href="/faq" className="transition hover:text-amber-200">الأسئلة</Link>
            <Link href="/contact" className="transition hover:text-amber-200">تواصل</Link>
          </nav>
          <Link
            href="/en"
            hrefLang="en"
            lang="en"
            className="translate-y-2 inline-flex items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2.5 text-xs font-semibold tracking-[0.18em] text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50 sm:translate-y-0 sm:text-sm"
          >
            EN
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 pb-2 sm:px-6 md:hidden">
        <MobileHeaderNav links={mobileNavLinks} direction="rtl" />
      </div>

      <section
        id="home"
        className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-5 px-4 pb-12 pt-2 sm:gap-14 sm:px-6 sm:pb-20 sm:pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10"
      >
        <motion.div
          {...fadeUp}
          className="order-2 space-y-5 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_14%,rgba(2,6,23,0.82)_100%)] p-4 shadow-[0_28px_80px_rgba(2,6,23,0.38)] backdrop-blur-2xl sm:space-y-8 sm:rounded-none sm:border-0 sm:bg-none sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none lg:order-2"
        >
          <div className="sm:hidden">
            <HeroPortrait variant="integrated" />
          </div>

          <div
            dir="ltr"
            className="mt-2 inline-flex w-fit max-w-full items-center gap-2 self-start rounded-full border border-amber-300/20 bg-amber-300/10 px-3.5 py-2 text-[11px] font-medium leading-5 text-amber-100 sm:mt-5 sm:px-4 sm:text-xs"
          >
            <span>Available for Work</span>
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.55)]" />
          </div>

          <div className="space-y-4 sm:space-y-5">
            <p
              dir="ltr"
              className="flex w-fit max-w-full flex-col gap-1 font-mono text-[11px] leading-5 tracking-[0.18em] text-white/45 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2 sm:text-sm sm:leading-6 sm:tracking-[0.24em] lg:flex-nowrap lg:gap-x-5 lg:tracking-[0.28em]"
            >
              <span className="whitespace-nowrap">WEB DEVELOPER</span>
              <span className="hidden text-white/25 sm:inline">/</span>
              <span className="whitespace-nowrap">DIGITAL MARKETER</span>
            </p>
            <h1 className="flex max-w-3xl flex-col gap-2 text-[1.52rem] font-semibold leading-[1.38] tracking-tight text-white sm:gap-2 sm:text-[1.9rem] sm:leading-[1.4] lg:text-[2.65rem] lg:leading-[1.4]">
              <span className="block">
                أنا <span className="text-amber-200">معاذ الشمطي</span> | <span className="text-amber-200">M</span>UAZ <span className="text-amber-200">T</span>ECH
              </span>
              <span className="block leading-[1.68] sm:leading-[1.72] lg:leading-[1.68]">أبني بنية رقمية متكاملة، أوحّد فيها هندسة الواجهة مع منطق الرسالة والتسويق الرقمي.</span>
            </h1>
            <p className="max-w-2xl text-[15px] leading-7 text-white/70 sm:text-lg sm:leading-8 lg:text-xl">
              أجمع بين تطوير الويب وبنية المحتوى وتجربة الاستخدام بحيث يعمل الموقع بوصفه طبقة عرض واتصال وقرار، لا مجرد حضور بصري معزول.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="w-full rounded-full bg-amber-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-amber-200 sm:w-auto"
            >
              قدّم طلب مشروع
            </Link>
          </div>

          <p className="text-sm leading-7 text-white/55">
            يهدف التواصل الأولي إلى تحديد نموذج التنفيذ الأنسب: موقع كامل، صفحة هبوط، أو مراجعة بنيوية للعرض الحالي قبل بدء المعالجة.
          </p>

          <div className="mx-auto grid max-w-md justify-items-center gap-4 sm:max-w-none sm:grid-cols-2 sm:justify-items-stretch xl:grid-cols-3">
            {highlights.map(([title, text]) => (
              <div key={title} className="w-full max-w-md rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(15,23,42,0.46))] p-5 text-center shadow-[0_14px_40px_rgba(2,6,23,0.16)] backdrop-blur-xl transition hover:border-amber-200/20 sm:max-w-none sm:text-start">
                <p className="mb-2 text-sm font-semibold text-white">{title}</p>
                <p className="text-sm leading-6 text-white/60">{text}</p>
              </div>
            ))}
          </div>

        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
          className="order-1 relative mx-auto hidden w-full max-w-xl sm:block sm:min-h-[460px] lg:order-1 lg:min-h-[520px]"
        >
          <div className="pointer-events-none absolute inset-x-0 top-5 -z-10 opacity-75 sm:top-14 sm:opacity-90">
            {shouldRenderScene ? (
              <HeroScene compact className="mx-auto max-w-[14.75rem] scale-[0.8] opacity-45 sm:max-w-lg sm:scale-[0.94] sm:opacity-65" />
            ) : (
              <HeroSceneFallback className="mx-auto max-w-[14.75rem] scale-[0.8] opacity-35 sm:max-w-lg sm:scale-[0.94] sm:opacity-55" />
            )}
          </div>
          <HeroPortrait />
        </motion.div>
      </section>

      <motion.section {...fadeUp} className="mx-auto w-full max-w-7xl px-4 pb-6 pt-6 sm:px-6 sm:pt-8 lg:px-10">
        <div className="mb-6 max-w-3xl rounded-[1.75rem] border border-cyan-200/12 bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(255,255,255,0.03)_34%,rgba(2,6,23,0.46)_100%)] p-5 shadow-[0_18px_45px_rgba(8,47,73,0.16)] sm:rounded-none sm:border-0 sm:bg-none sm:p-0 sm:shadow-none">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">SERVICES</p>
          <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">مسارات التنفيذ الأساسية</h2>
          <p className="max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            يقدّم هذا القسم قراءة أولية لمسارات التنفيذ المعتمدة، بينما تتضمن صفحة الخدمات تفصيل النطاق، متطلبات كل مسار، وحالات ملاءمته الفعلية.
          </p>
        </div>

        <div className="mx-auto grid max-w-md gap-4 sm:max-w-none sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group w-full rounded-[1.8rem] border border-cyan-200/12 bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(255,255,255,0.02)_24%,rgba(15,23,42,0.62)_100%)] p-5 text-center shadow-[0_18px_50px_rgba(2,6,23,0.16)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/24 sm:text-start"
            >
              <p className="mb-3 text-lg font-semibold text-white transition group-hover:text-amber-100">{service.title}</p>
              <p className="text-sm leading-7 text-white/62">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-5">
          <Link
            href="/services"
            className="inline-flex w-full items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50 sm:w-auto"
          >
            الاطلاع على صفحة الخدمات
          </Link>
        </div>
      </motion.section>

      <motion.section id="projects" {...fadeUp} className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-10">
        <div className="mb-8 max-w-3xl rounded-[1.75rem] border border-amber-200/14 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(255,255,255,0.03)_34%,rgba(2,6,23,0.44)_100%)] p-5 shadow-[0_18px_45px_rgba(77,52,10,0.16)] sm:rounded-none sm:border-0 sm:bg-none sm:p-0 sm:shadow-none">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">PROJECT PREVIEW</p>
          <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">دراسة حالة مختارة</h2>
          <p className="max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            يعرض هذا القسم حالة واحدة بصياغة مختصرة توضح منطق المعالجة، بنية الواجهة، واتجاه القرار التنفيذي، بينما تبقى القراءة الكاملة ضمن صفحة المشاريع.
          </p>
        </div>
        <div className="grid auto-rows-fr gap-5 lg:max-w-4xl">
          {projects.slice(0, 1).map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -8 }}
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
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2">بحث</div>
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2">خرائط</div>
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2">عقود</div>
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

                      <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-3 text-xs leading-5 text-white/58 sm:text-xs">
                        منصة تجمع العروض والمتابعة والإدارة ضمن واجهة موحدة تخدم المستخدم والجهة المشغلة معًا.
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-3">
                        <p className="text-sm font-semibold text-white">{project.previewHeadline ?? project.previewLabel}</p>
                        <p className="mt-1 text-xs leading-6 text-white/50">
                          {project.previewSubline ?? "واجهة مبنية على سهولة القراءة وتسلسل المعلومات ودعم الاستخدام المباشر."}
                        </p>
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

              <div className="mb-4">
                <span className="inline-flex rounded-full border border-amber-200/16 bg-amber-200/10 px-3 py-1.5 text-[11px] font-medium text-amber-100">
                  الهدف: {project.objective}
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
                  يعرض هذا الكرت طبقة تعريفية موجزة، بينما تتوفر الدراسة الأوسع للمشاريع ضمن الصفحة المخصصة لذلك.
                </p>
              </div>

              <div className="mt-auto border-t border-white/10 pt-5">
                <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/35">Selected work</span>
                <a
                  href={project.href ?? "/projects"}
                  target={project.href ? "_blank" : undefined}
                  rel={project.href ? "noreferrer" : undefined}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2.5 text-center text-sm font-semibold text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50"
                >
                  <span>{project.primaryCta}</span>
                  <span aria-hidden="true">←</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/projects"
            className="inline-flex w-full items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50 sm:w-auto"
          >
            الاطلاع على صفحة المشاريع
          </Link>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-emerald-200/12 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0.03)_24%,rgba(15,23,42,0.72)_100%)] p-5 shadow-[0_18px_50px_rgba(2,6,23,0.16)] backdrop-blur-xl sm:p-8">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">CREDENTIALS</p>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">الاعتماد الأكاديمي</h2>
            </div>
            <span className="inline-flex self-start rounded-full border border-amber-200/20 bg-amber-200/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-amber-100 sm:self-auto">
              {credential.badge}
            </span>
          </div>

          <div className="rounded-[1.5rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/[0.10] to-transparent p-5 sm:p-6">
            <p className="mb-2 text-lg font-semibold text-white sm:text-xl">{credential.title}</p>
            <p className="max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">{credential.description}</p>
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
      </motion.section>

      <motion.section id="contact" {...fadeUp} className="mx-auto w-full max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-rose-200/12 bg-[linear-gradient(180deg,rgba(244,114,182,0.08),rgba(255,255,255,0.03)_22%,rgba(15,23,42,0.76)_100%)] p-6 shadow-[0_22px_70px_rgba(2,6,23,0.18)] backdrop-blur-xl sm:p-10">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">CONTACT</p>
          <h2 className="mb-4 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">إدخال طلبات التنفيذ</h2>
          <p className="max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            تمثل صفحة التواصل نقطة الإدخال الرسمية لطلبات التنفيذ، حيث يُستخدم نموذج منظم لتحديد نطاق المشروع، الهدف الأساسي، ومتطلبات التشغيل قبل الانتقال إلى التقييم التقني.
          </p>

          <div className="mt-8 rounded-[1.85rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.72))] p-5 shadow-[0_22px_70px_rgba(2,6,23,0.18)] backdrop-blur-xl sm:p-8">
            <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">PROJECT INTAKE</p>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">مكونات صفحة التواصل</h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68 sm:text-base">
              تتضمن الصفحة نموذج إدخال منظّمًا لجمع المتطلبات الأساسية، ثم تهيئة طلب المشروع ضمن صياغة أولية قابلة للمراجعة قبل بدء النقاش التنفيذي.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
              >
                إرسال طلب مشروع
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.footer {...fadeUp} className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-10">
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
                أطور مواقع وواجهات رقمية تركّز على البنية الواضحة والأداء الجيد وتقديم الخدمة أو المنتج ضمن إطار مهني منظم.
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
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/72 transition hover:border-amber-200/25 hover:bg-amber-200/[0.06] hover:text-amber-100"
                  >
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
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/8 bg-slate-950/40 px-4 py-4"
                  >
                    <p className="mb-2 text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-sm leading-7 text-white/58">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-8 border-t border-white/10 pt-5 text-center text-sm text-white/50">
            <SocialLinks locale="ar" />

            <div className="mt-5 flex flex-col items-center gap-4">
              <BrandMark compact className="shrink-0" />
              <p className="max-w-xl leading-7 text-white/58">
                جميع الحقوق محفوظة لـ MUAZ TECH
              </p>
            </div>
          </div>
        </div>
      </motion.footer>

      <ScrollToTopButton ariaLabel="العودة إلى أعلى الصفحة" />
    </main>
  );
}
