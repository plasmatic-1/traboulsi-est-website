import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { BranchCardFull } from "@/components/BranchCard";
import { branches } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Locations",
  description: "Visit Traboulsi Est. at either of our two branches in Lebanon — find addresses, phone numbers, opening hours, and directions.",
};

export default function LocationsPage() {
  return (
    <section className="container-x py-20 sm:py-28">
      <p className="section-label">Find Us</p>
      <h1 className="mb-4 max-w-2xl text-balance font-heading text-5xl font-bold tracking-tightest2 text-ink">
        Our Locations
      </h1>
      <p className="mb-14 max-w-xl leading-relaxed text-ink/55">
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
    </section>
  );
}
