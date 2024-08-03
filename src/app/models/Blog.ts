import { Schema, model, models } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    keywords: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

//If the Post collection does not exist create a new one.
const Blog = models.Blog || model("Blog", blogSchema);
export default Blog;
