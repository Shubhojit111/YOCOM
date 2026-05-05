import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoading() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Skeleton className="h-[460px] w-full rounded-3xl" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-10 w-44" />
        <Skeleton className="h-28 w-full" />
      </div>
    </div>
  );
}
