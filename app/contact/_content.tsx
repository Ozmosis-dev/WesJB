"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState } from "react";
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
};

const fLabel =
  "font-display text-[12px] font-medium tracking-[0.18em] uppercase text-cream/80";

const fInput = cn(
  "bg-canvas/40 border border-cream/15 text-cream font-sans text-[16px]",
  "py-[14px] px-4 rounded-[2px] w-full",
  "transition-colors duration-[120ms] ease-snap",
  "placeholder:text-cream/40 outline-none",
  "focus:border-accent"
);

function RollingBasketball({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // 560px travel / (2π × 38.9px radius) × 360° ≈ 824° — use clean 720°
  const x = useTransform(scrollYProgress, [0, 1], [-280, 280]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <div className="relative h-[88px] w-full overflow-hidden">
      <motion.div
        className="absolute"
        style={{ top: 4, left: "calc(50% - 40px)", x, rotate }}
      >
        <svg width="80" height="80" viewBox="0 0 77.832 77.832" className="fill-accent" aria-hidden>
          <path d="M38.916,0C17.458,0,0,17.458,0,38.916c0,2.489,0.245,4.923,0.693,7.284l-0.146,0.175c0.07,0.059,0.138,0.109,0.208,0.167 c3.555,17.819,19.312,31.29,38.161,31.29c21.458,0,38.916-17.458,38.916-38.916S60.374,0,38.916,0z M72.061,25.249 c-0.052,12.625-11.312,15.317-16.045,15.888c3.945-13.604,2.821-26.663,1.959-32.572C64.236,12.512,69.199,18.337,72.061,25.249z M54.559,6.658c0.653,3.375,3.119,18.577-1.675,34.318c-9.122-2.418-10.416-9.061-12.143-18.104 c-1.169-6.126-2.491-12.99-6.694-19.474c1.594-0.217,3.217-0.339,4.869-0.339C44.521,3.059,49.829,4.354,54.559,6.658z M30.764,4.005c4.453,6.291,5.793,13.262,6.973,19.441c1.714,8.979,3.346,17.479,14.175,20.446 c-0.799,2.201-1.749,4.398-2.877,6.562c-22.46-10.88-36.241-28.358-39.237-32.423C14.786,11.094,22.187,6.007,30.764,4.005z M8.018,20.751c4.195,5.486,17.939,21.856,39.521,32.371c-0.844,1.407-1.773,2.791-2.789,4.147 c-5.908-2.934-11.457-3.388-16.834-3.826c-7.44-0.607-15.128-1.256-24.354-8.571c-0.326-1.938-0.504-3.926-0.504-5.956 C3.059,32.29,4.872,26.083,8.018,20.751z M4.647,49.475c8.612,5.83,15.922,6.438,23.021,7.018c5.113,0.417,9.972,0.82,15.12,3.232 c-4.148,4.854-9.563,9.235-16.591,12.709C15.932,68.525,7.908,60.038,4.647,49.475z M30.319,73.725 c6.382-3.564,11.38-7.873,15.283-12.574c1.639,0.906,4.851,3.021,5.688,6.066c0.497,1.805,0.046,3.756-1.312,5.803 c-3.485,1.133-7.201,1.754-11.061,1.754C35.953,74.773,33.074,74.405,30.319,73.725z M54.134,71.374 c0.507-1.685,0.552-3.351,0.101-4.983c-1.068-3.863-4.598-6.434-6.729-7.677c1.028-1.403,1.967-2.833,2.823-4.284 c5.354,2.402,11.157,4.416,17.387,5.82C64.193,64.993,59.529,68.834,54.134,71.374z M69.557,57.523 c-6.373-1.342-12.293-3.354-17.74-5.776c1.27-2.456,2.322-4.952,3.191-7.446c2.686-0.195,10.21-1.199,15.299-6.387 c1.709-1.742,2.957-3.786,3.758-6.096c0.463,2.295,0.709,4.668,0.709,7.098C74.773,45.725,72.865,52.096,69.557,57.523z" />
        </svg>
      </motion.div>
    </div>
  );
}

function PrivateInquiryCard() {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.article
      ref={cardRef}
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
      <RollingBasketball scrollYProgress={scrollYProgress} />
      <motion.div whileTap={{ scale: 0.97 }} className="mt-2">
        <a
          href={`mailto:wes@wesjbasketball.com?subject=Private+Session+Inquiry&body=${PRIVATE_BODY}`}
          className={cn(
            "inline-flex items-center justify-center w-full gap-3",
            "bg-surface hover:bg-surface/70 text-cream no-underline",
            "font-display text-[16px] font-semibold tracking-[0.08em] uppercase",
            "py-[18px] px-9 rounded-[2px] min-h-[44px]",
            "transition-colors duration-[120ms] ease-snap"
          )}
        >
          Email Wes Direct
        </a>
      </motion.div>
    </motion.article>
  );
}

function BasicContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const subject = String(form.get("subject") || "").trim();
    const message = String(form.get("message") || "").trim();

    const lines = [`Name: ${name}`, `Email: ${email}`, "", message];
    const body = encodeURIComponent(lines.join("\r\n"));
    const subjectEncoded = encodeURIComponent(subject || `Message from ${name || "wesjbasketball.com"}`);

    window.location.href = `mailto:wes@wesjbasketball.com?subject=${subjectEncoded}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form
      className="flex flex-col gap-4 flex-1"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
        <label className="flex flex-col gap-2">
          <span className={fLabel}>Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className={fInput}
            placeholder="First and last"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={fLabel}>Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={fInput}
            placeholder="you@email.com"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className={fLabel}>Subject</span>
        <input
          type="text"
          name="subject"
          required
          className={fInput}
          placeholder="What's this about?"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className={fLabel}>Message</span>
        <textarea
          name="message"
          required
          rows={2}
          className={fInput}
          placeholder="What do you want to ask or know?"
        />
      </label>
      <motion.button
        type="submit"
        disabled={submitted}
        className={cn(
          "inline-flex items-center justify-center w-full gap-3 mt-2",
          "bg-accent text-cream",
          "font-display text-[16px] font-semibold tracking-[0.08em] uppercase",
          "py-[18px] px-9 rounded-[2px] min-h-[44px]",
          "transition-colors duration-[120ms] ease-snap",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          !submitted && "hover:bg-accent-dark"
        )}
        whileTap={!submitted ? { scale: 0.97 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {submitted ? "Opening email…" : "Send Message"}
      </motion.button>
    </form>
  );
}

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
              Book a session, ask a question, or apply for the elite track —
              custom-scoped programs for high school starters and college
              prospects by application.
            </motion.p>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6, ease: SPRING }}
            >
              <Link
                href="#elite-inquiry"
                className={CX.ctaPrimary}
              >
                Apply for 1-on-1 Training
              </Link>
            </motion.div>
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
            transition={{ duration: 0.7, delay: 0.4, ease: SPRING }}
          >
            <p className={CX.eyebrow}>Booking</p>
            <h2 className={cn(CX.displayH2, "mb-8")}>Reach Out Direct.</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6 max-md:grid-cols-1"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Private inquiry card */}
            <PrivateInquiryCard />

            {/* Basic contact form card */}
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
                General Inquiry
              </p>
              <h3 className="font-display font-semibold text-[28px] uppercase text-cream m-0 mb-2">
                Send a Message
              </h3>
              <BasicContactForm />
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
                  "underline underline-offset-4 decoration-1",
                  "hover:decoration-2 transition-all duration-120 ease-snap"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions →
              </a>
            </div>

            <motion.div
              className="bg-surface border border-cream/15 rounded-[4px] overflow-hidden min-h-[360px] relative filter-[grayscale(1)_contrast(1.05)_brightness(0.95)] max-md:min-h-[280px]"
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
      <section className="mt-[clamp(3rem,8vw,6rem)]" aria-hidden>
        <motion.div
          className="w-full aspect-21/9 relative overflow-hidden bg-surface"
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
            className="object-cover filter-[grayscale(1)_contrast(1.05)]"
          />
        </motion.div>
      </section>

      {/* ── Elite inquiry ─────────────────────────────────────────────────── */}
      <section className="py-section bg-warm" id="elite-inquiry">
        <div className={CX.container}>
          <motion.div
            className="text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: SPRING }}
          >
            <p className={CX.eyebrow}>Elite Track · By Application Only</p>
            <h2 className={cn(CX.displayH2, "mb-4")}>The Work Goes Deeper Here.</h2>
            <p className="text-lead leading-[1.55] text-cream max-w-[65ch] mb-10 mx-auto">
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
