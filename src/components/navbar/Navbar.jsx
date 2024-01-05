import React from "react";
import Links from "./links/Links";
import { auth } from "@/lib/auth";
import logo from "../../../public/animator-agency logo.png";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="h-[100px] flex items-center justify-between">
      <div className="text-3xl font-bold">
        <Image src={logo} alt="logo" width={75} height={75} />
      </div>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
