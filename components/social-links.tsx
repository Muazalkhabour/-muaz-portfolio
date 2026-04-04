type SocialLinksProps = {
  locale: "ar" | "en";
  align?: "start" | "center";
};

const socialItems = [
  {
    name: "Email",
    href: "mailto:moaazalshmoty@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m4.5 7.5 7.5 6 7.5-6" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/905356577992",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.15 1.58 5.97L0 24l6.28-1.65a11.8 11.8 0 0 0 5.79 1.49h.01c6.57 0 11.93-5.36 11.93-11.94 0-3.19-1.24-6.18-3.49-8.42Zm-8.45 18.33h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.92 9.92 0 0 1 15.45-12.3 9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.46 9.92-9.97 9.92Zm5.44-7.42c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47a9.08 9.08 0 0 1-1.67-2.08c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.65-.93-2.26-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.04-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/muaz__92/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.25" />
        <circle cx="12" cy="12" r="4.25" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/Muazalkhabour",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12.01c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.2-.02-2.18-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.96 10.96 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.41-5.28 5.69.42.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.66.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/muaz.alkhabour",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7h2.35l.35-2.73H13.5V9.53c0-.79.22-1.33 1.35-1.33h1.44V5.75c-.25-.03-1.1-.11-2.08-.11-2.06 0-3.47 1.26-3.47 3.57v2.06H8.4V14h2.34v7h2.76Z" />
      </svg>
    ),
  },
];

export default function SocialLinks({ locale, align = "center" }: SocialLinksProps) {
  const wrapperClass = align === "start" ? "justify-start" : "justify-center";
  const heading = locale === "ar" ? "قنوات التواصل" : "CONTACT CHANNELS";
  const labelMap = {
    ar: {
      Email: "البريد",
      WhatsApp: "واتساب",
      Instagram: "إنستغرام",
      GitHub: "GitHub",
      Facebook: "فيسبوك",
    },
    en: {
      Email: "Email",
      WhatsApp: "WhatsApp",
      Instagram: "Instagram",
      GitHub: "GitHub",
      Facebook: "Facebook",
    },
  } as const;

  return (
    <div className="space-y-3">
      <p className="text-center font-mono text-[11px] tracking-[0.28em] text-white/40">
        {heading}
      </p>
      <div className={["flex flex-wrap gap-3", wrapperClass].join(" ")}>
        {socialItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
            aria-label={item.name}
            title={item.name}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/75 transition hover:border-amber-200/30 hover:bg-amber-200/[0.08] hover:text-amber-100"
          >
            {item.icon}
            <span>{labelMap[locale][item.name as keyof typeof labelMap[typeof locale]]}</span>
          </a>
        ))}
      </div>
    </div>
  );
}