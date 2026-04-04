import type { TechGroup } from "@/lib/site-content";

function TechGroupIcon({ type }: { type: TechGroup["icon"] }) {
  if (type === "frontend") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M8 10l-2 2 2 2" />
        <path d="m16 10 2 2-2 2" />
        <path d="m13 9-2 6" />
      </svg>
    );
  }

  if (type === "motion") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 15c2.5-5 5.5-8 9-8 2.5 0 4.8 1.4 7 4" />
        <path d="M4 19c2.5-3.5 5.5-5.2 9-5.2 2.4 0 4.8.8 7 2.7" />
        <path d="M14 7h4v4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

type TechnologyGroupCardProps = {
  group: TechGroup;
  toolsLabel: string;
};

export default function TechnologyGroupCard({ group, toolsLabel }: TechnologyGroupCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.72))] p-5 shadow-[0_18px_50px_rgba(2,6,23,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-200/25 sm:p-7">
      <div className={["pointer-events-none absolute inset-0 bg-gradient-to-br opacity-95 transition duration-300 group-hover:opacity-100", group.accentClass].join(" ")} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] opacity-80" />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium tracking-[0.2em] text-white/58 uppercase backdrop-blur-xl">
            <span className="text-amber-100">
              <TechGroupIcon type={group.icon} />
            </span>
            <span>{group.label}</span>
          </div>
          <span className="text-[11px] font-medium tracking-[0.18em] text-amber-200/70">{toolsLabel}</span>
        </div>

        <h2 className="text-xl font-semibold text-white sm:text-2xl">{group.title}</h2>
        <p className="mt-3 min-h-[5.5rem] text-sm leading-7 text-white/65 sm:text-base">{group.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={`${group.title}-${item}`}
              className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-xs font-medium text-white/82 backdrop-blur-xl"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}