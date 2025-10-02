import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-slate-950 shadow-[0_10px_30px_-12px_rgba(56,189,248,0.8)] hover:-translate-y-[1px] hover:bg-brand-dark focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand/70",
  secondary:
    "border border-slate-700/80 bg-[#16161a] text-slate-200 shadow-sm hover:-translate-y-[1px] hover:bg-[#1f1f25] hover:text-brand focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand/40",
  ghost:
    "bg-transparent text-slate-400 hover:text-brand focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand/60",
};

export const buttonVariants = (variant: ButtonVariant = "primary") =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
    variantClasses[variant],
  );

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants(variant), className)}
      type={type}
      {...props}
    />
  ),
);

Button.displayName = "Button";
