import type { Metadata } from "next";
import Link from "next/link";
import SiteSubpageFrame from "@/components/site-subpage-frame";
import { serviceDecisionGuides, servicePaths } from "@/lib/site-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const workflow = [
  {
    step: "01",
    title: "قراءة السياق والهدف",
    description: "تبدأ العملية بتحديد نوع المشروع، الرسالة الأساسية، وطبيعة الجمهور الذي يجب أن يدرك القيمة بسرعة ووضوح.",
  },
  {
    step: "02",
    title: "تحديد البنية والمسار",
    description: "تُنظَّم الأقسام والعناوين ونقاط الثقة والتحويل قبل الدخول في التطوير التفصيلي حتى يبقى القرار واضحًا من البداية.",
  },
  {
    step: "03",
    title: "تنفيذ الواجهة ومعالجة الاستخدام",
    description: "تتحول الفكرة إلى واجهة متجاوبة تحافظ على الهوية وتخدم الاستخدام الفعلي دون فصل الشكل عن الوظيفة.",
  },
  {
    step: "04",
    title: "مراجعة الجاهزية والإطلاق",
    description: "يُراجع المسار النهائي للتواصل أو التحويل مع التأكد من جاهزية التجربة عبر مختلف الشاشات وسيناريوهات الاستخدام.",
  },
];

const serviceMarketingFit = [
  {
    title: "تطوير مواقع احترافية",
    objective: "حضور مؤسسي واضح",
    fit: "مناسب عندما يكون الهدف بناء حضور مؤسسي أوضح وترتيب الخدمات والمصداقية ضمن بنية قابلة للتوسع.",
  },
  {
    title: "صفحات هبوط مهيأة للتحويل",
    objective: "تحويل مباشر",
    fit: "مناسب عندما يكون الهدف حملة محددة أو عرضًا واضحًا يحتاج إلى رسالة مركزة ومسار تحويل مباشر.",
  },
  {
    title: "واجهات ومنتجات رقمية",
    objective: "وضوح استخدام المنتج",
    fit: "مناسب عندما يكون التركيز على وضوح الاستخدام، تسلسل المهام، وتقليل الاحتكاك داخل المنتج نفسه.",
  },
  {
    title: "حضور رقمي متكامل",
    objective: "اكتساب وحضور متسق",
    fit: "مناسب عندما يجب ربط الموقع بالمحتوى والمنصات والإعلانات ضمن رسالة موحدة ومسار اكتساب متسق.",
  },
];

export const metadata: Metadata = {
  title: "الخدمات | MUAZ TECH",
  description: "مجالات العمل في تطوير المواقع وصفحات الهبوط والواجهات الرقمية ضمن منهج يربط نوع الخدمة بالهدف ومسار التنفيذ.",
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
    description: "خدمات رقمية تركّز على اختيار الصيغة المناسبة للمشروع ثم تنفيذها ببنية واضحة وهوية متماسكة.",
    url: `${siteUrl}/services`,
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <SiteSubpageFrame
      locale="ar"
      eyebrow="SERVICES"
      title="اختيار مسار التنفيذ وفق نوع المشروع وبنيته الفعلية"
      description="تعرض هذه الصفحة الخدمات بوصفها مسارات تنفيذية مختلفة، بما يساعد على تحديد المخرج الأنسب: موقع مؤسسي، صفحة هبوط، واجهة منتج، أو منظومة حضور رقمي أوسع وأكثر اتساقًا."
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
        <div className="rounded-[2rem] border border-amber-200/15 bg-[linear-gradient(180deg,rgba(251,191,36,0.1),rgba(255,255,255,0.03)_28%,rgba(15,23,42,0.74)_100%)] p-6 shadow-[0_22px_70px_rgba(2,6,23,0.22)] backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">DECISION GUIDE</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">كيف يُحدَّد المسار الأنسب؟</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">يبدأ الاختيار من طبيعة المشروع وهدفه التشغيلي والاتصالي، لا من اسم الخدمة فقط. لذلك يرتبط كل مسار هنا بنوع المخرجات المطلوبة وبنية الاستخدام المتوقعة.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {serviceDecisionGuides.ar.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-[1.75rem] border border-white/10 bg-slate-950/35 p-5 transition hover:-translate-y-1 hover:border-amber-200/25 hover:bg-slate-950/50">
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
            <div key={service.title} className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(15,23,42,0.58))] p-6 shadow-[0_18px_55px_rgba(2,6,23,0.16)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-200/25">
              <p className="mb-3 text-lg font-semibold text-white">{service.title}</p>
              <p className="min-h-[7rem] text-sm leading-7 text-white/63">{service.description}</p>
              <div className="mt-4 rounded-[1.35rem] border border-white/10 bg-slate-950/35 px-4 py-4">
                <p className="mb-2 font-mono text-[11px] tracking-[0.22em] text-amber-200/65">OBJECTIVE FIT</p>
                <span className="mb-3 inline-flex rounded-full border border-amber-200/16 bg-amber-200/10 px-3 py-1.5 text-[11px] font-medium text-amber-100">
                  الهدف: {serviceMarketingFit.find((item) => item.title === service.title)?.objective}
                </span>
                <p className="text-sm leading-7 text-white/64">{serviceMarketingFit.find((item) => item.title === service.title)?.fit}</p>
              </div>
              <Link href={service.href} className="mt-6 inline-flex rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/82 transition hover:border-amber-200/30 hover:text-amber-100">
                {service.pageCta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(15,23,42,0.68))] p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">OUTCOME CHECK</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">أسئلة معيارية قبل اختيار مسار الخدمة</h2>
            <p className="mt-4 text-base leading-7 text-white/68 sm:text-lg sm:leading-8">تساعد هذه الأسئلة على التمييز بين الحاجة إلى بنية توسعية، أو صفحة مركزة، أو مسار يحتاج إعادة تنظيم قبل أي تنفيذ جديد.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">هل أحتاج مساحة لشرح عدة خدمات أم رسالة واحدة مركزة؟</div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">هل هدفي تعريف النشاط بصورة أقوى أم دفع الزائر لاتخاذ خطوة محددة بسرعة؟</div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">هل المشروع يحتاج أساسًا قابلًا للتوسع لاحقًا أم صفحة سريعة موجهة لعرض أو حملة؟</div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_18%,rgba(15,23,42,0.78)_100%)] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">WORKFLOW</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">تسلسل العمل من البداية إلى التسليم</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">رغم اختلاف نوع الخدمة، يبقى منهج العمل ثابتًا: قراءة الهدف، تنظيم البنية، تنفيذ الواجهة، ثم مراجعة النتيجة النهائية وفق الاستخدام المستهدف.</p>
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
