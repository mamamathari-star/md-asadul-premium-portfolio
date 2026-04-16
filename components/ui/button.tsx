"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  asChild?: boolean;
}

const buttonVariants = {
  primary:
    "bg-white text-black hover:bg-[#D4AF37] hover:text-black font-semibold",
  secondary:
    "bg-transparent border border-white/20 text-white hover:border-white/60 hover:bg-white/5",
  ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
  outline:
    "bg-transparent border border-[#D4AF37]/40 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5",
};

const buttonSizes = {
  sm: "px-5 py-2.5 text-sm rounded-md",
  md: "px-7 py-3.5 text-base rounded-lg",
  lg: "px-9 py-4.5 text-base rounded-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300",
          "ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97] whitespace-nowrap",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
