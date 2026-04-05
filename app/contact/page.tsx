import type { Metadata } from "next";
import ContactBriefForm from "@/components/contact-brief-form";
import SiteSubpageFrame from "@/components/site-subpage-frame";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const responseNotes = [
  "يساعد نموذج intake المنظم على تقليل الزمن اللازم لقراءة الحالة الحالية وتحديد نقطة البدء التنفيذية.",
  "عندما تكون الفكرة في مرحلة التشكل، يسهّل إدخال الهدف الأساسي والنطاق اللغوي والحالة الحالية ضبط القرار الأولي بصورة أدق.",
  "تتركز أهمية هذه المرحلة في تحويل الطلب من فكرة عامة إلى مدخلات قابلة للتقييم التقني والتنفيذي.",
];

const conversionSignals = [
  "تحديد أولي للمسار التنفيذي الأنسب: موقع، صفحة هبوط، أو مراجعة بنيوية، استنادًا إلى الحالة الحالية للمشروع.",
  "تقليل التبادل غير الضروري في الرسائل عبر نموذج intake يجمع نوع المشروع، الهدف الأساسي، النطاق اللغوي، ومتطلبات التشغيل الأساسية.",
  "توجيه النقاش نحو النتيجة المطلوبة، النطاق التنفيذي، وزمن الإطلاق قبل التفاصيل الثانوية.",
];

const nextSteps = [
  "أراجع الفكرة، الحالة الحالية، والهدف الأساسي للمشروع: تحويل مباشر، حضور مؤسسي، أو حملة موجهة.",
  "أحدد معك نموذج التنفيذ الأنسب وفق نطاق المحتوى، اللغة، ومتطلبات الإطلاق.",
  "ننتقل بعدها إلى تقدير أولي ونقطة تنفيذ واضحة قابلة للمتابعة.",
];

export const metadata: Metadata = {
  title: "تواصل | MUAZ TECH",
  description: "صفحة intake مخصصة لاستقبال طلبات المشاريع وتحديد الحالة الحالية والهدف الأساسي قبل النقاش التفصيلي.",
  alternates: {
    canonical: "/contact",
    languages: {
      ar: "/contact",
      en: "/en/contact",
      "x-default": "/contact",
    },
  },
  openGraph: {
    title: "تواصل | MUAZ TECH",
    description: "استقبال طلبات المشاريع عبر intake أولي يحدد النطاق والهدف ومسار النقاش التنفيذي من البداية.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <SiteSubpageFrame
      locale="ar"
      eyebrow="CONTACT"
      title="التواصل واستقبال طلبات المشاريع"
      description="تُخصص هذه الصفحة لاستقبال الطلبات الأولية عبر نموذج intake مختصر، بما يسمح بقراءة الحالة الحالية، تحديد الهدف الأساسي، وترتيب المتطلبات قبل الانتقال إلى النقاش التفصيلي."
      currentLabel="تواصل"
      alternateHref="/en/contact"
      alternateLabel="EN"
      navLinks={[
        { label: "الخدمات", href: "/services" },
        { label: "التقنيات", href: "/technologies" },
        { label: "المشاريع", href: "/projects" },
        { label: "الأسئلة", href: "/faq" },
        { label: "تواصل", href: "/contact" },
      ]}
      primaryAction={{ label: "إرسال طلب المشروع", href: "/contact#project-brief" }}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {conversionSignals.map((item) => (
            <div key={item} className="rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.72))] p-5 shadow-[0_20px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl">
              <p className="text-sm leading-7 text-white/74">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div id="project-brief">
            <ContactBriefForm locale="ar" />
          </div>
          <div className="space-y-4">
            <div className="rounded-[1.9rem] border border-amber-200/20 bg-gradient-to-br from-amber-200/14 to-white/5 p-5 backdrop-blur-xl sm:p-6">
              <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">CLOSING PATH</p>
              <h3 className="text-xl font-semibold text-white">ماذا يتبع إرسال طلب المشروع؟</h3>
              <div className="mt-4 space-y-3">
                {nextSteps.map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1.3rem] border border-white/10 bg-slate-950/36 px-4 py-4">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 text-[11px] font-semibold text-amber-100">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
              <p className="mb-2 font-mono text-xs tracking-[0.3em] text-amber-200/70">ONE CHANNEL</p>
              <h3 className="text-xl font-semibold text-white">نموذج الـ intake هو نقطة البداية في هذه الصفحة</h3>
              <p className="mt-3 text-sm leading-7 text-white/63">
                بعد تعبئة النموذج يتم فتح WhatsApp بصياغة أولية منظمة، لذلك لا توجد حاجة إلى توزيع نقطة البداية على قنوات متعددة داخل الصفحة نفسها.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_28%,rgba(2,6,23,0.72)_100%)] p-6 backdrop-blur-xl sm:p-8">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">CONTACT NOTES</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">ما الذي يجعل مرحلة التواصل الأولي أكثر كفاءة؟</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {responseNotes.map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}
