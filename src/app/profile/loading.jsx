import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileLoading() {
  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <Skeleton className="h-64 w-full rounded-2xl" />
      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <Skeleton className="h-9 w-60" />
        <Skeleton className="h-5 w-full" />
        <div className="grid gap-4 sm:grid-cols-3">
          <Skeleton className="h-24 w-full rounded-xl" />
          <Skeleton className="h-24 w-full rounded-xl" />
          <Skeleton className="h-24 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}
