import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  desc: z.string().min(1, { message: "Description is required." }),
  keywords: z.string().min(1, { message: "Keywords are required." }),
  body: z.string().min(1, { message: "Body is required." }),
});

export type TBlogSchema = z.infer<typeof blogSchema>;
