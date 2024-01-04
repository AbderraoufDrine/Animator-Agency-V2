"use client";
import { addUser } from "@/lib/action";
import React from "react";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[100%] xl:w-[500px] bg-menuBg p-12 flex flex-col text-center gap-7 rounded">
        <form action={formAction} className="flex flex-col text-center gap-7">
          <h1>Add New User</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-5 bg-white border-none rounded text-black"
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="p-5 bg-white border-none rounded text-black"
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-5 bg-white border-none rounded text-black"
          ></input>
          <select
            name="isAdmin"
            className="p-5 bg-white border-none rounded text-black"
          >
            <option value="false">User</option>
            <option value="true">Admin</option>
          </select>
          <button className="p-5 cursor-pointer bg-btnBg text-white font-bold border-none rounded">
            Add User
          </button>
          {state && state.error}
        </form>
      </div>
    </div>
  );
};

export default AdminUserForm;
