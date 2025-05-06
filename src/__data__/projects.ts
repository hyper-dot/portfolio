import MonsoonLogistics from "../../public/portfolio/monsoon-logistics.png";
import EzBooks from "../../public/portfolio/ezbooks.png";
import Snipverse from "../../public/portfolio/snipverse.png";
import AICaller from "../../public/portfolio/aicaller.png";
import ListingsSg from '../../public/portfolio/listings.png'

export const projects = [
 
  {
    // video: "/videos/monsoon-logistics.mp4",
    thumbnail: Snipverse,
    title: "Snipverse",
    description:
      "Snipverse is a Web3 social media platform built on the XPR network. I contributed to developing key features including group chat functionality, Facebook and Instagram-like stories, ads dashboard, analytics dashboard, and real-time chat capabilities.",
    techStack: ["Next.js", "Tailwind", "Web3", "XPR Network", "Prisma", "PostgreSQL", "Supabase", "Stripe"],
    liveLink: "https://snipverse.com",
    // codeLink: "https://github.com/hyper-dot/monsoon-logistics",
    features: [
      "Implemented real-time group chat functionality with message threading and reactions",
      "Developed stories feature similar to Facebook and Instagram with customizable privacy settings",
      "Built comprehensive ads dashboard for campaign management and performance tracking",
      "Created analytics dashboard with detailed metrics and visualization tools",
      "Integrated Web3 functionality on the XPR network for decentralized content ownership",
    ],
  },
  {
    // video: "/videos/monsoon-logistics.mp4",
    thumbnail: AICaller,
    title: "AICaller",
    description:
      "AICaller is an AI-powered call management platform that allows users to purchase phone numbers and assign them to AI agents for handling both inbound and outbound calls. The platform enables users to create and manage call campaigns with automated AI interactions. I contributed by developing a new landing page and resolving critical issues with the inbound and outbound call functionality.",
    techStack: ["Next.js", "Tailwind", "Twilio", "Eleven Labs", "React", "Node.js"],
    liveLink: "https://aicaller.com",
    // codeLink: "https://github.com/hyper-dot/monsoon-logistics",
    features: [
      "Phone number acquisition and AI agent assignment system for automated call handling",
      "Campaign creation tools for both inbound and outbound call management",
      "Integration with Eleven Labs for natural-sounding AI voice synthesis",
      "Twilio implementation for reliable telephony infrastructure",
      "Redesigned landing page with improved user experience and conversion optimization",
    ],
  },
  {
    // video: "/videos/monsoon-logistics.mp4",
    thumbnail: ListingsSg,
    title: "ListingsSG",
    description:
      "ListingsSG is a comprehensive real estate platform for Singapore properties, featuring advanced filtering by MRT stations, schools, and locations. The platform enables users to upload listings while providing admin monitoring capabilities. It includes real-time chat with agents, auto-filling apartment details based on condominium information, and AI-powered title and description generation for enhanced user experience.",
    techStack: ["Next.js", "Tailwind", "Socket.io", "OpenAI", "Singapore Location API", "Mongoose"],
    liveLink: "https://listings.sg",
    // codeLink: "https://github.com/hyper-dot/monsoon-logistics",
    features: [
      "Advanced property filtering by nearest MRT stations, schools, and locations",
      "Real-time chat functionality with property agents",
      "Auto-filling apartment details based on condominium information",
      "Integration with Singapore Location API for enhanced user experience",
      "AI-powered title and description generation for property listings",
      "Comprehensive admin dashboard for monitoring and managing listings",
    ],
  },
  {
    thumbnail: EzBooks,
    video: "/videos/ezbooks.mp4",
    title: "Ez Books",
    description:
      "Ez Books is an all-in-one platform for small businesses, simplifying operations like inventory management, sales and purchase tracking, and billing. Built with Next.js, React Query, and Redux Toolkit, it provides efficient dashboards and performance tracking, helping businesses streamline processes and focus on growth.",
    techStack: ["Next.js", "Tanstack Query", "Shadcn UI", "Tailwind"],
    liveLink: "https://books.rosanpaudel.com.np",
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
];
