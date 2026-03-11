"use client";

import { motion } from "framer-motion";
import BrandMark from "@/components/brand-mark";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative flex w-full max-w-md flex-col items-center rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-12 text-center backdrop-blur-2xl">
        <BrandMark compact />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-semibold text-white">جارٍ تحميل التجربة</h2>
          <p className="mt-3 text-sm leading-7 text-white/60">يتم تجهيز المشهد التفاعلي والواجهة بأفضل جودة ممكنة...</p>
        </motion.div>

        <div className="mt-8 flex items-center gap-3">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]"
              animate={{ opacity: [0.25, 1, 0.25], y: [0, -8, 0], scale: [0.9, 1.12, 0.9] }}
              transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, delay: dot * 0.18, ease: "easeInOut" }}
            />
          ))}
        </div>

        <motion.div
          className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>
    </main>
  );
}