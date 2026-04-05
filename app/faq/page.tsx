import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/faq-section";
import SiteSubpageFrame from "@/components/site-subpage-frame";
import { faqItems } from "@/lib/site-content";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const decisionNotes = [
  "تعرض هذه الصفحة المعايير الأساسية للمفاضلة بين الموقع الكامل وصفحة الهبوط قبل بدء التنفيذ.",
  "إذا كان الموقع الحالي لا يوضح القيمة ولا يوجّه الإجراء التالي بوضوح، فالمشكلة تكون غالبًا بنيوية لا شكلية فقط.",
  "يمثل نموذج intake المختصر الخطوة المنهجية التالية عندما يكون المطلوب الانتقال إلى نطاق أكثر تحديدًا.",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": faqItems.ar.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": siteUrl,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "الأسئلة الشائعة",
          "item": `${siteUrl}/faq`,
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "الأسئلة الشائعة | MUAZ TECH",
  description: "صفحة أسئلة شائعة مخصصة للإجابة عن أسئلة ما قبل التنفيذ، مثل اختيار الصيغة المناسبة للمشروع وتحديد طبيعة المعالجة المطلوبة.",
  alternates: {
    canonical: "/faq",
    languages: {
      ar: "/faq",
      en: "/en/faq",
      "x-default": "/faq",
    },
  },
  openGraph: {
    title: "الأسئلة الشائعة | MUAZ TECH",
    description: "إجابات مباشرة على الأسئلة الأساسية التي تسبق تنفيذ الموقع أو صفحة الهبوط.",
    url: `${siteUrl}/faq`,
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <SiteSubpageFrame
      locale="ar"
      eyebrow="FAQ"
      title="أسئلة أساسية تساعد على تقييم القرار قبل بدء المشروع"
      description="تجمع هذه الصفحة الأسئلة التي تظهر عادة قبل البدء الفعلي، مثل تحديد ما إذا كان المشروع يحتاج موقعًا كاملًا أو صفحة هبوط، وما إذا كانت المعالجة المطلوبة جزئية أم بنيوية."
      currentLabel="الأسئلة الشائعة"
      alternateHref="/en/faq"
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <FAQSection
        eyebrow="DECISION FAQ"
        title="إجابات واضحة على الأسئلة التي تسبق بدء التنفيذ"
        description="الغاية من هذا القسم هي توفير إطار أوضح لاتخاذ القرار قبل تخصيص الوقت والميزانية لمسار قد لا يكون هو الأنسب للمشروع."
        items={faqItems.ar}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-200/10 to-white/5 p-6 backdrop-blur-xl sm:p-8">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">BEFORE YOU START</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">متى يصبح القرار جاهزًا للانتقال إلى التنفيذ؟</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {decisionNotes.map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-white/64">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              انتقل إلى صفحة التواصل
            </Link>
          </div>
        </div>
      </section>
    </SiteSubpageFrame>
  );
}