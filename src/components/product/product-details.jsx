import { Star } from "lucide-react";

export function ProductDetails({ product }) {
  return (
    <div className="mt-16 space-y-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
      
      {/* Description Section */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-4">Description</h2>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="text-base leading-relaxed">
            {product.description || "Detailed description coming soon."}
          </p>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Specifications Section */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-6">Specifications</h2>
        <div className="grid gap-y-4">
          {product.specifications && product.specifications.length > 0 ? (
            product.specifications.map((spec, index) => (
              <div key={index} className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4 py-3 border-b border-slate-50 last:border-0">
                <dt className="font-semibold text-slate-900">{spec.label}</dt>
                <dd className="text-slate-600 sm:col-span-2">{spec.value}</dd>
              </div>
            ))
          ) : (
            <p className="text-slate-500">No specifications available for this product.</p>
          )}
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Reviews Section */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Reviews <span className="text-slate-500 font-normal text-lg">({product.reviews?.length || 0})</span>
        </h2>
        <div className="space-y-8">
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <article key={review.id} className="border-b border-slate-50 pb-8 last:border-0 last:pb-0">
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
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < review.rating ? "currentColor" : "none"} 
                        strokeWidth={i < review.rating ? 0 : 2} 
                        className={i >= review.rating ? "text-slate-300" : ""} 
                      />
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
      </section>
      
    </div>
  );
}