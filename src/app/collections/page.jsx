import Link from "next/link";
import { collections } from "@/data/collections";

export default function CollectionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900">Collections</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <article key={collection.slug} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">{collection.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{collection.description}</p>
            <Link href={`/collections/${collection.slug}`} className="mt-4 inline-block text-sm font-semibold text-blue-600">
              View collection
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
