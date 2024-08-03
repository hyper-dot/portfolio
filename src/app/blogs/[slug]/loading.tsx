import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl space-y-9 pt-20">
      <Skeleton className="h-4 w-20 bg-black/10"></Skeleton>

      <div className="w-full space-y-2">
        <Skeleton className="h-12 w-full bg-black/10"></Skeleton>
        <Skeleton className="h-12 w-2/3 bg-black/10"></Skeleton>
      </div>

      <div className="flex w-full justify-center gap-4">
        <Skeleton className="h-4 w-20 bg-black/10"></Skeleton>
        <Skeleton className="h-4 w-20 bg-black/10"></Skeleton>
      </div>

      <div className="space-y-4">
        <div className="flex w-full justify-center gap-4">
          <Skeleton className="h-6 w-1/3 bg-black/10"></Skeleton>
          <Skeleton className="h-6 w-full bg-black/10"></Skeleton>
        </div>
        <div className="flex w-full justify-center gap-4">
          <Skeleton className="h-6 w-1/3 bg-black/10"></Skeleton>
          <Skeleton className="h-6 w-full bg-black/10"></Skeleton>
        </div>

        <div className="space-y-4">
          <div className="flex w-full justify-center gap-4">
            <Skeleton className="h-6 w-4/5 bg-black/10"></Skeleton>
            <Skeleton className="h-6 w-full bg-black/10"></Skeleton>
          </div>
          <div className="flex w-full justify-center gap-4">
            <Skeleton className="h-6 w-2/5 bg-black/10"></Skeleton>
            <Skeleton className="h-6 w-full bg-black/10"></Skeleton>
          </div>

          <Skeleton className="h-[300px] lg:w-2/3"></Skeleton>
        </div>
      </div>
    </div>
  );
}
