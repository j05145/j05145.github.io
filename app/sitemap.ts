import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE_URL = "https://iamjfabian.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog", "/about", "/experience", "/projects", "/contact"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...staticRoutes, ...postRoutes];
}
