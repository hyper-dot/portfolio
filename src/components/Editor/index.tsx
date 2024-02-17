"use client";
import React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import hljs from "highlight.js";

import "react-quill/dist/quill.snow.css";
import { Loader } from "lucide-react";
// import "react-quill/dist/quill.bubble.css";
const ReactQuill = dynamic(
  () => {
    hljs.configure({
      // optionally configure hljs
      languages: ["javascript", "php", "go"],
    });
    // @ts-ignore
    window.hljs = hljs;
    return import("react-quill");
  },
  {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  },
);

type TEditorProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
};

const Editor: React.FC<TEditorProps> = ({ value, setValue, className }) => {
  const modules = {
    syntax: true,
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "formula"],
    ],
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      className={cn(className)}
      modules={modules}
    />
  );
};

export default Editor;
