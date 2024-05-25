import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import {
  DownloadIcon,
  FolderHeart,
  MailCheck,
  PencilLine,
  User,
} from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

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

          <Button className="w-fit flex gap-2 items-center">
            Download Resume <DownloadIcon size={16} />
          </Button>
        </div>
        <div className="grid place-items-center">
          <div className="grid grid-cols-2 gap-8">
            <div className="border border-primary grid place-items-center w-44 h-44">
              <FolderHeart size={48} strokeWidth={1.5} />
            </div>
            <div className="border border-primary grid place-items-center w-44 h-44">
              <User size={48} strokeWidth={1.5} />
            </div>
            <div className="border border-primary grid place-items-center w-44 h-44">
              <PencilLine size={48} strokeWidth={1.5} />
            </div>
            <div className="border border-primary grid place-items-center w-44 h-44">
              <MailCheck size={48} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
