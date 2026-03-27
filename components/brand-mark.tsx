type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export default function BrandMark({ className = "", compact = false }: BrandMarkProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`.trim()}>
      <div className="relative flex h-11 min-w-11 items-center justify-center overflow-hidden rounded-2xl border border-amber-200/20 bg-white/[0.06] px-3 shadow-[0_0_24px_rgba(251,191,36,0.16)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.28),transparent_45%)]" />
        <span className="relative whitespace-nowrap font-mono text-[0.65rem] font-semibold tracking-[0.18em] text-amber-100">MUAZ TECH</span>
      </div>
      {!compact && (
        <div>
          <p className="text-sm font-semibold text-white">معاذ الشمطي</p>
          <p className="text-xs tracking-[0.25em] text-white/45">WEB DEVELOPER</p>
        </div>
      )}
    </div>
  );
}