import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center">
        <div className="w-[100%] h-[400px] relative">
          <Image
            src={
              post.img
                ? post.img
                : "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt="blog Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <span className="text-sm">{post.createdAt.toString().slice(0, 10)}</span>

      <div>
        <h1 className="font-2xl mb-2">{post.title}</h1>
        <p className="mb-5 font-normal text-gray-500 w-[90%]">{post.desc} </p>
        <Link
          href={`/blog/${post.id}`}
          className="text-decoration-line: underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
