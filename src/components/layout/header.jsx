"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import { navLinks, promoTexts } from "@/data/site";
import { useStore } from "@/context/store-context";

export function Header() {
  const { cartCount, wishlistCount, isLoggedIn } = useStore();
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="border-b border-slate-100 bg-slate-900 text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-4 px-5 py-2 text-xs font-medium lg:px-8">
          {promoTexts.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <button type="button" className="rounded-lg border border-slate-200 p-2 md:hidden" aria-label="Menu">
            <Menu size={18} />
          </button>
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
            YOCOM
          </Link>
        </div>
        <form onSubmit={handleSearch} className="hidden max-w-xl flex-1 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 md:flex">
          <Search size={16} className="text-slate-500" />
          <input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products, brands and more..." 
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" 
          />
        </form>
        <div className="flex items-center gap-1">
          <Link
            href={isLoggedIn ? "/logout" : "/login"}
            className="hidden rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 sm:inline-block"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Link>
          <Link href={isLoggedIn ? "/profile" : "/login"} className="rounded-full p-2 text-slate-600 hover:bg-slate-100">
            <User size={19} />
          </Link>
          <Link href="/wishlist" className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100">
            <Heart size={19} />
            {wishlistCount > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 rounded-full bg-blue-600 px-1.5 text-[10px] font-bold text-white">
                {wishlistCount}
              </span>
            ) : null}
          </Link>
          <Link href="/cart" className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100">
            <ShoppingCart size={19} />
            {cartCount > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 rounded-full bg-slate-900 px-1.5 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
      <nav className="mx-auto hidden w-full max-w-7xl items-center gap-6 px-5 pb-3 text-sm font-semibold text-slate-700 md:flex lg:px-8">
        {navLinks.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`transition-colors ${isActive ? "text-blue-600" : "hover:text-blue-600"}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
