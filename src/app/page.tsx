import Logo from "@/components/Logo";
import BlogSection from "@/components/BlogContainer";
import Link from "next/link";
import { ArrowUpRightFromSquare } from "lucide-react";
import Blog from "@/server/models/blog.model";
import { connectdb } from "@/server/utils/connectdb";
import PortfolioBtn from "@/components/PortfolioBtn";
import { jetBrains } from "@/lib/typography";

const page = async () => {
  await connectdb();
  const blogs = await Blog.find().sort({ createdAt: -1 }).limit(3);
  return (
    <>
      <div className="max-w-2xl px-2 mx-auto">
        <div className="py-12">
          <div className="relative mx-auto text-center">
            <h1
              className={`text-2xl sm:text-4xl font-bold flex items-center justify-center gap-2 md:gap-4 mb-4 ${jetBrains.className}`}
            >
              Roshan Paudel
              <div className="w-16 md:w-20 right-0 -bottom-10">
                <Logo />
              </div>
            </h1>
            <p
              className={`md:text-base mb-8 font-medium ${jetBrains.className}`}
            >
              Full-Satck Web Developer
            </p>

            <div className={`text-left px-2 ${jetBrains.className}`}>
              <h2 className="text-2xl font-bold  mb-4">
                About Me{" "}
                {/* 
                <span className="text-xs font-normal inline-flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full before:content-[' '] before:bg-green-500 relative before:absolute before:animate-ping before:h-3 before:w-3 before:rounded-full"></span>{" "}
                  Available
                </span> */}
              </h2>
              <p className=" mb-4">
                Hello! I'm a passionate{" "}
                <span className="font-bold">Fullstack</span> web developer &{" "}
                <span className="font-bold">FOSS lover</span> with a focus on
                creating user-friendly and robust web apps. I love turning ideas
                into reality through code.
              </p>
              <p className="mb-4 text-xs">
                Feel free to explore my portfolio and reach out if you have any
                questions❓or collaboration 🤝 opportunities.
              </p>
              <div className="mt-2">
                <PortfolioBtn />
              </div>
            </div>
          </div>
        </div>

        <div className="px-2">
          <h2 className="text-2xl font-bold">
            Latest Blog Posts
            <Link
              href="/blogs"
              className="pl-4 text-sm transition-all duration-200 inline-flex gap-2 items-center font-medium underline underline-offset-4"
            >
              <ArrowUpRightFromSquare size={16} /> All Blogs
            </Link>
          </h2>
        </div>

        <BlogSection data={blogs} />
      </div>
    </>
  );
};

export default page;
