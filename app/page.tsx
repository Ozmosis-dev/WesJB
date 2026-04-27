"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ── Shared class fragments ───────────────────────────────────────────────────
const CX = {
  container: "w-full max-w-[80rem] mx-auto px-gutter",
  eyebrow:
    "font-display text-[12px] font-medium tracking-[0.2em] uppercase text-accent",
  kicker:
    "font-mono text-[11px] tracking-[0.18em] uppercase text-accent",
  displayH2:
    "font-display font-semibold uppercase leading-[1.05] text-h2 mt-2",
  body: "text-[17px] leading-[1.6] text-cream/80 max-w-[65ch]",
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

// ── Data ─────────────────────────────────────────────────────────────────────
const CREDENTIALS = [
  { number: "Almost a Decade", label: "In the NBA" },
  { number: "#4 Overall", label: "2010 NBA Draft" },
  { number: "Syracuse", label: "College" },
  { number: "New Orleans", label: "Based coaching" },
];

const PRICING_TIERS = [
  {
    label: "One",
    name: "1 Session / Week",
    cadence: "4 sessions per month",
    price: "$220",
    suffix: "/mo",
    body: "Group training, weekly cadence. Built for athletes getting started in serious development work alongside other committed players.",
  },
  {
    label: "Two",
    name: "2 Sessions / Week",
    cadence: "8 sessions per month",
    price: "$380",
    suffix: "/mo",
    body: "The standard for athletes who train. Two reps a week is where the work compounds, with shared standards and shared accountability.",
    featured: true,
  },
  {
    label: "Three",
    name: "3 Sessions / Week",
    cadence: "12 sessions per month",
    price: "$480",
    suffix: "/mo",
    body: "For athletes preparing for varsity, AAU, or college runs. Three sessions a week is what serious development looks like in a group setting.",
  },
];

const PILLARS = [
  {
    label: "Tailored",
    body: "Every session is built around the athlete who walks in. Wes reads what is in front of him, then adapts the work in real time.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M11 2L13.5 7.5H19L14.5 11L16.5 17L11 13.5L5.5 17L7.5 11L3 7.5H8.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="11" cy="11" r="2.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Challenge",
    body: "Comfortable being uncomfortable. The reps that move you forward are the ones that ask something of you.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <polyline points="3,17 8,10 13,13 19,5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="15,5 19,5 19,9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Confidence",
    body: "Confidence is built on competence. The work you put in here shows up later when the moment is bigger than the gym.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M11 2L13 8H19L14 12L16 18L11 14L6 18L8 12L3 8H9L11 2Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "The Main Thing",
    body: "Basketball, coaching, confidence. Keep the main thing the main thing, and the rest takes care of itself.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="2" fill="currentColor"/>
      </svg>
    ),
  },
];

const FAQ = [
  {
    q: "Who is this for?",
    a: "Serious athletes who want to train the way it is actually done at the highest level. High school starters, college prospects, adults who play for real. Not casual.",
  },
  {
    q: "Group or private?",
    a: "The three monthly tiers above are group training: you train alongside other serious athletes on the same cadence, with Wes coaching the floor. The elite track below is private 1-on-1, custom-scoped per athlete, application only. If you are not sure which fits, lead with the group tier and we can move you up if it makes sense.",
  },
  {
    q: "Do I need to be advanced?",
    a: "No. The session adapts to where you are. Wes reads what is in front of him. You bring the work ethic and the willingness to be coached.",
  },
  {
    q: "Where are sessions held?",
    a: "Dynamic Performance Training, 3001 Tchoupitoulas St, New Orleans. Private court access during scheduled times.",
  },
  {
    q: "How does the sibling discount work?",
    a: "Ten dollars off per session for each additional sibling. Stacks with any monthly tier. Mention it when you book.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[clamp(520px,80vh,760px)] flex items-center overflow-hidden isolate">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: SPRING }}
            style={{ y: heroImageY }}
          >
            <Image
              src="/inspo/inspo-04-warm-gym-arched.jpg"
              alt="Empty gym with sun streaming through arched windows"
              fill
              priority
              sizes="100vw"
              quality={85}
              className={cn(
                "object-cover [object-position:50%_50%]",
                "[filter:grayscale(0.85)_contrast(1.05)_brightness(0.7)]",
                "max-md:[object-position:72%_50%]"
              )}
            />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg,rgba(13,12,11,0.7) 0%,rgba(13,12,11,0.2) 40%,rgba(13,12,11,0.95) 100%),radial-gradient(120% 60% at 30% 50%,rgba(13,12,11,0) 0%,rgba(13,12,11,0.5) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className={cn(CX.container, "py-[clamp(6rem,14vh,10rem)]")}>
          <div className="flex flex-col gap-6 max-w-[920px]">
            <motion.p
              className={CX.kicker}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: SPRING }}
            >
              Coach Wesley Johnson · New Orleans
            </motion.p>

            <h1 className="font-display font-bold uppercase tracking-[-0.005em] leading-[0.98] text-hero mt-2">
              {"TRAIN WITH A PRO.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.22em] last:mr-0"
                  initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
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
              transition={{ delay: 0.65, duration: 0.6, ease: SPRING }}
            >
              Learn the game through private training with Wesley Johnson, a
              former top-5 NBA draft pick who has done it at the highest level,
              now developing the next generation of elite players out of New
              Orleans.
            </motion.p>

            <motion.div
              className="flex gap-4 mt-4 flex-wrap"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.82,
                type: "spring",
                stiffness: 200,
                damping: 12,
              }}
            >
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link href="/contact#book" className={CX.ctaPrimary}>
                  Book a Session
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Credentials ribbon ────────────────────────────────────────────── */}
      <section className="bg-canvas border-y border-cream/15" aria-label="Credentials">
        <motion.div
          className={cn(
            CX.container,
            "py-12",
            "grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-4",
            "max-[900px]:grid-cols-2 max-[900px]:gap-8",
            "max-sm:grid-cols-1 max-sm:py-9"
          )}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {CREDENTIALS.flatMap((c, i) => [
            <motion.div
              key={c.label}
              className="flex flex-col items-center text-center gap-1.5"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: SPRING },
                },
              }}
            >
              <span className="font-display font-bold text-[clamp(22px,2.4vw,28px)] tracking-[0.01em] uppercase text-accent leading-none">
                {c.number}
              </span>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-cream/80">
                {c.label}
              </span>
            </motion.div>,
            i < CREDENTIALS.length - 1 && (
              <motion.div
                key={`div-${i}`}
                className="w-px h-8 bg-cream/15 max-[900px]:hidden"
                aria-hidden
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.4, ease: SPRING },
                  },
                }}
              />
            ),
          ])}
        </motion.div>
      </section>

      {/* ── Tip-off ───────────────────────────────────────────────────────── */}
      <section className="py-section" id="tipoff">
        <div className={CX.container}>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SPRING }}
          >
            <p className={CX.eyebrow}>Tip-off</p>
            <h2 className={CX.displayH2}>Elite Training With Pro Insights.</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-12 mt-6 max-md:grid-cols-1 max-md:gap-6"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              className={CX.body}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: SPRING } },
              }}
            >
              Wes coaches teams and small groups the same way he was coached at
              the highest level: direct, honest, and focused on the work that
              actually moves a roster forward. Group sessions are built for
              athletes who already know the game, training together with shared
              standards and shared accountability.
            </motion.p>
            <motion.p
              className={CX.body}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: SPRING } },
              }}
            >
              The framework is the same one Wes built his nine-year career on:
              tailored to the athletes in front of him, adapted in real time, and
              grounded in fundamentals. No filler. Group training is reserved for
              the elite track: application-based, custom-scoped, and priced per
              program.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Image break — player on steps ─────────────────────────────────── */}
      <section className="my-[clamp(3rem,8vw,6rem)]" aria-hidden>
        <motion.div
          className="w-full aspect-[21/9] relative overflow-hidden bg-surface"
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: SPRING }}
        >
          <Image
            src="/photos/WSJ youth.jpg"
            alt="Wesley Johnson as a youth player"
            fill
            sizes="100vw"
            quality={88}
            className="object-cover [filter:grayscale(0.6)_contrast(1.05)]"
          />
        </motion.div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────────── */}
      <section className="py-section bg-surface" id="pricing">
        <div className={CX.container}>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SPRING }}
          >
            <p className={CX.eyebrow}>Monthly Membership · Group Training</p>
            <h2 className={CX.displayH2}>Invest in Your Future.</h2>
            <p className="text-lead leading-[1.55] text-cream/80 max-w-[65ch] mt-4 mb-12">
              Three group-training tiers. Pick the cadence that matches the work
              you want to put in. Sessions are coached by Wes alongside other
              serious athletes, on a private court at Dynamic Performance
              Training in New Orleans.
            </p>
          </motion.div>

          <motion.ul
            className="list-none grid grid-cols-3 gap-6 mb-6 max-[900px]:grid-cols-1 max-[900px]:gap-5"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {PRICING_TIERS.map((t) => (
              <motion.li
                key={t.name}
                className={cn(
                  "flex flex-col gap-4 py-10 px-8 rounded-[4px]",
                  "border transition-colors duration-[120ms] ease-snap",
                  t.featured
                    ? "border-2 border-accent bg-warm"
                    : "border-cream/15 bg-canvas hover:border-accent/40"
                )}
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
                {t.featured && (
                  <p className="font-display font-semibold text-[11px] tracking-[0.2em] uppercase text-accent">
                    Most Popular
                  </p>
                )}
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent">
                  {t.label}
                </p>
                <h3 className="font-display font-semibold text-[clamp(24px,2.4vw,32px)] uppercase leading-[1.05] text-cream m-0">
                  {t.name}
                </h3>
                <p className="font-mono text-[12px] tracking-[0.16em] uppercase text-cream/80">
                  {t.cadence}
                </p>
                <hr className="w-full h-px bg-cream/15 border-0" />
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="font-display font-bold text-price leading-none text-accent tracking-[-0.02em]">
                    {t.price}
                  </span>
                  <span className="text-[18px] font-medium text-cream/60">
                    {t.suffix}
                  </span>
                </div>
                <p
                  className={cn(
                    "text-[16px] leading-[1.55] flex-1",
                    t.featured ? "text-cream" : "text-cream/80"
                  )}
                >
                  {t.body}
                </p>
                <motion.div whileTap={{ scale: 0.97 }}>
                  <Link href="/contact#book" className={CX.ctaPrimary}>
                    Book This Tier
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="text-center text-[14px] text-cream/60 mt-6 tracking-[0.04em] font-mono uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: SPRING }}
          >
            Sibling discount · $10 off per session for each additional sibling.
          </motion.p>
        </div>
      </section>

      {/* ── Elite track ───────────────────────────────────────────────────── */}
      <section className="py-section bg-canvas" id="elite">
        <div className={CX.container}>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SPRING }}
          >
            <p className={CX.eyebrow}>Elite Track</p>
            <h2 className={CX.displayH2}>The Work Goes Deeper Here.</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-[1.4fr_1fr] gap-16 mt-6 max-[900px]:grid-cols-1 max-[900px]:gap-8"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="flex flex-col gap-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: SPRING } },
              }}
            >
              <p className={CX.body}>
                The elite track is for athletes operating at a higher level: high
                school starters chasing scholarships, college players preparing
                for the next jump, and competitive athletes who already have a
                career path and need a coach who can sharpen the edge. Every
                elite program is custom-scoped to the individual: where they are
                now, where they need to be, and what the work between those two
                points actually looks like.
              </p>
              <p className={CX.body}>
                Wes built his nine-year career on tailored development. The elite
                track is that same framework, applied 1-on-1 to a single athlete
                with a clear goal: a scholarship, a roster spot, a draft
                conversation, a contract. A sustained program built around it.
                Application required. Scope and pricing are shaped per athlete.
              </p>
            </motion.div>

            <motion.div
              className="bg-warm border border-cream/15 rounded-[4px] py-10 px-8 flex flex-col gap-5"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: SPRING } },
              }}
            >
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent">
                Sustained program · By application only
              </p>
              <p className="text-[15px] leading-[2] text-cream">
                · 1-on-1 with Wes<br />
                · Custom scope per athlete<br />
                · Multi-month commitment<br />
                · College-prep & professional refinement
              </p>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link href="/contact#elite-inquiry" className={CX.ctaPrimary}>
                  Apply for Elite Coaching
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Image break — red rim ──────────────────────────────────────────── */}
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
            className="object-cover [filter:grayscale(0.6)_contrast(1.05)]"
          />
        </motion.div>
      </section>

      {/* ── Pillars ───────────────────────────────────────────────────────── */}
      <section className="py-section">
        <div className={CX.container}>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SPRING }}
          >
            <p className={CX.eyebrow}>What to Expect</p>
            <h2 className={cn(CX.displayH2, "mb-12")}>The Work Before The Work.</h2>
          </motion.div>

          <motion.ul
            className="list-none grid grid-cols-2 gap-x-16 gap-y-10 max-md:grid-cols-1"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {PILLARS.map((p) => (
              <motion.li
                key={p.label}
                className="flex flex-col gap-3"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: SPRING },
                  },
                }}
              >
                <hr className="w-12 h-0.5 bg-accent border-0 mb-2" />
                <h3 className="font-display font-semibold text-[24px] uppercase text-cream m-0 flex items-center gap-3">
                  <span className="text-accent shrink-0">{p.icon}</span>
                  {p.label}
                </h3>
                <p className="text-[16px] leading-[1.6] text-cream/80 max-w-[56ch]">
                  {p.body}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-section bg-surface">
        <div className={CX.container}>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SPRING }}
          >
            <p className={CX.eyebrow}>Frequently Asked</p>
            <h2 className={cn(CX.displayH2, "mb-8")}>Before You Book.</h2>
          </motion.div>

          <motion.ul
            className="list-none flex flex-col gap-8"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {FAQ.map((item) => (
              <motion.li
                key={item.q}
                className="pt-6 border-t border-cream/15"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: SPRING },
                  },
                }}
              >
                <h3 className="font-display font-semibold text-[clamp(20px,2vw,24px)] uppercase text-cream mb-3">
                  {item.q}
                </h3>
                <p className="text-[16px] leading-[1.6] text-cream/80 max-w-[70ch]">
                  {item.a}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── Closing ribbon ────────────────────────────────────────────────── */}
      <motion.section
        className="bg-accent py-12 border-y border-black/15"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: SPRING }}
      >
        <div
          className={cn(
            CX.container,
            "flex items-center justify-between gap-6 flex-wrap"
          )}
        >
          <p className="font-display font-bold text-[clamp(20px,2.4vw,28px)] tracking-[0.04em] uppercase text-cream">
            Train With a Pro · Earn Your Spot · Rise Above the Rest
          </p>
          <motion.div whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact#book"
              className={cn(
                "inline-flex items-center justify-center gap-3",
                "bg-transparent text-cream border-2 border-cream no-underline",
                "hover:bg-canvas/85 hover:border-cream",
                "font-display text-[16px] font-semibold tracking-[0.08em] uppercase",
                "py-4 px-[34px] rounded-[2px] min-h-[44px]",
                "transition-colors duration-[120ms] ease-snap"
              )}
            >
              Book a Session
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
