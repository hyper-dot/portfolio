import { headers } from "next/headers";
import BlogSection from "@/components/BlogContainer";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import Blog from "@/server/models/blog.model";
import { connectdb } from "@/server/utils/connectdb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs || Roshan Paudel",
  description: "Blogs written by Roshan Paudel Nepal.",
};

const page = async ({
  searchParams,
}: {
  searchParams: { next: string; page: string };
}) => {
  const headersList = headers();
  const prevUrl = headersList.get("referer");

  try {
    const { next, page = 1 } = searchParams;
    await connectdb();
    const count = await Blog.countDocuments();
    const totalPages = Math.ceil(count / 10);
    if (totalPages === 0) {
      // Handle case when there are no blogs available
      return (
        <div className="text-center h-[80vh] flex items-center justify-center">
          No blogs available.
        </div>
      );
    }

    const currentPage = Number(page);
    const blogsQuery = next
      ? Blog.find({ _id: { $lt: next } })
        .sort({ _id: -1 })
        .limit(10)
      : Blog.find().sort({ _id: -1 }).limit(10);

    const blogs = await blogsQuery;
    const nextPointer = blogs.length > 0 ? blogs[blogs.length - 1]._id : null;

    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold px-4">All Blogs</h2>
        <BlogSection data={blogs} />
        <Pagination className="py-4">
          <PaginationContent>
            <Button disabled={currentPage === 1} variant="outline">
              <Link href={prevUrl ? prevUrl : ""}>Prev</Link>
            </Button>
            {Array.from({ length: Math.min(totalPages, 3) }).map((_, idx) => (
              <PaginationItem key={idx}>
                <PaginationLink isActive={currentPage === idx + 1}>
                  {idx + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {totalPages > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <Button variant="outline" disabled={currentPage === totalPages}>
                <Link
                  href={
                    currentPage < totalPages
                      ? `/blogs/?next=${nextPointer}&page=${currentPage + 1}`
                      : `/blogs/?next=${nextPointer}&page=${totalPages}`
                  }
                >
                  Next
                </Link>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  } catch (error) {
    console.error("Error in page component:", error);
  }
};

export default page;
