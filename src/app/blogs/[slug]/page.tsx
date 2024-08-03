import BackBtn from "@/components/BackBtn";
import { connectdb } from "@/lib/db";
import Blog from "@/app/models/Blog";
import "highlight.js/styles/github-dark.css";

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

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  await connectdb();
  const blog = await Blog.findOne({ slug });

  return (
    <div className="mx-auto max-w-4xl space-y-8 pt-10">
      <BackBtn />

      <h1 className="text-4xl md:text-4xl 2xl:text-6xl">{blog.title}</h1>

      <div
        className="content prose-lg mt-20 md:prose-xl 2xl:prose-2xl"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      ></div>
    </div>
  );
}
