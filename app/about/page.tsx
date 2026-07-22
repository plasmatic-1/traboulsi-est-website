import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { LineChart, Award, Globe2, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us",
  description: "Traboulsi Est. for Trading & Industry — a trusted Lebanese supplier of commercial kitchen equipment since 1982, based in Deir el Zahrani.",
};

const features = [
  { icon: LineChart, label: "In-house Manufacturing" },
  { icon: Award, label: "Industrial-grade Quality" },
  { icon: Globe2, label: "Local & International Markets" },
  { icon: Wrench, label: "Lifetime of Experience" },
];

const stats = [
  { value: `${siteConfig.founded}`, label: "Established" },
  { value: "40+", label: "Years of Experience" },
  { value: "1000+", label: "Products Delivered" },
  { value: "6", label: "Sectors Served" },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-x py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
          <Reveal>
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-cardHover sm:h-[440px]">
              <Image
                src={siteConfig.aboutImage}
                alt={`${siteConfig.fullName} storefront`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 right-0 rounded-tl-2xl bg-accent px-8 py-6 text-white">
                <p className="font-heading text-4xl font-bold leading-none">40+</p>
                <p className="mt-1 text-sm text-white/90">Years of Industry</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="section-label">About Us</p>
            <h1 className="mb-6 max-w-lg text-balance font-heading text-4xl font-bold tracking-tightest2 text-ink sm:text-5xl">
              Manufacturing refrigerators &amp; grills since {siteConfig.founded}
            </h1>
            <p className="mb-4 leading-relaxed text-ink/65">
              {siteConfig.fullName} is a highly advanced company experienced in manufacturing
              refrigerators and grill equipment, owned and managed by people with a lifetime of
              experience in industry and trade. Located in Deir el Zahrani, Lebanon.
            </p>
            <p className="mb-9 leading-relaxed text-ink/65">
              Since {siteConfig.founded}, we&apos;ve developed our factory to fulfill the growing
              local and international demand for industrial heating and cooling equipment —
              distinguished by the latest industrial technologies and quality for long-term
              performance and efficient functioning.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <f.icon className="text-accent" size={20} />
                  </span>
                  <p className="font-heading text-sm font-semibold text-ink">{f.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-primary-deep py-20">
        <div className="container-x grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="py-6 text-center sm:py-0 sm:pl-8 sm:text-left first:sm:pl-0">
              <p className="font-heading text-4xl font-bold tabular-nums text-white sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-white/50">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
