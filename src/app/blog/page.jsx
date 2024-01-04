import BlogCard from "@/components/blogCard/blogCard";
import { getPosts } from "@/lib/action";
import React from "react";

// const getData = async () => {
//   const res = await fetch("https://animator-agency-v2.vercel.app/api/blog", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Wrong fetch");
//   }

//   return res.json();
// };
const Blog = async () => {
  const posts = await getPosts();
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
