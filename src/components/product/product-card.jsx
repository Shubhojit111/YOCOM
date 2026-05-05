"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { useStore } from "@/context/store-context";

export function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <article className="group overflow-hidden flex flex-col h-full rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/shop/${product.slug}`} className="relative block h-56 shrink-0 overflow-hidden bg-slate-100">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105" 
        />
      </Link>
      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{product.category}</p>
            <Link href={`/shop/${product.slug}`} className="mt-1 block text-lg font-semibold text-slate-900">
              {product.name}
            </Link>
          </div>
          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            className={`shrink-0 rounded-full border p-2 hover:border-blue-500 hover:text-blue-600 ${
              isWishlisted ? "border-blue-500 text-blue-600" : "border-slate-200 text-slate-600"
            }`}
          >
            <Heart size={16} />
          </button>
        </div>
        <div className="mt-3 flex items-center gap-1 text-amber-500">
          <Star size={14} fill="currentColor" />
          <span className="text-sm font-medium text-slate-700">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2 mb-4">
          <p className="text-lg font-bold text-slate-900">{formatCurrency(product.price)}</p>
          {product.oldPrice ? <p className="text-sm text-slate-500 line-through">{formatCurrency(product.oldPrice)}</p> : null}
        </div>
        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={() => addToCart(product.id)}
            className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
