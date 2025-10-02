import * as React from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline";

type BadgeProps = {
  variant?: BadgeVariant;
} & React.HTMLAttributes<HTMLSpanElement>;

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-brand/15 text-brand ring-1 ring-inset ring-brand/30",
  outline: "border border-slate-700/70 text-slate-300",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
