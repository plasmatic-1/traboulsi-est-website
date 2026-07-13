import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { industryIcon } from "@/components/IndustryIcon";
import { industries } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Traboulsi Est. equips restaurants, hotels, hospitals, supermarkets, pastry shops, bakeries, cafes and commercial kitchens across Lebanon.",
};

export default function IndustriesPage() {
  return (
    <section className="container-x py-16 sm:py-20">
      <p className="section-label">Who We Serve</p>
      <h1 className="mb-10 max-w-2xl text-balance font-heading text-4xl font-bold text-ink">
        Industries We Serve
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, i) => {
          const Icon = industryIcon(ind.icon);
          return (
            <Reveal key={ind.name} delay={i * 0.05} className="card p-7">
              <Icon className="mb-4 text-accent" size={28} />
              <h3 className="mb-2 font-heading text-lg font-semibold text-ink">{ind.name}</h3>
              <p className="text-sm text-ink/60">{ind.blurb}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
