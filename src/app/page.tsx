import Logo from "@/components/Logo";
import BlogSection from "@/components/home/Blog";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <div className="max-w-2xl px-2 mx-auto">
        <div className="py-12">
          <div className="relative mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl font-bold flex items-center justify-center gap-2 md:gap-4 mb-4">
              Roshan Paudel
              <div className="w-16 md:w-20 right-0 -bottom-10">
                <Logo />
              </div>
            </h1>
            <p className="md:text-lg mb-8">Fullsatck Web Developer</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/pp.png" // Replace with your profile image URL
                  alt="Profile"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold  mb-4">About Me</h2>
                <p className=" mb-4">
                  Hello! I'm a passionate web developer and designer with a
                  focus on creating user-friendly and visually appealing
                  websites. I love turning ideas into reality through code and
                  design.
                </p>
                <p className=" mb-4">
                  Feel free to explore my portfolio and reach out if you have
                  any questions or collaboration opportunities.
                </p>
                <div className="mt-2">
                  <Button>
                    <a>View Portfolio</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BlogSection />
      </div>
    </>
  );
};

export default page;
