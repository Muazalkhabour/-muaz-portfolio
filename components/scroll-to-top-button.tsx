"use client";

import { useEffect, useState } from "react";

type ScrollToTopButtonProps = {
  ariaLabel: string;
};

export default function ScrollToTopButton({ ariaLabel }: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={ariaLabel}
      className="group fixed bottom-5 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-orange-200/25 bg-[linear-gradient(180deg,rgba(253,186,116,0.84),rgba(251,146,60,0.74))] text-slate-950 shadow-[0_14px_28px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-orange-100/35 hover:shadow-[0_16px_34px_rgba(15,23,42,0.32)] sm:bottom-6 sm:left-6"
    >
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] transition duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}