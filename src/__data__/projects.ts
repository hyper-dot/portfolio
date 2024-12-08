import MonsoonLogistics from "../../public/portfolio/monsoon-logistics.png";
import EzBooks from "../../public/portfolio/ezbooks.png";

export const projects = [
  {
    thumbnail: EzBooks,
    video: "/videos/ezbooks.mp4",
    title: "Ez Books",
    description:
      "Ez Books is an all-in-one platform for small businesses, simplifying operations like inventory management, sales and purchase tracking, and billing. Built with Next.js, React Query, and Redux Toolkit, it provides efficient dashboards and performance tracking, helping businesses streamline processes and focus on growth.",
    techStack: ["Next.js", "Tanstack Query", "Shadcn UI", "Tailwind"],
    liveLink: "https://ezbooks.rosanpaudel.com.np",
    codeLink: "https://github.com/hyper-dot/books",
    features: [
      "All-in-one platform for small businesses to manage inventory, sales, purchases, and billing.",
      "Efficient dashboards for performance tracking and decision-making.",
      "Built with Next.js for server-side rendering and optimized performance.",
      "React Query efficient data fetching & caching.",
      "Responsive design powered by Tailwind CSS for mobile-friendly user experience.",
    ],
  },
  {
    video: "/videos/monsoon-logistics.mp4",
    thumbnail: MonsoonLogistics,
    title: "Monsoon Logistics Landing Page",
    description:
      "Monsoon Logistics is a modern landing page designed for a logistics company, featuring dynamic Lottie animations and an AI-powered chatbot. Built with Next.js and Tailwind CSS, it provides a sleek, user-friendly experience, allowing visitors to easily access services, track shipments, and engage with the company through interactive elements.",
    techStack: ["Next.js", "Tailwind", "Lottie", "OpenAI"],
    liveLink: "https://monsoon-logistics.vercel.app/",
    // codeLink: "https://github.com/hyper-dot/monsoon-logistics",
    features: [
      "Dynamic Lottie animations for a modern, engaging user experience.",
      "AI-powered chatbot integration for seamless user interaction.",
      "Built with Next.js for optimized performance and scalability.",
      "Responsive design with Tailwind CSS for a mobile-friendly interface.",
      "Easy-to-navigate landing page with interactive elements for shipment tracking.",
    ],
  },
  /* {
    thumbnail: EzBooks,
    video: "/videos/taskmaster.mp4",
    title: "Taskmaster",
    description:
      "Ez Books is an all-in-one platform for small businesses, simplifying operations like inventory management, sales and purchase tracking, and billing. Built with Next.js, React Query, and Redux Toolkit, it provides efficient dashboards and performance tracking, helping businesses streamline processes and focus on growth.",
    techStack: ["Next.js", "Tanstack Query", "Shadcn UI", "Tailwind"],
    liveLink: "https://ezbooks.rosanpaudel.com.np",
    codeLink: "https://github.com/hyper-dot/books",
    features: [
      "All-in-one platform for small businesses to manage inventory, sales, purchases, and billing.",
      "Efficient dashboards for performance tracking and decision-making.",
      "Built with Next.js for server-side rendering and optimized performance.",
      "React Query efficient data fetching & caching.",
      "Responsive design powered by Tailwind CSS for mobile-friendly user experience.",
    ],
  } */
  ,
];
