"use client";
import { getIpAddress } from "@/action";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const contacts = [
  {
    title: "Github",
    icon: <FaGithub size={20} />,
    link: "https://github.com/hyper-dot",
  },
  {
    title: "Linkedin",
    icon: <FaLinkedin size={20} />,
    link: "https://www.linkedin.com/in/roshan-paudel-200186167",
  },
  {
    title: "Whatsapp",
    icon: <FaWhatsapp size={20} />,
    link: "https://wa.me/9864175818",
  },
  {
    title: "Youtube",
    icon: <FaYoutube size={20} />,
    link: "https://www.youtube.com/channel/UCGv-g37PzdwiJ2LkJChH-ug",
  },
];

const Footer = ({ country }: { country: string }) => {
  console.log("COUNTRY", country);
  getIpAddress().then((ip) => console.log("IP ADDRESS: ", ip));
  const pathname = usePathname();
  return (
    <footer className="py-8 text-center text-sm">
      {pathname !== "/" && (
        <ul className="mb-2 flex items-center justify-center gap-4">
          {contacts.map((item, idx) => (
            <li key={idx}>
              <a target="_blank" href={item.link}>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      )}
      <p>
        &copy; {new Date().getFullYear()} Roshan Paudel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
