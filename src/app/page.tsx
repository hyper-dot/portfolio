"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeAnimation from "@/components/HomeAnimation";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-background to-secondary/20 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="gap-10 text-center md:grid md:grid-cols-2"
      >
        <div className="hidden -translate-y-1/3 transition-all duration-500 hover:inset-0 md:block">
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
          {/* <div className="flex justify-center space-x-4">
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
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}
