import Link from "next/link";
import { Button } from "@/components/ui/button";
import { jetbrains } from "@/lib/typography";
import { cn } from "@/lib/utils";
import {
  DownloadIcon,
  FolderHeart,
  MailCheck,
  PencilLine,
  User,
} from "lucide-react";

const data = [
  {
    title: (
      <>
        My <br /> Projects
      </>
    ),
    icon: <FolderHeart size={48} strokeWidth={1.5} />,
    to: "",
  },
  {
    title: (
      <>
        About <br /> Me
      </>
    ),
    icon: <User size={48} strokeWidth={1.5} />,
    to: "",
  },
  {
    title: (
      <>
        My <br /> Blogs
      </>
    ),
    icon: <PencilLine size={48} strokeWidth={1.5} />,
    to: "/blogs",
  },
  {
    title: (
      <>
        Message <br /> Me
      </>
    ),
    icon: <MailCheck size={48} strokeWidth={1.5} />,
    to: "",
  },
];

const page = () => {
  return (
    <>
      <div className="flex-1 px-10 grid h-full max-w-5xl mx-auto grid-cols-2 gap-5 pt-5">
        <div className="gap-4 flex flex-col justify-center">
          <p>Hello 👋</p>
          <h1 className="text-3xl">I'M Roshan Paudel</h1>
          <p>
            I'm a passionate Fullstack web developer & FOSS lover with a focus
            on creating user-friendly and robust web apps. I love turning ideas
            into reality through code.
          </p>

          <Button className="w-[180px] hover:text-primary relative group hover:text-green-600 dark:hover:text-green-400 shadow-none overflow-hidden">
            <div className="bg-primary-foreground absolute inset-0 -translate-x-[180px] group-hover:translate-x-0 transition-all duration-500"></div>
            <span className="flex gap-2 items-center absolute">
              Download Resume <DownloadIcon size={16} />
            </span>
          </Button>
        </div>
        <div className={cn("grid place-items-center", jetbrains.className)}>
          <div className="grid grid-cols-2 gap-8">
            {data.map((d, idx) => (
              <Link
                href={d.to}
                key={idx}
                className="border relative border-primary group grid place-items-center overflow-hidden w-44 h-44"
              >
                <div className="h-full text-primary-foreground text-3xl flex px-2 items-center justify-center transform absolute bg-primary w-full -translate-x-[200px] group-hover:translate-x-0 duration-500 origin-left">
                  {d.title}
                </div>
                <div className="text-green-600 dark:text-green-400">
                  {d.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
