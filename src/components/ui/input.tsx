import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils/utils";
import { DEFAULT_INPUT_BORDER, DEFAULT_READ_ONLY_INPUT } from "@/components";

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-input bg-background flex h-10 w-full rounded border px-3 py-2 text-sm " +
          "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium" +
          "placeholder:text-muted-foreground" +
          "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" +
          "disabled:cursor-not-allowed disabled:opacity-50",
          DEFAULT_READ_ONLY_INPUT,
          DEFAULT_INPUT_BORDER,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
