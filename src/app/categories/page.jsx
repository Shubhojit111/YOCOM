import { categories } from "@/data/products";

export default function CategoriesPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900">All Categories</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <article key={category} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-lg font-semibold text-slate-900">{category}</p>
            <p className="mt-2 text-sm text-slate-600">Curated picks and bestselling products in {category}.</p>
          </article>
        ))}
      </div>
    </div>
  );
}
