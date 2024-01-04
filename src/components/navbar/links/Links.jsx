"use client";
import React, { useEffect, useState } from "react";
import NavLink from "./navLinks/navLink";
import Image from "next/image";
import menu from "../../../../public/menu.png";
import { handleLogOut } from "@/lib/action";

const Links = ({ session }) => {
  const links = [
    {
      key: 0,
      title: "Homepage",
      path: "/",
    },
    {
      key: 1,
      title: "About",
      path: "/about",
    },
    {
      key: 2,
      title: "Contact",
      path: "/contact",
    },
    {
      key: 3,
      title: "Blog",
      path: "/blog",
    },
  ];

  const [open, setOpen] = useState(false);

  const isAdmin = true;

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div>
      <div className="hidden md:flex md:items-center md:gap-3">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogOut}>
              <button className="cursor-pointer p-2 font-bold bg-btnBg text-white">
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src={menu}
        alt="menu container"
        onClick={() => setOpen((prev) => !prev)}
        className=" md:hidden block cursor-pointer w-10 h-10 font-bold"
      />
      {open && (
        <div className=" absolute top-[100px] right-0 w-screen h-[calc(100vh-100px)] overflow-y-hidden flex flex-col items-center justify-center gap-2 bg-menuBg p-2 md:hidden z-20">
          {links.map((link) => (
            <NavLink item={link} key={link.title} setOpen={setOpen} />
          ))}
          {session?.user ? (
            <>
              {session.user?.isAdmin && (
                <NavLink item={{ title: "Admin", path: "/admin" }} />
              )}
              <form action={handleLogOut}>
                <button className="cursor-pointer p-2 font-bold bg-btnBg text-white">
                  Logout
                </button>
              </form>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
