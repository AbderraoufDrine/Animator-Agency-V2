import React from "react";
import logo from "../../../public/animator-agency logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex md:justify-between md:flex-row items-center h-[75px] mt-5 text-gray-500">
      <div className="font-bold">
        {" "}
        <Image src={logo} alt="logo" width={40} height={40} />
      </div>
      <div className="text-md">Animator Agency V2 Ⓒ</div>
    </div>
  );
};

export default Footer;
