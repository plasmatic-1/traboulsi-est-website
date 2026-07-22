import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductsClient from "../ProductsClient";
import { categories, categorySlugs, type Category } from "@/lib/products";

export function generateStaticParams() {
  return Object.values(categorySlugs).map((slug) => ({ slug }));
}

function categoryFromSlug(slug: string): Category | undefined {
  return categories.find((c) => categorySlugs[c] === slug);
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = categoryFromSlug(params.slug);
  return {
    title: category ?? "Products",
    description: category
      ? `Browse Traboulsi Est.'s ${category.toLowerCase()} equipment for restaurants, hotels, hospitals and supermarkets in Lebanon.`
      : undefined,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryFromSlug(params.slug);
  if (!category) notFound();

  return (
    <section className="container-x py-20 sm:py-28">
      <p className="section-label">Our Range</p>
      <h1 className="mb-12 max-w-2xl text-balance font-heading text-5xl font-bold tracking-tightest2 text-ink">
        {category}
      </h1>
      <ProductsClient initialCategory={category} />
    </section>
  );
}
