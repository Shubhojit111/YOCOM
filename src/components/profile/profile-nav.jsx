"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/profile", label: "Overview" },
  { href: "/profile/orders", label: "Orders" },
  { href: "/profile/wishlist", label: "Wishlist" },
  { href: "/profile/collections", label: "Collections" },
  { href: "/profile/settings", label: "Settings" },
];

export function ProfileNav() {
  const pathname = usePathname();

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">My Profile</p>
      <nav className="space-y-1">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-3 py-2 text-sm font-medium ${
              pathname === item.href ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/logout" className="block rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
          Logout
        </Link>
      </nav>
    </aside>
  );
}
