"use client";

import Link from "next/link";
import { ProfileNav } from "@/components/profile/profile-nav";
import { useStore } from "@/context/store-context";

export function ProfileShell({ title, description, children }) {
  const { isLoggedIn } = useStore();

  if (!isLoggedIn) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-lg font-semibold text-slate-900">Please login to access your profile</p>
        <Link href="/login" className="mt-4 inline-block rounded-full bg-slate-900 px-6 py-2 font-semibold text-white">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <ProfileNav />
      <section className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6">
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-900">{title}</h1>
          {description ? <p className="mt-1 text-slate-600">{description}</p> : null}
        </div>
        {children}
      </section>
    </div>
  );
}
