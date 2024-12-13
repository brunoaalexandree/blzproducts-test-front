import { Skeleton } from '@/ui/components/shadcn/skeleton';

export function ProductDetailSkeleton() {
  return (
    <div className="w-full max-w-screen-xl flex mt-20 gap-10">
      <Skeleton className="w-full max-w-96 h-[300px]" />
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Skeleton className="w-full h-12" />
          <Skeleton className="w-full h-12 mt-2" />
          <Skeleton className="w-full h-12 mt-10" />
          <Skeleton className="w-full h-12 mt-4" />
        </div>
        <Skeleton className="w-full h-12 mt-10" />
      </div>
    </div>
  );
}
