import Link from "next/link";
import { FAQItem } from "@/lib/site-content";

type FAQSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: FAQItem[];
  actionHref?: string;
  actionLabel?: string;
};

export default function FAQSection({ eyebrow, title, description, items, actionHref, actionLabel }: FAQSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
      <div className="rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_28%,rgba(2,6,23,0.72)_100%)] p-5 shadow-[0_24px_70px_rgba(2,6,23,0.22)] backdrop-blur-xl sm:p-8">
        <div className="max-w-3xl">
          <p className="mb-2 font-mono text-sm tracking-[0.35em] text-amber-200/70">{eyebrow}</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">{description}</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.75rem] border border-white/12 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(15,23,42,0.62))] p-5 transition hover:border-amber-200/24"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white sm:text-base">
                <span>{item.question}</span>
                <span className="text-amber-100 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-white/68">{item.answer}</p>
            </details>
          ))}
        </div>

        {actionHref && actionLabel && (
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={actionHref}
              className="inline-flex w-full items-center justify-center rounded-full border border-amber-200/24 bg-amber-200/12 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-200/38 hover:bg-amber-200/18 hover:text-amber-50 sm:w-auto"
            >
              {actionLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}