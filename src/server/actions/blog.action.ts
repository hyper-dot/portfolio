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
