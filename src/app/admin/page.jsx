import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import { auth } from "@/lib/auth";
import React from "react";

const Admin = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col justify-center xl:flex-col xl:gap-24 xl:mt-12">
      <div className="flex-none xl:flex xl:gap-24">
        <div className="flex-1 mb-5">
          <AdminPosts />
        </div>
        <div className="flex-1 mb-5">
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className="flex-none xl:flex xl:gap-24">
        <div className="flex-1 mb-5">
          <AdminUsers />
        </div>
        <div className="flex-1 mb-5">
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default Admin;
