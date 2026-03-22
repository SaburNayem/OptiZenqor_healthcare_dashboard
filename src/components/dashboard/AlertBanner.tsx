import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export function AlertBanner({ text, critical = false }: { text: string; critical?: boolean }) {
  return (
    <div className={cn("rounded-xl border px-4 py-3 text-sm font-medium", critical ? "border-red-200 bg-red-50 text-red-700" : "border-sky-100 bg-sky-50 text-sky-700")}>
      <p className="flex items-center gap-2">
        <AlertTriangle className="h-4 w-4" />
        {text}
      </p>
    </div>
  );
}
