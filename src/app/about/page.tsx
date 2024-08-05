import { FadeIn, FadeInStagger } from "@/components/FadeIn";

export default function page() {
  // return (
  //   <div className="background-div flex flex-1 items-center justify-center text-center text-3xl md:text-5xl">
  //     Stay Tuned ...
  //   </div>
  // );

  return (
    <div className="mt-10">
      <h2 className="text-center">My Story</h2>
      <FadeInStagger className="mx-auto mt-10 grid max-w-3xl grid-cols-2">
        <FadeIn>
          <div>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          </div>
        </FadeIn>
        <div />
        <div />
        <FadeIn>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </FadeIn>
      </FadeInStagger>
    </div>
  );
}
