import { Calendar, User } from "lucide-react";
import React from "react";
import "./slug.css";
import Blog from "@/server/models/blog.model";
import { connectdb } from "@/server/utils/connectdb";
import "highlight.js/styles/github-dark.css";
import SocialShareBtn from "@/components/SocialShareBtn";

// or Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  await connectdb();
  const blog = await Blog.findOne({ slug: params.slug });
  return {
    title: blog.title,
    referrer: "origin-when-cross-origin",
    description: blog.desc,
    authors: [{ name: "Roshan Paudel", url: "https://rosanpaudel.com.np" }],
    keywords: blog.keywords,
    creator: "Roshan Paudel",
  };
}

const page = async ({ params }: { params: { slug: string } }) => {
  try {
    const { slug } = params;

    await connectdb();
    const blog = await Blog.findOne({ slug });

    return (
      <>
        <div className="w-full">
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
        <div
          className="blog px-2"
          dangerouslySetInnerHTML={{ __html: blog.body }}
        ></div>
        <div className="py-8 flex items-center flex-col justify-center">
          <span className="text-xs">Share this article in social media</span>
          <SocialShareBtn url={`https://rosanpaudel.com.np/blogs/b/${slug}`} />
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
};

export default page;
