import { Calendar, User } from "lucide-react";
import React from "react";
import "./slug.css";
import Blog from "@/server/models/blog.model";
import { connectdb } from "@/server/utils/connectdb";

import dynamic from "next/dynamic";
const RichContentPreview = dynamic(
  () => import("@/components/Editor/Preview"),
  { ssr: false },
);

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  await connectdb();
  const blog = await Blog.findOne({ slug });

  return (
    <div className="max-w-3xl mx-auto px-2">
      <div className="mt-20 mb-10">
        <h1 className="text-4xl font-semibold text-center">{blog.title}</h1>
        <div className="flex justify-center my-8 gap-4">
          <div className="flex gap-2 items-center">
            <User size={16} strokeWidth={2} />
            <span>Roshan Paudel</span>
          </div>
          <div className="flex gap-2  items-center">
            <Calendar size={16} strokeWidth={2} />
            <span>21 Dec 2024</span>
          </div>
        </div>
      </div>
      <div className="blog">
        <RichContentPreview html={blog.body} />
      </div>
    </div>
  );
};

export default page;
