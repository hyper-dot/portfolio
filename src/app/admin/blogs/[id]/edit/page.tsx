import React from "react";
import Blog from "@/server/models/blog.model";
import BlogEditForm from "./EditForm";
import { connectdb } from "@/server/utils/connectdb";

const page = async ({ params }: { params: { id: string } }) => {
  await connectdb();
  const { id } = params;
  const blog = await Blog.findById(id);
  return (
    <BlogEditForm
      id={JSON.stringify(blog._id)}
      title={blog.title}
      desc={blog.desc}
      body={blog.body}
      keywords={blog.keywords}
    />
  );
};

export default page;
