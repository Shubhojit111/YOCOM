"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductGrid } from "@/components/product/product-grid";
import { SectionTitle } from "@/components/ui/section-title";
import { categories, products } from "@/data/products";

export function ShopContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const visibleProducts = useMemo(() => {
    let filtered = [...products];

    // When there is a query, ignore the category selection entirely
    if (query) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          (product.tags && product.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    } else if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Apply sorting
    if (sortOrder === "price_asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price_desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      // Default / Newest - sorting by ID as a proxy for newest
      filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [selectedCategory, query, sortOrder]);

  return (
    <div className="space-y-8">
      <SectionTitle 
        eyebrow="Catalog" 
        title={query ? `Search Results for "${query}"` : "All Products"} 
        description={query ? `Found ${visibleProducts.length} products.` : "Explore complete inventory with modern storefront styling."} 
      />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {!query ? (
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium ${
                  selectedCategory === category
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        ) : (
          <div /> 
        )}
        
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 outline-none hover:border-slate-300 focus:border-blue-500"
        >
          <option value="newest">Newest Arrivals</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
      
      {visibleProducts.length > 0 ? (
        <ProductGrid products={visibleProducts} />
      ) : (
        <div className="py-12 text-center text-slate-500">
          No products found matching your criteria.
        </div>
      )}
    </div>
  );
}