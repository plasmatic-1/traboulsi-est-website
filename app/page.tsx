import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Users, Clock, Wrench, Phone, Mail, MapPin, Smartphone, Printer } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import { products, categories, categorySlugs } from "@/lib/products";
import { industries } from "@/lib/clients";
import { industryIcon } from "@/components/IndustryIcon";

const whyUs = [
  { icon: ShieldCheck, title: "Professional Supplier", copy: "A dedicated team with deep knowledge of commercial kitchen and refrigeration equipment." },
  { icon: Award, title: "High-Quality Equipment", copy: "Products built with the latest industrial technology for long-term, reliable performance." },
  { icon: Users, title: "Trusted by Leading Businesses", copy: "Serving restaurants, hotels, hospitals, bakeries and supermarkets across Lebanon." },
  { icon: Clock, title: "Since 1982", copy: `Over four decades of experience supplying Lebanon's hospitality and food industry.` },
  { icon: Wrench, title: "Reliable After-Sales Support", copy: "We stand behind every installation with responsive service and support." },
];

export default function HomePage() {
  const featured = categories.map((cat) => products.find((p) => p.category === cat)).filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <Image
          src={siteConfig.heroImages[0]}
          alt="Commercial kitchen equipment by Traboulsi Est."
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-dark/80" />
        <div className="container-x relative py-20 text-white">
          <Reveal>
            <p className="section-label !text-white/80">Traboulsi Est. for Trading &amp; Industry</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl">
              Commercial Kitchen Equipment for Restaurants, Hotels, Hospitals &amp; Supermarkets
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-white/85">
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
              <Link href="#contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface py-20">
        <div className="container-x">
          <Reveal>
            <p className="section-label">Why Choose Us</p>
            <h2 className="mb-12 max-w-xl text-balance font-heading text-3xl font-bold text-ink">
              A partner you can rely on
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06} className="card p-6">
                <w.icon className="mb-4 text-accent" size={26} />
                <h3 className="mb-2 font-heading text-base font-semibold text-ink">{w.title}</h3>
                <p className="text-sm text-ink/60">{w.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="section-label">Our Range</p>
                <h2 className="max-w-xl text-balance font-heading text-3xl font-bold text-ink">
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
                    <div className="relative h-52 w-full overflow-hidden bg-surface">
                      {sample && (
                        <Image
                          src={sample.image}
                          alt={cat}
                          fill
                          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-semibold text-ink">{cat}</h3>
                      <p className="mt-1 text-sm text-ink/50">{count} products</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-surface py-20">
        <div className="container-x">
          <Reveal>
            <p className="section-label">A Closer Look</p>
            <h2 className="mb-12 max-w-xl text-balance font-heading text-3xl font-bold text-ink">
              Featured Equipment
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => p && (
              <Reveal key={p.id} delay={i * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <p className="section-label">Who We Serve</p>
            <h2 className="mb-12 max-w-xl text-balance font-heading text-3xl font-bold text-ink">
              Industries We Serve
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => {
              const Icon = industryIcon(ind.icon);
              return (
                <Reveal key={ind.name} delay={i * 0.05} className="card p-6 text-center">
                  <Icon className="mx-auto mb-3 text-primary" size={28} />
                  <p className="font-heading text-sm font-semibold text-ink">{ind.name}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact — embedded directly, no click-through needed */}
      <section id="contact" className="bg-surface py-20">
        <div className="container-x">
          <Reveal>
            <p className="section-label">Get In Touch</p>
            <h2 className="mb-10 max-w-xl text-balance font-heading text-3xl font-bold text-ink sm:text-4xl">
              Ready to equip your business?
            </h2>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal delay={0.1}>
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
                  <span><span className="text-ink/50">Fax:</span> {siteConfig.fax}</span>
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

            <Reveal delay={0.18}>
              <div className="h-80 overflow-hidden rounded-lg border border-line lg:h-full">
                <iframe
                  src={siteConfig.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Traboulsi Est. location map"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
