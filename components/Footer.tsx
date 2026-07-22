import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="relative bg-primary-deep text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.fullName}
            width={1255}
            height={1255}
            className="mb-5 h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Trusted Lebanese supplier of commercial kitchen, refrigeration and stainless steel
            equipment since {siteConfig.founded} — serving restaurants, hotels, hospitals,
            bakeries and supermarkets across Lebanon.
          </p>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Traboulsi Est. on Facebook"
            className="group mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:text-white"
          >
            <Facebook size={16} />
          </a>
        </div>

        <div>
          <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Quick Links
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/65">
            <Link href="/products" className="w-fit transition-colors hover:text-white">Products</Link>
            <Link href="/industries" className="w-fit transition-colors hover:text-white">Industries We Serve</Link>
            <Link href="/locations" className="w-fit transition-colors hover:text-white">Locations</Link>
            <Link href="/about" className="w-fit transition-colors hover:text-white">About Us</Link>
            <Link href="/clients" className="w-fit transition-colors hover:text-white">Our Clients</Link>
            <Link href="/#contact" className="w-fit transition-colors hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Contact
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/65">
            <a href={siteConfig.phoneHref} className="flex items-start gap-2.5 transition-colors hover:text-white">
              <Phone size={15} className="mt-0.5 shrink-0 text-accent" /> {siteConfig.phone}
            </a>
            <a href={siteConfig.mobileHref} className="flex items-start gap-2.5 transition-colors hover:text-white">
              <Phone size={15} className="mt-0.5 shrink-0 text-accent" /> {siteConfig.mobile}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-2.5 transition-colors hover:text-white">
              <Mail size={15} className="mt-0.5 shrink-0 text-accent" /> {siteConfig.email}
            </a>
            <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 transition-colors hover:text-white">
              <MapPin size={15} className="mt-0.5 shrink-0 text-accent" /> {siteConfig.address}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {siteConfig.fullName}. All Rights Reserved.
      </div>
    </footer>
  );
}
