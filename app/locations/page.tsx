import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { BranchCardFull } from "@/components/BranchCard";
import { branches, bothBranchesMapEmbed } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Locations",
  description: "Visit Traboulsi Est. at either of our two branches in Lebanon — find addresses, phone numbers, opening hours, and directions.",
};

export default function LocationsPage() {
  return (
    <section className="container-x py-16 sm:py-20">
      <p className="section-label">Find Us</p>
      <h1 className="mb-4 max-w-2xl text-balance font-heading text-4xl font-bold text-ink">
        Our Locations
      </h1>
      <p className="mb-12 max-w-xl text-ink/60">
        Traboulsi Est. now serves Lebanon from two branches. Visit whichever is closer, or reach
        out to either one directly.
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        {branches.map((b, i) => (
          <Reveal key={b.id} delay={i * 0.1}>
            <BranchCardFull branch={b} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 h-96 overflow-hidden rounded-lg border border-line">
          <iframe
            src={bothBranchesMapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Both Traboulsi Est. branch locations"
          />
        </div>
      </Reveal>
    </section>
  );
}
