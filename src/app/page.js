import Image from "next/image";
import React from "react";
import hero from "../../public/hero.gif";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex gap-24 text-center md:text-left">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-6xl md:text-8xl font-bold">
          Challenges in creative age
        </h1>
        <p className="text-lg">
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </p>
        <div className="flex gap-5 items-center justify-center md:justify-normal">
          <Link
            href="/about"
            className=" p-5 min-w-28 cursor-pointer rounded-md border-none bg-btnBg text-white"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className=" p-5 min-w-28 cursor-pointer rounded-md border-none bg-white text-black"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="relative flex-1 hidden xl:block">
        <Image src={hero} alt="hero gif" fill />
      </div>
    </div>
  );
};

export default Home;
