"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TAuthSchema, authSchema } from "@/schema/auth.schema";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TAuthSchema>({ resolver: zodResolver(authSchema) });
  const [clicked, setClicked] = useState(false);

  const onSubmit = async (data: any) => {
    const res = await fetch("/api/auth", {
      body: JSON.stringify(data),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (res.status === 200) {
      toast({ title: "Success !", description: "Successfylly logged in. !!" });
      router.push("/admin");
    } else {
      toast({
        title: "Failed !",
        description: res.json().then((message) => message),
      });
    }
  };

  const resetPassword = async () => {
    setClicked(true);
    try {
      const res = await fetch("/api/auth");
      if (res.status === 201 || 200) {
        toast({
          title: "Success !",
          description: res.json().then((message) => message),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Failed !",
          description: res.json().then((message) => message),
        });
      }
    } catch (err) {
      toast({
        title: "Failed !",
        description: "Couldn't send data to the server !!",
      });
    }
  };

  return (
    <div className="h-full flex items-center justify-center min-h-[80vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[300px] space-y-2"
      >
        <Input {...register("username")} placeholder="username" />
        <Input
          {...register("password")}
          type="password"
          placeholder="password"
        />
        <button
          disabled={clicked}
          onClick={resetPassword}
          type="button"
          className="text-xs"
        >
          Forget Password ?
        </button>
        <Button className="w-full flex gap-2" disabled={isSubmitting}>
          {isSubmitting && <Loader size={20} className="animate-spin" />}
          Login
        </Button>
      </form>
    </div>
  );
};

export default page;
