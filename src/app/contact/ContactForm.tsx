"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FormErrors from "@/components/form/FormErrors";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactSchema, contactSchema } from "@/schema/contact.schema";
import { cn } from "@/lib/utils";
import { sendMail } from "@/server/actions/contact.action";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<TContactSchema>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (payload: TContactSchema) => {
    const promise = sendMail(payload).then(() => reset());
    toast.promise(promise, {
      loading: "Please wait ...",
      success: "Message sent successfully !!",
      error: "Something went wrong !!",
    });
  };
  const messgeCount = watch("message")?.length;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">
      <h1 className="text-2xl font-medium">Let's Have a Chat</h1>
      <div>
        <Label>Name</Label>
        <Input
          className="border-primary/50"
          placeholder="Enter your full name"
          {...register("name")}
        />
        <FormErrors>{errors.name?.message as string}</FormErrors>
      </div>
      <div>
        <Label>Email</Label>
        <Input
          type="email"
          className="border-primary/50"
          placeholder="Enter your email"
          {...register("email")}
        />
        <FormErrors>{errors.email?.message as string}</FormErrors>
      </div>
      <div>
        <Label>Message</Label>
        <div className="relative">
          <Textarea
            className="border-primary/50"
            placeholder="Enter your email"
            {...register("message")}
            rows={3}
            maxLength={100}
          />
          <span
            className={cn(
              "text-xs absolute right-1 bottom-1",
              messgeCount < 10 || messgeCount > 100
                ? "text-destructive"
                : "text-green-600 dark:text-green-400",
            )}
          >
            {messgeCount || 0}/100
          </span>
        </div>
        <FormErrors>{errors.message?.message as string}</FormErrors>
      </div>

      <Button className="w-full" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
