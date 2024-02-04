"use client";
import Editor from "@/components/Editor";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema, TBlogSchema } from "@/schema/blog.schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormSubmitBtn from "@/components/form/FormSubmitBtn";
import FormErrors from "@/components/form/FormErrors";
import { addNewBlog } from "@/server/actions/blog.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [body, setBody] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<TBlogSchema>({ resolver: zodResolver(blogSchema) });

  const onSubmit = async (data: TBlogSchema) => {
    const { success, message } = await addNewBlog(data);
    toast(
      success
        ? "Successfully created blog post !! 🎉"
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input {...register("title")} placeholder="Eg: Next viral blog" />
          {errors.title && <FormErrors>{errors.title.message}</FormErrors>}
        </div>

        <div>
          <Label>Description</Label>
          <Textarea
            {...register("desc")}
            placeholder="Eg: The best blog in you've ever read [This will be on meta description]"
          />
          {errors.desc && <FormErrors>{errors.desc.message}</FormErrors>}
        </div>

        <div>
          <Label>Keywords</Label>
          <Textarea
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
        <FormSubmitBtn isSubmitting={isSubmitting}>Add Blog</FormSubmitBtn>
      </form>
    </div>
  );
};

export default page;
