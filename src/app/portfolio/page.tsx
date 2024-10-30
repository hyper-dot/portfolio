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
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
              <SheetContent className="overflow-y-auto sm:max-w-[800px]">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold">
                    {item.title}
                  </SheetTitle>
                </SheetHeader>
                <SheetDescription className="mt-4 text-base">
                  {item.description}
                </SheetDescription>
                <div className="mt-6">
                  <video
                    src={item.video}
                    className="h-full w-full rounded-md border object-cover"
                    controls
                    autoPlay
                  />
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="default">
                    <a target="_blank" href={item.liveLink}>
                      <Eye className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline">
                    <a target="_blank" href={item.codeLink}>
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-semibold">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-semibold">Key Features</h3>
                  <ul className="list-disc space-y-1 pl-5">
                    {item.features.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
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
