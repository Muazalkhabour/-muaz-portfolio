import type { Metadata } from "next";
import Link from "next/link";
import ContactBriefForm from "@/components/contact-brief-form";
import SiteSubpageFrame from "@/components/site-subpage-frame";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const sections = [
  "قسم افتتاحي يوضح العرض الأساسي مباشرة",
  "عناصر ثقة وإشارات اعتماد مناسبة لطبيعة الخدمة أو الحملة",
  "عرض مختصر للخدمة أو المنتج ضمن بنية قراءة واضحة",
  "إجراء رئيسي محدد يظهر في المواضع الأساسية",
];

const useCases = [
  {
    title: "حملة إعلانية تحتاج صفحة مخصصة",
    description: "عندما تأتي الزيارة من إعلان أو حملة مدفوعة وتحتاج الوجهة إلى عرض واحد محدد دون تفرعات إضافية.",
  },
  {
    title: "خدمة رئيسية تريد إبرازها بوضوح",
    description: "عندما تكون هناك خدمة أو عرض رئيسي يجب تقديمه مباشرة من دون تحميل الصفحة معلومات غير لازمة.",
  },
  {
    title: "عرض جديد أو إطلاق منتج",
    description: "تكون صفحة الهبوط مناسبة عند الحاجة إلى شرح الفكرة بسرعة مع إجراء واضح مثل طلب تواصل أو حجز أو شراء.",
  },
];

const metrics = [
  "وضوح العرض في الشاشة الأولى",
  "تقليل الخيارات بما يحافظ على التركيز",
  "تثبيت الإجراء الرئيسي في مواضع مدروسة",
  "أداء مناسب للاستخدام السريع وعلى الأجهزة المحمولة",
];

export const metadata: Metadata = {
  title: "صفحات هبوط مهيأة للتحويل | MUAZ TECH",
  description: "خدمة تصميم وتطوير صفحات هبوط تركّز على دقة العرض وبنية المحتوى وتوجيه المستخدم إلى إجراء واحد واضح.",
  alternates: {
    canonical: "/services/landing-pages",
    languages: {
      ar: "/services/landing-pages",
      en: "/en/services/landing-pages",
      "x-default": "/services/landing-pages",
    },
  },
  openGraph: {
    title: "صفحات هبوط مهيأة للتحويل | MUAZ TECH",
    description: "صفحة خدمة تفصيلية تشرح متى تكون صفحة الهبوط هي الصيغة الأنسب وكيف تُبنى ضمن نفس هوية الموقع.",
    url: `${siteUrl}/services/landing-pages`,
    type: "website",
  },
};

export default function LandingPagesServicePage() {
  return (
    <SiteSubpageFrame
      locale="ar"
      eyebrow="LANDING PAGES"
      title="صفحات هبوط مخصصة للحملات والعروض المركزة"
      description="تشرح هذه الصفحة الحالات التي تكون فيها صفحة الهبوط أنسب من الموقع الكامل، وكيف تُبنى لتخدم عرضًا واحدًا أو حملة محددة بإجراء رئيسي واضح."
      currentLabel="الخدمة"
      alternateHref="/en/services/landing-pages"
      alternateLabel="EN"
      navLinks={[
        { label: "الخدمات", href: "/services" },
        { label: "التقنيات", href: "/technologies" },
        { label: "المشاريع", href: "/projects" },
        { label: "الأسئلة", href: "/faq" },
        { label: "تواصل", href: "/contact" },
      ]}
      primaryAction={{ label: "إرسال brief لصفحة الهبوط", href: "#project-brief" }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-4 font-mono text-sm tracking-[0.35em] text-amber-200/70">CORE SECTIONS</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">ما المكونات الأساسية لصفحة الهبوط؟</h2>
            <div className="mt-6 grid gap-3">
              {sections.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-slate-950/40 px-4 py-4 text-sm leading-7 text-white/68">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-4 font-mono text-sm tracking-[0.35em] text-amber-200/70">CONVERSION FOCUS</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">أولويات التنفيذ في صفحة الهبوط</h2>
            <div className="mt-6 space-y-3">
              {metrics.map((item) => (
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
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">BEST FIT</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">متى تختار صفحة هبوط بدل موقع كامل؟</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
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
              <h3 className="text-xl font-semibold text-white">متى تكون صفحة الهبوط مناسبة؟</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                تكون مناسبة عندما يتمحور الطلب حول عرض محدد أو حملة واحدة أو خدمة رئيسية تحتاج إلى عرض مباشر وإجراء واحد واضح.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-5 backdrop-blur-xl sm:p-6">
              <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">RELATED PATHS</p>
              <h3 className="text-xl font-semibold text-white">إذا اتسع نطاق المشروع لاحقًا</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                يمكن تطوير صفحة الهبوط لاحقًا إلى موقع كامل يضم صفحات إضافية وخدمات أو دراسات حالة مع الحفاظ على نفس الهوية.
              </p>
              <Link href="/services/web-development" className="mt-5 inline-flex rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:border-amber-200/30 hover:text-amber-100">
                انتقل إلى خدمة تطوير المواقع
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}