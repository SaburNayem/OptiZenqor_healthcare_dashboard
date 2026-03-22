"use client";

import { TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ErrorState({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">
      <p className="mb-4 flex items-center gap-2 text-sm font-semibold">
        <TriangleAlert className="h-4 w-4" />
        {message}
      </p>
      <Button variant="danger" onClick={() => window.location.reload()}>
        Retry
      </Button>
    </div>
  );
}
