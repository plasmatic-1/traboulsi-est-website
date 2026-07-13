"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const FORM_ID = "mgojglkl";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <div className="card flex flex-col items-center justify-center gap-3 p-10 text-center">
        <CheckCircle2 className="text-primary" size={40} />
        <p className="font-heading text-lg font-semibold text-ink">Message sent</p>
        <p className="text-sm text-ink/60">Thank you for reaching out. Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4 p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/80">Name *</label>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="w-full rounded-md border border-line px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-xs text-accent" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink/80">Email *</label>
          <input
            id="email"
            name="email"
            required
            type="email"
            className="w-full rounded-md border border-line px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-accent" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink/80">Phone *</label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            className="w-full rounded-md border border-line px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-1 text-xs text-accent" />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink/80">Company Name *</label>
          <input
            id="company"
            name="company"
            required
            type="text"
            className="w-full rounded-md border border-line px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          <ValidationError prefix="Company" field="company" errors={state.errors} className="mt-1 text-xs text-accent" />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink/80">Subject *</label>
        <input
          id="subject"
          name="subject"
          required
          type="text"
          className="w-full rounded-md border border-line px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
        <ValidationError prefix="Subject" field="subject" errors={state.errors} className="mt-1 text-xs text-accent" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/80">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-line px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-accent" />
      </div>

      <button type="submit" disabled={state.submitting} className="btn-primary justify-self-start disabled:opacity-60">
        {state.submitting ? (
          <>
            <Loader2 size={15} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Submit Message <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}
