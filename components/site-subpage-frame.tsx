import Link from "next/link";
import BrandMark from "@/components/brand-mark";
import MobileHeaderNav from "@/components/mobile-header-nav";
import SocialLinks from "@/components/social-links";
import ScrollToTopButton from "@/components/scroll-to-top-button";

type FrameLink = {
  label: string;
  href: string;
};

type SiteSubpageFrameProps = {
  locale: "ar" | "en";
  eyebrow: string;
  title: string;
  description: string;
  currentLabel: string;
  alternateHref: string;
  alternateLabel: string;
  navLinks: FrameLink[];
  primaryAction: FrameLink;
  children: React.ReactNode;
};

export default function SiteSubpageFrame({
  locale,
  eyebrow,
  title,
  description,
  currentLabel,
  alternateHref,
  alternateLabel,
  navLinks,
  primaryAction,
  children,
}: SiteSubpageFrameProps) {
  const isArabic = locale === "ar";
  const primaryIsExternal = primaryAction.href.startsWith("http");
  const approachLink = { label: isArabic ? "المنهج" : "Approach", href: isArabic ? "/approach" : "/en/approach" };
  const navLinksWithApproach = [...navLinks.slice(0, 2), approachLink, ...navLinks.slice(2)].filter(
    (link, index, links) => index === links.findIndex((entry) => entry.href === link.href),
  );
  const footerLinks = [
    { label: isArabic ? "الرئيسية" : "Home", href: isArabic ? "/" : "/en" },
    ...navLinksWithApproach,
  ];

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/2 top-0 h-[30rem] w-[30rem] translate-x-1/2 rounded-full bg-amber-400/16 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-[22rem] w-[22rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
        <Link href={isArabic ? "/" : "/en"} className="text-sm font-semibold tracking-[0.35em] text-white/90">
          <BrandMark compact />
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white/70 backdrop-blur md:flex lg:gap-6 lg:px-5 lg:py-3 lg:text-sm">
            {navLinksWithApproach.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-amber-200">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href={alternateHref}
            hrefLang={isArabic ? "en" : "ar"}
            lang={isArabic ? "en" : "ar"}
            className="inline-flex items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2.5 text-xs font-semibold tracking-[0.18em] text-amber-100 transition hover:border-amber-200/35 hover:bg-amber-200/15 hover:text-amber-50 sm:text-sm"
          >
            {alternateLabel}
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 pb-3 sm:px-6 sm:pb-4 md:hidden">
        <MobileHeaderNav links={navLinksWithApproach} direction={isArabic ? "rtl" : "ltr"} />
      </div>

      <section className="mx-auto w-full max-w-7xl px-4 pb-8 pt-3 sm:px-6 sm:pb-12 sm:pt-5 lg:px-10">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_18%,rgba(2,6,23,0.92)_100%)] p-6 shadow-[0_28px_90px_rgba(2,6,23,0.34)] backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0" />

          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-white/55">
            <span className="rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1.5 font-mono tracking-[0.3em] text-amber-100">
              {eyebrow}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">{currentLabel}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-[2rem] font-semibold leading-[1.45] tracking-tight text-white sm:text-[2.5rem] lg:text-[3.15rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg sm:leading-8 lg:text-xl">
                {description}
              </p>
            </div>

            <div className="space-y-4 rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-6">
              <p className="font-mono text-xs tracking-[0.3em] text-amber-200/70">{isArabic ? "DIRECT PATH" : "DIRECT PATH"}</p>
              <p className="text-sm leading-7 text-white/65 sm:text-base">
                {isArabic
                  ? "تعرض هذه الصفحة نطاق الخدمة أو المجال بصورة مباشرة، مع إجراء واضح لإرسال الطلب أو الانتقال إلى الصفحة المرتبطة."
                  : "This page presents the service or domain scope directly, with a clear action for submitting a request or moving to the related page."}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {primaryIsExternal ? (
                  <a
                    href={primaryAction.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                  >
                    {primaryAction.label}
                  </a>
                ) : (
                  <Link
                    href={primaryAction.href}
                    className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                  >
                    {primaryAction.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="space-y-2 sm:space-y-4">{children}</div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <BrandMark />
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                {isArabic
                  ? "أطوّر مواقع وصفحات رقمية تجمع بين وضوح الرسالة، قوة الهوية البصرية، وسهولة الوصول إلى الخطوة التالية المناسبة للعميل."
                  : "I build websites and digital pages that combine message clarity, strong visual identity, and a cleaner path to the next action."}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={`${link.href}-footer`}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/72 transition hover:border-amber-200/25 hover:text-amber-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <SocialLinks locale={locale} />
          </div>
        </div>
      </footer>

      <ScrollToTopButton ariaLabel={isArabic ? "العودة إلى أعلى الصفحة" : "Back to top"} />
    </main>
  );
}