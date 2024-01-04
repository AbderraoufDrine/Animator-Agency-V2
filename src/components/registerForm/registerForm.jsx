"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(register, undefined);

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className="flex flex-col text-center gap-7">
      <input
        type="text"
        placeholder="username"
        name="username"
        className="p-5 bg-Bg border-none rounded"
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        className="p-5 bg-Bg border-none rounded"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="p-5 bg-Bg border-none rounded"
      />
      <button className="p-5 cursor-pointer bg-btnBg text-white font-bold border-none rounded">
        Register
      </button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
