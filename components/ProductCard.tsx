"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card group overflow-hidden">
      <div className="relative h-56 w-full overflow-hidden bg-surface">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.model}`}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-end gap-2 bg-gradient-to-t from-primary/90 via-primary/15 to-transparent p-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
          <p className="font-heading text-sm font-semibold text-white">{product.name}</p>
          <p className="font-body text-xs text-white/80">Model: {product.model}</p>
          <span className="mt-1 inline-flex items-center gap-1 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-primary transition-transform duration-200 group-hover:scale-105">
            View Details <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="font-heading text-sm font-semibold text-ink">{product.name}</p>
        <p className="mt-0.5 text-xs text-ink/50">Model: {product.model}</p>
      </div>
    </div>
  );
}
