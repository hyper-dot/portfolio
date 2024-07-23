import BackButton from "@/components/BackButton";
import React from "react";

const data = {
  workExperience: [
    {
      logo: "https://metalogic.com.np/metalogo.png",
      company: "Metalogic Software",
      url: "https://metalogic.com.np",
      title: "Full Stack Developer (Node & React)",
      from: "Feb 2023",
      to: "Present",
    },
    {
      logo: "https://media.licdn.com/dms/image/C4D0BAQFVBaWozNJXfg/company-logo_200_200/0/1630545258536/startuphire_logo?e=1724889600&v=beta&t=pZQwoZRmyFNjiiLZzDe74ykDU2uFOI3X5lCvd0slf7Y",
      company: "StartupHire",
      title: "Frontend Developer",
      url: "",
      from: "Jan 2023",
      to: "Feb 2023",
    },
    {
      logo: "https://media.licdn.com/dms/image/C4D0BAQFVBaWozNJXfg/company-logo_200_200/0/1630545258536/startuphire_logo?e=1724889600&v=beta&t=pZQwoZRmyFNjiiLZzDe74ykDU2uFOI3X5lCvd0slf7Y",
      company: "StartupHire",
      title: "Frontend Developer Intern",
      url: "",
      from: "Sep 2023",
      to: "Dec 2023",
    },
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "Golang"],
    frontend: [
      "React",
      "Next.js",
      "Framer Motion",
      "React Query",
      "Redux Toolkit",
      "Hook Form",
      "HTML",
      "CSS",
      "Turborepo",
    ],
    backend: ["Node.js", "Golang", "REST APIs"],
    databases: ["PostgreSQL", "MongoDB", "Sqlite"],
    Tools: ["Linux", "GitHub", "Github Actions", "Docker"],
  },
};

const Page = () => {
  return (
    <div className="p-8 w-full max-w-4xl mx-auto">
      <div className="pb-10">
        <BackButton />
      </div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          I am Roshan Paudel, a passionate Fullstack web developer and Linux
          enthusiast with expertise in the MERN stack, TypeScript, TypeORM, and
          PostgreSQL. Currently, I am working as a mid-level frontend developer,
          excelling in both frontend and backend technologies, including React,
          Next.js, Node.js, and Express.js.
          <br />
          My experience at StartupHire and Metalogic has equipped me to thrive
          in remote, collaborative environments, where I have contributed to
          numerous high-quality projects. My project portfolio showcases my
          ability to create dynamic and responsive web applications. I am
          actively seeking junior roles in frontend or fullstack development,
          dedicated to continuous learning and delivering scalable solutions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <ol className="relative border-l border-accent dark:border-gray-700">
          {data.workExperience.map((item, index) => (
            <li key={index} className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5"></div>
              <time className="mb-1 text-xs font-normal leading-none text-gray-400">
                {item.from} - {item.to}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title} at {item.company}
              </h3>
              <div className="flex items-center gap-2">
                <img
                  src={item.logo}
                  alt={item.company}
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] border-2 rounded-full"
                />
                {item.url ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.url}
                    className=""
                  >
                    {item.company}
                  </a>
                ) : (
                  <span>{item.company}</span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-medium mb-6">Skills</h2>
        {Object.entries(data.skills).map(([category, skills], index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl mb-4 capitalize">{category}</h3>
            <ul className="flex flex-wrap gap-4">
              {skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="bg-secondary px-4 py-2 rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Page;
