import { MetadataRoute } from "next";
import { BASE_URL } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [BASE_URL + "/sitemap.xml", BASE_URL + "/blogs/sitemap.xml"],
  };
}
