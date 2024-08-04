import { connectdb } from "@/lib/db";
import Blog from "../models/Blog";
import { BASE_URL } from "@/constants";
import { MetadataRoute } from "next";

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  await connectdb();
  const blogs = await Blog.find().limit(50000);
  return blogs.map((blog) => ({
    url: `${BASE_URL}/product/${blog.slug}`,
    lastModified: blog.updatedAt,
  }));
}
