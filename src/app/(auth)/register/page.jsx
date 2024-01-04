import RegisterForm from "@/components/registerForm/registerForm";
import React from "react";

const Register = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-menuBg p-12 flex flex-col text-center gap-7 rounded">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
