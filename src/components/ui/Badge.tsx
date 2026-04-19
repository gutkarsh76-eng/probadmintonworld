import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        green:  "bg-brand-100 text-brand-700",
        gray:   "bg-gray-100 text-gray-700",
        yellow: "bg-yellow-100 text-yellow-700",
        red:    "bg-red-100 text-red-700",
      },
    },
    defaultVariants: { variant: "green" },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
