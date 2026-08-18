import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

const routes = ["", "/services", "/pricing", "/why-us", "/software", "/faqs", "/about", "/blog", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
