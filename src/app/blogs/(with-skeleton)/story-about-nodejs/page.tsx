"use client";
import BackBtn from "@/components/BackBtn";
import Content from "./content.mdx";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const preElements = ref.current.querySelectorAll("pre");

      preElements.forEach((preElement) => {
        const copyBtn = document.createElement("button");
        copyBtn.innerHTML = "copy";
        copyBtn.classList.add("copy-btn");

        copyBtn.addEventListener("click", () => {
          navigator.clipboard
            .writeText(preElement.innerText)
            .then(() => {
              copyBtn.innerHTML = "copied!";
              setTimeout(() => (copyBtn.innerText = "Copy"), 2000);
            })
            .catch((err) => {
              console.error("Failed to copy: ", err);
            });
        });

        preElement.appendChild(copyBtn);
      });
    }
  }, [ref]);

  return (
    <main className="mx-auto max-w-4xl space-y-9 pt-20">
      <BackBtn />
      <article ref={ref} className="content prose-xl md:prose-2xl">
        <Content />
      </article>
    </main>
  );
}
