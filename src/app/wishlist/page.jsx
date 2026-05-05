"use client";

import { ProductGrid } from "@/components/product/product-grid";
import { useStore } from "@/context/store-context";

export default function WishlistPage() {
  const { wishlistProducts } = useStore();

  return (
    <div className="space-y-8">
      <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900">Wishlist</h1>
      <p className="text-slate-600">Products you saved for later checkout.</p>
      {wishlistProducts.length ? (
        <ProductGrid products={wishlistProducts} />
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
          No items in wishlist yet.
        </div>
      )}
    </div>
  );
}
