import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-xl border border-[var(--border-color)] bg-white px-3 text-sm text-[var(--text-strong)] outline-none ring-offset-white placeholder:text-[var(--text-muted)] focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]",
        className,
      )}
      {...props}
    />
  );
}
