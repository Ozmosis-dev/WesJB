"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EliteInquiryForm } from "./elite-inquiry-form";
import { SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

const PRIVATE_BODY = `Hi Wes,%0D%0A%0D%0AI'd like to book a private session.%0D%0A%0D%0AName:%0D%0AAthlete age (if not me):%0D%0APreferred days/times:%0D%0ASessions per week (1, 2, or 3):%0D%0AOne sentence on the goal:%0D%0A%0D%0AThanks,%0D%0A`;

const CX = {
  container: "w-full max-w-[80rem] mx-auto px-gutter",
  eyebrow: "font-display text-[12px] font-medium tracking-[0.2em] uppercase text-accent",
  displayH2: "font-display font-semibold uppercase leading-[1.05] text-h2 mt-2",
  ctaPrimary: cn(
    "inline-flex items-center justify-center gap-3",
    "bg-accent hover:bg-accent-dark text-cream no-underline",
    "font-display text-[16px] font-semibold tracking-[0.08em] uppercase",
    "py-[18px] px-9 rounded-[2px] min-h-[44px]",
    "transition-colors duration-[120ms] ease-snap"
  ),
  ctaSecondary: cn(
    "inline-flex items-center justify-center gap-3",
    "bg-transparent text-cream border-2 border-cream no-underline",
    "hover:text-accent hover:border-accent",
    "font-display text-[16px] font-semibold tracking-[0.08em] uppercase",
    "py-4 px-[34px] rounded-[2px] min-h-[44px]",
    "transition-colors duration-[120ms] ease-snap"
  ),
};

export function ContactContent() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-canvas border-b border-cream/15 py-[clamp(4rem,10vh,8rem)]">
        <div className={CX.container}>
          <div className="flex flex-col gap-6 max-w-[920px]">
            <motion.p
              className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: SPRING }}
            >
              Coach Wesley Johnson · New Orleans
            </motion.p>

            <h1 className="font-display font-bold uppercase tracking-[-0.005em] leading-[0.98] text-hero mt-2">
              {"Book the Floor.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.22em] last:mr-0"
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.22 + i * 0.09,
                    duration: 0.55,
                    ease: SPRING,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="text-lead leading-[1.55] text-cream max-w-[65ch]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: SPRING }}
            >
              Private basketball training with Wesley Johnson in New Orleans.
              Monthly memberships for serious athletes, and custom-scoped
              programs for elite and college-prep players by application.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Booking ───────────────────────────────────────────────────────── */}
      <section className="py-section bg-surface" id="book">
        <div className={CX.container}>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SPRING }}
          >
            <p className={CX.eyebrow}>Booking</p>
            <h2 className={cn(CX.displayH2, "mb-8")}>Reach Out Direct.</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6 max-md:grid-cols-1"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Private inquiry card */}
            <motion.article
              className="bg-canvas border border-cream/15 rounded-[4px] py-10 px-8 flex flex-col gap-4"
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.7, ease: SPRING },
                },
              }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent">
                Private Inquiry
              </p>
              <h3 className="font-display font-semibold text-[28px] uppercase text-cream m-0 mb-2">
                Email Wes Direct
              </h3>
              <p className="text-[16px] leading-[1.6] text-cream/80 flex-1">
                For private sessions, drop-ins, scheduling questions, or
                anything outside the group cadence. The button opens a
                pre-filled inquiry: name, preferred days, sessions per week, and
                a sentence on the goal. Wes responds direct.
              </p>
              <motion.div whileTap={{ scale: 0.97 }}>
                <a
                  href={`mailto:wes@wesjbasketball.com?subject=Private+Session+Inquiry&body=${PRIVATE_BODY}`}
                  className={CX.ctaPrimary}
                >
                  Email Wes Direct
                </a>
              </motion.div>
              <p className="text-[14px] text-cream/60 mt-2">
                Or write to{" "}
                <a
                  href="mailto:wes@wesjbasketball.com"
                  className="text-accent underline underline-offset-[3px]"
                >
                  wes@wesjbasketball.com
                </a>{" "}
                with whatever you want him to know.
              </p>
            </motion.article>

            {/* Group card */}
            <motion.article
              className="bg-warm border border-cream/15 rounded-[4px] py-10 px-8 flex flex-col gap-4"
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.7, ease: SPRING },
                },
              }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent">
                Group Sessions
              </p>
              <h3 className="font-display font-semibold text-[28px] uppercase text-cream m-0 mb-2">
                Monthly Memberships
              </h3>
              <p className="text-[16px] leading-[1.6] text-cream/80 flex-1">
                Looking for ongoing group training? The monthly membership tiers
                on the home page cover one, two, or three sessions per week with
                shared standards and shared accountability. Sibling discount on
                every session.
              </p>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link href="/#pricing" className={CX.ctaSecondary}>
                  See Monthly Options
                </Link>
              </motion.div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* ── Location ──────────────────────────────────────────────────────── */}
      <motion.section
        className="py-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: SPRING }}
      >
        <div className={CX.container}>
          <p className={CX.eyebrow}>The Floor</p>
          <h2 className={cn(CX.displayH2, "mb-8")}>Dynamic Performance Training.</h2>

          <div className="grid grid-cols-2 gap-12 items-stretch mt-6 max-md:grid-cols-1 max-md:gap-8">
            <div className="flex flex-col gap-5">
              <address className="flex flex-col gap-1 not-italic font-display font-semibold text-[clamp(20px,2vw,28px)] uppercase text-cream">
                <span>3001 Tchoupitoulas St</span>
                <span>New Orleans, LA 70115</span>
              </address>
              <p className="text-[16px] leading-[1.6] text-cream/80 max-w-[56ch]">
                Private court access during scheduled times. Park along
                Tchoupitoulas. Training floor is a few steps inside the
                entrance, and Wes will meet you on the court at the time you
                book.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=3001+Tchoupitoulas+St,+New+Orleans,+LA+70115"
                className={cn(
                  "inline-flex items-center gap-2",
                  "text-accent font-display text-[16px] font-semibold tracking-[0.08em] uppercase",
                  "underline underline-offset-4 decoration-[1px]",
                  "hover:decoration-2 transition-all duration-[120ms] ease-snap"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions →
              </a>
            </div>

            <motion.div
              className="bg-surface border border-cream/15 rounded-[4px] overflow-hidden min-h-[360px] relative [filter:grayscale(1)_contrast(1.05)_brightness(0.95)] max-md:min-h-[280px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: SPRING }}
            >
              <iframe
                title="Map of Dynamic Performance Training, 3001 Tchoupitoulas St, New Orleans"
                src="https://maps.google.com/maps?q=3001+Tchoupitoulas+St,+New+Orleans,+LA+70115&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full h-full min-h-[360px] border-0 max-md:min-h-[280px]"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── Photo break ───────────────────────────────────────────────────── */}
      <section className="my-[clamp(3rem,8vw,6rem)]" aria-hidden>
        <motion.div
          className="w-full aspect-[21/9] relative overflow-hidden bg-surface"
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: SPRING }}
        >
          <Image
            src="/inspo/inspo-03-red-rim-knotted-net.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={88}
            className="object-cover [filter:grayscale(1)_contrast(1.05)]"
          />
        </motion.div>
      </section>

      {/* ── Elite inquiry ─────────────────────────────────────────────────── */}
      <section className="py-section bg-warm" id="elite-inquiry">
        <div className={CX.container}>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SPRING }}
          >
            <p className={CX.eyebrow}>Elite Track · By Application Only</p>
            <h2 className={cn(CX.displayH2, "mb-4")}>The Work Goes Deeper Here.</h2>
            <p className="text-lead leading-[1.55] text-cream max-w-[65ch] mb-10">
              Sustained programs for high school starters, college prospects, and
              competitive players who need a coach who can sharpen the edge. Each
              elite program is custom-scoped to the athlete, the goal, and the
              timeline. Tell Wes where you are now and what you are training for.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: SPRING }}
          >
            <EliteInquiryForm />
          </motion.div>
        </div>
      </section>

      {/* ── Closing ribbon ────────────────────────────────────────────────── */}
      <motion.section
        className="bg-accent py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: SPRING }}
      >
        <div className={cn(CX.container, "flex items-center justify-center")}>
          <p className="font-display font-bold text-[clamp(20px,2.4vw,28px)] tracking-[0.04em] uppercase text-cream text-center">
            Train With a Pro · Earn Your Spot · Rise Above the Rest
          </p>
        </div>
      </motion.section>
    </>
  );
}
