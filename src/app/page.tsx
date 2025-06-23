"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
// import HomeAnimation from "@/components/HomeAnimation";
import dynamic from "next/dynamic";
import { FaWhatsapp } from "react-icons/fa";
const HomeAnimation = dynamic(() => import("@/components/HomeAnimation"));

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-2 md:pt-[10%]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="gap-10 text-center md:grid md:grid-cols-2"
      >
        <div className="hidden -translate-y-1/4 transition-all duration-500 hover:inset-0 md:block">
          <HomeAnimation />
        </div>

        <div>
          <h1 className="mb-2 text-4xl font-bold">Roshan Paudel</h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Full Stack Developer
          </p>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Crafting elegant solutions to complex problems. Passionate about
            clean code, user experience, and continuous learning.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/hyper-dot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/roshan-paudel-200186167/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:rozanpoudel@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://wa.me/9779864175818"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <script
          src="https://aicaller.com/embed/call-widget.min.js"
          async
        ></script>
        {/* @ts-expect-error - This is valid custom element */}
        <ai-caller-widget
          data-agent-id="68555d3192110c3fe4419d58"
          data-api-key="sk_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzdkNTEyZWY4MDBjZTJkYmNkZGNlYWEiLCJrZXlJZCI6IjY4NTU2NGIxYTYwZTM2ODg2Yzc5NzIyNyIsIm5hbWUiOiJhcGkga2V5IGZvciBob21lIHBhZ2Ugd2lkZ2V0IiwidHlwZSI6ImFwaV9rZXkiLCJpYXQiOjE3NTA0MjY4MDF9.slmCosUCSmNzjOkZp6YeBNLiwIOgZC4H2AUkpmRUYlY"
        />
      </motion.div>
    </div>
  );
}
