"use client";

import { useRouter } from "next/navigation";
import { useStore } from "@/context/store-context";
import { Heart } from "lucide-react";

export function ProductActions({ productId }) {
  const { addToCart, removeFromCart, cartItems, toggleWishlist, wishlist } = useStore();
  const router = useRouter();
  const saved = wishlist.includes(productId);
  const isInCart = cartItems.some((item) => item.productId === productId);

  const handleBuyNow = () => {
    addToCart(productId);
    router.push("/checkout");
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => isInCart ? removeFromCart(productId) : addToCart(productId)}
        className={`rounded-full px-6 py-3 font-semibold transition-colors ${
          isInCart 
            ? "bg-slate-200 text-slate-800 hover:bg-slate-300" 
            : "bg-slate-900 text-white hover:bg-slate-700"
        }`}
      >
        {isInCart ? "Remove Item" : "Add to Cart"}
      </button>
      <button
        type="button"
        onClick={() => toggleWishlist(productId)}
        className={`flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-colors ${
          saved 
            ? "border-red-500 bg-red-50 text-red-600 hover:bg-red-100" 
            : "border-slate-300 bg-white text-slate-900 hover:border-slate-500"
        }`}
      >
        <Heart size={18} fill={saved ? "currentColor" : "none"} />
        {saved ? "Remove Wishlist" : "Add Wishlist"}
      </button>
      <button
        type="button"
        onClick={handleBuyNow}
        className="rounded-full border border-blue-300 bg-blue-50 px-6 py-3 font-semibold text-blue-700 hover:border-blue-500"
      >
        Buy Now
      </button>
    </div>
  );
}
