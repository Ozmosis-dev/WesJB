"use client";

import { motion } from "framer-motion";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/motion";

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function StaggerList({ children, className, delay = 0.1 }: StaggerProps) {
  const variants = delay === 0.1
    ? staggerContainerVariants
    : { hidden: {}, visible: { transition: { staggerChildren: delay } } };

  return (
    <motion.ul
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerOL({ children, className, delay = 0.1 }: StaggerProps) {
  const variants = delay === 0.1
    ? staggerContainerVariants
    : { hidden: {}, visible: { transition: { staggerChildren: delay } } };

  return (
    <motion.ol
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.ol>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.li className={className} variants={staggerItemVariants}>
      {children}
    </motion.li>
  );
}

export function StaggerDiv({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}
