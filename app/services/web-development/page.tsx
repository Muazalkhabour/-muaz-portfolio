import type { Metadata } from "next";
import Link from "next/link";
import ContactBriefForm from "@/components/contact-brief-form";
import SiteSubpageFrame from "@/components/site-subpage-frame";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const deliverables = [
  "هيكل صفحات منظم يعكس الرسالة الأساسية للجهة أو النشاط",
  "واجهة متجاوبة ومهيأة لأجهزة الجوال وسطح المكتب",
  "معالجة بصرية ومحتوى يدعمان الثقة وسهولة الوصول إلى الإجراء المطلوب",
  "مواءمة بين الموقع والهوية والحضور الرقمي العام",
];

const fitCases = [
  {
    title: "شركات أو خدمات تحتاج حضورًا أوضح",
    description: "عندما لا تعكس الواجهة الحالية مستوى الخدمة أو لا تقدّم الجهة بصورة مؤسسية كافية.",
  },
  {
    title: "علامات تريد الانتقال من صفحة بسيطة إلى موقع متكامل",
    description: "عندما تكون المعلومات مشتتة أو محدودة، ويصبح من الضروري بناء موقع يقدم الخدمة أو الجهة ضمن بنية أوضح.",
  },
  {
    title: "مشاريع تريد أساسًا جيدًا للتوسع لاحقًا",
    description: "عند الحاجة إلى بنية قابلة لإضافة خدمات جديدة أو صفحات تفصيلية أو دراسات حالة مستقبلًا.",
  },
];

const serviceProcess = [
  {
    step: "01",
    title: "جمع المتطلبات وتحديد النطاق",
    description: "يتم تحديد نوع الصفحات والهدف الأساسي والجمهور المستهدف قبل بدء المعالجة التفصيلية.",
  },
  {
    step: "02",
    title: "تنظيم الهيكل والمحتوى",
    description: "تُبنى بنية الصفحات بحيث تخدم الفهم وتسلسل القراءة والاستخدام من دون ازدحام غير ضروري.",
  },
  {
    step: "03",
    title: "التصميم والتنفيذ",
    description: "تنفّذ الواجهة بهوية متسقة وأداء مستقر ومعالجة بصرية لا تتعارض مع وضوح الرسالة.",
  },
  {
    step: "04",
    title: "المراجعة والتسليم",
    description: "تُراجع النصوص ونقاط التفاعل والتنقل قبل اعتماد النسخة النهائية للتسليم أو النشر.",
  },
];

const priorities = [
  "وضوح الرسالة في أول شاشة",
  "اتساق بصري من دون ازدحام",
  "بنية قابلة للتوسع لاحقًا",
  "آلية واضحة للتواصل أو إرسال الطلب",
];

export const metadata: Metadata = {
  title: "تطوير مواقع احترافية | MUAZ TECH",
  description: "خدمة تطوير مواقع احترافية تبني حضورًا مؤسسيًا واضحًا ببنية قابلة للتوسع وتجربة تقود المستخدم إلى الإجراء الصحيح.",
  alternates: {
    canonical: "/services/web-development",
    languages: {
      ar: "/services/web-development",
      en: "/en/services/web-development",
      "x-default": "/services/web-development",
    },
  },
  openGraph: {
    title: "تطوير مواقع احترافية | MUAZ TECH",
    description: "صفحة خدمة تفصيلية توضّح كيف يُبنى الموقع من الهدف والبنية والمحتوى حتى التنفيذ الجاهز للنشر.",
    url: `${siteUrl}/services/web-development`,
    type: "website",
  },
};

export default function WebDevelopmentServicePage() {
  return (
    <SiteSubpageFrame
      locale="ar"
      eyebrow="WEB DEVELOPMENT"
      title="تطوير مواقع احترافية للمؤسسات والخدمات والمنتجات الرقمية"
      description="تخدم هذه الخدمة الجهات التي تحتاج إلى موقع منظم تقنيًا وبصريًا، ويقدّم الخدمة أو المنتج ضمن بنية واضحة قابلة للاستخدام والتوسع."
      currentLabel="الخدمة"
      alternateHref="/en/services/web-development"
      alternateLabel="EN"
      navLinks={[
        { label: "الخدمات", href: "/services" },
        { label: "التقنيات", href: "/technologies" },
        { label: "المشاريع", href: "/projects" },
        { label: "الأسئلة", href: "/faq" },
        { label: "تواصل", href: "/contact" },
      ]}
      primaryAction={{ label: "إرسال طلب لهذه الخدمة", href: "#project-brief" }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-4 font-mono text-sm tracking-[0.35em] text-amber-200/70">DELIVERABLES</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">ماذا تشمل هذه الخدمة؟</h2>
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
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">أولويات التنفيذ</h2>
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
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">متى تكون هذه الخدمة مناسبة؟</h2>
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
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">مراحل تنفيذ مشروع الموقع</h2>
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
            <ContactBriefForm locale="ar" />
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 backdrop-blur-xl sm:p-6">
              <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">BEST VALUE</p>
              <h3 className="text-xl font-semibold text-white">أين تظهر جدوى هذه الخدمة؟</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                تظهر هذه الخدمة بوضوح عندما تكون الجهة بحاجة إلى موقع يقدّمها بصورة مؤسسية أكثر دقة، ويمنح المستخدم فهمًا منظمًا للخدمة أو المنتج.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-5 backdrop-blur-xl sm:p-6">
              <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">RELATED PATHS</p>
              <h3 className="text-xl font-semibold text-white">خدمات مرتبطة</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                إذا كان المطلوب صفحة موجهة لحملة أو خدمة واحدة فقط، فقد تكون خدمة صفحات الهبوط أكثر ملاءمة من الموقع الكامل في هذه المرحلة.
              </p>
              <Link href="/services/landing-pages" className="mt-5 inline-flex rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:border-amber-200/30 hover:text-amber-100">
                شاهد خدمة صفحات الهبوط
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}