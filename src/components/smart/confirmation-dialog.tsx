import { MouseEvent, ReactNode, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/utils/style-utils";

type ConfirmationDialogProps = {
  trigger: ReactNode;
  title: string;
  description: string | ReactNode;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  isFullWidth?: boolean;
};

export function ConfirmationDialog({
                                     trigger,
                                     title,
                                     description,
                                     onConfirm,
                                     confirmText = "Confirm",
                                     cancelText = "Cancel",
                                     variant = "destructive",
                                     isFullWidth = true,
                                   }: ConfirmationDialogProps) {
  const [open, setOpen] = useState(false);

  const handleConfirm = (e: MouseEvent) => {
    e.stopPropagation();
    setOpen(false);
    onConfirm();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className={cn(isFullWidth && "h-full w-full")}
          onClick={(e) => e.stopPropagation()}
        >
          {trigger}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="ghost"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            {cancelText}
          </Button>
          <Button type="button" variant={variant} onClick={handleConfirm}>
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
