"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SPRING, staggerContainerVariants, staggerItemVariants } from "@/lib/motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/#pricing", label: "Book a Session" },
];

const colLinkClass =
  "text-cream/80 no-underline text-[14px] transition-colors duration-[120ms] ease-snap hover:text-cream";

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-cream/15 pt-16 pb-8 mt-[var(--spacing-section)]">
      <motion.div
        className={
          "w-full max-w-[80rem] mx-auto px-gutter " +
          "grid grid-cols-[1.5fr_1fr_1fr] gap-16 " +
          "max-md:grid-cols-1 max-md:gap-10"
        }
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Brand */}
        <motion.div
          className="flex flex-col items-start gap-3"
          variants={staggerItemVariants}
        >
          <Image
            src="/wjb-wordmark.png"
            alt="Wes Johnson Basketball"
            width={449}
            height={200}
            className="h-14 w-auto block"
          />
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-cream/80">
            Elite Basketball Training · New Orleans
          </span>
        </motion.div>

        {/* Navigate */}
        <motion.div
          className="flex flex-col gap-[18px]"
          variants={staggerItemVariants}
        >
          <h3 className="font-display font-medium text-[12px] tracking-[0.2em] uppercase text-accent m-0">
            Navigate
          </h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={colLinkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="flex flex-col gap-[18px]"
          variants={staggerItemVariants}
        >
          <h3 className="font-display font-medium text-[12px] tracking-[0.2em] uppercase text-accent m-0">
            Contact
          </h3>
          <address className="flex flex-col gap-1.5 not-italic text-[14px] text-cream/80">
            <span>3001 Tchoupitoulas St</span>
            <span>New Orleans, LA 70115</span>
            <a
              href="mailto:wes@wesjbasketball.com"
              className={colLinkClass + " mt-1.5"}
            >
              wes@wesjbasketball.com
            </a>
          </address>
        </motion.div>
      </motion.div>

      {/* Legal */}
      <div className="w-full max-w-[80rem] mx-auto mt-16 pt-6 px-gutter border-t border-cream/15 text-[13px] text-cream/60">
        <span>© 2026 Wes Johnson Basketball. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
