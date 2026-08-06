"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { categories, products, type Category } from "@/lib/products";

export default function ProductsClient({ initialCategory }: { initialCategory?: Category }) {
  const [active, setActive] = useState<string>(initialCategory ?? "All");

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  const countFor = (c: string) =>
    c === "All" ? products.length : products.filter((p) => p.category === c).length;

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-5 mb-10 border-b border-line/70 bg-white/95 px-5 py-3 backdrop-blur-sm sm:-mx-8 sm:px-8">
        <div className="flex flex-wrap items-center gap-2.5">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-heading text-sm font-medium transition-all duration-300 ease-premium ${
                active === c
                  ? "border-primary bg-primary text-white shadow-cardHover"
                  : "border-line text-ink/65 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {c}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums ${
                  active === c ? "bg-white/20 text-white" : "bg-surface text-ink/45"
                }`}
              >
                {countFor(c)}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
