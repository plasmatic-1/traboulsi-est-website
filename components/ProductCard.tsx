"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card group overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.model}`}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-contain p-6 transition-transform duration-500 ease-premium group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-end gap-1.5 bg-gradient-to-t from-primary-deep/92 via-primary-deep/20 to-transparent p-5 opacity-0 transition-opacity duration-300 ease-premium group-hover:opacity-100">
          <p className="font-heading text-sm font-semibold text-white">{product.name}</p>
          <p className="font-body text-xs text-white/70">Model: {product.model}</p>
          <span className="mt-2 inline-flex translate-y-1 items-center gap-1 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-primary opacity-0 transition-all duration-300 ease-premium group-hover:translate-y-0 group-hover:opacity-100">
            View Details <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="font-heading text-sm font-semibold text-ink">{product.name}</p>
        <p className="mt-1 text-xs text-ink/45">Model: {product.model}</p>
      </div>
    </div>
  );
}
