import { MoveRight } from "lucide-react";
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
              className="group block cursor-pointer py-4 px-4 hover:bg-secondary hover:text-green-600 dark:hover:text-green-400 transition-all"
            >
              <h3 className="font-bold mb-2 line-clamp-1">{d.title}</h3>
              <p className="text-gray-600 text-sm dark:text-gray-500 line-clamp-2">
                {d.desc}
              </p>
              <span className="mt-4 text-sm inline-flex">
                Read More
                <MoveRight
                  size={20}
                  className="opacity-0 transition-transform group-hover:opacity-100 group-hover:translate-x-3"
                />
              </span>
            </Link>
            <div className="h-[1px] opacity-10 group-hover:opacity-100 transition-all bg-gradient-to-l from-muted via-primary to-muted"></div>
          </div>
        ))}
    </div>
  );
};

export default BlogSection;
