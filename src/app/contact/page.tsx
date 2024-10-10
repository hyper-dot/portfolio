"use client";
import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function Page() {
  const [loading, setLoading] = useState(false);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const promise = new Promise((res, rej) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        res("");
      }, 800);
    });

    toast.promise(promise, {
      loading: "Please wait ...",
      error: "",
      success: "Message sent successfully",
    });
  }
  return (
    <div className="flex flex-1 items-center">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-xl space-y-4"
      >
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-lg transition-colors focus:border-blue-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className="w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-lg transition-colors focus:border-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={4}
            className="w-full resize-none border-b-2 border-gray-300 bg-transparent px-0 py-2 text-lg transition-colors focus:border-blue-500 focus:outline-none"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <Button disabled={loading} type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}
