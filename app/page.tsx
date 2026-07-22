import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Users, Clock, Wrench, Phone, Mail, MapPin, Smartphone, Printer } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import { BranchCardCompact } from "@/components/BranchCard";
import { siteConfig } from "@/lib/siteConfig";
import { products, categories, categorySlugs } from "@/lib/products";
import { industries, clientGroups } from "@/lib/clients";
import { branches } from "@/lib/locations";
import { industryIcon } from "@/components/IndustryIcon";

const whyUs = [
  { icon: ShieldCheck, title: "Professional Supplier", copy: "A dedicated team with deep knowledge of commercial kitchen and refrigeration equipment." },
  { icon: Award, title: "High-Quality Equipment", copy: "Products built with the latest industrial technology for long-term, reliable performance." },
  { icon: Users, title: "Trusted by Leading Businesses", copy: "Serving restaurants, hotels, hospitals, bakeries and supermarkets across Lebanon." },
  { icon: Clock, title: "Since 1982", copy: `Over four decades of experience supplying Lebanon's hospitality and food industry.` },
  { icon: Wrench, title: "Reliable After-Sales Support", copy: "We stand behind every installation with responsive service and support." },
];

export default function HomePage() {
  const featured = categories.flatMap((cat) => products.filter((p) => p.category === cat).slice(0, 2));
  const trustedClients = clientGroups.flatMap((g) => g.clients).slice(0, 18);
  const trustStats = [
    { value: `${siteConfig.founded}`, label: "Established" },
    { value: "40+", label: "Years of Experience" },
    { value: "1000+", label: "Products Delivered" },
    { value: "6", label: "Sectors Served" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-primary-deep">
        <Image
          src={siteConfig.heroImages[0]}
          alt="Commercial kitchen equipment by Traboulsi Est."
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/75 to-primary-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/60 via-transparent to-transparent" />
        <div className="container-x relative py-28 text-white sm:py-36">
          <Reveal>
            <p className="section-label mb-5 !text-white/70">
              <span className="mr-2 inline-block h-px w-6 bg-accent/60 align-middle" />
              Traboulsi Est. for Trading &amp; Industry
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl text-balance font-heading text-5xl font-bold leading-[1.05] tracking-tightest2 sm:text-6xl lg:text-7xl">
              Commercial Kitchen Equipment for Restaurants, Hotels &amp; Hospitals
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
              Since {siteConfig.founded}, Traboulsi Est. has supplied refrigeration, cooking and
              stainless steel equipment across Lebanon — trusted by restaurants, hospitals,
              bakeries and supermarkets for quality that lasts.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/products" className="btn-accent">
                View Products <ArrowRight size={16} />
              </Link>
              <Link href="#contact" className="btn-outline !border-white/25 !text-white hover:!border-white hover:!bg-white hover:!text-primary">
                Contact Us
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-14 flex flex-wrap gap-3">
              {trustStats.map((s) => (
                <span key={s.label} className="stat-chip">
                  <strong className="font-heading font-semibold text-white">{s.value}</strong> {s.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface py-24">
        <div className="container-x">
          <Reveal>
            <p className="section-label">Why Choose Us</p>
            <h2 className="mb-14 max-w-xl text-balance font-heading text-4xl font-bold text-ink">
              A partner you can rely on
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06} className="card p-7">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <w.icon className="text-accent" size={22} />
                </span>
                <h3 className="mb-2 font-heading text-base font-semibold text-ink">{w.title}</h3>
                <p className="text-sm leading-relaxed text-ink/55">{w.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <div className="mb-14 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="section-label">Our Range</p>
                <h2 className="max-w-xl text-balance font-heading text-4xl font-bold text-ink">
                  Product Categories
                </h2>
              </div>
              <Link href="/products" className="btn-outline shrink-0">
                Browse All Products <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {categories.map((cat, i) => {
              const sample = products.find((p) => p.category === cat);
              const count = products.filter((p) => p.category === cat).length;
              return (
                <Reveal key={cat} delay={i * 0.08}>
                  <Link href={`/products/${categorySlugs[cat]}`} className="card group block overflow-hidden">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                      {sample && (
                        <Image
                          src={sample.image}
                          alt={cat}
                          fill
                          className="object-contain p-8 transition-transform duration-500 ease-premium group-hover:scale-[1.06]"
                        />
                      )}
                    </div>
                    <div className="flex items-center justify-between p-5">
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-ink">{cat}</h3>
                        <p className="mt-1 text-sm text-ink/50">{count} products</p>
                      </div>
                      <ArrowRight
                        size={18}
                        className="shrink-0 text-ink/30 transition-all duration-300 ease-premium group-hover:translate-x-1 group-hover:text-accent"
                      />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-surface py-24">
        <div className="container-x">
          <Reveal>
            <p className="section-label">A Closer Look</p>
            <h2 className="mb-14 max-w-xl text-balance font-heading text-4xl font-bold text-ink">
              Featured Equipment
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust — real numbers and real client names, no fabricated reviews */}
      <section className="bg-primary-deep py-24">
        <div className="container-x">
          <Reveal>
            <p className="section-label !text-accent">Trusted Across Lebanon</p>
            <h2 className="mb-14 max-w-xl text-balance font-heading text-4xl font-bold text-white">
              Equipping Lebanese businesses since {siteConfig.founded}
            </h2>
          </Reveal>

          <div className="mb-16 grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {trustStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="py-6 sm:py-0 sm:pl-8 first:sm:pl-0">
                <p className="font-heading text-4xl font-bold tabular-nums text-white sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-white/50">{s.label}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Among the businesses that trust us
            </p>
            <div className="flex flex-wrap gap-2.5">
              {trustedClients.map((c) => (
                <span key={c} className="stat-chip !py-1.5 !text-sm">
                  {c}
                </span>
              ))}
            </div>
            <Link
              href="/clients"
              className="group mt-6 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-accent transition-colors hover:text-white"
            >
              See all our clients
              <ArrowRight size={15} className="transition-transform duration-300 ease-premium group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <p className="section-label">Who We Serve</p>
            <h2 className="mb-14 max-w-xl text-balance font-heading text-4xl font-bold text-ink">
              Industries We Serve
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => {
              const Icon = industryIcon(ind.icon);
              return (
                <Reveal key={ind.name} delay={i * 0.05} className="card group p-7 text-center">
                  <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 ease-premium group-hover:bg-accent/10">
                    <Icon className="text-primary transition-colors duration-300 ease-premium group-hover:text-accent" size={22} />
                  </span>
                  <p className="font-heading text-sm font-semibold text-ink">{ind.name}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Two Locations */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <p className="section-label">Now In Two Places</p>
            <h2 className="mb-14 max-w-xl text-balance font-heading text-4xl font-bold text-ink">
              Serving Lebanon from Two Locations
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {branches.map((b, i) => (
              <Reveal key={b.id} delay={i * 0.1}>
                <BranchCardCompact branch={b} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact — embedded directly, no click-through needed */}
      <section id="contact" className="bg-surface py-24">
        <div className="container-x">
          <Reveal>
            <p className="section-label">Get In Touch</p>
            <h2 className="mb-12 max-w-xl text-balance font-heading text-4xl font-bold text-ink">
              Ready to equip your business?
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto max-w-2xl">
            <div className="card p-7">
              <ContactForm />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-sm text-ink/70">
                <Phone size={17} className="shrink-0 text-accent" />
                <span><span className="text-ink/50">Tel:</span> <a href={siteConfig.phoneHref} className="hover:text-primary">{siteConfig.phone}</a></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink/70">
                <Smartphone size={17} className="shrink-0 text-accent" />
                <span><span className="text-ink/50">Mobile:</span> <a href={siteConfig.mobileHref} className="hover:text-primary">{siteConfig.mobile}</a></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink/70">
                <Printer size={17} className="shrink-0 text-accent" />
                <span><span className="text-ink/50">Fax:</span> <a href={siteConfig.faxHref} className="hover:text-primary">{siteConfig.fax}</a></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink/70">
                <Mail size={17} className="shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">{siteConfig.email}</a>
              </div>
              <a
                href={siteConfig.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-ink/70 hover:text-primary sm:col-span-2"
              >
                <MapPin size={17} className="mt-0.5 shrink-0 text-accent" />
                {siteConfig.address}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
