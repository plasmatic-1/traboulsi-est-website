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
    <section className="container-x py-20 sm:py-28">
      <p className="section-label">Who We Serve</p>
      <h1 className="mb-12 max-w-2xl text-balance font-heading text-5xl font-bold tracking-tightest2 text-ink">
        Industries We Serve
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, i) => {
          const Icon = industryIcon(ind.icon);
          return (
            <Reveal key={ind.name} delay={i * 0.05} className="card group p-7">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 ease-premium group-hover:bg-accent group-hover:text-white">
                <Icon className="text-accent transition-colors duration-300 ease-premium group-hover:text-white" size={22} />
              </span>
              <h3 className="mb-2 font-heading text-lg font-semibold text-ink">{ind.name}</h3>
              <p className="text-sm leading-relaxed text-ink/55">{ind.blurb}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
