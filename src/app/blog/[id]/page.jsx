import Image from "next/image";
import React from "react";
import PostUser from "@/components/postUser/page";

const getPost = async (id) => {
  const res = await fetch(
    `https://animator-agency-v2-production.up.railway.app/api/blog/${id}`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    throw new Error("Wrong fetch");
  }

  return res.json();
};

const SingleBlog = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);
  return (
    <div className="flex gap-24">
      <div className="flex-1 relative h-[calc(100vh-200px)] hidden md:block">
        <Image
          src={
            post.img
              ? post.img
              : "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          alt="dog"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-2 flex-col flex gap-12">
        <h1 className="text-4xl md:text-6xl">{post.title}</h1>
        <PostUser userId={post.userId} />
        <div className="flex flex-col gap-2">
          <span>Published</span>
          <span>{post.createdAt.toString().slice(0, 10)}</span>
        </div>
        <div className="text-lg">{post.desc}</div>
      </div>
    </div>
  );
};

export default SingleBlog;
