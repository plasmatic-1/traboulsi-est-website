"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { categories, categorySlugs, products, type Category } from "@/lib/products";

/**
 * The filter pills navigate rather than holding local state, so the URL, the
 * page heading and the visible grid can never disagree — and a filtered view
 * stays shareable and indexable.
 */
export default function ProductsClient({ initialCategory }: { initialCategory?: Category }) {
  const pathname = usePathname();

  // Derive the active category from the URL so it survives back/forward too.
  const activeFromPath = categories.find((c) => pathname === `/products/${categorySlugs[c]}`);
  const active: string = activeFromPath ?? initialCategory ?? "All";

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  const countFor = (c: string) =>
    c === "All" ? products.length : products.filter((p) => p.category === c).length;

  const hrefFor = (c: string) =>
    c === "All" ? "/products" : `/products/${categorySlugs[c as Category]}`;

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-5 mb-10 border-b border-line/70 bg-white/95 px-5 py-3 backdrop-blur-sm sm:-mx-8 sm:px-8">
        <nav aria-label="Product categories" className="flex flex-wrap items-center gap-2.5">
          {["All", ...categories].map((c) => {
            const isActive = active === c;
            return (
              <Link
                key={c}
                href={hrefFor(c)}
                scroll={false}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-heading text-sm font-medium transition-all duration-300 ease-premium ${
                  isActive
                    ? "border-primary bg-primary text-white shadow-cardHover"
                    : "border-line text-ink/65 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {c}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums ${
                    isActive ? "bg-white/20 text-white" : "bg-surface text-ink/45"
                  }`}
                >
                  {countFor(c)}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
