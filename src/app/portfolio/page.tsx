import { FaGithub, FaRegEye } from "react-icons/fa";

const projects = [
  {
    image: "/videos/monsoon-logistics.mp4",
    title: "Ez Books",
    description:
      "Track and manage job applications with role-based dashboards, blog uploads, and SVG animations.",
    techStack: ["Next.js", "React Query", "Redux Toolkit", "Tailwind"],
    liveLink: "https://ezbooks.rosanpaudel.com.np",
    codeLink: "#",
  },
  {
    image: "/videos/ezbooks.mp4",
    title: "Monsoon Logistics Landing Page",
    description:
      "A landing page with cool Lottie animations and a chatbot powered by OpenAI for a logistics company.",
    techStack: ["Next.js", "Tailwind", "Lottie", "OpenAI"],
    liveLink: "#",
    codeLink: "#",
  },
  // Add more projects as needed
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="mb-12 text-center text-4xl font-bold">My Projects</h2>
        <div className="grid gap-12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative transform overflow-hidden rounded-lg border text-white shadow-lg"
            >
              <video
                src={project.image}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end bg-neutral-900/95 p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex gap-8">
                  <h3 className="mb-4 text-2xl font-semibold">
                    {project.title}
                  </h3>
                </div>
                <p className="mb-1">{project.description}</p>

                <div className="mb-3 flex gap-4">
                  <a
                    target="_blank"
                    className="rounded-lg border bg-green-300 p-1 text-black"
                    href={project.liveLink}
                  >
                    <FaRegEye size={20} />
                  </a>
                  <a
                    className="rounded-lg border bg-neutral-800 p-1 text-white"
                    target="_blank"
                    href={project.codeLink}
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Tech Stack:</h4>
                  <ul className="mt-2 flex space-x-2">
                    {project.techStack.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="whitespace-nowrap rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-black"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
