"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/app/components/theme-toggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.18 },
  },
};

const SPRING = [0.32, 0.72, 0, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: SPRING },
  },
};

export function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // border fades in as user scrolls — MotionValue, zero re-renders
  const boxShadow = useTransform(scrollY, [0, 64], [
    "0 1px 0 rgba(240,235,226,0)",
    "0 1px 0 rgba(240,235,226,0.15)",
  ]);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-canvas/92 backdrop-blur-md"
      style={{ boxShadow }}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: SPRING }}
    >
      <div
        className={cn(
          "w-full max-w-[80rem] mx-auto",
          "grid grid-cols-[auto_1fr_auto] items-center",
          "py-[18px] px-[var(--spacing-gutter)] gap-6",
          "max-md:py-3.5 max-md:gap-3"
        )}
      >
        {/* Brand */}
        <Link href="/" aria-label="Wes Johnson Basketball Home">
          <Image
            src="/wjb-wordmark.png"
            alt="Wes Johnson Basketball"
            width={449}
            height={200}
            priority
            className="h-11 w-auto block max-md:h-9 [@media(max-width:360px)]:h-8"
          />
        </Link>

        {/* Primary nav */}
        <nav
          aria-label="Primary"
          className="justify-self-center [@media(max-width:360px)]:hidden"
        >
          <motion.ul
            className="flex gap-8 list-none max-md:gap-[18px]"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {NAV_LINKS.map((l) => (
              <motion.li key={l.href} variants={itemVariants}>
                <Link
                  href={l.href}
                  className={cn(
                    "font-display text-[15px] font-medium tracking-[0.08em] uppercase",
                    "py-2 no-underline transition-colors duration-[120ms] ease-snap",
                    "max-md:text-[12px] max-md:tracking-[0.06em]",
                    pathname === l.href
                      ? "text-cream"
                      : "text-cream/70 hover:text-cream"
                  )}
                >
                  {l.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Theme toggle + Book CTA */}
        <div className="flex items-center gap-5">
          <div className="max-md:hidden"><ThemeToggle /></div>
          <motion.div whileTap={{ scale: 0.97 }}>
            <Link
              href="/#pricing"
              className={cn(
                "inline-flex items-center justify-center",
                "bg-accent hover:bg-accent-dark text-cream no-underline",
                "font-display font-semibold tracking-[0.08em] uppercase",
                "text-[14px] px-[22px] min-h-[44px] py-3 rounded-[2px]",
                "transition-colors duration-[120ms] ease-snap",
                "max-md:text-[12px] max-md:tracking-[0.06em] max-md:px-4 max-md:py-2.5"
              )}
            >
              Book a Session
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
