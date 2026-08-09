import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ShieldCheck, Award, Users, Clock, Wrench, Phone, Mail, MapPin, Smartphone, Printer } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import { BranchCardCompact } from "@/components/BranchCard";
import { siteConfig } from "@/lib/siteConfig";
import { products, categories, categorySlugs } from "@/lib/products";
import { industries, clientGroups } from "@/lib/clients";
import { branches } from "@/lib/locations";
import { industryIcon } from "@/components/IndustryIcon";
import { WhatsAppIcon } from "@/components/WhatsApp";

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
      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-primary-deep">
        <Image
          src={siteConfig.heroImages[0]}
          alt="Commercial kitchen equipment by Traboulsi Est."
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/75 to-primary-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/65 via-primary-deep/20 to-transparent" />
        <div className="container-x relative py-24 text-white sm:py-32">
          <Reveal>
            <p className="section-label mb-5 !text-white/70">
              <span className="mr-2 inline-block h-px w-6 bg-accent/60 align-middle" />
              Traboulsi Est. for Trading &amp; Industry
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-2xl text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tightest2 sm:text-5xl lg:text-6xl">
              Commercial Kitchen Equipment for{" "}
              <span className="text-accent-light">Restaurants, Hotels &amp; Hospitals</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Since {siteConfig.founded}, Traboulsi Est. has supplied refrigeration, cooking and
              stainless steel equipment across Lebanon — trusted by restaurants, hospitals,
              bakeries and supermarkets for quality that lasts.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/products" className="btn-accent">
                View Products <ArrowRight size={16} />
              </Link>
              <Link href="#contact" className="btn-outline !border-white/25 !text-white hover:!border-white hover:!bg-white hover:!text-primary">
                Contact Us
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-12 flex flex-wrap gap-3">
              {trustStats.map((s) => (
                <span key={s.label} className="stat-chip">
                  <strong className="font-heading font-semibold text-white">{s.value}</strong> {s.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us — editorial numbered rows */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="section-label">Why Choose Us</p>
                <h2 className="max-w-md text-balance font-heading text-4xl font-bold text-ink">
                  A partner you can <span className="text-accent">rely on</span>
                </h2>
                <p className="mt-5 max-w-sm leading-relaxed text-ink/55">
                  Four decades of equipping Lebanon&apos;s kitchens, one business at a time.
                </p>
                <Link href="/about" className="btn-outline mt-8">
                  About Traboulsi Est. <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
          </div>

          <div>
            {whyUs.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 0.05}
                className="group flex items-start gap-6 border-b border-line py-7 first:pt-0 last:border-b-0 sm:gap-8"
              >
                <span className="section-num pt-1">0{i + 1}</span>
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs transition-colors duration-300 ease-premium group-hover:bg-accent">
                  <w.icon className="text-accent transition-colors duration-300 ease-premium group-hover:text-white" size={20} />
                </span>
                <div>
                  <h3 className="mb-1.5 font-heading text-lg font-semibold text-ink">{w.title}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-ink/55">{w.copy}</p>
                </div>
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
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-mist to-surface">
                      <span className="absolute left-5 top-4 z-10 font-heading text-sm font-semibold tabular-nums text-primary/30 transition-colors duration-300 ease-premium group-hover:text-accent">
                        0{i + 1}
                      </span>
                      {sample && (
                        <Image
                          src={sample.image}
                          alt={cat}
                          fill
                          className="object-contain p-8 transition-transform duration-500 ease-premium group-hover:scale-[1.06]"
                        />
                      )}
                    </div>
                    <div className="flex items-center justify-between border-t border-line/70 p-5">
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-ink">{cat}</h3>
                        <p className="mt-1 text-sm text-ink/50">{count} products</p>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink/40 transition-all duration-300 ease-premium group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                        <ArrowRight size={15} />
                      </span>
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
              <Reveal key={p.id} delay={i * 0.06} className="h-full">
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
            <div className="marquee -mx-5 px-5 sm:-mx-8 sm:px-8">
              <div className="marquee-track py-1">
                {[...trustedClients, ...trustedClients].map((c, i) => (
                  <span key={`${c}-${i}`} className="stat-chip shrink-0 !py-1.5 !text-sm">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/clients"
              className="group mt-7 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-accent transition-colors hover:text-white"
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

      {/* See Our Equipment at Work — videos self-hosted, playing directly on the site */}
      <section className="relative overflow-hidden bg-primary-deep py-24 sm:py-28">
        <div className="bg-dots-dark absolute inset-0" />
        <div className="container-x relative">
          <Reveal>
            <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="section-label">Projects &amp; Installations</p>
                <h2 className="max-w-xl text-balance font-heading text-4xl font-bold text-white">
                  See our equipment <span className="text-accent-light">at work</span>
                </h2>
                <p className="mt-5 max-w-lg leading-relaxed text-white/60">
                  Real projects, filmed on site — from complete bakery fit-outs to supermarket
                  refrigeration. This is the equipment we design, manufacture, install and maintain.
                </p>
              </div>
              <Link href="/#contact" className="btn-accent shrink-0">
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          {/*
            Uniform gallery: the three source clips have different native aspect
            ratios (two 9:16, one 16:9), so every card gets an identical 4/5 box
            and object-cover fills it — equal size, no letterboxing.
          */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.videos.map((v, i) => (
              <Reveal key={v.src} delay={i * 0.08} className="h-full">
                <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-cardHover transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-white/25">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-primary-deep">
                    <video
                      controls
                      playsInline
                      preload="none"
                      poster={v.poster}
                      aria-label={`${v.title} — ${v.caption}`}
                      className="absolute inset-0 h-full w-full object-cover"
                    >
                      <source src={v.src} type="video/mp4" />
                      Your browser does not support embedded video.
                    </video>
                  </div>
                  <figcaption className="flex flex-1 flex-col border-t border-white/10 p-6">
                    <h3 className="font-heading text-base font-semibold text-white">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{v.caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <div className="mt-12 flex justify-center">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-white/60 transition-colors hover:text-white"
              >
                More projects on Facebook
                <ArrowUpRight size={15} className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
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

      {/* Contact — split panel: dark info side + form side */}
      <section id="contact" className="bg-surface py-24 sm:py-28">
        <div className="container-x">
          <Reveal>
            <p className="section-label">Get In Touch</p>
            <h2 className="mb-12 max-w-xl text-balance font-heading text-4xl font-bold text-ink">
              Ready to equip <span className="text-accent">your business?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-cardHover">
              <div className="grid lg:grid-cols-[1fr_1.35fr]">
                {/* Info panel */}
                <div className="relative overflow-hidden bg-primary-deep p-8 text-white sm:p-10">
                  <div className="bg-dots-dark absolute inset-0" />
                  <div className="relative">
                    <h3 className="font-heading text-2xl font-bold">Talk to our team</h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
                      Call, email, or send a message — we&apos;ll help you spec the right equipment
                      for your space and budget.
                    </p>

                    <div className="mt-10 flex flex-col gap-5 text-sm">
                      <a href={siteConfig.phoneHref} className="group flex items-center gap-3.5 text-white/80 transition-colors hover:text-white">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors duration-300 ease-premium group-hover:border-accent group-hover:bg-accent">
                          <Phone size={16} />
                        </span>
                        {siteConfig.phone}
                      </a>
                      <a href={siteConfig.mobileHref} className="group flex items-center gap-3.5 text-white/80 transition-colors hover:text-white">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors duration-300 ease-premium group-hover:border-accent group-hover:bg-accent">
                          <Smartphone size={16} />
                        </span>
                        {siteConfig.mobile}
                      </a>
                      <a
                        href={siteConfig.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3.5 text-white/80 transition-colors hover:text-white"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors duration-300 ease-premium group-hover:border-[#25D366] group-hover:bg-[#25D366]">
                          <WhatsAppIcon size={16} />
                        </span>
                        WhatsApp {siteConfig.whatsapp}
                      </a>
                      <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3.5 text-white/80 transition-colors hover:text-white">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors duration-300 ease-premium group-hover:border-accent group-hover:bg-accent">
                          <Mail size={16} />
                        </span>
                        {siteConfig.email}
                      </a>
                      <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3.5 text-white/80 transition-colors hover:text-white">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors duration-300 ease-premium group-hover:border-accent group-hover:bg-accent">
                          <MapPin size={16} />
                        </span>
                        {siteConfig.address}
                      </a>
                    </div>

                    <p className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40">
                      Fax: {siteConfig.fax} · Branches in Deir el Zahrani &amp; Khalde
                    </p>
                  </div>
                </div>

                {/* Form panel */}
                <div className="p-8 sm:p-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
