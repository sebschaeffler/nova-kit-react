import { ComponentProps } from "react";
import { useTheme } from "next-themes";
import { toast, Toaster as Sonner } from "sonner";
import { cn } from "@/utils";
import { CircleCheck, InfoIcon, OctagonAlert, TriangleAlert } from "lucide-react";

type ToasterProps = ComponentProps<typeof Sonner>

const DEFAULT =
  "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg rounded";

const DEFAULT_ICONS = {
  error: <OctagonAlert size={20} className="stroke-[#E00034]" />,
  success: <CircleCheck size={20} className="stroke-[#66CC33]" />,
  warning: <TriangleAlert size={20} className="stroke-[#FFCC00]" />,
  info: <InfoIcon size={20} className="stroke-[#0092FF]" />,
};

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group w-[356px]"
      toastOptions={{
        classNames: {
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          error: cn(
            DEFAULT,
            "group-[.toaster]:bg-[#FFCCD8] group-[.toaster]:border-[#E00034]",
          ),
          success: cn(
            DEFAULT,
            "group-[.toaster]:bg-[#E0F5D6] group-[.toaster]:border-[#66CC33]",
          ),
          warning: cn(
            DEFAULT,
            "group-[.toaster]:bg-[#FFF5CC] group-[.toaster]:border-[#FFCC00]",
          ),
          info: cn(
            DEFAULT,
            "group-[.toaster]:bg-[#CCE9FF] group-[.toaster]:border-[#0092FF]",
          ),
        },
      }}
      icons={DEFAULT_ICONS}
      visibleToasts={5}
      {...props}
    />
  );
};

export { toast, Toaster };
