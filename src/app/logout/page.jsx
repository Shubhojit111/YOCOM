"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/context/store-context";

export default function LogoutPage() {
  const { logout } = useStore();
  const router = useRouter();

  useEffect(() => {
    logout();
    router.replace("/");
  }, [logout, router]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
      Logging you out...
    </div>
  );
}
