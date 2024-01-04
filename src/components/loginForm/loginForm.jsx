"use client";
import { useFormState } from "react-dom";
import { handleGithubLogin, login } from "@/lib/action";

import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <>
      <form action={formAction} className="flex flex-col text-center gap-7">
        <input
          type="text"
          placeholder="username"
          name="username"
          className="p-5 bg-Bg border-none rounded"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="p-5 bg-Bg border-none rounded"
        />
        <button className="p-5 cursor-pointer bg-btnBg text-white font-bold border-none rounded">
          Login
        </button>
        Or
      </form>
      <form action={handleGithubLogin}>
        <button className="p-5 cursor-pointer bg-gray-500 text-white font-bold border-none rounded">
          Login with Github
        </button>
      </form>
      {state?.error}
      <Link href="/register">
        No account? <b>Register</b>
      </Link>
    </>
  );
};

export default LoginForm;
