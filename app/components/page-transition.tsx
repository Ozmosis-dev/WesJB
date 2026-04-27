"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { SPRING } from "@/lib/motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, ease: SPRING } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
