"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const FORM_ID = "meeyrjwq";

const fieldClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-all duration-200 ease-premium focus:border-primary focus:ring-4 focus:ring-primary/10";
const labelClass = "mb-2 block font-heading text-xs font-semibold uppercase tracking-[0.12em] text-ink/45";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="text-primary" size={32} />
        </span>
        <p className="font-heading text-lg font-semibold text-ink">Message sent</p>
        <p className="text-sm text-ink/60">Thank you for reaching out. Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div>
        <label htmlFor="name" className={labelClass}>Full Name</label>
        <input id="name" name="name" required type="text" placeholder="Your name" className={fieldClass} />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-xs text-accent" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" required type="email" placeholder="you@email.com" className={fieldClass} />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-accent" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" required type="tel" placeholder="+961 ..." className={fieldClass} />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-1 text-xs text-accent" />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>Company Name</label>
        <input id="company" name="company" required type="text" placeholder="Your business" className={fieldClass} />
        <ValidationError prefix="Company" field="company" errors={state.errors} className="mt-1 text-xs text-accent" />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project or equipment needs..."
          className={fieldClass}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-accent" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-accent group w-full !py-3.5 text-base disabled:pointer-events-none disabled:opacity-60"
      >
        {state.submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={16} className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
