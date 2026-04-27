"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SPRING } from "@/lib/motion";

const fieldLabel =
  "font-display text-[12px] font-medium tracking-[0.18em] uppercase text-cream/80";

const fieldInput = cn(
  "bg-canvas/40 border border-cream/15 text-cream font-sans text-[16px]",
  "py-[14px] px-4 rounded-[2px] w-full",
  "transition-colors duration-[120ms] ease-snap",
  "placeholder:text-cream/40 outline-none",
  "focus:border-accent"
);

export function EliteInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const level = String(form.get("level") || "").trim();
    const goal = String(form.get("goal") || "").trim();
    const budget = String(form.get("budget") || "").trim();
    const timeline = String(form.get("timeline") || "").trim();

    const lines = [
      "Elite Track Inquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Athlete level: ${level}`,
      `Timeline: ${timeline}`,
      `Budget: ${budget}`,
      "",
      "Training goal:",
      goal,
      "",
      "---",
      "Sent from wesjbasketball.com elite inquiry form",
    ];

    const body = encodeURIComponent(lines.join("\r\n"));
    const subject = encodeURIComponent(`Elite Inquiry · ${name || "(name pending)"}`);

    window.location.href = `mailto:wes@wesjbasketball.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form
      className="flex flex-col gap-6 max-w-[880px] mx-auto"
      onSubmit={handleSubmit}
      aria-label="Elite inquiry form"
    >
      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        <label className="flex flex-col gap-2">
          <span className={fieldLabel}>Your Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className={fieldInput}
            placeholder="First and last"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={fieldLabel}>Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={fieldInput}
            placeholder="you@email.com"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={fieldLabel}>Phone (optional)</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className={fieldInput}
            placeholder="(504) 555-0100"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={fieldLabel}>Athlete Level</span>
          <select
            name="level"
            required
            defaultValue=""
            className={cn(fieldInput, "appearance-none pr-10")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%23F0EBE2' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 16px center",
            }}
          >
            <option value="" disabled>Select one</option>
            <option value="High school varsity">High school varsity</option>
            <option value="High school AAU or club">High school AAU or club</option>
            <option value="College D1">College D1</option>
            <option value="College D2, D3, or NAIA">College D2, D3, or NAIA</option>
            <option value="Post-college or pro track">Post-college or pro track</option>
            <option value="Adult competitive">Adult competitive</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className={fieldLabel}>Timeline</span>
          <select
            name="timeline"
            required
            defaultValue=""
            className={cn(fieldInput, "appearance-none pr-10")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%23F0EBE2' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 16px center",
            }}
          >
            <option value="" disabled>Select one</option>
            <option value="Short, 1 to 3 months">Short, 1 to 3 months</option>
            <option value="Mid, 3 to 6 months">Mid, 3 to 6 months</option>
            <option value="Sustained, 6 months or more">Sustained, 6 months or more</option>
            <option value="Open, not sure yet">Open, not sure yet</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className={fieldLabel}>Budget Range</span>
          <select
            name="budget"
            defaultValue=""
            className={cn(fieldInput, "appearance-none pr-10")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%23F0EBE2' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 16px center",
            }}
          >
            <option value="">Prefer not to say yet</option>
            <option value="Under $1,500/mo">Under $1,500/mo</option>
            <option value="$1,500 to $3,000/mo">$1,500 to $3,000/mo</option>
            <option value="$3,000+/mo">$3,000+/mo</option>
            <option value="Open, depends on scope">Open, depends on scope</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={fieldLabel}>Your Training Goal</span>
        <textarea
          name="goal"
          required
          rows={5}
          className={fieldInput}
          placeholder="One paragraph. Where you are now, what you are training for, and what you want from a coach."
        />
      </label>

      <p className="text-[14px] text-cream/60 leading-normal text-center">
        Submitting opens your email client with the inquiry pre-filled. Wes will
        respond direct from{" "}
        <a
          href="mailto:wes@wesjbasketball.com"
          className="text-accent underline underline-offset-[3px]"
        >
          wes@wesjbasketball.com
        </a>
        .
      </p>

      <motion.button
        type="submit"
        disabled={submitted}
        className={cn(
          "inline-flex items-center justify-center w-full gap-3",
          "bg-accent text-cream no-underline",
          "font-display text-[16px] font-semibold tracking-[0.08em] uppercase",
          "py-[18px] px-9 rounded-[2px] min-h-[44px]",
          "transition-colors duration-120 ease-snap",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          !submitted && "hover:bg-accent-dark"
        )}
        whileTap={!submitted ? { scale: 0.97 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {submitted ? "Sending…" : "Send Inquiry"}
      </motion.button>
    </form>
  );
}
