import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

const page = () => {
  return (
    <FadeInStagger faster className="mt-32 flex flex-1 flex-col gap-4 px-16">
      <FadeIn>
        <Image
          height={100}
          width={150}
          src="/profile2.png"
          alt="Roshan Paudel profile picture"
          className="aspect-[12/16] rounded-2xl object-cover"
          priority
        />
      </FadeIn>

      <FadeIn className="text-7xl font-bold">
        Hi there, <br /> I&apos;m Roshan Paudel
      </FadeIn>

      {/* Add social links and available now status */}
      <FadeIn className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
          <span className="text-sm">Available for work</span>
        </div>
      </FadeIn>

      <FadeIn className="flex gap-4">
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          className="text-2xl hover:text-primary"
        >
          <Github size={24} />
        </Link>
        <Link
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="text-2xl hover:text-primary"
        >
          <Linkedin size={24} />
        </Link>
        <Link
          href="https://twitter.com/yourusername"
          target="_blank"
          className="text-2xl hover:text-primary"
        >
          <Twitter size={24} />
        </Link>
      </FadeIn>

      <FadeIn className="mt-10">
        <Link
          href="/portfolio"
          className="w-fit rounded-full border border-primary px-8 py-4 text-xl font-semibold"
        >
          Discover My Projects
        </Link>
      </FadeIn>
    </FadeInStagger>
  );
};

export default page;
