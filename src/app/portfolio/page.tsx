import BackButton from "@/components/BackButton";
import React from "react";
import { projects, journies } from "./data";
import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";

const page = () => {
  // return (
  //   <div className="max-w-2xl px-2 min-h-[80vh] md:mx-auto pt-10">
  //     <div className="py-10">
  //       <BackButton />
  //     </div>
  //     <div>
  //       <h1 className="text-3xl py-4">Projects</h1>
  //       <ul className="space-y-4">
  //         {projects.map((project, idx) => (
  //           <li key={idx}>
  //             <div className="space-y-2">
  //               <h3 className="font-medium">
  //                 <Link href="#" className="no-underline pl-1 font-normal">
  //                   <span className="underline underline-offset-4">
  //                     {project.title}
  //                   </span>
  //                   <span className="mx-2">
  //                     <ArrowUpRightFromSquare className="inline" size={16} />{" "}
  //                   </span>
  //                 </Link>
  //               </h3>
  //               <p className="text-muted-foreground text-sm">{project.desc}</p>
  //             </div>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //     <div>
  //       <h1 className="text-3xl py-4">My Journey</h1>
  //       <ol className="relative border-s border-neutral-300 dark:border-gray-700 ">
  //         {journies.map((journey, idx) => (
  //           <li className="mb-10 ms-4" key={idx}>
  //             <div className="absolute w-3 h-3 bg-neutral-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-neutral-900 dark:bg-neutral-700"></div>
  //             <time className="mb-1 text-sm font-normal leading-none text-muted-foreground dark:text-neutral-500">
  //               {journey.start}
  //             </time>
  //             {journey.end && (
  //               <time className="mb-1 text-sm font-normal leading-none text-muted-foreground dark:text-neutral-500">
  //                 {" - "}
  //                 {journey.end}
  //               </time>
  //             )}
  //             <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
  //               {journey.title}
  //             </h3>
  //             <p className="mb-4 text-base font-normal text-neutral-500 dark:text-muted-foreground">
  //               {journey.desc}
  //             </p>
  //           </li>
  //         ))}
  //       </ol>
  //     </div>
  //   </div>
  // );
  return (
    <div className="h-[80vh] flex items-center justify-center">
      comming soon ...
    </div>
  );
};

export default page;
