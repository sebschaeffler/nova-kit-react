import * as React from "react";
import { cn } from "@nova/utils/style-utils";
import {
  DEFAULT_INPUT_BORDER,
  DEFAULT_READ_ONLY_INPUT,
} from "@nova/components/ui/constants";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded border border-input " +
            "bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground" +
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" +
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
Textarea.displayName = "Textarea";

export { Textarea };
