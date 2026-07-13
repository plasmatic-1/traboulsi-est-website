import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.fullName}
            width={170}
            height={52}
            className="mb-4 h-11 w-auto object-contain brightness-0 invert"
          />
          <p className="max-w-xs text-sm text-white/70">
            Trusted Lebanese supplier of commercial kitchen, refrigeration and stainless steel
            equipment since {siteConfig.founded} — serving restaurants, hotels, hospitals,
            bakeries and supermarkets across Lebanon.
          </p>
          <a
            href={siteConfig.facebook}
            target="_blank"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <Facebook size={16} /> Follow us on Facebook
          </a>
        </div>

        <div>
          <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Quick Links
          </p>
          <div className="flex flex-col gap-2 text-sm text-white/80">
            <Link href="/products" className="hover:text-white">Products</Link>
            <Link href="/industries" className="hover:text-white">Industries We Serve</Link>
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="/clients" className="hover:text-white">Our Clients</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Contact
          </p>
          <p className="flex items-start gap-2 text-sm text-white/80">
            <Phone size={16} className="mt-0.5 shrink-0" /> {siteConfig.phone} / {siteConfig.mobile}
          </p>
          <p className="mt-2 flex items-start gap-2 text-sm text-white/80">
            <Mail size={16} className="mt-0.5 shrink-0" /> {siteConfig.email}
          </p>
          <p className="mt-2 flex items-start gap-2 text-sm text-white/80">
            <MapPin size={16} className="mt-0.5 shrink-0" /> {siteConfig.address}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {siteConfig.fullName}. All Rights Reserved.
      </div>
    </footer>
  );
}
