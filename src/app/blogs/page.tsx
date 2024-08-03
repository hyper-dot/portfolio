import { connectdb } from "@/lib/db";
import Link from "next/link";
import Blog from "../models/Blog";

import { unstable_noStore as nostore } from "next/cache";
export const dynamic = "force-dynamic";

export default async function Page() {
  nostore();
  await connectdb();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  console.log(blogs);

  return (
    <div className="h-full">
      <div className="mx-auto max-w-3xl pt-10">
        <h1 className="mb-8 text-4xl font-semibold">
          Some words that I&apos;ve written beside codes
        </h1>
        <div className="w-full space-y-8 rounded-lg pt-6">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <h2 className="flex items-center text-2xl font-semibold">
                {blog.title}
              </h2>
              <p className="text-lg text-gray-700">{blog.desc}</p>
              <Link
                href={`/blogs/${blog.slug}`}
                className="underline underline-offset-2"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
