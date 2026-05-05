"use client";

import { ProfileShell } from "@/components/profile/profile-shell";
import { useStore } from "@/context/store-context";

export default function ProfilePage() {
  const { wishlistCount, cartCount } = useStore();

  return (
    <ProfileShell title="Profile Overview" description="Manage your account, orders, and saved products.">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Orders</p>
          <p className="text-2xl font-bold text-slate-900">12</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Wishlist</p>
          <p className="text-2xl font-bold text-slate-900">{wishlistCount}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Cart Items</p>
          <p className="text-2xl font-bold text-slate-900">{cartCount}</p>
        </div>
      </div>
    </ProfileShell>
  );
}
