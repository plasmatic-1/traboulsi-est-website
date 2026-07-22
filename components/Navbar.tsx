"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
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
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-[border-color,box-shadow] duration-300 ${
        scrolled ? "border-line shadow-xs" : "border-transparent"
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-[height] duration-300 ease-premium ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.fullName}
            width={1255}
            height={1255}
            className={`w-auto object-contain transition-[height] duration-300 ease-premium ${
              scrolled ? "h-11 sm:h-12" : "h-14 sm:h-16"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`group relative px-3.5 py-2 font-heading text-sm font-medium transition-colors ${
                  active ? "text-primary" : "text-ink/70 hover:text-primary"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3.5 bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 ease-premium group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={siteConfig.phoneHref} className="btn-accent !px-4 !py-2.5 text-sm">
            <Phone size={15} /> {siteConfig.phone}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col bg-white md:hidden"
          >
            <div className="container-x flex flex-1 flex-col justify-between overflow-y-auto py-8">
              <div className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={l.href}
                      className={`flex items-center justify-between border-b border-line py-4 font-heading text-lg font-semibold ${
                        pathname === l.href ? "text-primary" : "text-ink"
                      }`}
                    >
                      {l.label}
                      <ArrowRight size={18} className="text-ink/30" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.a
                href={siteConfig.phoneHref}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: links.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="btn-accent mt-8 w-full"
              >
                <Phone size={16} /> {siteConfig.phone}
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
