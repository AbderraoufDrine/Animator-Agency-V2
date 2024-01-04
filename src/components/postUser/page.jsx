import Image from "next/image";
import React from "react";
import avatar from "../../../public/noavatar.png";

const getUserData = async (id) => {
  const res = await fetch(
    `https://animator-agency-v2-production.up.railway.app/api/user/${id}`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
  }

  return res.json();
};

const PostUser = async ({ userId }) => {
  const obj = {
    id: userId,
  };
  const { id } = obj;
  const user = await getUserData(id);
  return (
    <>
      <div className="flex gap-5">
        <Image
          src={user.img ? user.img : avatar}
          alt="avatar"
          width={50}
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-bold text-gray-500">Author</span>
        <span className="font-medium">{user.username}</span>
      </div>
    </>
  );
};

export default PostUser;
