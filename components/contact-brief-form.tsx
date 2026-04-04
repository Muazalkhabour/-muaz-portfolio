"use client";

import { type FormEvent, useState } from "react";

type ContactBriefFormProps = {
  locale: "ar" | "en";
  phoneNumber?: string;
};

const copy = {
  ar: {
    title: "نموذج brief أولي للمشروع",
    description:
      "أدخل البيانات الأساسية للمشروع، وسيتم فتح WhatsApp برسالة منظمة تساعد على بدء النقاش بصورة أكثر دقة ومنهجية.",
    nameLabel: "الاسم",
    namePlaceholder: "اسمك أو اسم النشاط",
    projectTypeLabel: "نوع المشروع",
    budgetLabel: "نطاق الميزانية",
    timelineLabel: "الوقت المتوقع",
    detailsLabel: "تفاصيل مختصرة",
    detailsPlaceholder: "اكتب فكرة المشروع، نوع الصفحات المطلوبة، أو الهدف الأساسي من الموقع.",
    submitLabel: "فتح WhatsApp بالصياغة المنظّمة",
    helperText: "لن يتم الإرسال تلقائيًا. سيتم فتح WhatsApp مع رسالة أولية قابلة للمراجعة قبل الإرسال.",
    options: {
      projectType: ["موقع شركة", "صفحة هبوط", "متجر أو منصة", "لوحة تحكم", "تطوير/تحسين موقع قائم"],
      budget: ["أحتاج تقديرًا أوليًا", "ميزانية مرنة", "1,000 - 3,000$", "3,000 - 7,000$", "7,000$+"],
      timeline: ["في أسرع وقت", "خلال أسبوعين", "خلال شهر", "خطة على مراحل"],
    },
    messageLines: {
      intro: "مرحبًا معاذ، لدي طلب مشروع جديد.",
      name: "الاسم",
      projectType: "نوع المشروع",
      budget: "الميزانية",
      timeline: "المدة",
      details: "التفاصيل",
    },
  },
  en: {
    title: "Initial project brief form",
    description:
      "Enter the core project information and WhatsApp will open with a structured message to support a more precise and efficient initial discussion.",
    nameLabel: "Name",
    namePlaceholder: "Your name or business name",
    projectTypeLabel: "Project type",
    budgetLabel: "Budget range",
    timelineLabel: "Expected timeline",
    detailsLabel: "Short brief",
    detailsPlaceholder: "Describe the project idea, page types, or the main goal of the website.",
    submitLabel: "Open WhatsApp with the structured draft",
    helperText: "Nothing is sent automatically. WhatsApp will open with an initial message ready for review before sending.",
    options: {
      projectType: ["Business website", "Landing page", "Store or platform", "Dashboard", "Improve an existing site"],
      budget: ["Need an initial estimate", "Flexible budget", "$1,000 - $3,000", "$3,000 - $7,000", "$7,000+"],
      timeline: ["As soon as possible", "Within two weeks", "Within one month", "Phased delivery"],
    },
    messageLines: {
      intro: "Hi Muaz, I have a new project inquiry.",
      name: "Name",
      projectType: "Project type",
      budget: "Budget",
      timeline: "Timeline",
      details: "Details",
    },
  },
} as const;

export default function ContactBriefForm({ locale, phoneNumber = "905356577992" }: ContactBriefFormProps) {
  const text = copy[locale];
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState<string>(text.options.projectType[0]);
  const [budget, setBudget] = useState<string>(text.options.budget[0]);
  const [timeline, setTimeline] = useState<string>(text.options.timeline[0]);
  const [details, setDetails] = useState("");
  const fieldLabelClassName = "block min-h-5 text-sm font-medium text-white/78";
  const fieldClassName =
    "h-12 w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/30 focus:border-amber-200/35";
  const selectClassName =
    "h-12 w-full rounded-2xl border border-white/12 bg-slate-950 px-4 text-sm leading-6 text-white outline-none transition focus:border-amber-200/35";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      text.messageLines.intro,
      `${text.messageLines.name}: ${name.trim()}`,
      `${text.messageLines.projectType}: ${projectType}`,
      `${text.messageLines.budget}: ${budget}`,
      `${text.messageLines.timeline}: ${timeline}`,
      `${text.messageLines.details}: ${details.trim()}`,
    ].join("\n");

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-[1.75rem] border border-white/12 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(15,23,42,0.72))] p-5 shadow-[0_22px_70px_rgba(2,6,23,0.22)] backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <p className="mb-2 font-mono text-xs tracking-[0.28em] text-amber-200/70">
          {locale === "ar" ? "PROJECT BRIEF" : "PROJECT BRIEF"}
        </p>
        <h3 className="text-xl font-semibold text-white">{text.title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/68">{text.description}</p>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-amber-200/16 bg-amber-200/10 px-3 py-1.5 text-[11px] font-medium text-amber-100">
          {locale === "ar" ? "نطاق أولي" : "Initial scope"}
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/72">
          {locale === "ar" ? "تنظيم المتطلبات" : "Requirement structure"}
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/72">
          {locale === "ar" ? "صياغة أولية" : "Initial draft"}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-white/75">
            <span className={fieldLabelClassName}>{text.nameLabel}</span>
            <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={text.namePlaceholder}
              className={fieldClassName}
            />
          </label>

          <label className="space-y-2 text-sm text-white/75">
            <span className={fieldLabelClassName}>{text.projectTypeLabel}</span>
            <select
              value={projectType}
              onChange={(event) => setProjectType(event.target.value)}
              className={selectClassName}
            >
              {text.options.projectType.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-white/75">
            <span className={fieldLabelClassName}>{text.budgetLabel}</span>
            <select
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className={selectClassName}
            >
              {text.options.budget.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm text-white/75">
            <span className={fieldLabelClassName}>{text.timelineLabel}</span>
            <select
              value={timeline}
              onChange={(event) => setTimeline(event.target.value)}
              className={selectClassName}
            >
              {text.options.timeline.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block space-y-2 text-sm text-white/75">
          <span className={fieldLabelClassName}>{text.detailsLabel}</span>
          <textarea
            required
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            rows={5}
            placeholder={text.detailsPlaceholder}
            className="w-full rounded-[1.5rem] border border-white/12 bg-white/[0.05] px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-white/30 focus:border-amber-200/35"
          />
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
        >
          {text.submitLabel}
        </button>

        <p className="text-xs leading-6 text-white/52">{text.helperText}</p>
      </form>
    </div>
  );
}