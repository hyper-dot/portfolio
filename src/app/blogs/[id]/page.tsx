import BackBtn from "@/components/BackBtn";
import Loading from "./loading";

const BlogPost = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-9 pt-20">
      <BackBtn />
      <h1 className="text-5xl">
        The Transformative Power of Artificial Intelligence
      </h1>

      <div className="mt-20 space-y-9">
        <p>
          In recent years, Artificial Intelligence (AI) has rapidly evolved from
          a futuristic concept to an integral part of our everyday lives. From
          virtual assistants and recommendation algorithms to advanced robotics
          and autonomous vehicles, AI is transforming industries and reshaping
          the way we interact with technology. This blog explores the
          transformative power of AI, its current applications, and the
          potential it holds for the future.
        </p>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EEyF7nQS8ekpx4fDNPMRgcpp-HRxd9VFhw&s"
          alt=""
          width={500}
        />
        <div>
          <h2 className="text-3xl">The Rise of AI</h2>
          Artificial Intelligence refers to the simulation of human intelligence
          in machines that are programmed to think and learn like humans. The
          concept has been around for decades, but it is only in the last decade
          that AI has seen exponential growth. This surge is driven by
          advancements in computational power, the availability of vast amounts
          of data, and the development of sophisticated algorithms.
        </div>
        <div>
          <h2 className="text-3xl">The Rise of AI</h2>
          Artificial Intelligence refers to the simulation of human intelligence
          in machines that are programmed to think and learn like humans. The
          concept has been around for decades, but it is only in the last decade
          that AI has seen exponential growth. This surge is driven by
          advancements in computational power, the availability of vast amounts
          of data, and the development of sophisticated algorithms.
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
