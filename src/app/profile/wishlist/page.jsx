"use client";

import { ProfileShell } from "@/components/profile/profile-shell";
import { ProductGrid } from "@/components/product/product-grid";
import { useStore } from "@/context/store-context";

export default function ProfileWishlistPage() {
  const { wishlistProducts } = useStore();

  return (
    <ProfileShell title="My Wishlist" description="Your most loved saved products.">
      {wishlistProducts.length ? (
        <ProductGrid products={wishlistProducts} />
      ) : (
        <p className="text-slate-600">No products in wishlist yet.</p>
      )}
    </ProfileShell>
  );
}
