import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const contacts = [
  {
    title: "Github",
    icon: <FaGithub size={24} />,
    link: "",
  },
  {
    title: "Linkedin",
    icon: <FaLinkedin size={24} />,
    link: "",
  },
  {
    title: "Whatsapp",
    icon: <FaWhatsapp size={24} />,
    link: "",
  },
];

const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm">
      <ul className="mb-2 flex items-center justify-center gap-4">
        {contacts.map((item, idx) => (
          <li key={idx}>{item.icon}</li>
        ))}
      </ul>
      <p>
        &copy; {new Date().getFullYear()} Monson Logistics. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
