import { Skeleton } from '@/ui/components/shadcn/skeleton';

export function ProductsSkeleton() {
  return (
    <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-4 gap-10 mt-10 px-7 lg:px-0">
      <div className="w-full p-4 border rounded-md flex flex-col">
        <Skeleton className="w-full h-[150px]" />
        <Skeleton className="w-full h-10 mt-5" />
        <Skeleton className="w-full h-5 mt-2" />
        <Skeleton className="w-full h-10 mt-5" />
      </div>
      <div className="w-full p-4 border rounded-md flex flex-col">
        <Skeleton className="w-full h-[150px]" />
        <Skeleton className="w-full h-10 mt-5" />
        <Skeleton className="w-full h-5 mt-2" />
        <Skeleton className="w-full h-10 mt-5" />
      </div>
      <div className="w-full p-4 border rounded-md flex flex-col">
        <Skeleton className="w-full h-[150px]" />
        <Skeleton className="w-full h-10 mt-5" />
        <Skeleton className="w-full h-5 mt-2" />
        <Skeleton className="w-full h-10 mt-5" />
      </div>
      <div className="w-full p-4 border rounded-md flex flex-col">
        <Skeleton className="w-full h-[150px]" />
        <Skeleton className="w-full h-10 mt-5" />
        <Skeleton className="w-full h-5 mt-2" />
        <Skeleton className="w-full h-10 mt-5" />
      </div>
      <div className="w-full p-4 border rounded-md flex flex-col">
        <Skeleton className="w-full h-[150px]" />
        <Skeleton className="w-full h-10 mt-5" />
        <Skeleton className="w-full h-5 mt-2" />
        <Skeleton className="w-full h-10 mt-5" />
      </div>
      <div className="w-full p-4 border rounded-md flex flex-col">
        <Skeleton className="w-full h-[150px]" />
        <Skeleton className="w-full h-10 mt-5" />
        <Skeleton className="w-full h-5 mt-2" />
        <Skeleton className="w-full h-10 mt-5" />
      </div>
      <div className="w-full p-4 border rounded-md flex flex-col">
        <Skeleton className="w-full h-[150px]" />
        <Skeleton className="w-full h-10 mt-5" />
        <Skeleton className="w-full h-5 mt-2" />
        <Skeleton className="w-full h-10 mt-5" />
      </div>
      <div className="w-full p-4 border rounded-md flex flex-col">
        <Skeleton className="w-full h-[150px]" />
        <Skeleton className="w-full h-10 mt-5" />
        <Skeleton className="w-full h-5 mt-2" />
        <Skeleton className="w-full h-10 mt-5" />
      </div>
    </div>
  );
}
