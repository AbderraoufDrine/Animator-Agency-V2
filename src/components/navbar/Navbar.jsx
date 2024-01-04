import React from "react";
import Links from "./links/Links";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="h-[100px] flex items-center justify-between">
      <div className="text-3xl font-bold">Logo</div>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
