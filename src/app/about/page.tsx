import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { data } from "./constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function page() {
  return (
    <div className="mt-10">
      <h1 className="mb-8 text-center text-4xl font-semibold">My Story</h1>
      <FadeIn className="mx-auto max-w-3xl px-2 text-muted-foreground">
        As a developer with full-stack expertise in the <b>MERN </b> stack,
        <b>TypeScript</b> , and <b>PostgreSQL</b> & <b>Mongodb</b> , I&apos;ve
        excelled in remote environments at StartupHire, and Sand Console,
        creating dynamic web applications. <br /> A <b>Linux</b> enthusiast
        passionate about continuous learning, I seek opportunities to apply my
        React and Node.js expertise while contributing to innovative solutions.
      </FadeIn>
      <div className="mx-auto mb-12 mt-10 flex max-w-3xl flex-col gap-8 px-4">
        <section className="w-full">
          <h2 className="mb-6 text-center text-2xl font-semibold">
            Work Experience
          </h2>

          <FadeInStagger>
            {data.workExperience.map((item, index) => (
              <FadeIn
                key={index}
                className="mb-12 flex flex-col items-start gap-y-2 sm:flex-row"
              >
                <a href={item.url} target="_blank">
                  <Image
                    height={200}
                    width={200}
                    src={item.logo}
                    alt={item.company}
                    className={cn(
                      "mr-6 h-12 w-12 rounded-full",
                      item.company === "Metalogic Software"
                        ? "h-[2.6rem] w-[2.6rem]"
                        : "",
                    )}
                  />
                </a>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.company}</h3>
                  <time className="flex gap-2 text-muted-foreground">
                    <span>{item.from}</span>
                    <span className="sm:hidden">-</span>
                    <svg
                      viewBox="0 0 341 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden w-[130px] sm:block"
                    >
                      <path
                        d="M340.707 8.70711C341.098 8.31658 341.098 7.68342 340.707 7.29289L334.343 0.928932C333.953 0.538408 333.319 0.538408 332.929 0.928932C332.538 1.31946 332.538 1.95262 332.929 2.34315L338.586 8L332.929 13.6569C332.538 14.0474 332.538 14.6805 332.929 15.0711C333.319 15.4616 333.953 15.4616 334.343 15.0711L340.707 8.70711ZM0 9H340V7H0V9Z"
                        className="fill-primary/40"
                      />
                    </svg>
                    <span>{item.to}</span>
                  </time>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-xs sm:text-right">{item.location}</p>
                  {/*                 <p className="text-gray-600">{item.description}</p> */}
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </section>

        <FadeInStagger>
          <h2 className="mb-6 text-center text-2xl font-semibold">Skills</h2>
          {Object.entries(data.skills).map(([category, skills], index) => (
            <FadeIn key={index} className="mb-8">
              <h3 className="mb-4 text-xl font-medium capitalize">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-4">
                {skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="rounded-full bg-secondary px-4 py-2 text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
}
