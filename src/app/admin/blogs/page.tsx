import React from "react";
import { connectdb } from "@/server/utils/connectdb";
import Blog from "@/server/models/blog.model";

const page = async () => {
  await connectdb();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return <div>page</div>;
};

export default page;
