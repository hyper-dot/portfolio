import Link from "next/link";
import React from "react";
import { FaFeather } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description:
      "A deep dive into React Hooks and how they can be used to manage state and side effects in functional components functional components...",
  },
  {
    id: 2,
    title: "Getting Started with Tailwind CSS",
    description:
      "Learn how to set up and use Tailwind CSS to create beautiful and responsive designs quickly responsive designs quickly...",
  },
  {
    id: 3,
    title: "Introduction to Next.js",
    description:
      "An overview of Next.js and how it can be used to build server-side rendered React applications React applications....",
  },
];

const BlogList = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-3xl pt-10">
        <h1 className="mb-8 text-4xl font-semibold">
          <span>Some words that I&apos;ve written beside codes</span>
        </h1>
        <div className="w-full space-y-8 rounded-lg pt-6">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <h2 className="flex items-center text-2xl font-semibold">
                {blog.title}
              </h2>
              <p className="text-gray-700">{blog.description}</p>
              <Link
                href=""
                className="relative before:absolute before:bottom-0 before:h-[1px] before:w-1/2 before:bg-black before:transition-width before:duration-300 hover:before:w-full"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
