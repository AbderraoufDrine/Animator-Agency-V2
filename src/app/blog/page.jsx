import BlogCard from "@/components/blogCard/blogCard";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Wrong fetch");
  }

  return res.json();
};
const Blog = async () => {
  const posts = await getData();
  return (
    <div className="flex flex-wrap gap-5">
      {posts.map((post) => (
        <div className="w-[100%] md:w-[45%] xl:w-[30%]" key={post.id}>
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
