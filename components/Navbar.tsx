"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About Us" },
  { href: "/clients", label: "Our Clients" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.fullName}
            width={170}
            height={52}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-heading text-sm font-medium transition-colors hover:text-primary ${
                pathname === l.href ? "text-primary" : "text-ink/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={siteConfig.phoneHref} className="btn-outline !px-4 !py-2 text-sm">
            <Phone size={15} /> {siteConfig.phone}
          </a>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="text-ink md:hidden" aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white md:hidden">
          <div className="container-x flex flex-col gap-4 py-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="font-heading text-base font-medium text-ink">
                {l.label}
              </Link>
            ))}
            <a href={siteConfig.phoneHref} className="btn-primary mt-2">
              <Phone size={16} /> {siteConfig.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
