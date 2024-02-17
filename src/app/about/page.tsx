import React from "react";
const page = () => {
  return (
    <div className="max-w-3xl  min-h-[80vh] w-full mx-auto">
      <h1 className="text-3xl">Work</h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 ">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Sep 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Front End Developer at Metalogic Software
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Worked with energetic teams. Built an AI powered Job Board platform
            for software engineers in USA. Worked in T3 Stack. Learned a lot
            about CSS, JS, React, Next
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Kickstarted my career as an Intern at StartupHire.
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Worked with energetic teams. Built an AI powered Job Board platform
            for software engineers in USA. Worked in T3 Stack. Learned a lot
            about CSS, JS, React, Next
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Feb 2020
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Covid Lockdown and Begining of my Journey
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Started cracking down neighbour's wifi. Slowly learned how to build
            web pages in html and css. And starting watching tutorials and
            building small & exciting stuffs. Dwelved in the relm of Linux.
            Installed more than 20 distros in my laptop. Experimented a lot.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Oct 2019
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Finished High School and Joined College
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            I hadn't decided what to pick as a major so went to banking major.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default page;
