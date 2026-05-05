"use client";

import { useRouter } from "next/navigation";
import { useStore } from "@/context/store-context";

export function ProductActions({ productId }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const router = useRouter();
  const saved = wishlist.includes(productId);

  const handleBuyNow = () => {
    addToCart(productId);
    router.push("/checkout");
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => addToCart(productId)}
        className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700"
      >
        Add to Cart
      </button>
      <button
        type="button"
        onClick={() => toggleWishlist(productId)}
        className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 hover:border-slate-500"
      >
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
