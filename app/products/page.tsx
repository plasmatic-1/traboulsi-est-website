import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Traboulsi Est.'s full range of commercial refrigeration, cooking and stainless steel equipment for restaurants, hotels, hospitals, bakeries and supermarkets.",
};

export default function ProductsPage() {
  return (
    <section className="relative">
      <div className="bg-grid bg-grid-fade absolute inset-x-0 top-0 h-72" />
      <div className="container-x relative py-20 sm:py-24">
        <p className="section-label">Our Range</p>
        <h1 className="max-w-2xl text-balance font-heading text-4xl font-bold tracking-tightest2 text-ink sm:text-5xl">
          Products
        </h1>
        <p className="mb-10 mt-4 max-w-xl text-ink/55">
          Refrigeration, cooking and stainless steel equipment built for the demands of restaurants,
          hotels, hospitals, bakeries and supermarkets.
        </p>
        <ProductsClient />
      </div>
    </section>
  );
}
