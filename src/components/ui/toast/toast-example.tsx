"use client";

import { Button } from "@nova/components/ui/button/button";
import { ToastAction } from "@nova/components/ui/toast/toast";
import { useToast } from "@nova/hooks/use-toast";

export function ToastExample() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
        });
      }}
    >
      Add to calendar
    </Button>
  );
}

export default ToastExample;
