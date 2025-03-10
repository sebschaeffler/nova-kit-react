import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components";
import { AlertCircle, X } from "lucide-react";
import { VariantProps } from "class-variance-authority";
import { NovaError, NovaErrorDetailsType } from "@/lib";

export type NovaAlertType = {
  message?: string;
  details?: string;
};

type Props = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof Alert> & {
    error?: NovaError | null | undefined;
    novaAlert?: NovaAlertType;
  };

export const NovaAlert: React.FC<Props> = ({
  error,
  novaAlert,
  variant = "default",
  ...props
}) => {
  const [isRendered, setIsRendered] = React.useState(true);

  // Render the alert if there is an error or novaAlert even if it was previously rendered
  React.useEffect(() => {
    if (error || novaAlert) {
      setIsRendered(true);
    }
  }, [error, novaAlert]);

  // Guard
  if (!isRendered) return null;

  const renderDescription = () => {
    if (error) {
      const details = error.details;
      if (details) {
        return (
          <AlertDescription className="ml-2">
            {details?.map((details: NovaErrorDetailsType, index: number) => (
              <p key={index}>{details?.message}</p>
            ))}
          </AlertDescription>
        );
      }
    }

    if (novaAlert?.details) {
      return <AlertDescription>{novaAlert.details}</AlertDescription>;
    }

    return null;
  };

  return (
    <div className="fixed bottom-[28px] left-1/2 z-50 w-full max-w-[850px] -translate-x-1/2 transform">
      <Alert variant={variant} {...props} className="relative">
        <AlertCircle className="-mt-1" />
        <AlertTitle className="ml-2">
          {error ? error.message : novaAlert?.message}
        </AlertTitle>
        {renderDescription()}
        <div
          className="absolute right-2 top-3 cursor-pointer"
          onClick={() => setIsRendered(false)}
        >
          <X size={24} />
        </div>
      </Alert>
    </div>
  );
};
