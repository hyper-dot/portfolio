import { Calendar, User } from "lucide-react";
import React from "react";
import "./slug.css";
import Blog from "@/server/models/blog.model";
import { connectdb } from "@/server/utils/connectdb";
import "highlight.js/styles/github-dark.css";
import SocialShareBtn from "@/components/SocialShareBtn";
import BackButton from "@/components/BackButton";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  await connectdb();
  const blog = await Blog.findOne({ slug });

  return (
    <div className="max-w-3xl mx-auto px-2">
      <div className="mt-4 mb-10">
        <div className="mb-8 px-5">
          <BackButton />
        </div>

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
        <div className="flex justify-center flex-col items-center">
          <SocialShareBtn url="https://rosanpaudel.com.np" />
          <span className="text-xs">Share this article in social media</span>
        </div>
      </div>
      <div
        className="blog"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      ></div>
      <div className="py-8 flex items-center flex-col justify-center">
        <span className="text-xs">Share this article in social media</span>
        <SocialShareBtn url="https://rosanpaudel.com.np" />
      </div>
    </div>
  );
};

export default page;
