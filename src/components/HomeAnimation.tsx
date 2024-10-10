"use client";
import Lottie from "lottie-react";
import animationData from "@/__data__/animation.json";

const HomeAnimation = () => {
  return (
    <div className="mx-auto w-full max-w-md">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default HomeAnimation;
