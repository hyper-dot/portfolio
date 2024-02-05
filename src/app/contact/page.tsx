"use client";
import FormErrors from "@/components/form/FormErrors";
import FormSubmitBtn from "@/components/form/FormSubmitBtn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TContactSchema, contactSchema } from "@/schema/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

import { useForm } from "react-hook-form";

const page = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TContactSchema>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: TContactSchema) => {
    await new Promise((res) => {
      setTimeout(() => {
        res("");
      }, 2000);
    });
    toast({
      title: "📬 Message Delivered!",
      description:
        "Your message has been received. I'll get back to you shortly!",
    });
  };

  return (
    <div className="py-10 max-w-3xl mx-auto px-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[300px] mx-auto space-y-3 py-10"
      >
        <h2 className="text-3xl font-semibold">Get in touch</h2>
        <div>
          <Label>Full Name</Label>
          <Input {...register("fullName")} placeholder="Your name here" />
          <FormErrors>{errors.fullName && errors.fullName.message}</FormErrors>
        </div>
        <div>
          <Label>Email</Label>
          <Input {...register("email")} placeholder="Your email here" />
          <FormErrors>{errors.email && errors.email.message}</FormErrors>
        </div>
        <div>
          <Label>Message</Label>
          <Textarea {...register("message")} placeholder="Your message here" />
          <FormErrors>{errors.message && errors.message.message}</FormErrors>
        </div>
        <FormSubmitBtn className="w-full" isSubmitting={isSubmitting}>
          Send Message
        </FormSubmitBtn>
      </form>
    </div>
  );
};

export default page;
