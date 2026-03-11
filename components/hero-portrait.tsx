"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import BrandMark from "@/components/brand-mark";

type HeroPortraitProps = {
  className?: string;
  imageSrc?: string;
  variant?: "standalone" | "integrated";
};

export default function HeroPortrait({
  className = "",
  imageSrc = "/muaz-profile.jpg",
  variant = "standalone",
}: HeroPortraitProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const isIntegrated = variant === "integrated";
  const imageSizes = isIntegrated
    ? "(max-width: 639px) 92vw, 0px"
    : "(min-width: 1024px) 420px, (min-width: 640px) 380px, 0px";

  return (
    <div className={`relative ${isIntegrated ? "w-full max-w-none" : "mx-auto w-full max-w-[16.75rem] sm:max-w-md"} ${className}`.trim()}>
      <div className={isIntegrated
        ? "absolute -inset-2 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(245,158,11,0.14),transparent_42%)] blur-2xl"
        : "absolute -inset-5 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(148,163,184,0.16),transparent_48%)] blur-3xl sm:-inset-7 sm:bg-[radial-gradient(circle_at_50%_22%,rgba(249,115,22,0.22),transparent_42%)]"} />
      <div className={isIntegrated
        ? "absolute -inset-1 -z-10 rounded-[1.8rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.24),transparent_36%)] blur-xl"
        : "absolute -inset-2.5 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.2),transparent_38%)] blur-2xl sm:-inset-4 sm:rounded-[2.5rem] sm:bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.14),transparent_38%),radial-gradient(circle_at_bottom,rgba(180,83,9,0.12),transparent_34%)]"} />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className={isIntegrated
          ? "relative aspect-[4/4.65] overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950/24 shadow-[0_22px_60px_rgba(2,6,23,0.42)] backdrop-blur-2xl"
          : "relative aspect-[4/5] overflow-hidden rounded-[1.9rem] border border-white/10 bg-slate-950/28 shadow-[0_24px_80px_rgba(2,6,23,0.5)] backdrop-blur-2xl sm:rounded-[2.2rem] sm:border-amber-100/14 sm:bg-white/[0.08] sm:shadow-[0_34px_130px_rgba(15,23,42,0.72)] sm:backdrop-blur-3xl"}
      >
        <div className={isIntegrated
          ? "absolute inset-[1px] rounded-[calc(1.7rem-1px)] border border-white/8"
          : "absolute inset-[1px] rounded-[calc(1.9rem-1px)] border border-white/8 sm:rounded-[calc(2.2rem-1px)] sm:border-amber-100/10"} />
        <div className={isIntegrated
          ? "absolute inset-2 rounded-[1.35rem] border border-white/7"
          : "absolute inset-2 rounded-[1.55rem] border border-white/7 sm:inset-3 sm:rounded-[1.8rem] sm:border-white/8"} />
        {!isIntegrated && <div className="absolute inset-x-7 top-2.5 hidden h-px bg-gradient-to-r from-transparent via-amber-100/50 to-transparent sm:block sm:inset-x-10 sm:top-3" />}
        <div className={isIntegrated
          ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015)_14%,rgba(4,10,24,0.2)_44%,rgba(2,6,23,0.78)_100%)]"
          : "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02)_14%,rgba(4,10,24,0.18)_44%,rgba(2,6,23,0.72)_100%)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_18%,rgba(5,8,22,0.08)_42%,rgba(5,8,22,0.56)_100%)]"} />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/22 via-black/8 to-transparent sm:h-28" />

        {!imageFailed ? (
          <Image
            src={imageSrc}
            alt="صورة معاذ الشمطي"
            fill
            priority
            sizes={imageSizes}
            className={isIntegrated
              ? "scale-[1.04] object-cover object-[50%_34%]"
              : "scale-[1.03] object-cover object-[47%_38%] sm:scale-100 sm:object-[41%_50%]"}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_35%),linear-gradient(180deg,#111827,#050816)]">
            <BrandMark />
          </div>
        )}

        <div className={isIntegrated
          ? "absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(251,191,36,0.08),transparent_28%),radial-gradient(circle_at_50%_18%,transparent_24%,rgba(5,8,22,0.16)_58%,rgba(5,8,22,0.62)_100%)]"
          : "absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(148,163,184,0.08),transparent_30%),radial-gradient(circle_at_50%_18%,transparent_22%,rgba(5,8,22,0.12)_56%,rgba(5,8,22,0.58)_100%)] sm:bg-[radial-gradient(circle_at_50%_18%,transparent_20%,rgba(5,8,22,0.08)_55%,rgba(5,8,22,0.48)_100%)]"} />
        <div className={isIntegrated
          ? "absolute inset-y-0 left-0 w-9 bg-gradient-to-r from-[#050816]/72 to-transparent"
          : "absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#050816]/68 to-transparent sm:w-20 sm:from-[#050816]/48"} />
        <div className={isIntegrated
          ? "absolute inset-y-0 right-0 w-9 bg-gradient-to-l from-[#050816]/72 to-transparent"
          : "absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#050816]/68 to-transparent sm:w-20 sm:from-[#050816]/48"} />
        <div className={isIntegrated
          ? "absolute inset-0 bg-gradient-to-t from-[#050816]/98 via-[#050816]/30 to-transparent"
          : "absolute inset-0 bg-gradient-to-t from-[#050816]/96 via-[#050816]/28 to-transparent sm:from-[#050816]/90 sm:via-[#050816]/20"} />

        {!isIntegrated && (
          <div className="absolute right-3 top-3 hidden rounded-full border border-amber-100/14 bg-slate-950/58 px-3 py-1.5 font-mono text-[9px] tracking-[0.18em] text-amber-50/90 shadow-[0_10px_30px_rgba(2,6,23,0.42)] backdrop-blur-xl sm:right-5 sm:top-5 sm:block sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.28em]">
            SIGNATURE PORTRAIT
          </div>
        )}

      </motion.div>
    </div>
  );
}