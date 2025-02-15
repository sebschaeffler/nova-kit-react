import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@nova/utils/style-utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover disabled:bg-primary-disabled",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive-hover hover:text-destructive-hoverText " +
          "disabled:border-destructive-disabled disabled:text-destructive-disabled",
        outline:
          "border border-[#9CA3AF] bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "border text-secondary-foreground hover:bg-secondary-hover  " +
          "disabled:border-secondary-disabled disabled:text-secondary-disabled",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        "ghost-destructive": "text-destructive hover:bg-destructive/5",
        link: "text-primary underline-offset-4 hover:underline",
        "underline-link":
          "text-underline-link underline-offset-4 underline hover:text-underline-link-hover",
        dropdown: "text-sm text-popover-foreground font-normal justify-start",
      },
      size: {
        default: "h-10 rounded px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        dropdown: "h-0 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
