import React from "react";
import Logo from "./Logo";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex justify-between 2xl:container pt-4 px-2 md:px-8">
      <Link href="/" className="w-16 md:w-20 right-0 -bottom-10">
        <Logo />
      </Link>

      <ul className="flex self-center items-center gap-1 md:gap-3">
        <li className="hover:text-green-600 dark:hover:text-green-400 p-2 transition-all duration-200 ">
          <a href="https://github.com/hyper-dot" target="_blank">
            <FaGithub size={20} />
          </a>
        </li>
        <li className="hover:text-green-600 dark:hover:text-green-400 p-2 transition-all duration-200">
          <a href="https://www.facebook.com/leduap.nahsor" target="_blank">
            <FaFacebook size={20} />
          </a>
        </li>
        <li className="hover:text-green-600 dark:hover:text-green-400 p-2 transition-all duration-200 ">
          <a
            href="https://www.linkedin.com/in/roshan-paudel-200186167/"
            target="_blank"
          >
            <FaLinkedin size={20} />
          </a>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
