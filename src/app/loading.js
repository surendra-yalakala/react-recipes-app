import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Loading() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Skeleton />
    </div>
  );
}

export default Loading;
