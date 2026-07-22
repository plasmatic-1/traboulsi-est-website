import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Traboulsi Est.'s full range of commercial refrigeration, cooking and stainless steel equipment for restaurants, hotels, hospitals, bakeries and supermarkets.",
};

export default function ProductsPage() {
  return (
    <section className="container-x py-20 sm:py-28">
      <p className="section-label">Our Range</p>
      <h1 className="max-w-2xl text-balance font-heading text-5xl font-bold tracking-tightest2 text-ink">
        Products
      </h1>
      <p className="mb-12 mt-4 max-w-xl text-ink/55">
        Refrigeration, cooking and stainless steel equipment built for the demands of restaurants,
        hotels, hospitals, bakeries and supermarkets.
      </p>
      <ProductsClient />
    </section>
  );
}
