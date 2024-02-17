"use client";
import Editor from "@/components/Editor";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema, TBlogSchema } from "@/schema/blog.schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormSubmitBtn from "@/components/form/FormSubmitBtn";
import FormErrors from "@/components/form/FormErrors";
import { editBlog } from "@/server/actions/blog.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";

type TBlogEditForm = {
  id: string;
  title: string;
  desc: string;
  keywords: string;
  body: string;
};

const BlogEditForm: FC<TBlogEditForm> = ({
  id,
  title,
  desc,
  keywords,
  body: content,
}) => {
  const router = useRouter();
  const [body, setBody] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<TBlogSchema>({ resolver: zodResolver(blogSchema) });

  // Populate data
  useEffect(() => {
    setBody(content);
    setValue("keywords", keywords);
    setValue("desc", desc);
    setValue("title", title);
  }, []);

  const onSubmit = async (data: TBlogSchema) => {
    const { success, message } = await editBlog(id, data);
    toast(
      success
        ? "Successfully updated blog post !! 🎉"
        : "Something went wrong ☹️",
      {
        description: message,
      },
    );
    if (success) router.back();
  };

  useEffect(() => {
    setValue("body", body);
    if (body.length !== 0) {
      trigger("body");
    }
  }, [body]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="py-10">
        <BackButton />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input {...register("title")} placeholder="Eg: Next viral blog" />
          {errors.title && <FormErrors>{errors.title.message}</FormErrors>}
        </div>

        <div>
          <Label>Description</Label>
          <Textarea
            rows={5}
            className="custom-scrollbar"
            {...register("desc")}
            placeholder="Eg: The best blog in you've ever read [This will be on meta description]"
          />
          {errors.desc && <FormErrors>{errors.desc.message}</FormErrors>}
        </div>

        <div>
          <Label>Keywords</Label>
          <Textarea
            rows={5}
            className="custom-scrollbar"
            {...register("keywords")}
            placeholder="Eg: Keyword rocks on meta [use comma seperated keywords]"
          />
          {errors.keywords && (
            <FormErrors>{errors.keywords.message}</FormErrors>
          )}
        </div>

        <div>
          <Editor value={body} setValue={setBody} className="" />
          {errors.body && <FormErrors>{errors.body.message}</FormErrors>}
        </div>
        <FormSubmitBtn isSubmitting={isSubmitting}>Edit Blog</FormSubmitBtn>
      </form>
    </div>
  );
};

export default BlogEditForm;
