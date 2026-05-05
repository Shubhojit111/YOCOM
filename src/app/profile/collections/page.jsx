import Link from "next/link";
import { ProfileShell } from "@/components/profile/profile-shell";
import { collections } from "@/data/collections";

export default function ProfileCollectionsPage() {
  return (
    <ProfileShell title="My Collections" description="Saved product collections for quick shopping.">
      <div className="grid gap-4 sm:grid-cols-2">
        {collections.map((collection) => (
          <article key={collection.slug} className="rounded-xl border border-slate-200 p-4">
            <h2 className="font-semibold text-slate-900">{collection.name}</h2>
            <p className="mt-1 text-sm text-slate-600">{collection.description}</p>
            <Link href={`/collections/${collection.slug}`} className="mt-3 inline-block text-sm font-semibold text-blue-600">
              Open Collection
            </Link>
          </article>
        ))}
      </div>
    </ProfileShell>
  );
}
