import type { MetadataRoute } from "next";
import { categorySlugs } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://traboulsiest.com";
  const routes = ["", "/products", "/industries", "/about", "/clients", "/contact"];
  const categoryRoutes = Object.values(categorySlugs).map((slug) => `/products/${slug}`);
  return [...routes, ...categoryRoutes].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}
