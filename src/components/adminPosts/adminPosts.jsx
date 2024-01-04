import Image from "next/image";
import React from "react";
import avatar from "../../../public/noavatar.png";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const getData = async () => {
    const res = await fetch(
      "https://animator-agency-v2-production.up.railway.app/api/blog",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Wrong fetch");
    }

    return res.json();
  };

  const posts = await getData();

  return (
    <div className="flex flex-col gap-5">
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className="flex items-center justify-between" key={post.id}>
          <div className="flex gap-3 text-center items-center justify-center">
            <Image
              src={
                post.img
                  ? post.img
                  : "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt="avatar"
              width={50}
              height={50}
            />
            <span className="">{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post._id} />
            <button className=" bg-red-500 p-2 rounded">Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
