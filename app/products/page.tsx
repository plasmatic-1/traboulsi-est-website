import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Traboulsi Est.'s full range of commercial refrigeration, cooking and stainless steel equipment for restaurants, hotels, hospitals, bakeries and supermarkets.",
};

export default function ProductsPage() {
  return (
    <section className="container-x py-16 sm:py-20">
      <p className="section-label">Our Range</p>
      <h1 className="mb-10 max-w-2xl text-balance font-heading text-4xl font-bold text-ink">
        Products
      </h1>
      <ProductsClient />
    </section>
  );
}
