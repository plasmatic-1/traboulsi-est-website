import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ShieldCheck, Factory, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us",
  description: "Traboulsi Est. for Trading & Industry — a trusted Lebanese supplier of commercial kitchen equipment since 1982, based in Deir el Zahrani.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-x py-16 sm:py-20">
        <p className="section-label">About Us</p>
        <h1 className="max-w-2xl text-balance font-heading text-4xl font-bold text-ink">
          A trusted name in commercial equipment since {siteConfig.founded}
        </h1>
      </section>

      <section className="container-x grid items-center gap-10 pb-20 lg:grid-cols-2">
        <Reveal>
          <div className="relative h-72 overflow-hidden rounded-lg sm:h-96">
            <Image
              src={siteConfig.aboutImage}
              alt="Traboulsi Est. equipment"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-4 text-ink/70">
            {siteConfig.fullName} is located in Deir el Zahrani, Lebanon, and has been serving the
            local and international market since {siteConfig.founded}. We are a highly experienced
            company in manufacturing refrigerators and grill equipment, owned and managed by
            people with a lifetime of experience in industry and trade.
          </p>
          <p className="mb-4 text-ink/70">
            We produce cooling equipment such as refrigerators and freezers for supermarkets,
            butcheries, kitchens and hospitals, alongside industrial ovens for pastries and sweets,
            grills, nut roasters and croissant heaters — built to meet the needs of Lebanon&apos;s
            well-known pastry and bakery traditions.
          </p>
          <p className="text-ink/70">
            Our stainless steel equipment range includes work tables, sinks, kitchen cupboards,
            hoods and aspirators, dishwashing machines, and a wide set of processing equipment —
            slicers, choppers, peelers and mincers — for a fully equipped commercial kitchen.
          </p>
        </Reveal>
      </section>

      <section className="bg-surface py-20">
        <div className="container-x grid gap-6 sm:grid-cols-3">
          <Reveal className="card p-7">
            <Factory className="mb-4 text-accent" size={28} />
            <h3 className="mb-2 font-heading text-lg font-semibold text-ink">Industrial Expertise</h3>
            <p className="text-sm text-ink/60">Decades of manufacturing experience in refrigeration and heating equipment.</p>
          </Reveal>
          <Reveal delay={0.08} className="card p-7">
            <ShieldCheck className="mb-4 text-accent" size={28} />
            <h3 className="mb-2 font-heading text-lg font-semibold text-ink">Quality & Reliability</h3>
            <p className="text-sm text-ink/60">Equipment built with the latest technology for long-term, efficient performance.</p>
          </Reveal>
          <Reveal delay={0.16} className="card p-7">
            <HeartHandshake className="mb-4 text-accent" size={28} />
            <h3 className="mb-2 font-heading text-lg font-semibold text-ink">Customer Service</h3>
            <p className="text-sm text-ink/60">Reliable after-sales support for every business we equip.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
