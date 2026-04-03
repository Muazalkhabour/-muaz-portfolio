"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import BrandMark from "@/components/brand-mark";
import HeroPortrait from "@/components/hero-portrait";

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

function TechGroupIcon({ type }: { type: "frontend" | "motion" | "data" }) {
  if (type === "frontend") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M8 10l-2 2 2 2" />
        <path d="m16 10 2 2-2 2" />
        <path d="m13 9-2 6" />
      </svg>
    );
  }

  if (type === "motion") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 15c2.5-5 5.5-8 9-8 2.5 0 4.8 1.4 7 4" />
        <path d="M4 19c2.5-3.5 5.5-5.2 9-5.2 2.4 0 4.8.8 7 2.7" />
        <path d="M14 7h4v4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

const techGroups = [
  {
    title: "Frontend Foundations",
    label: "Core UI",
    description: "أستخدم هذه التقنيات لبناء واجهات حديثة، سريعة، ومنظمة تمنح المستخدم تجربة واضحة وقابلة للتوسع.",
    items: ["Next.js", "React", "TypeScript"],
    accentClass: "from-amber-200/14 via-orange-300/8 to-transparent",
    icon: "frontend" as const,
  },
  {
    title: "Motion & Experience",
    label: "Visual Depth",
    description: "أضيف الحركة المدروسة والمشاهد التفاعلية عندما تكون جزءًا من التجربة لا مجرد تأثير بصري زائد.",
    items: ["Framer Motion", "Three.js", "Tailwind CSS"],
    accentClass: "from-cyan-300/16 via-sky-300/8 to-transparent",
    icon: "motion" as const,
  },
  {
    title: "Data & Systems",
    label: "Logic Layer",
    description: "أبني طبقات منطق وبيانات تساعد على إدارة المنتجات والخدمات بشكل أوضح وأكثر اعتمادية على المدى الطويل.",
    items: ["Node.js", "Prisma", "PostgreSQL"],
    accentClass: "from-emerald-300/16 via-teal-300/8 to-transparent",
    icon: "data" as const,
  },
];

const workflowPrinciples = ["Performance-first", "Scalable Structure", "Conversion-aware UI", "Responsive by default"];

const highlights = [
  ["تطوير وتجربة احترافية", "أبني واجهات حديثة تجمع بين الجمال، السرعة، والهيكلة القابلة للتوسع."],
  ["فهم تسويقي عملي", "أربط الموقع بأهداف العلامة التجارية والظهور والتفاعل على المنصات الاجتماعية."],
  ["صفحات تدعم التحويل", "أهتم بتجربة المستخدم والرسائل البصرية بما يخدم الثقة والنتائج."],
];

const services = [
  {
    title: "تطوير مواقع احترافية",
    description: "تطوير مواقع شخصية وتجارية وصفحات هبوط حديثة بهوية واضحة، أداء سريع، وتجربة استخدام تدعم الظهور والثقة.",
  },
  {
    title: "تسويق رقمي عبر المنصات",
    description: "فهم عملي لإدارة الحضور الرقمي وصناعة رسائل ومحتوى مناسب للمنصات الاجتماعية بما يخدم الوصول والتفاعل.",
  },
  {
    title: "صفحات هبوط مهيّأة للتحويل",
    description: "تصميم صفحات هبوط تساعد على جذب الانتباه، توضيح القيمة، وتحويل الزيارة إلى تفاعل أو تواصل مباشر.",
  },
  {
    title: "بناء حضور رقمي متكامل",
    description: "ربط الموقع مع هوية النشاط التجاري والمنصات الاجتماعية لبناء حضور رقمي أكثر اتساقًا واحترافية.",
  },
];

const platformGroups = [
  {
    label: "Social Reach",
    title: "Instagram / Facebook / TikTok / Snapchat",
    description: "للوصول السريع، الهوية البصرية، وبناء التفاعل.",
    accentClass: "from-amber-200/14 via-orange-300/8 to-transparent",
  },
  {
    label: "Professional Presence",
    title: "LinkedIn / YouTube",
    description: "للحضور المهني والمحتوى الأعمق.",
    accentClass: "from-cyan-300/14 via-sky-300/8 to-transparent",
  },
  {
    label: "Paid Growth",
    title: "Google Ads / Meta Ads",
    description: "للتوسّع المدفوع وتحسين الوصول والاستهداف.",
    accentClass: "from-emerald-300/14 via-teal-300/8 to-transparent",
  },
];

const credential = {
  title: "خلفية أكاديمية من Medipol University",
  description:
    "إلى جانب الخبرة العملية، تمنحني هذه الخلفية الأكاديمية أساسًا معرفيًا يدعم عملي في تطوير الواجهات وبناء التجارب الرقمية بصورة أكثر وضوحًا واحترافية.",
  badge: "Academic Foundation",
};

const projects = [
  {
    title: "AQARI",
    summary:
      "منصة عقارية متكاملة صُممت لتقديم تجربة أكثر نضجًا ووضوحًا في سوق العقارات، حيث تجمع بين البحث الدقيق، عرض الوحدات بشكل مقنع، متابعة العقود، ولوحات الإدارة ضمن نظام واحد يرفع الثقة، يسرّع القرار، ويمنح المكاتب العقارية حضورًا رقميًا أكثر قوة واحترافية.",
    tag: "Real Estate SaaS",
    stack: ["Property Search", "Contracts", "Admin Dashboard"],
    cta: "شاهد المشروع مباشرًا",
    href: "https://aqari-saas.vercel.app/",
    secondaryCta: "اطلب منصة مشابهة",
    secondaryHref: "#contact",
    previewLabel: "Search, listings, contracts",
    previewBars: [88, 76, 92],
    previewClassName:
      "from-amber-200/25 via-cyan-300/10 to-transparent",
    previewMode: "real-estate",
    featured: true,
  },
  {
    title: "لوحة تحكم لحظية",
    summary: "لوحة بيانات تفاعلية تساعد على قراءة المؤشرات المباشرة بسرعة واتخاذ قرارات أوضح عبر عرض بصري منظم وسهل الفهم.",
    tag: "Dashboard",
    stack: ["React", "Realtime Data", "Charts"],
    cta: "استعرض هذا النمط",
    secondaryCta: "ناقش الفكرة",
    secondaryHref: "#contact",
    previewLabel: "Live metrics overview",
    previewHeadline: "قراءة فورية للمؤشرات التي تحسم القرار",
    previewSubline: "لوحة منظمة تبرز الأداء، التغيرات، والإشارات المهمة في لحظتها.",
    previewBars: [56, 88, 72],
    previewClassName:
      "from-cyan-300/20 via-sky-300/10 to-transparent",
  },
  {
    title: "منصة أدوات ذكية",
    summary: "منصة رقمية تركّز على تسريع تدفقات العمل عبر واجهة واضحة تجمع بين الأتمتة والذكاء الاصطناعي بشكل عملي وسلس.",
    tag: "AI Tools",
    stack: ["Next.js", "AI Workflows", "Automation"],
    cta: "ناقش فكرتك",
    secondaryCta: "تواصل الآن",
    secondaryHref: "#contact",
    previewLabel: "Workflow orchestration",
    previewHeadline: "أتمتة أوضح لمسارات العمل الذكية",
    previewSubline: "واجهة تجمع الأدوات والمهام والذكاء الاصطناعي ضمن تدفق أكثر سرعة ومرونة.",
    previewBars: [74, 69, 86],
    previewClassName:
      "from-emerald-300/20 via-teal-300/10 to-transparent",
  },
];

const contactChannels = [
  {
    label: "WhatsApp",
    href: "https://wa.me/905356577992",
    description: "للتواصل السريع ومناقشة مشروعك مباشرة بطريقة سهلة وواضحة.",
    cta: "ابدأ المحادثة",
    featured: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/muaz__92/",
    description: "تابع آخر الأعمال واللقطات البصرية والتحديثات الجديدة أولًا بأول.",
    cta: "تابعني الآن",
  },
  {
    label: "GitHub",
    href: "https://github.com/Muazalkhabour",
    description: "اطلع على المستودعات والمشاريع البرمجية وطريقة عملي في بناء الواجهات والتجارب الحديثة.",
    cta: "شاهد الحساب",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/muaz.alkhabour",
    description: "للتواصل والمتابعة والاطلاع على حضوري المهني بشكل مباشر.",
    cta: "زر الحساب",
  },
];

const footerLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "الخدمات", href: "#services" },
  { label: "التقنيات", href: "#tech" },
  { label: "المشاريع", href: "#projects" },
  { label: "تواصل", href: "#contact" },
];

const footerNotes = [
  {
    label: "جاهز للمشاريع الجديدة",
    value: "أعمل على مواقع شخصية وتجارية وصفحات هبوط بتركيز على السرعة والوضوح.",
  },
  {
    label: "أسلوب العمل",
    value: "تنفيذ منظم، واجهات دقيقة، ورسائل بصرية تخدم العلامة التجارية بوضوح.",
  },
  {
    label: "نقطة الوصول",
    value: "قسم التواصل بالأعلى هو المكان الأساسي للوصول السريع إلى جميع القنوات.",
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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [shouldRenderScene, setShouldRenderScene] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const currentYear = new Date().getFullYear();
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
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <a href="#services" className="transition hover:text-amber-200">
              الخدمات
            </a>
            <a href="#tech" className="transition hover:text-amber-200">
              التقنيات
            </a>
            <a href="#projects" className="transition hover:text-amber-200">
              المشاريع
            </a>
            <a href="#contact" className="transition hover:text-amber-200">
              تواصل
            </a>
          </nav>
          <a
            href="/en"
            hrefLang="en"
            lang="en"
            className="translate-y-2 inline-flex items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2.5 text-xs font-semibold tracking-[0.18em] text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50 sm:translate-y-0 sm:text-sm"
          >
            EN
          </a>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 pb-2 sm:px-6 md:hidden">
        <nav className="mx-auto flex w-full items-center justify-center gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/5 px-2 py-2 text-xs text-white/75 backdrop-blur [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <a
            href="#services"
            className="shrink-0 rounded-full border border-transparent bg-white/[0.04] px-4 py-2 transition hover:border-amber-200/25 hover:text-amber-100"
          >
            الخدمات
          </a>
          <a
            href="#tech"
            className="shrink-0 rounded-full border border-transparent bg-white/[0.04] px-4 py-2 transition hover:border-amber-200/25 hover:text-amber-100"
          >
            التقنيات
          </a>
          <a
            href="#projects"
            className="shrink-0 rounded-full border border-transparent bg-white/[0.04] px-4 py-2 transition hover:border-amber-200/25 hover:text-amber-100"
          >
            المشاريع
          </a>
          <a
            href="#contact"
            className="shrink-0 rounded-full border border-transparent bg-white/[0.04] px-4 py-2 transition hover:border-amber-200/25 hover:text-amber-100"
          >
            تواصل
          </a>
        </nav>
      </div>

      <section
        id="home"
        className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-6 px-4 pb-12 pt-2 sm:gap-14 sm:px-6 sm:pb-20 sm:pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10"
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
            <h1 className="flex max-w-3xl flex-col gap-2 text-[1.52rem] font-semibold leading-[1.4] tracking-tight text-white sm:gap-2 sm:text-[1.9rem] sm:leading-[1.4] lg:text-[2.65rem] lg:leading-[1.4]">
              <span className="block whitespace-nowrap">
                أنا <span className="text-amber-200">معاذ الشمطي</span> | <span className="text-amber-200">M</span>UAZ <span className="text-amber-200">T</span>ECH
              </span>
              <span className="block leading-[1.75] sm:leading-[1.72] lg:leading-[1.68]">أطور مواقع حديثة، صفحات هبوط احترافية، وأبني حضورًا رقميًا فعالًا.</span>
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8 lg:text-xl">
              أجمع بين تطوير الويب، تصميم الواجهات، وصفحات الهبوط، والتسويق الرقمي لصناعة تجربة احترافية تساعد العلامات التجارية على الظهور، التفاعل، والنمو عبر الموقع ومنصات التواصل.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://wa.me/905356577992"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-amber-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-amber-200 sm:w-auto"
            >
              ابدأ مشروعك
            </a>
            <a
              href="#projects"
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/85 backdrop-blur transition hover:border-amber-200/40 hover:text-amber-100 sm:w-auto"
            >
              شاهد أعمالي
            </a>
            <a
              href="#contact"
              className="w-full rounded-full border border-amber-200/20 bg-amber-200/10 px-6 py-3 text-center text-sm font-semibold text-amber-100 backdrop-blur transition hover:border-amber-200/40 hover:bg-amber-200/15 hover:text-amber-50 sm:w-auto"
            >
              تواصل معي
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {highlights.map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
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

      <motion.section id="services" {...fadeUp} className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="mb-6 max-w-3xl">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">SERVICES</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">خدمات تطوير مواقع وصفحات هبوط وحضور رقمي</h2>
          <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            لا أقدّم مجرد واجهة جميلة فقط، بل أعمل على تطوير موقع احترافي وبناء حضور رقمي متكامل يخدم الصورة، الرسالة، والنتيجة التي يسعى إليها المشروع.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/25 hover:bg-amber-200/[0.06]"
            >
              <p className="mb-3 text-lg font-semibold text-white">{service.title}</p>
              <p className="text-sm leading-7 text-white/65">{service.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10" {...fadeUp}>
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-10">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">PLATFORMS</p>
          <h2 className="max-w-3xl text-2xl font-semibold text-white sm:text-3xl">حضور رقمي أوضح عبر المنصات الاجتماعية والإعلانات</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            أربط بين الموقع والمنصات الاجتماعية والإعلانات الرقمية بطريقة مبسطة تساعد على بناء حضور رقمي متناسق، أوضح في الرسالة، وأقوى في الوصول والتفاعل.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {platformGroups.map((group) => (
              <div
                key={group.title}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/25 sm:p-7"
              >
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
      </motion.section>

      <motion.section id="tech" {...fadeUp} className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">TECH STACK</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">تقنيات أختارها لبناء منتجات واضحة وسريعة وقابلة للنمو</h2>
          <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            لا أعرض التقنيات كأسماء فقط، بل كأدوات أخترتها لتقديم تجربة أفضل، أداء أقوى، وبنية أكثر تنظيمًا لمشاريع تطوير الويب والواجهات الحديثة.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/25 sm:p-7"
            >
              <div className={["pointer-events-none absolute inset-0 bg-gradient-to-br", group.accentClass].join(" ")} />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium tracking-[0.2em] text-white/58 uppercase">
                    <span className="text-amber-100">
                      <TechGroupIcon type={group.icon} />
                    </span>
                    <span>{group.label}</span>
                  </div>
                  <span className="text-[11px] font-medium tracking-[0.18em] text-amber-200/70">تقنيات أساسية</span>
                </div>

                <h3 className="text-xl font-semibold text-white sm:text-2xl">{group.title}</h3>
                <p className="mt-3 min-h-[5.5rem] text-sm leading-7 text-white/65 sm:text-base">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={`${group.title}-${item}`}
                      className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-xs font-medium text-white/82 backdrop-blur-xl"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 backdrop-blur-xl sm:p-6">
          <p className="mb-4 font-mono text-xs tracking-[0.32em] text-amber-200/70">WORKFLOW PRINCIPLES</p>
          <div className="flex flex-wrap gap-3">
            {workflowPrinciples.map((principle) => (
              <span
                key={principle}
                className="rounded-full border border-amber-200/15 bg-amber-200/10 px-4 py-2 text-xs font-medium text-amber-100 sm:text-sm"
              >
                {principle}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="projects" {...fadeUp} className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">FEATURED PROJECTS</p>
        <h2 className="mb-8 text-2xl font-semibold text-white sm:text-3xl">نماذج أعمال في تطوير المواقع والمنتجات الرقمية</h2>
        <p className="mb-8 max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
          مشاريع مختارة في تطوير المواقع، تصميم الواجهات، وبناء المنتجات الرقمية مع تركيز على الوضوح البصري، قوة الرسالة، وتجربة استخدام تعزز القيمة الفعلية للمنتج أو الخدمة.
        </p>
        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -8 }}
              className={[
                "group flex h-full min-h-[42rem] flex-col rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-amber-200/20 sm:min-h-[43rem] sm:p-6",
                project.featured ? "border-amber-200/20 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(255,255,255,0.04)_22%,rgba(255,255,255,0.03)_100%)]" : "",
              ].join(" ")}
            >
              <div
                className={[
                  "relative mb-6 overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-4",
                  "min-h-[210px]",
                ].join(" ")}
              >
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
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2">
                            بحث
                          </div>
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2">
                            خرائط
                          </div>
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2">
                            عقود
                          </div>
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
                        منصة تجمع العروض والمتابعة والإدارة ضمن واجهة أوضح تخدم الباحث والمكتب العقاري معًا.
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-3">
                        <p className="text-sm font-semibold text-white">{project.previewHeadline ?? project.previewLabel}</p>
                        <p className="mt-1 text-xs leading-6 text-white/50">
                          {project.previewSubline ?? "واجهة مركزة على الوضوح وسهولة القراءة واتخاذ القرار بسرعة."}
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
                          <div className="flex justify-between text-[10px] tracking-[0.18em] text-white/35 uppercase">
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
                <span className="text-xs tracking-[0.2em] text-white/35 uppercase">Selected work</span>
                <div className="grid w-full gap-3">
                  <a
                    href={project.href ?? "#contact"}
                    target={project.href ? "_blank" : undefined}
                    rel={project.href ? "noreferrer" : undefined}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2.5 text-center text-sm font-semibold text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50"
                  >
                    <span>{project.cta}</span>
                    <span aria-hidden="true">←</span>
                  </a>
                  <a
                    href={project.secondaryHref ?? "#contact"}
                    target={project.secondaryHref?.startsWith("http") ? "_blank" : undefined}
                    rel={project.secondaryHref?.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-center text-sm font-semibold text-white/78 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  >
                    <span>{project.secondaryCta ?? "تواصل الآن"}</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-8">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">CREDENTIALS</p>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">شهادات تدعم الثقة والمصداقية</h2>
            </div>
            <span className="inline-flex self-start rounded-full border border-amber-200/20 bg-amber-200/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-amber-100 sm:self-auto">
              {credential.badge}
            </span>
          </div>

          <div className="rounded-[1.5rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/[0.10] to-transparent p-5 sm:p-6">
            <p className="mb-2 text-lg font-semibold text-white sm:text-xl">{credential.title}</p>
            <p className="max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">{credential.description}</p>
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" {...fadeUp} className="mx-auto w-full max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-10">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">CONTACT</p>
          <h2 className="mb-4 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">جاهز لتحويل فكرتك إلى موقع احترافي أو تجربة رقمية متكاملة</h2>
          <p className="max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            إذا كنت تبحث عن تطوير موقع احترافي، صفحة هبوط فعالة، أو حضور رقمي أقوى على المنصات الاجتماعية، يسعدني مساعدتك في بناء تجربة متكاملة تخدم مشروعك وتظهره بصورة أكثر قوة واحترافية.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="https://wa.me/905356577992"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-amber-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-amber-200 sm:w-auto"
            >
              ابدأ محادثة على WhatsApp
            </a>
            <a
              href="https://www.instagram.com/muaz__92/"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/85 backdrop-blur transition hover:border-amber-200/40 hover:text-amber-100 sm:w-auto"
            >
              تابعني على Instagram
            </a>
            <a
              href="https://github.com/Muazalkhabour"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/85 backdrop-blur transition hover:border-amber-200/40 hover:text-amber-100 sm:w-auto"
            >
              شاهد GitHub
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className={[
                  "group rounded-3xl border p-5 backdrop-blur-xl transition hover:-translate-y-1",
                  channel.featured
                    ? "border-amber-200/20 bg-amber-200/[0.08] hover:border-amber-200/35"
                    : "border-white/10 bg-slate-950/40 hover:border-amber-200/20",
                ].join(" ")}
              >
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
                أطور مواقع حديثة وهوية رقمية واضحة تساعد المشاريع على الظهور بصورة احترافية وبأداء سريع وتجربة استخدام دقيقة.
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

          <div className="relative mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-5 text-center text-sm text-white/50">
            <BrandMark compact className="shrink-0" />
            <p className="max-w-xl leading-7 text-white/58">
              جميع الحقوق محفوظة لـ MUAZ TECH
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white/72 transition hover:border-amber-200/25 hover:text-amber-100"
            >
              <span>العودة للأعلى</span>
              <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </motion.footer>

      {showScrollTop && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          aria-label="الصعود إلى أعلى الصفحة"
          className="group fixed bottom-5 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-orange-200/25 bg-[linear-gradient(180deg,rgba(253,186,116,0.84),rgba(251,146,60,0.74))] text-slate-950 shadow-[0_14px_28px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-orange-100/35 hover:shadow-[0_16px_34px_rgba(15,23,42,0.32)] sm:bottom-6 sm:left-6"
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] transition duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </main>
  );
}
