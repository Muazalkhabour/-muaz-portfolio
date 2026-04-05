import type { Metadata } from "next";
import SiteSubpageFrame from "@/components/site-subpage-frame";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const corePrinciples = [
  {
    title: "قراءة المتطلبات قبل اقتراح المخرج",
    description: "يبدأ القرار بتحليل الهدف التشغيلي، طبيعة المستخدم، والإجراء المطلوب، لا بتسمية الخدمة أو شكل الواجهة فقط.",
  },
  {
    title: "اختيار نموذج التنفيذ المناسب",
    description: "يُحدَّد ما إذا كان المخرج موقعًا كاملًا، صفحة هبوط، أو مراجعة بنيوية وفق كثافة المحتوى ومسار الاستخدام المتوقع.",
  },
  {
    title: "بناء هيكل واضح للمحتوى والواجهة",
    description: "تُنظَّم طبقات المحتوى والواجهة بما يحافظ على وضوح الرسالة ويمنع انفصال العرض عن الإجراء العملي.",
  },
  {
    title: "ربط الواجهة بسياق التشغيل",
    description: "لا تُعالج الواجهة بمعزل عن التشغيل، بل تُربط بالمنصات، الرسالة، وسيناريو الإطلاق ضمن نظام واحد متماسك.",
  },
];

const overviewSignals = [
  { value: "3", label: "نماذج تنفيذ رئيسية" },
  { value: "4", label: "طبقات قرار وتشغيل" },
  { value: "1", label: "مسار intake موحد" },
];

const workflowSteps = [
  "جمع المدخلات الأساسية: نوع المشروع، الحالة الحالية، النطاق اللغوي، وزمن الإطلاق المتوقع.",
  "تحويل الطلب إلى نموذج تنفيذ واضح مع تحديد الأولويات والقيود التشغيلية مبكرًا.",
  "بناء بنية محتوى وواجهة تستند إلى منطق الاستخدام وتدفق القرار لا إلى المعالجة البصرية وحدها.",
  "مراجعة المخرج بوصفه طبقة عرض وتشغيل واتصال قبل اعتماده كنسخة تنفيذية نهائية.",
];

const decisionFrames = [
  {
    title: "متى يكون الحل موقعًا مؤسسيًا؟",
    description: "عندما يتطلب المشروع بنية متعددة الصفحات، عرضًا لخدمات متشعبة، ومساحة قابلة للتوسع على مستوى الرسالة والمحتوى.",
  },
  {
    title: "متى تكون صفحة الهبوط هي الأنسب؟",
    description: "عندما يكون التركيز على عرض واحد أو حملة محددة ومسار إجراء مباشر يحتاج إلى أقل قدر ممكن من التشتت.",
  },
  {
    title: "متى تكون المراجعة البنيوية مطلوبة؟",
    description: "عندما يوجد موقع قائم لكن الخلل يظهر في ترتيب الرسالة، هيكل المحتوى، أو منطق الانتقال بين المستويات المختلفة.",
  },
];

export const metadata: Metadata = {
  title: "المنهج | MUAZ TECH",
  description: "شرح لمنهج العمل الذي يحوّل الهدف والمتطلبات إلى قرار تنفيذي وبنية واجهة ومسار استخدام واضح.",
  alternates: {
    canonical: "/approach",
    languages: {
      ar: "/approach",
      en: "/en/approach",
      "x-default": "/approach",
    },
  },
  openGraph: {
    title: "المنهج | MUAZ TECH",
    description: "منهج يربط الهدف بالمحتوى والواجهة وسياق الإطلاق للوصول إلى مخرج رقمي قابل للتنفيذ.",
    url: `${siteUrl}/approach`,
    type: "website",
  },
};

export default function ApproachPage() {
  return (
    <SiteSubpageFrame
      locale="ar"
      eyebrow="APPROACH"
      title="المنهج الذي يحوّل المتطلبات إلى قرار تنفيذي واضح"
      description="تعرض هذه الصفحة منهج العمل من لحظة قراءة الطلب إلى تحديد نموذج التنفيذ، تنظيم البنية، وربط الواجهة بسياق الاستخدام والتشغيل ضمن قرار قابل للتطبيق."
      currentLabel="المنهج"
      alternateHref="/en/approach"
      alternateLabel="EN"
      navLinks={[
        { label: "الخدمات", href: "/services" },
        { label: "التقنيات", href: "/technologies" },
        { label: "المشاريع", href: "/projects" },
        { label: "الأسئلة", href: "/faq" },
        { label: "تواصل", href: "/contact" },
      ]}
      primaryAction={{ label: "بدء طلب مشروع", href: "/contact" }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.78))] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.22)] backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.14),transparent_28%)]" />
            <div className="relative">
              <p className="mb-3 font-mono text-xs tracking-[0.32em] text-amber-200/70">EXECUTION LOGIC</p>
              <h2 className="max-w-2xl text-2xl font-semibold leading-[1.5] text-white sm:text-3xl">
                المنهج هنا لا يبدأ من الشكل، بل من تحويل الطلب إلى قرار تنفيذي يمكن بناؤه وقياس أثره.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-white/68 sm:text-base">
                تُقرأ المتطلبات ضمن سياق الاستخدام والتشغيل أولًا، ثم يُختار نموذج التنفيذ، وتُبنى الواجهة بوصفها طبقة عرض وعمل واتصال في آن واحد.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {overviewSignals.map((item) => (
                  <div key={item.label} className="rounded-[1.3rem] border border-white/10 bg-slate-950/36 px-4 py-4 text-center">
                    <p className="text-2xl font-semibold text-amber-100">{item.value}</p>
                    <p className="mt-2 text-xs leading-6 text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {corePrinciples.map((item, index) => (
              <div
                key={item.title}
                className={[
                  "rounded-[1.6rem] border p-5 shadow-[0_20px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl",
                  index === 0
                    ? "border-amber-200/18 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(15,23,42,0.72))]"
                    : "border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.72))]",
                ].join(" ")}
              >
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/66">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-8">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">WORKFLOW</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">تسلسل العمل التنفيذي</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {workflowSteps.map((item, index) => (
              <div key={item} className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/36 px-4 py-4">
                <div className="absolute inset-y-4 right-4 w-px bg-white/10" />
                <div className="relative flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 text-xs font-semibold text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.14)]">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-7 text-white/68">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">DECISION FRAMES</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">كيف يتم اختيار نموذج التنفيذ؟</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
            لا يُختار المخرج هنا بوصفه تسمية خدمة فقط، بل وفق العلاقة بين الهدف، نطاق المحتوى، كثافة المعلومات، والمسار الإجرائي المطلوب من المستخدم.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {decisionFrames.map((item, index) => (
              <div
                key={item.title}
                className={[
                  "rounded-[1.75rem] border p-5",
                  index === 1
                    ? "border-amber-200/18 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(15,23,42,0.72))]"
                    : "border-white/10 bg-slate-950/40",
                ].join(" ")}
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}