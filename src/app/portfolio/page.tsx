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
    <section id="portfolio" className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills in web development and design.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item: any, idx: number) => (
            <Sheet key={idx}>
              <div className="group h-full flex flex-col bg-card rounded-xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <SheetTrigger className="w-full">
                    <div className="relative aspect-video cursor-pointer overflow-hidden">
                      <Image
                        alt={item.title}
                        src={item.thumbnail}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        width={500}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium px-4 py-2 rounded-full bg-primary/80">View Details</span>
                      </div>
                    </div>
                  </SheetTrigger>
                </div>
                
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                  
                  <div className="mb-4 flex-1">
                    <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.slice(0, 3).map((tech: string) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {item.techStack.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{item.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* <div className="flex gap-2 mt-auto pt-3 border-t">
                    <Button size="sm" variant="default" asChild className="flex-1">
                      <a target="_blank" href={item.liveLink} rel="noopener noreferrer">
                        <Eye className="mr-1 h-3 w-3" /> Live
                      </a>
                    </Button>
                    {item.codeLink && (
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a target="_blank" href={item.codeLink} rel="noopener noreferrer">
                          <Github className="mr-1 h-3 w-3" /> Code
                        </a>
                      </Button>
                    )}
                  </div> */}
                </div>
              </div>
              
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
                  {item.video && (
                    <video
                      src={item.video}
                      className="h-full w-full rounded-md border object-cover"
                      controls
                      autoPlay
                    />
                  )}
                  {!item.video && (
                    <div className="relative aspect-video">
                      <Image
                        alt={item.title}
                        src={item.thumbnail}
                        className="h-full w-full rounded-md border object-cover"
                        fill
                      />
                    </div>
                  )}
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="default" asChild>
                    <a target="_blank" href={item.liveLink} rel="noopener noreferrer">
                      <Eye className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  {item.codeLink && (
                    <Button variant="outline" asChild>
                      <a target="_blank" href={item.codeLink} rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </a>
                    </Button>
                  )}
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-semibold">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech: string) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-semibold">Key Features</h3>
                  <ul className="list-disc space-y-1 pl-5">
                    {item.features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
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
