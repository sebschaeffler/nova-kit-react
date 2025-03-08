import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils/utils";
import { DEFAULT_INPUT_BORDER, DEFAULT_READ_ONLY_INPUT } from "@/components/constants";

const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "border-input flex min-h-[80px] w-full rounded border",
        "bg-background ring-offset-background placeholder:text-muted-foreground px-3 py-2 text-sm",
        "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        DEFAULT_READ_ONLY_INPUT,
        DEFAULT_INPUT_BORDER,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
