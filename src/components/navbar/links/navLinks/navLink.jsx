"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ item, setOpen }) => {
  const pathname = usePathname();
  let condition = pathname === item.path;
  return (
    <Link
      onClick={() => setOpen(false)}
      href={item.path}
      key={item.title}
      className={`hover:bg-white hover:text-black min-w-10 p-2 rounded-2xl font-medium text-center ${
        +condition ? "bg-white text-black" : ""
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
