import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { data } from "./constants";


export default function page() {
  return (
    <div className="mt-10">
      <h1 className="mb-8 text-center text-4xl font-semibold">My Story</h1>
      <FadeIn className="px-2 text-muted-foreground">
        As a developer with full-stack expertise in the <b>MERN </b> stack,
        <b>TypeScript</b> , and <b>PostgreSQL</b> & <b>Mongodb</b> , I&apos;ve
        excelled in remote environments at StartupHire, Metalogic, and Sand
        Console, creating dynamic web applications. <br /> A <b>Linux</b>{" "}
        enthusiast passionate about continuous learning, I seek opportunities to
        apply my React and Node.js expertise while contributing to innovative
        solutions.
      </FadeIn>
      <div className="mx-auto mb-12 mt-10 flex max-w-3xl flex-col gap-8 px-4">

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
