import React from "react";
import { connectdb } from "@/server/utils/connectdb";
import Blog from "@/server/models/blog.model";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { PenBox } from "lucide-react";

const page = async () => {
  await connectdb();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return (
    <div className="max-w-3xl mx-auto">
      <div className="py-10">
        <BackButton />
      </div>
      <ul>
        {blogs &&
          blogs.map((blog, idx) => (
            <li className="list-disc" key={idx}>
              {blog.title}{" "}
              <Link href={`/admin/blogs/${blog._id}/edit`}>
                <PenBox className="inline stroke-2 w-5" />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default page;
