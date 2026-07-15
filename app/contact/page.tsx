import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { BranchCardFull } from "@/components/BranchCard";
import { branches } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Traboulsi Est. — reach either of our two branches directly, or send a general inquiry.",
};

export default function ContactPage() {
  return (
    <section className="container-x py-16 sm:py-20">
      <p className="section-label">Get In Touch</p>
      <h1 className="mb-4 max-w-2xl text-balance font-heading text-4xl font-bold text-ink">
        Contact Us
      </h1>
      <p className="mb-12 max-w-xl text-ink/60">
        Choose whichever branch is more convenient for you, or send a general message below and
        we&apos;ll route it to the right team.
      </p>

      <div className="mb-16 grid gap-8 lg:grid-cols-2">
        {branches.map((b, i) => (
          <Reveal key={b.id} delay={i * 0.1}>
            <BranchCardFull branch={b} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mx-auto max-w-2xl">
          <p className="section-label">Or Send A Message</p>
          <h2 className="mb-8 font-heading text-2xl font-bold text-ink">General Inquiry</h2>
          <div className="card p-7">
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
