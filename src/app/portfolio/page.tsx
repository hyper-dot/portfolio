import { FaGithub, FaRegEye } from "react-icons/fa";
import { projects } from "@/__data__/projects";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="mb-12 text-center text-4xl font-bold">My Projects</h2>
        <div className="grid gap-12 lg:grid-cols-2">
          {projects.map((item, idx) => (
            <Sheet key={idx}>
              <SheetTrigger>
                <div className="group relative cursor-pointer rounded-md border shadow-lg">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10"></div>
                  <Image
                    alt={item.title}
                    src={item.thumbnail}
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
              </SheetTrigger>
              <SheetContent className="min-w-[90vw] overflow-auto md:min-w-[80vw] lg:min-w-[50vw]">
                <SheetHeader>
                  <SheetTitle className="text-3xl">{item.title}</SheetTitle>
                  <SheetDescription className="text-lg">
                    {item.description}
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-8">
                  <video
                    src={item.video}
                    className="h-full w-full rounded-md border object-cover"
                    controls
                    autoPlay
                  />

                  <div className="my-3 flex gap-4">
                    <a
                      target="_blank"
                      className="flex items-center gap-2 rounded-lg border bg-green-300 p-1 px-2 font-semibold text-black"
                      href={item.liveLink}
                    >
                      Live
                      <FaRegEye size={20} />
                    </a>
                    {!!item.codeLink && (
                      <a
                        className="flex items-center gap-2 rounded-lg border bg-neutral-800 p-1 px-2 text-white"
                        target="_blank"
                        href={item.codeLink}
                      >
                        Github
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-medium">Tech Stack:</h4>
                    <ul className="mt-2 flex space-x-2">
                      {item.techStack.map((tech, techIndex) => (
                        <li
                          key={techIndex}
                          className="whitespace-nowrap rounded-full bg-secondary px-3 py-1 text-sm font-medium"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

{
  /* <div
  key={index}
  className="group relative transform overflow-hidden rounded-lg border text-white shadow-lg"
>
  <video src={project.image} className="h-full w-full object-cover" />
  <div className="absolute inset-0 z-10 flex flex-col justify-end bg-neutral-900/95 p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
    <div className="flex gap-8">
      <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>
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
      {!!project.codeLink && (
        <a
          className="rounded-lg border bg-neutral-800 p-1 text-white"
          target="_blank"
          href={project.codeLink}
        >
          <FaGithub size={20} />
        </a>
      )}
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
</div>; */
}
