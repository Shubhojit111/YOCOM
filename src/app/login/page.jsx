"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/context/store-context";

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoggedIn } = useStore();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/profile");
    }
  }, [isLoggedIn, router]);

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6">
      <h1 className="font-display text-3xl font-bold text-slate-900">Login</h1>
      <p className="mt-2 text-sm text-slate-600">Frontend demo authentication (no backend required).</p>
      <form
        className="mt-5 space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          login();
          router.push("/profile");
        }}
      >
        <input required className="h-11 w-full rounded-xl border border-slate-300 px-4" placeholder="Email" />
        <input required type="password" className="h-11 w-full rounded-xl border border-slate-300 px-4" placeholder="Password" />
        <button type="submit" className="w-full rounded-full bg-slate-900 px-6 py-2.5 font-semibold text-white hover:bg-slate-700">
          Login
        </button>
      </form>
    </div>
  );
}
