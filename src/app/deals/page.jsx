import { ProductGrid } from "@/components/product/product-grid";
import { dealsOfTheDay } from "@/data/products";

export default function DealsPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900">Today&apos;s Deals</h1>
      <p className="text-slate-600">Top discounted products curated every day.</p>
      <ProductGrid products={dealsOfTheDay} />
    </div>
  );
}
