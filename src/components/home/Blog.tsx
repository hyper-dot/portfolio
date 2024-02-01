import { MoveRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "Getting Started with React Hooks Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://placekitten.com/800/400", // Replace with your blog post image URL
    },
    {
      id: 2,
      title: "Building a Responsive Website with Tailwind CSS",
      content:
        "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://placekitten.com/800/401", // Replace with your blog post image URL
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
        <div className="flex flex-col mt-6">
          {blogPosts.map((post) => (
            <>
              <div
                key={post.id}
                className="group cursor-pointer py-4 px-4 hover:backdrop-contrast-75 dark:hover:backdrop-contrast-125  transition-all duration-300 rounded-md"
              >
                <h3 className="font-bold mb-2 line-clamp-1">{post.title}</h3>
                <p className="text-gray-600 text-sm dark:text-gray-500 line-clamp-2">
                  {post.content}
                </p>
                <a
                  href={`#blog/${post.id}`} // Replace with the actual link to the blog post
                  className="mt-4 inline-flex transition duration-300"
                >
                  Read More
                  <MoveRight className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-3" />
                </a>
              </div>
              <div className="h-[1px] opacity-10 group-hover:opacity-100 duration-500 transition-all bg-gradient-to-l from-muted via-primary to-muted"></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
