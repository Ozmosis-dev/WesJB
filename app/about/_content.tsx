"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

const JOURNEY = [
  {
    n: "01",
    period: "Childhood · Texas, Early 2000s",
    heading: "Small Town Outside Dallas",
    body: "Wes grew up in a small Texas town outside Dallas, the kind of place where everybody knew everybody and the days moved slow. It was Friday Night Lights country, a football town first and last, where nobody really made it out playing basketball. He was the only one. Going back still resets him. He will tell you the peace of driving into his old neighborhood is the thing that keeps the work honest.",
  },
  {
    n: "02",
    period: "The Years Before · 2005 to 2009",
    heading: "The Gyms. The Airport. The Transfers.",
    body: "The years before the draft were snapshot after snapshot after snapshot. Every gym he was in, sleeping at the airport, getting hurt, transferring schools. When he looks back now, he says none of it felt optional. It felt like the road he was on, the one he had to walk to end up where he ended up.",
  },
  {
    n: "03",
    period: "College · 2009 to 2010",
    heading: "Syracuse",
    body: "One season at Syracuse, every minute of it earned. He was not a prospect because somebody waved him through the door. He was a prospect because the years before had already done the work.",
  },
  {
    n: "04",
    period: "Draft Night · June 24, 2010 · MSG",
    heading: "The Night at the Table",
    body: "The night before, he could not sleep. He sat at the table, sweating, unable to sit still. His agent had been telling him the call was coming, and he knew it in the way you know a thing without fully believing it. Then he heard his name called, and the nerves went away all at once. That was the moment everything he had fought for had been for.",
  },
  {
    n: "05",
    period: "NBA · 2010 to 2019",
    heading: "Almost a Decade",
    body: "Almost a decade in the league. Minnesota, Phoenix, the Lakers, the Clippers, Washington, and the Pelicans. The number itself is not really the point. It is a ledger of what it took to get there, and what it still takes every morning to do this work the right way.",
  },
  {
    n: "06",
    period: "Coaching · 2026",
    heading: "New Orleans, Now",
    body: "Now he coaches out of New Orleans. Every session is tailor-made for the athlete who shows up, a two-way conversation between what they want and what the work actually requires. He coaches kids and adults the same way he was coached by the people who got him through, and he keeps the main thing the main thing. Basketball, coaching, and confidence.",
  },
];

const PILLARS = [
  {
    label: "Direct",
    body: "Wes talks like a person, not a brochure. He says what is actually happening on the floor, and he lets the work speak louder than the words around it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="13,5 19,11 13,17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Earned",
    body: "Every credential on the wall came at a cost, and Wes remembers the cost more than the credential. When he tells you about almost a decade in the NBA or the number-four pick, he is really telling you about the years of work underneath them.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="11" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 13.5L4 20l7-3 7 3-2-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Tailored",
    body: "Every athlete walks in with a different body, a different story, and a different thing they are trying to fix. Wes reads what is in front of him and the session adapts in real time. He will ask what you are trying to get out of it before he tells you where to stand.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M4 4h14v10a6 6 0 0 1-6 6 6 6 0 0 1-6-6V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="4" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.5" />
        <line x1="11" y1="4" x2="11" y2="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Still",
    body: "Wes is calm on the floor, even-keel and understated. He does not raise his voice to drive a point, and he lets the work be the volume. The phrase he comes back to most is comfortable being uncomfortable, because that is where development actually happens.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <line x1="4" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

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

export function AboutContent() {
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
              June 24, 2010 · Madison Square Garden
            </motion.p>

            <h1 className="font-display font-bold uppercase tracking-[-0.005em] leading-[0.98] text-hero mt-2">
              {"Then He Heard His Name.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.22em] last:mr-0"
                  initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.22 + i * 0.08,
                    duration: 0.55,
                    ease: SPRING,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="text-lead leading-[1.55] text-cream max-w-[65ch] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: SPRING }}
            >
              The night before the draft, Wes could not sleep. Snapshot after
              snapshot. Every gym, every transfer. Then he heard his name called,
              and the nerves went away all at once.
            </motion.p>


          </div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────────────────────── */}
      <motion.div
        className="overflow-hidden border-y border-cream/10 py-5 bg-canvas"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: SPRING }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 pr-8">
              <span
                className="font-display font-bold uppercase tracking-[-0.01em] text-[clamp(72px,8vw,120px)] leading-none"
                style={{ WebkitTextStroke: "1.5px var(--marquee-stroke, white)", color: "transparent" }}
              >
                Wesley Johnson
              </span>
              <svg
                width="38" height="38" viewBox="0 0 38 38" fill="none"
                aria-hidden className="shrink-0"
              >
                <circle cx="19" cy="19" r="17" stroke="#c0541a" strokeWidth="1.5" />
                <line x1="2" y1="19" x2="36" y2="19" stroke="#c0541a" strokeWidth="1.5" />
                <path d="M19 2 C9 8 9 30 19 36" stroke="#c0541a" strokeWidth="1.5" />
                <path d="M19 2 C29 8 29 30 19 36" stroke="#c0541a" strokeWidth="1.5" />
              </svg>
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Syracuse photo + blockquote ──────────────────────────────────── */}
      <section className="bg-canvas border-b border-cream/10 py-[clamp(4rem,8vh,7rem)]">
        <div className={CX.container}>
          <div className="flex items-center gap-8 max-md:flex-col max-md:gap-8">

            {/* Photo */}
            <motion.div
              className="relative aspect-3/4 w-[min(360px,100%)] shrink-0 overflow-hidden"
              initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
              whileInView={{ opacity: 0.75, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: SPRING }}
            >
              <Image
                src="/photos/WSJ syracuse.png"
                alt="Wesley Johnson at Syracuse"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                quality={90}
                className="object-cover"
              />
            </motion.div>

            {/* Orange blockquote */}
            <blockquote className="m-0 flex flex-col gap-6 text-left">
              <p className="font-display font-bold uppercase tracking-[-0.02em] leading-[0.92] text-[clamp(52px,7vw,96px)] text-accent m-0">
                {["Preparation", "Outperforms", "Talent.”"].map((line, i) => (
                  <motion.span
                    key={line}
                    className="block"
                    initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.12, duration: 0.6, ease: SPRING }}
                  >
                    {line}
                  </motion.span>
                ))}
              </p>
              <motion.footer
                className="font-display font-semibold text-[13px] tracking-[0.2em] uppercase text-cream/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.42, duration: 0.5, ease: SPRING }}
              >
                Wesley Johnson
              </motion.footer>
            </blockquote>

          </div>
        </div>
      </section>

      {/* ── Editorial ribbon ──────────────────────────────────────────────── */}
      <motion.section
        className="bg-canvas pb-8 pt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: SPRING }}
      >
        <div className={CX.container}>
          <p className={CX.eyebrow}>The Journey</p>
          <h2 className={CX.displayH2}>Six Stops. One Story.</h2>
        </div>
      </motion.section>

      {/* ── Journey ───────────────────────────────────────────────────────── */}
      <section className="pb-section pt-8">
        <div className={CX.container}>
          <motion.ol
            className="list-none flex flex-col"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {JOURNEY.map((j, idx) => (
              <motion.li
                key={j.n}
                className={cn(
                  "grid grid-cols-[clamp(80px,12vw,140px)_1fr] gap-x-[clamp(24px,4vw,64px)] py-12 items-start",
                  "max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-9",
                  idx > 0 && "border-t border-cream/15"
                )}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.65, ease: SPRING },
                  },
                }}
              >
                <span className="font-display font-bold text-[clamp(64px,8vw,120px)] leading-[0.85] text-accent tracking-[-0.02em] max-sm:text-[64px] max-sm:leading-none">
                  {j.n}
                </span>
                <div className="flex flex-col gap-3 max-w-[65ch]">
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent">
                    {j.period}
                  </p>
                  <h3 className="font-display font-semibold text-[clamp(24px,3vw,36px)] uppercase text-cream m-0 leading-[1.05]">
                    {j.heading}
                  </h3>
                  <p className="text-[17px] leading-[1.6] text-cream/80">
                    {j.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ── Portrait — Pelicans photo ──────────────────────────────────────── */}
      <section className="mt-[clamp(3rem,8vw,6rem)]" aria-hidden>
        <motion.div
          className="w-full aspect-21/9 relative overflow-hidden bg-surface"
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.1, ease: SPRING }}
        >
          <Image
            src="/photos/wes-pelicans-orange-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* ── Voice pillars ─────────────────────────────────────────────────── */}
      <section className="py-section bg-surface">
        <div className={CX.container}>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SPRING }}
          >
            <p className={CX.eyebrow}>Voice Pillars</p>
            <h2 className={cn(CX.displayH2, "mb-12")}>How He Coaches.</h2>
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
                <h3 className="font-display font-semibold text-[28px] uppercase text-cream m-0 flex items-center gap-3">
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

      {/* ── Identity quote ────────────────────────────────────────────────── */}
      <motion.section
        className="py-section bg-canvas text-center"
        initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: SPRING }}
      >
        <div className={CX.container}>
          <p className="font-display text-[12px] font-medium tracking-[0.2em] uppercase text-accent text-center block">
            A Testimony
          </p>
          <blockquote className="font-display font-semibold text-[clamp(28px,4vw,48px)] leading-[1.15] uppercase text-cream max-w-[24ch] mx-auto my-6 tracking-[-0.005em]">
            &ldquo;I am a testimony of hard work. The regular kid next door that
            made it.&rdquo;
          </blockquote>
          <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-accent">
            Wesley Johnson
          </p>
        </div>
      </motion.section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <motion.section
        className="bg-warm py-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: SPRING }}
      >
        <div className={CX.container}>
          <div className="flex flex-col gap-4 items-start max-w-[920px]">
            <p className={CX.eyebrow}>Train With Him</p>
            <h2 className={cn(CX.displayH2, "mb-4")}>Ready to Start.</h2>
            <p className="text-lead leading-[1.55] text-cream max-w-[65ch] mb-4">
              Private monthly memberships and elite custom programs. Book a
              session, request the elite track, or reach out for a conversation.
            </p>
            <div className="flex gap-4 flex-wrap mt-2">
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link href="/#pricing" className={CX.ctaPrimary}>
                  Book a Session
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link href="/contact#elite-inquiry" className={CX.ctaSecondary}>
                  Apply for Elite Coaching
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
