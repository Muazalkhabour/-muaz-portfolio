"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import BrandMark from "@/components/brand-mark";
import HeroPortrait from "@/components/hero-portrait";

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

const stack = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Prisma", "React", "Node.js", "PostgreSQL"];

const highlights = [
  ["تطوير وتجربة احترافية", "أبني واجهات حديثة تجمع بين الجمال، السرعة، والهيكلة القابلة للتوسع."],
  ["فهم تسويقي عملي", "أربط الموقع بأهداف العلامة التجارية والظهور والتفاعل على المنصات الاجتماعية."],
  ["صفحات تدعم التحويل", "أهتم بتجربة المستخدم والرسائل البصرية بما يخدم الثقة والنتائج."],
];

const services = [
  {
    title: "تطوير مواقع احترافية",
    description: "مواقع شخصية وتجارية وصفحات هبوط حديثة بهوية واضحة وأداء سريع وتجربة استخدام متقنة.",
  },
  {
    title: "تسويق رقمي عبر المنصات",
    description: "فهم عملي لإدارة الحضور الرقمي وصناعة محتوى ورسائل مناسبة للمنصات الاجتماعية المختلفة.",
  },
  {
    title: "صفحات هبوط مهيّأة للتحويل",
    description: "تصميم صفحات تساعد على جذب الانتباه، توضيح القيمة، ودفع الزائر إلى التفاعل أو التواصل.",
  },
  {
    title: "بناء حضور رقمي متكامل",
    description: "ربط الموقع مع هوية النشاط التجاري والتواصل الاجتماعي ليظهر المشروع بصورة أقوى وأكثر احترافية.",
  },
];

const platforms = ["Instagram", "Facebook", "TikTok", "Snapchat", "LinkedIn", "YouTube", "Google Ads", "Meta Ads"];

const credential = {
  title: "شهادة من Medipol University",
  description:
    "أمتلك شهادة من Medipol University تعزز الجانب الأكاديمي في مسيرتي وتدعم عملي بخلفية معرفية إلى جانب الخبرة العملية في التطوير والتسويق الرقمي.",
  badge: "Academic Credibility",
};

const projects = [
  {
    title: "سوق الرقة",
    summary: "منصة تجارة إلكترونية تركّز على الوضوح، الثقة، وتجربة شراء محسّنة مع بنية قابلة للنمو.",
    tag: "E-Commerce",
  },
  {
    title: "لوحة تحكم لحظية",
    summary: "واجهة بيانات تفاعلية لعرض المؤشرات المباشرة بطريقة بصرية حديثة وسهلة القراءة.",
    tag: "Dashboard",
  },
  {
    title: "منصة أدوات ذكية",
    summary: "تجربة رقمية تجمع بين الأتمتة والذكاء الاصطناعي لإدارة تدفقات العمل بمرونة أكبر.",
    tag: "AI Tools",
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
    label: "Facebook",
    href: "https://www.facebook.com/muaz.alkhabour",
    description: "للتواصل والمتابعة والاطلاع على حضوري المهني بشكل مباشر.",
    cta: "زر الحساب",
  },
];

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
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
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/2 top-0 h-[30rem] w-[30rem] translate-x-1/2 rounded-full bg-amber-400/16 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
        <a href="#home" className="translate-y-2 text-sm font-semibold tracking-[0.35em] text-white/90 sm:translate-y-0">
          <BrandMark compact />
        </a>
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
            <h1 className="max-w-3xl text-[1.78rem] font-semibold leading-[1.5] tracking-tight text-white sm:text-4xl sm:leading-[1.35] lg:text-5xl">
              أنا <span className="text-amber-200">معاذ الشمطي</span>
              <br />
              أطوّر مواقع حديثة وأبني حضوراً رقمياً فعالاً.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8 lg:text-xl">
              أجمع بين تطوير الويب والتسويق الرقمي لصناعة تجربة احترافية تساعد العلامات التجارية على الظهور، التفاعل، والنمو عبر الموقع ومنصات التواصل.
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
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">خدمات تجمع بين التطوير والتسويق الرقمي</h2>
          <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            لا أقدّم مجرد واجهة جميلة فقط، بل أعمل على بناء حضور رقمي متكامل يخدم الصورة، الرسالة، والنتيجة التي يسعى إليها المشروع.
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
          <h2 className="max-w-3xl text-2xl font-semibold text-white sm:text-3xl">خبرة في بناء حضور رقمي عبر المنصات الاجتماعية</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            أقدّم رؤية تجمع بين تصميم الموقع وفهم سلوك الجمهور على المنصات، بما يساعد على بناء حضور أكثر انسجامًا وفاعلية.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-3 text-xs font-medium text-white/85 backdrop-blur-xl transition hover:border-amber-200/30 hover:text-amber-100 sm:text-sm"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="tech" {...fadeUp} className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">TECH STACK</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">التقنيات التي أستخدمها لصناعة منتجات متقنة</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-6 text-lg font-medium text-white/85 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/30 hover:bg-amber-200/[0.08]"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects" {...fadeUp} className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">FEATURED PROJECTS</p>
        <h2 className="mb-8 text-2xl font-semibold text-white sm:text-3xl">نماذج أعمال تعكس التوازن بين التصميم والهندسة</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-amber-200/20 sm:p-6"
            >
              <div className="mb-10 flex items-center justify-between gap-4">
                <p className="font-mono text-xs tracking-[0.3em] text-amber-200/70">0{index + 1}</p>
                <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                  {project.tag}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
              <p className="leading-7 text-white/65">{project.summary}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-10">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">CREDENTIALS</p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">شهادات تدعم الثقة والمصداقية</h2>
            </div>
            <span className="inline-flex self-start rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-amber-100 sm:self-auto">
              {credential.badge}
            </span>
          </div>

          <div className="rounded-[1.75rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/[0.10] to-transparent p-6">
            <p className="mb-3 text-xl font-semibold text-white">{credential.title}</p>
            <p className="max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">{credential.description}</p>
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" {...fadeUp} className="mx-auto w-full max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-10">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">CONTACT</p>
          <h2 className="mb-4 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">جاهز لتحويل فكرتك إلى تجربة رقمية احترافية</h2>
          <p className="max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            إذا كنت تبحث عن موقع احترافي وحضور رقمي أقوى على المنصات الاجتماعية، يسعدني مساعدتك في بناء تجربة متكاملة تخدم مشروعك وتظهره بصورة أكثر قوة واحترافية.
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
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
