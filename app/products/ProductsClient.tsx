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

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-2.5">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-5 py-2.5 font-heading text-sm font-medium transition-all duration-300 ease-premium ${
              active === c
                ? "border-primary bg-primary text-white shadow-cardHover"
                : "border-line text-ink/65 hover:border-primary/40 hover:text-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
