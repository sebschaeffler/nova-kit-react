import React from "react";
import { Skeleton } from "@/components";

export const SkeletonCard = () => {
  return (
    <div className="m-8 flex w-full flex-col items-center justify-center space-y-3">
      <Skeleton className="h-[125px] w-[90%] rounded-lg" />
      <div className="flex w-[90%]">
        <div className="flex w-full flex-col space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[50%]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[50%]" />
        </div>
      </div>
    </div>
  );
};
