import { connectdb } from "@/lib/db";
import Link from "next/link";
import Blog from "../models/Blog";
import { format } from "date-fns";

import { unstable_noStore as nostore } from "next/cache";
import { Calendar } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Page() {
  nostore();
  await connectdb();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  console.log(blogs);

  return (
    <div className="h-full">
      <div className="mx-auto max-w-3xl pt-10">
        <div className="w-full space-y-8 rounded-lg pt-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="space-y-2 rounded-lg text-justify transition hover:bg-secondary md:p-4"
            >
              <span className="flex items-center gap-1 text-xs">
                <Calendar size={16} strokeWidth={1} />
                {format(blog.createdAt, "dd, MMM, yyyy")}
              </span>
              <h2 className="flex items-center text-xl font-semibold">
                {blog.title}
              </h2>
              <p className="line-clamp-3 text-muted-foreground">{blog.desc}</p>

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
