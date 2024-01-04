import Image from "next/image";
import React from "react";
import about from "../../../public/about.png";

const About = () => {
  return (
    <div className="flex gap-24 justify-center text-center md:text-left">
      <div className="flex-1 flex flex-col gap-12">
        <h2 className=" text-btnBg font-medium">About Animator Agency</h2>
        <h1 className="text-3xl md:text-5xl font-bold">
          We know that good design means good business.
        </h1>
        <p className=" text-md md:text-lg font-light">
          We help our clients succeedd by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic. We care about your business and
          gurantee you that you will achieve your market goals
        </p>
        <div className="flex flex-col items-center gap-4 justify-between md:flex-row">
          <div className="flex flex-col gap-2">
            <h1 className="text-btnBg text-2xl font-semibold">15 K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-btnBg text-2xl font-semibold">15 K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-btnBg text-2xl font-semibold">15 K+</h1>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden xl:block">
        <Image src={about} alt="about png" fill className="object-contain" />
      </div>
    </div>
  );
};

export default About;
