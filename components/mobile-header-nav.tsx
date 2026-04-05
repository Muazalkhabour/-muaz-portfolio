"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type MobileHeaderNavLink = {
  label: string;
  href: string;
};

type MobileHeaderNavProps = {
  links: MobileHeaderNavLink[];
  direction: "rtl" | "ltr";
};

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
}

export default function MobileHeaderNav({ links, direction }: MobileHeaderNavProps) {
  const pathname = usePathname();
  const normalizedPathname = normalizePath(pathname ?? "/");
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);
  const hintArrow = direction === "rtl" ? "‹" : "›";
  const hintPositionClassName = direction === "rtl" ? "-left-1.5" : "-right-1.5";
  const navSidePaddingClassName = direction === "rtl" ? "pl-5" : "pr-5";

  useEffect(() => {
    activeLinkRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [normalizedPathname]);

  return (
    <div className="relative">
      <nav
        className={[
          "mx-auto flex w-full items-center justify-start gap-2 overflow-x-auto rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-2 py-2 text-xs text-white/78 shadow-[0_16px_40px_rgba(2,6,23,0.2)] backdrop-blur snap-x snap-proximity [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          navSidePaddingClassName,
        ].join(" ")}
        aria-label="Mobile navigation"
      >
        {links.map((link) => {
          const normalizedHref = normalizePath(link.href);
          const isActive =
            normalizedPathname === normalizedHref ||
            (normalizedHref !== "/" && normalizedPathname.startsWith(`${normalizedHref}/`));

          return (
            <Link
              key={link.href}
              href={link.href}
              ref={isActive ? activeLinkRef : undefined}
              aria-current={isActive ? "page" : undefined}
              className={[
                "shrink-0 snap-center rounded-full border px-4 py-2 text-center text-xs font-medium transition",
                isActive
                  ? "border-amber-200/35 bg-amber-200/14 text-amber-50 shadow-[0_10px_30px_rgba(251,191,36,0.14)]"
                  : "border-transparent bg-white/[0.04] text-white/78 hover:border-amber-200/25 hover:text-amber-100",
              ].join(" ")}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center text-[14px] text-white/40",
          hintPositionClassName,
        ].join(" ")}
      >
        {hintArrow}
      </div>
    </div>
  );
}