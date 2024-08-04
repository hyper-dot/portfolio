import { Skeleton } from "@/components/ui/skeleton";

function SingleBlog() {
  return (
    <div>
      <div className="space-y-2 pt-6">
        <Skeleton className="h-4 w-32 bg-black/10"></Skeleton>
        <div className="flex w-full justify-center gap-4">
          <Skeleton className="h-8 w-full bg-black/10"></Skeleton>
        </div>

        <div className="flex w-full justify-center gap-4">
          <Skeleton className="h-4 w-1/3 bg-black/10"></Skeleton>
          <Skeleton className="h-4 w-full bg-black/10"></Skeleton>
        </div>

        <div className="space-y-2">
          <div className="flex w-full justify-center gap-4">
            <Skeleton className="h-4 w-4/5 bg-black/10"></Skeleton>
            <Skeleton className="h-4 w-full bg-black/10"></Skeleton>
          </div>
          <div className="flex w-full justify-center gap-4">
            <Skeleton className="h-4 w-2/5 bg-black/10"></Skeleton>
            <Skeleton className="h-4 w-full bg-black/10"></Skeleton>
          </div>
        </div>
      </div>
      <Skeleton className="mt-4 h-4 w-20 bg-black/10"></Skeleton>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl space-y-9 pt-10">
      <div className="mb-10 flex w-full justify-center gap-4">
        <Skeleton className="h-8 w-1/3 bg-black/10"></Skeleton>
        <Skeleton className="h-8 w-2/6 bg-black/10"></Skeleton>
        <Skeleton className="h-8 w-3/4 bg-black/10"></Skeleton>
        <Skeleton className="h-8 w-1/6 bg-black/10"></Skeleton>
        <Skeleton className="h-8 w-3/4 bg-black/10"></Skeleton>
        <Skeleton className="h-8 w-3/4 bg-black/10"></Skeleton>
      </div>
      {Array.from({ length: 8 }).map((_, idx) => (
        <SingleBlog key={idx} />
      ))}
    </div>
  );
}
