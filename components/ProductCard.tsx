"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { WhatsAppIcon, whatsappQuoteHref } from "@/components/WhatsApp";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      {/* Every card uses the same fixed 4/3 frame so the grid stays aligned.
          Catalogue cutouts are letterboxed with padding; lifestyle photography
          from the company's own posts fills the frame edge-to-edge. */}
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden ${
          product.lifestyle ? "bg-primary-deep" : "bg-gradient-to-b from-white to-surface"
        }`}
      >
        <Image
          src={product.image}
          alt={`${product.name} — ${product.model}`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className={`transition-transform duration-500 ease-premium group-hover:scale-[1.06] ${
            product.lifestyle ? "object-cover" : "object-contain p-6"
          }`}
        />
        <div className="absolute inset-0 flex flex-col items-start justify-end gap-1.5 bg-gradient-to-t from-primary-deep/92 via-primary-deep/25 to-transparent p-5 opacity-0 transition-opacity duration-300 ease-premium group-hover:opacity-100">
          <p className="font-heading text-sm font-semibold text-white">{product.name}</p>
          <p className="font-body text-xs text-white/70">Model: {product.model}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col border-t border-line/70 p-5">
        <h3 className="font-heading text-sm font-semibold leading-snug text-ink">{product.name}</h3>
        <p className="mt-1.5 inline-flex w-fit items-center rounded-md bg-primary/[0.06] px-2 py-0.5 font-body text-[11px] font-medium tracking-wide text-primary/80">
          {product.model}
        </p>
        <a
          href={whatsappQuoteHref(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Request a quote for ${product.name} on WhatsApp`}
          className="mt-4 inline-flex items-center gap-1.5 font-heading text-xs font-semibold text-ink/45 transition-colors duration-300 ease-premium hover:text-[#128C4A]"
        >
          <WhatsAppIcon size={13} className="shrink-0" />
          Request a Quote
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  );
}
