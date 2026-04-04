import type { Metadata } from "next";
import Link from "next/link";
import SiteSubpageFrame from "@/components/site-subpage-frame";
import { serviceDecisionGuides, servicePaths } from "@/lib/site-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const workflow = [
  {
    step: "01",
    title: "فهم النشاط والهدف",
    description: "أحدد نوع المشروع، الرسالة الأساسية، والجمهور الذي يجب أن يفهم القيمة بسرعة.",
  },
  {
    step: "02",
    title: "تخطيط الهيكل والمحتوى",
    description: "أرتب الأقسام والعناوين ونقاط الثقة والتحويل قبل الدخول في التطوير التفصيلي.",
  },
  {
    step: "03",
    title: "تصميم وتطوير واضح",
    description: "أحوّل الفكرة إلى واجهة حديثة متجاوبة تحافظ على الهوية وتخدم الاستخدام الفعلي.",
  },
  {
    step: "04",
    title: "تسليم وتجهيز للنشر",
    description: "مراجعة المسار النهائي للتواصل أو التحويل والتأكد من جاهزية التجربة على مختلف الشاشات.",
  },
];

export const metadata: Metadata = {
  title: "الخدمات | MUAZ TECH",
  description: "صفحة الخدمات الرئيسية لعرض مجالات العمل في تطوير المواقع وصفحات الهبوط والواجهات الرقمية ضمن إطار تنفيذي واضح.",
  alternates: {
    canonical: "/services",
    languages: {
      ar: "/services",
      en: "/en/services",
      "x-default": "/services",
    },
  },
  openGraph: {
    title: "الخدمات | MUAZ TECH",
    description: "صفحة خدمات موحدة تعرض مجالات العمل ضمن صياغة مهنية وهوية بصرية متسقة مع الموقع.",
    url: `${siteUrl}/services`,
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <SiteSubpageFrame
      locale="ar"
      eyebrow="SERVICES"
      title="تحديد المسار الأنسب للمشروع وفق طبيعته ومتطلباته"
      description="تعرض هذه الصفحة مسارات الخدمة بوصفها أطرًا تنفيذية مختلفة، بما يساعد على اختيار الصيغة الأنسب للمشروع: موقع مؤسسي، صفحة هبوط، واجهة منتج، أو منظومة حضور رقمي متكاملة."
      currentLabel="الخدمات"
      alternateHref="/en/services"
      alternateLabel="EN"
      navLinks={[
        { label: "الخدمات", href: "/services" },
        { label: "التقنيات", href: "/technologies" },
        { label: "المشاريع", href: "/projects" },
        { label: "الأسئلة", href: "/faq" },
        { label: "تواصل", href: "/contact" },
      ]}
      primaryAction={{ label: "الانتقال إلى صفحة التواصل", href: "/contact" }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">DECISION GUIDE</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">كيف يُحدَّد المسار الأنسب؟</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">يبدأ الاختيار من طبيعة المشروع وهدفه الاتصالي، لا من اسم الخدمة فقط. لذلك يرتبط كل مسار هنا بنوع المخرجات المطلوبة وبنية الاستخدام المتوقعة.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {serviceDecisionGuides.ar.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-amber-200/25">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 min-h-[8rem] text-sm leading-7 text-white/64">{item.description}</p>
                <p className="mt-4 text-sm font-semibold text-amber-100 transition group-hover:text-amber-50">{item.cta}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {servicePaths.ar.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/25">
              <p className="mb-3 text-lg font-semibold text-white">{service.title}</p>
              <p className="min-h-[7rem] text-sm leading-7 text-white/63">{service.description}</p>
              <Link href={service.href} className="mt-6 inline-flex rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/82 transition hover:border-amber-200/30 hover:text-amber-100">
                {service.pageCta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">OUTCOME CHECK</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">أسئلة معيارية قبل اختيار مسار الخدمة</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">هل أحتاج مساحة لشرح عدة خدمات أم رسالة واحدة مركزة؟</div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">هل هدفي تعريف النشاط بصورة أقوى أم دفع الزائر لاتخاذ خطوة محددة بسرعة؟</div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">هل المشروع يحتاج أساسًا قابلًا للتوسع لاحقًا أم صفحة سريعة موجهة لعرض أو حملة؟</div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">WORKFLOW</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">تسلسل العمل من البداية إلى التسليم</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">رغم اختلاف نوع الخدمة، يبقى منهج العمل ثابتًا: تحديد الهدف، تنظيم البنية، تنفيذ الواجهة، ثم مراجعة النتيجة النهائية وفق الاستخدام المستهدف.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item) => (
              <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5">
                <p className="font-mono text-xs tracking-[0.32em] text-amber-200/70">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}
