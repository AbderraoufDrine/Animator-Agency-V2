import LoginForm from "@/components/loginForm/loginForm";
import { auth } from "@/lib/auth";
import React from "react";

const Login = async () => {
  const session = await auth();

  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-menuBg p-12 flex flex-col text-center gap-7 rounded">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
