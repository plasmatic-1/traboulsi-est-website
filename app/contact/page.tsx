import type { Metadata } from "next";
import { Facebook } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { BranchCardFull } from "@/components/BranchCard";
import { branches } from "@/lib/locations";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Traboulsi Est. — reach either of our two branches directly, or send a general inquiry.",
};

export default function ContactPage() {
  return (
    <section className="container-x py-20 sm:py-28">
      <p className="section-label">Get In Touch</p>
      <h1 className="mb-4 max-w-2xl text-balance font-heading text-5xl font-bold tracking-tightest2 text-ink">
        Contact Us
      </h1>
      <p className="mb-7 max-w-xl leading-relaxed text-ink/55">
        Choose whichever branch is more convenient for you, or send a general message below and
        we&apos;ll route it to the right team.
      </p>

      <a
        href={siteConfig.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="group mb-14 inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2.5 text-sm font-medium text-ink/65 transition-all duration-300 ease-premium hover:border-primary/40 hover:text-primary"
      >
        <Facebook size={16} className="transition-transform duration-300 ease-premium group-hover:scale-110" />
        Follow us on Facebook
      </a>

      <div className="mb-20 grid gap-8 lg:grid-cols-2">
        {branches.map((b, i) => (
          <Reveal key={b.id} delay={i * 0.1}>
            <BranchCardFull branch={b} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mx-auto max-w-2xl">
          <p className="section-label">Or Send A Message</p>
          <h2 className="mb-9 font-heading text-3xl font-bold text-ink">General Inquiry</h2>
          <div className="card p-7">
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
