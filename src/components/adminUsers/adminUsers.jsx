import Image from "next/image";
import React from "react";
import avatar from "../../../public/noavatar.png";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const getData = async () => {
    const res = await fetch("https://animator-agency-v2.vercel.app/api/user", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Wrong fetch");
    }

    return res.json();
  };

  const users = await getData();

  return (
    <div className="flex flex-col gap-5">
      <h1>Users</h1>
      {users.map((user) => (
        <div className="flex items-center justify-between" key={user._id}>
          <div className="flex gap-3 text-center items-center justify-center">
            <Image
              src={user.img || avatar}
              alt="avatar"
              width={50}
              height={50}
            />
            <span className="">{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user._id} />
            <button className=" bg-red-500 p-2 rounded">Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
