"use client";

import { addPost } from "@/lib/action";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  const [image, setImage] = useState("");

  const convertTo64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {};
  };

  return (
    <div className="flex items-center justify-center">
      <div className=" w-[100%] xl:w-[500px] bg-menuBg p-12 flex flex-col text-center gap-7 rounded">
        <form action={formAction} className="flex flex-col text-center gap-7">
          <h1>Add New Post</h1>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="p-5  border-none rounded text-black"
          ></input>
          <input
            type="text"
            name="id"
            placeholder="id"
            className="p-5  border-none rounded text-black"
          ></input>
          <textarea
            rows={10}
            color={30}
            name="desc"
            placeholder="Desc"
            className="p-5  border-none rounded text-black"
          ></textarea>
          <input
            type="file"
            placeholder="Image"
            className="p-5  border-none rounded text-black"
            onChange={convertTo64}
          ></input>
          <input type="hidden" name="img" value={image} />
          <input type="hidden" name="userId" value={userId} />
          <button className="p-5 cursor-pointer bg-btnBg text-white font-bold border-none rounded">
            Add Post
          </button>
          {state && state.error}
        </form>
      </div>
    </div>
  );
};

export default AdminPostForm;
