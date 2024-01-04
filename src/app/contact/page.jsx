import Image from "next/image";
import React from "react";
import contact from "../../../public/contact.png";

const Contact = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-24 items-center">
      <div className="relative flex-1">
        <Image src={contact} alt="contact pic" className="object-contain" />
      </div>
      <div className="flex-1 items-center justify-center w-[100%]">
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name and Surname"
            className=" p-5 rounded border-none outline-none bg-menuBg text-white"
          ></input>
          <input
            type="text"
            placeholder="Email Address"
            className=" p-5 rounded border-none outline-none bg-menuBg text-white"
          ></input>
          <input
            type="text"
            placeholder="Phone number"
            className=" p-5 rounded border-none outline-none bg-menuBg text-white"
          ></input>
          <textarea
            type="text"
            cols="30"
            rows="10"
            placeholder="Message"
            className=" p-5 rounded border-none outline-none bg-menuBg text-white"
          ></textarea>
          <button className=" p-5 bg-btnBg text-white font-bold border-none rounded cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
