"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "reviews", label: `Reviews (${product.reviews?.length || 0})` },
  ];

  return (
    <div className="mt-16 rounded-3xl border border-slate-200 bg-white overflow-hidden">
      <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50 px-4 pt-4 sm:px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
              activeTab === tab.id
                ? "border-slate-900 text-slate-900"
                : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6 sm:p-8">
        {activeTab === "description" && (
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="text-base leading-relaxed">
              {product.description || "Detailed description coming soon."}
            </p>
          </div>
        )}

        {activeTab === "specifications" && (
          <div className="grid gap-y-4">
            {product.specifications && product.specifications.length > 0 ? (
              product.specifications.map((spec, index) => (
                <div key={index} className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4 py-3 border-b border-slate-100 last:border-0">
                  <dt className="font-semibold text-slate-900">{spec.label}</dt>
                  <dd className="text-slate-600 sm:col-span-2">{spec.value}</dd>
                </div>
              ))
            ) : (
              <p className="text-slate-500">No specifications available for this product.</p>
            )}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review) => (
                <article key={review.id} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700">
                      {review.user.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{review.user}</p>
                      <p className="text-xs text-slate-500">{review.date}</p>
                    </div>
                    <div className="ml-auto flex items-center gap-0.5 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 2} className={i >= review.rating ? "text-slate-300" : ""} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">{review.comment}</p>
                </article>
              ))
            ) : (
              <p className="text-slate-500">No reviews yet. Be the first to review this product!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}