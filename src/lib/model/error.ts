import { UseFormReturn } from "react-hook-form";

export const DEFAULT_ERROR_MSG = "Please retry later or contact the Support Team.";

interface errorInterface {
  Error: {
    /** @description The HTTP status code. */
    code?: number;
    /**
     * @description The canonical error code message.
     *       * `Bad Request` - The Bad Request status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error.
     *       * `Unauthorized` - The Unauthorized status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.
     *       * `Forbidden` - The Forbidden status code indicates that the server understood the request but refuses to fulfill it.
     *       * `Not Found` - The Not Found status code indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists.
     *       * `Conflict` - The Conflict status code indicates that the request could not be completed due to a conflict with the current state of the target resource.
     *       * `Internal Server Error` - The Internal Server Error status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
     *       * `Gateway Timeout` - The Gateway Timeout status code indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.
     *
     * @enum {string}
     */
    status?:
      | "Bad Request"
      | "Unauthorized"
      | "Forbidden"
      | "Not Found"
      | "Conflict"
      | "Internal Server Error"
      | "Gateway Timeout";
    /** @description Specific details about the error. */
    details?: errorInterface["ErrorDetail"][];
    /** @description A generic error message. */
    message?: string;
  };
  /** @description A single detail about an error. */
  ErrorDetail: {
    /** @description The list of fields the message applies to. */
    fields?: string[];
    /** @description The message containing the detail. */
    message?: string;
  };
}

const DEFAULT_NOVA_ERROR: NovaError = {
  code: 500,
  status: undefined,
  details: [],
  message: DEFAULT_ERROR_MSG,
};

export type NovaError = errorInterface["Error"];
export type NovaErrorDetailsType = errorInterface["ErrorDetail"];

export class NovaErrorModel {
  static async fromGenericError(err: any): Promise<NovaError> {
    let error = err;
    if (err instanceof Response) {
      error = await err.json();
    }
    // Create a NovaError from JSON error object
    return {
      code: error.code || DEFAULT_NOVA_ERROR.code,
      status: error.status || DEFAULT_NOVA_ERROR.status,
      details: error.details || DEFAULT_NOVA_ERROR.details,
      message: error.message || DEFAULT_NOVA_ERROR.message,
    };
  }

  // Function to map backend errors to Zod errors
  static mapBackendErrorToZodError(form: UseFormReturn<any>, error: NovaError) {
    error.details?.forEach((detail) => {
      if ((detail.fields?.length ?? 0) > 0) {
        form.setError(
          detail.fields?.[0] as string,
          { type: "manual", message: detail.message },
          { shouldFocus: true },
        );
      }
    });
  }
}
