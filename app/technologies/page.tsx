import type { Metadata } from "next";
import SiteSubpageFrame from "@/components/site-subpage-frame";
import TechnologyGroupCard from "@/components/technology-group-card";
import { marketingChannels, technologyGroups } from "@/lib/site-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const principles = [
  "Performance-first",
  "Conversion-aware UI",
  "Responsive by default",
  "Structured content flow",
];

const technologyUseCases = [
  {
    title: "طبقة الواجهة الأساسية",
    description:
      "تُستخدم Next.js و React و TypeScript لبناء واجهات يمكن تطويرها وصيانتها وتوسيعها دون فقدان وضوح الهيكل أو قابلية القراءة داخل المشروع.",
  },
  {
    title: "طبقة التجربة والحركة",
    description:
      "تُستخدم أدوات الحركة والمعالجة البصرية عندما تخدم الفهم والتسلسل البصري، لا لمجرد إضافة تأثيرات منفصلة عن المسار الفعلي للاستخدام.",
  },
  {
    title: "طبقة البيانات والتكامل",
    description:
      "عندما يحتاج المشروع إلى لوحات تحكم، منطق بيانات، أو تكاملات تشغيلية، تُبنى هذه الطبقة بحيث تدعم المنتج فعليًا لا أن تبقى مجرد إضافة تقنية جانبية.",
  },
];

const marketingWorkflow = [
  {
    title: "ربط الرسالة ببنية الصفحة",
    description:
      "يُستخدم التفكير التسويقي في ترتيب العناوين، نقاط الثقة، ومسار القراءة بحيث تصل القيمة بسرعة قبل طلب أي إجراء من المستخدم.",
  },
  {
    title: "تهيئة الصفحة للتحويل",
    description:
      "لا يُنظر إلى صفحة الهبوط أو الصفحة التعريفية بوصفها عرضًا فقط، بل كمسار تحويل يجب أن يوضح العرض ويقلل التردد ويقود إلى خطوة واضحة.",
  },
  {
    title: "مواءمة الموقع مع الحملات والمنصات",
    description:
      "عند وجود إعلانات أو نشاط على المنصات الاجتماعية، يُبنى الموقع بحيث يستقبل هذا المرور ضمن رسالة متسقة لا تفصل بين الإعلان والصفحة المقصودة.",
  },
  {
    title: "تحسين القراءة المهنية للمشروع",
    description:
      "يدخل التسويق الإلكتروني هنا أيضًا في زاوية التموضع: كيف يُقرأ النشاط؟ ما الذي يجب أن يظهر أولًا؟ وكيف تُقدَّم الخدمة أو الفكرة بشكل أكثر إقناعًا؟",
  },
];

const marketingExamples = [
  {
    title: "في صفحات الهبوط",
    objective: "تحويل مباشر",
    points: [
      "صياغة العنوان الرئيسي بحيث يشرح العرض خلال ثوانٍ بدل الاكتفاء بجملة عامة.",
      "ترتيب الصفحة حول إجراء واحد واضح مثل طلب الخدمة أو إرسال النموذج أو بدء التواصل.",
      "تقليل العناصر المشتتة وربط المحتوى مباشرة بالحملة أو الإعلان الذي جاء منه الزائر.",
    ],
  },
  {
    title: "في المواقع المؤسسية",
    objective: "حضور مؤسسي واضح",
    points: [
      "تنظيم الخدمات والصفحات بحيث يفهم الزائر ما الذي تقدمه الجهة قبل أن يضيع بين الأقسام.",
      "بناء تسلسل ثقة أوضح عبر تقديم الاعتمادات، المشاريع، وطريقة العمل في أماكن مدروسة.",
      "تهيئة الموقع ليكون أصلًا صالحًا للظهور المهني، المحتوى، والإعلانات لاحقًا دون إعادة بناء الرسالة من الصفر.",
    ],
  },
];

const marketingAccentClasses = [
  "from-fuchsia-300/16 via-rose-300/10 to-transparent",
  "from-sky-300/16 via-cyan-300/10 to-transparent",
  "from-amber-200/18 via-orange-300/10 to-transparent",
];

export const metadata: Metadata = {
  title: "التقنيات | MUAZ TECH",
  description: "التقنيات والأدوات المستخدمة في بناء الواجهات والمنتجات الرقمية مع شرح دورها في الأداء والحركة والتكامل ودعم الحضور الرقمي.",
  alternates: {
    canonical: "/technologies",
    languages: {
      ar: "/technologies",
      en: "/en/technologies",
      "x-default": "/technologies",
    },
  },
  openGraph: {
    title: "التقنيات | MUAZ TECH",
    description: "بنية تقنية توضّح كيف تُستخدم الأدوات في التنفيذ الفعلي وربط الموقع بالحملات والقنوات الرقمية.",
    url: `${siteUrl}/technologies`,
    type: "website",
  },
};

export default function TechnologiesPage() {
  return (
    <SiteSubpageFrame
      locale="ar"
      eyebrow="TECHNOLOGIES"
      title="التقنيات والأدوات المعتمدة في تنفيذ المنتجات والواجهات الرقمية"
      description="تعرض هذه الصفحة البنية التقنية المستخدمة في التنفيذ، مع توضيح دور كل مجموعة أدوات في بناء الواجهة، الحركة، وطبقة البيانات أو التكامل."
      currentLabel="التقنيات"
      alternateHref="/en/technologies"
      alternateLabel="EN"
      navLinks={[
        { label: "الخدمات", href: "/services" },
        { label: "التقنيات", href: "/technologies" },
        { label: "المشاريع", href: "/projects" },
        { label: "الأسئلة", href: "/faq" },
        { label: "تواصل", href: "/contact" },
      ]}
      primaryAction={{ label: "الاطلاع على المشاريع المرتبطة", href: "/projects" }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(15,23,42,0.76))] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">TECH STACK ROLE</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">كيف تُستخدم هذه التقنيات داخل العمل؟</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              لا تُذكر التقنيات هنا بوصفها قائمة أسماء فقط، بل بوصفها طبقات تنفيذ لها وظيفة واضحة في بناء الواجهة، دعم الاستخدام، أو تشغيل المنتج نفسه.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {technologyUseCases.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {technologyGroups.ar.map((group) => (
            <TechnologyGroupCard key={group.title} group={group} toolsLabel="تقنيات أساسية" />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">DIGITAL MARKETING</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">كيف يدخل التسويق الإلكتروني في طريقة العمل؟</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">لا يُنظر إلى الموقع هنا بوصفه عنصرًا منفصلًا، بل كجزء من منظومة تشمل الرسالة، مسار التحويل، المنصات، والإعلانات عند الحاجة. لذلك يدخل التفكير التسويقي في بنية الصفحة نفسها، لا في الترويج الخارجي فقط.</p>
          </div>
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            {marketingWorkflow.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/35 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {marketingChannels.ar.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.64))] p-5 shadow-[0_18px_50px_rgba(2,6,23,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-200/20"
              >
                <div
                  className={[
                    "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-95 transition duration-300 group-hover:opacity-100",
                    marketingAccentClasses[index % marketingAccentClasses.length],
                  ].join(" ")}
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] opacity-80" />

                <div className="relative">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] text-white/62 backdrop-blur-xl">
                    CHANNEL
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(15,23,42,0.72))] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl sm:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">APPLIED MARKETING</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">أمثلة مباشرة على استخدام التسويق داخل التنفيذ</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              يظهر أثر التسويق الإلكتروني هنا داخل البنية نفسها: كيف تُبنى الصفحة، أين توضع نقاط الثقة، وكيف يُقاد المستخدم إلى الخطوة المقصودة ضمن نوع المشروع.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {marketingExamples.map((example) => (
              <div key={example.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5">
                <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                <div className="mt-3">
                  <span className="inline-flex rounded-full border border-amber-200/16 bg-amber-200/10 px-3 py-1.5 text-[11px] font-medium text-amber-100">
                    الهدف: {example.objective}
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {example.points.map((point) => (
                    <div key={point} className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white/64">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">PRINCIPLES</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">مبادئ التنفيذ</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            هذه المبادئ لا تخص التطوير وحده، بل تضبط العلاقة بين الأداء، الوضوح، وإمكانية توجيه المستخدم إلى الإجراء الصحيح داخل الصفحة أو المنتج.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {principles.map((item) => (
              <span key={item} className="rounded-full border border-amber-200/15 bg-amber-200/10 px-4 py-2 text-sm font-medium text-amber-100">{item}</span>
            ))}
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}
