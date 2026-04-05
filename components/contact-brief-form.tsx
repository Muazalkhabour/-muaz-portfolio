"use client";

import { type FormEvent, useState } from "react";

type ContactBriefFormProps = {
  locale: "ar" | "en";
  phoneNumber?: string;
};

const copy = {
  ar: {
    title: "نموذج إدخال أولي للمشروع",
    description:
      "أدخل البيانات الأساسية للمشروع، وسيتم فتح WhatsApp برسالة منظمة تساعد على بدء النقاش بصورة أكثر دقة ومنهجية.",
    nameLabel: "الاسم",
    namePlaceholder: "اسمك أو اسم النشاط",
    projectTypeLabel: "نوع المشروع",
    projectGoalLabel: "الهدف الأساسي",
    currentSiteLabel: "الحالة الحالية",
    languageScopeLabel: "النطاق اللغوي",
    budgetLabel: "نطاق الميزانية",
    timelineLabel: "الوقت المتوقع",
    detailsLabel: "تفاصيل مختصرة",
    detailsPlaceholder: "اكتب فكرة المشروع، الصفحات المطلوبة، وما الذي يجب أن يحققه الموقع أو الصفحة عمليًا.",
    submitLabel: "فتح WhatsApp بالصياغة المنظّمة",
    helperText: "لن يتم الإرسال تلقائيًا. سيتم فتح WhatsApp مع رسالة أولية قابلة للمراجعة قبل الإرسال.",
    introByGoal: {
      "تحويل مباشر": "مرحبًا معاذ، لدي طلب مشروع يركز على تحويل مباشر.",
      "حضور مؤسسي": "مرحبًا معاذ، لدي طلب مشروع يركز على بناء حضور مؤسسي أوضح.",
      "حملة أو إعلان مدفوع": "مرحبًا معاذ، لدي طلب مشروع مرتبط بحملة أو إعلان مدفوع.",
      "إعادة تنظيم الرسالة والمحتوى": "مرحبًا معاذ، لدي طلب لإعادة تنظيم الرسالة والمحتوى في المشروع الحالي.",
      "غير محدد بعد": "مرحبًا معاذ، لدي طلب مشروع وما زال الهدف النهائي قيد التحديد.",
    },
    goalGuidance: {
      "تحويل مباشر": "ركّز في التفاصيل على العرض الرئيسي، الإجراء المطلوب من الزائر، ومصدر الزيارات المتوقع إن وجد.",
      "حضور مؤسسي": "اذكر الخدمات الأساسية، عناصر الثقة التي يجب إبرازها، والصورة المهنية التي يجب أن يظهر بها النشاط.",
      "حملة أو إعلان مدفوع": "اذكر الحملة أو نوع الإعلان، الجمهور المتوقع، والصفحة أو العرض الذي يجب أن يستقبل الزيارات.",
      "إعادة تنظيم الرسالة والمحتوى": "اشرح أين تشعر أن الرسالة الحالية ضعيفة: العنوان، ترتيب الأقسام، أو وضوح القيمة والإجراء.",
      "غير محدد بعد": "إذا لم يكن الهدف محسومًا بعد، اشرح طبيعة النشاط والمشكلة الحالية وسأساعد في تحديد المسار الأنسب.",
    },
    options: {
      projectType: ["موقع شركة", "صفحة هبوط", "متجر أو منصة", "لوحة تحكم", "تطوير/تحسين موقع قائم"],
      projectGoal: ["تحويل مباشر", "حضور مؤسسي", "حملة أو إعلان مدفوع", "إعادة تنظيم الرسالة والمحتوى", "غير محدد بعد"],
      currentSite: ["لا يوجد موقع حالي", "يوجد موقع ويحتاج تطوير", "يوجد موقع ويحتاج إعادة بناء"],
      languageScope: ["عربي فقط", "عربي + English", "English only"],
      budget: ["أحتاج تقديرًا أوليًا", "ميزانية مرنة", "1,000 - 3,000$", "3,000 - 7,000$", "7,000$+"],
      timeline: ["في أسرع وقت", "خلال أسبوعين", "خلال شهر", "خطة على مراحل"],
    },
    messageLines: {
      intro: "مرحبًا معاذ، لدي طلب مشروع جديد.",
      name: "الاسم",
      projectType: "نوع المشروع",
      projectGoal: "الهدف الأساسي",
      currentSite: "الحالة الحالية",
      languageScope: "النطاق اللغوي",
      budget: "الميزانية",
      timeline: "المدة",
      details: "التفاصيل",
    },
  },
  en: {
    title: "Initial project intake form",
    description:
      "Enter the core project information and WhatsApp will open with a structured message to support a more precise and efficient initial discussion.",
    nameLabel: "Name",
    namePlaceholder: "Your name or business name",
    projectTypeLabel: "Project type",
    projectGoalLabel: "Primary objective",
    currentSiteLabel: "Current site status",
    languageScopeLabel: "Language scope",
    budgetLabel: "Budget range",
    timelineLabel: "Expected timeline",
    detailsLabel: "Short brief",
    detailsPlaceholder: "Describe the project idea, needed page types, and what the site or page should achieve in practice.",
    submitLabel: "Open WhatsApp with the structured draft",
    helperText: "Nothing is sent automatically. WhatsApp will open with an initial message ready for review before sending.",
    introByGoal: {
      "Direct conversion": "Hi Muaz, I have a project inquiry focused on direct conversion.",
      "Business presence": "Hi Muaz, I have a project inquiry focused on building a stronger business presence.",
      "Paid campaign or ads": "Hi Muaz, I have a project inquiry connected to a paid campaign or advertising flow.",
      "Restructure message and content": "Hi Muaz, I have a project inquiry focused on restructuring the current message and content.",
      "Not fully defined yet": "Hi Muaz, I have a new project inquiry and the final objective is not fully defined yet.",
    },
    goalGuidance: {
      "Direct conversion": "In the details, focus on the main offer, the intended user action, and the expected traffic source if known.",
      "Business presence": "Mention the main services, the trust elements that should be visible, and the professional impression the site should create.",
      "Paid campaign or ads": "Describe the campaign or ad type, the expected audience, and the page or offer that should receive the traffic.",
      "Restructure message and content": "Explain where the current message feels weak: headline, section order, value clarity, or action path.",
      "Not fully defined yet": "If the objective is not fully defined yet, describe the business and the current problem and I will help shape the right path.",
    },
    options: {
      projectType: ["Business website", "Landing page", "Store or platform", "Dashboard", "Improve an existing site"],
      projectGoal: ["Direct conversion", "Business presence", "Paid campaign or ads", "Restructure message and content", "Not fully defined yet"],
      currentSite: ["No current site", "Existing site needing improvement", "Existing site needing rebuild"],
      languageScope: ["Arabic only", "Arabic + English", "English only"],
      budget: ["Need an initial estimate", "Flexible budget", "$1,000 - $3,000", "$3,000 - $7,000", "$7,000+"],
      timeline: ["As soon as possible", "Within two weeks", "Within one month", "Phased delivery"],
    },
    messageLines: {
      intro: "Hi Muaz, I have a new project inquiry.",
      name: "Name",
      projectType: "Project type",
      projectGoal: "Primary objective",
      currentSite: "Current site status",
      languageScope: "Language scope",
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
  const [projectGoal, setProjectGoal] = useState<string>(text.options.projectGoal[0]);
  const [currentSite, setCurrentSite] = useState<string>(text.options.currentSite[0]);
  const [languageScope, setLanguageScope] = useState<string>(text.options.languageScope[0]);
  const [budget, setBudget] = useState<string>(text.options.budget[0]);
  const [timeline, setTimeline] = useState<string>(text.options.timeline[0]);
  const [details, setDetails] = useState("");
  const fieldLabelClassName = "block min-h-5 text-sm font-medium text-white/78";
  const fieldClassName =
    "h-12 w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/30 focus:border-amber-200/35";
  const selectClassName =
    "h-12 w-full rounded-2xl border border-white/12 bg-slate-950 px-4 text-sm leading-6 text-white outline-none transition focus:border-amber-200/35";
  const introLine = (text.introByGoal as Record<string, string>)[projectGoal] ?? text.messageLines.intro;
  const goalGuidance = (text.goalGuidance as Record<string, string>)[projectGoal] ?? text.helperText;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      introLine,
      `${text.messageLines.name}: ${name.trim()}`,
      `${text.messageLines.projectType}: ${projectType}`,
      `${text.messageLines.projectGoal}: ${projectGoal}`,
      `${text.messageLines.currentSite}: ${currentSite}`,
      `${text.messageLines.languageScope}: ${languageScope}`,
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
            <span className={fieldLabelClassName}>{text.currentSiteLabel}</span>
            <select
              value={currentSite}
              onChange={(event) => setCurrentSite(event.target.value)}
              className={selectClassName}
            >
              {text.options.currentSite.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm text-white/75">
            <span className={fieldLabelClassName}>{text.projectGoalLabel}</span>
            <select
              value={projectGoal}
              onChange={(event) => setProjectGoal(event.target.value)}
              className={selectClassName}
            >
              {text.options.projectGoal.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm text-white/75 sm:col-span-2">
            <span className={fieldLabelClassName}>{text.languageScopeLabel}</span>
            <select
              value={languageScope}
              onChange={(event) => setLanguageScope(event.target.value)}
              className={selectClassName}
            >
              {text.options.languageScope.map((option) => (
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

        <div className="rounded-[1.3rem] border border-amber-200/16 bg-amber-200/10 px-4 py-4 text-sm leading-7 text-amber-50/92">
          {goalGuidance}
        </div>

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