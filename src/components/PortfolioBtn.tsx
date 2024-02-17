import { DownloadIcon, Github } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const PortfolioBtn = () => {
  return (
    <div className="flex gap-4 items-end">
      <Button asChild>
        <Link href="/portfolio" className="flex">
          Portfolio
        </Link>
      </Button>
      <Button variant="secondary" asChild>
        <Link href="/portfolio" className="flex gap-2">
          <DownloadIcon size={20} /> Resume
        </Link>
      </Button>

      <ul className="flex self-center">
        <li className="hover:bg-secondary p-2 transition-all duration-200 ">
          <Link href="https://github.com/hyper-dot" target="_blank">
            <FaGithub size={20} />
          </Link>
        </li>
        <li className="hover:bg-secondary p-2 transition-all duration-200">
          <Link href="https://www.facebook.com/leduap.nahsor" target="_blank">
            <FaFacebook size={20} />
          </Link>
        </li>
        <li className="hover:bg-secondary p-2 transition-all duration-200 ">
          <Link
            href="https://www.linkedin.com/in/roshan-paudel-200186167/"
            target="_blank"
          >
            <FaLinkedin size={20} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioBtn;
