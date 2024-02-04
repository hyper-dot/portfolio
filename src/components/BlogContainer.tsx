import { MoveRight } from "lucide-react";
import { blogPosts } from "@/data";
import Link from "next/link";

const BlogSection = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col mt-6">
      {data &&
        data.map((d: any, idx: number) => (
          <div key={idx}>
            <Link
              href={`/blogs/b/${d.slug}`}
              key={idx}
              className="group block cursor-pointer py-4 px-4 hover:backdrop-contrast-75 dark:hover:backdrop-contrast-125  transition-all duration-300 rounded-md"
            >
              <h3 className="font-bold mb-2 line-clamp-1">{d.title}</h3>
              <p className="text-gray-600 text-sm dark:text-gray-500 line-clamp-2">
                {d.desc}
              </p>
              <span className="mt-4 inline-flex transition duration-300">
                Read More
                <MoveRight className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-3" />
              </span>
            </Link>
            <div className="h-[1px] opacity-10 group-hover:opacity-100 duration-500 transition-all bg-gradient-to-l from-muted via-primary to-muted"></div>
          </div>
        ))}
    </div>
  );
};

export default BlogSection;
