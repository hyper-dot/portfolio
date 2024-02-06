"use server";
import Blog from "@/server/models/blog.model";
import { connectdb } from "../utils/connectdb";
import { blogSchema } from "@/schema/blog.schema";
import slugify from "slugify";
import { revalidatePath } from "next/cache";

export const addNewBlog = async (data: any) => {
  const parsedData = blogSchema.safeParse(data);
  if (parsedData.success) {
    try {
      const { title, body, desc, keywords } = parsedData.data;
      await connectdb();
      const slug = slugify(title, { lower: true, trim: true });
      const blog = new Blog({
        title,
        desc,
        keywords,
        body,
        slug,
      });
      await blog.save();
      revalidatePath("/");
      revalidatePath("/blogs");
      revalidatePath("/admin/blogs");
      return {
        success: true,
        message: "Hurray your blog has been added successfully !!",
      };
    } catch (err) {
      console.log(err);
      return {
        success: true,
        message:
          "Oh no something went wrong !! You need to see on the console !",
      };
    }
  } else {
    return { success: false, message: "Not valid data." };
  }
};

export async function generateDummyBlogs() {
  try {
    // Loop to generate 30 dummy blogs
    for (let i = 1; i <= 30; i++) {
      const dummyBlog = new Blog({
        title: `Dummy Blog ${i}`,
        desc: `Description for Dummy Blog ${i}`,
        keywords: `Keyword${i}, Keyword${i + 1}`,
        body: `Body content for Dummy Blog ${i}`,
        slug: `dummy-blog-${i}`,
      });

      await dummyBlog.save();
      console.log(`Dummy Blog ${i} created successfully.`);
    }
  } catch (error) {
    console.error("Error generating dummy blogs:", error);
  }
}
