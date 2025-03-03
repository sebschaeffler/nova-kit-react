import { filterNil } from "@/lib/middleware/request/helper";
import {
  DEFAULT_ERROR_HANDLER,
  HTTP_CONTENT_TYPE,
  HTTP_REQUEST_TYPE,
  NovaHTTPRequest,
  REQUEST_BODY,
} from "@/lib/middleware/request/model/model";
import { NovaError } from "@/lib/model/error";

// ==========================================================================
// Attach CSRF Token for all mutations requests
// ==========================================================================
const buildAdditionalHeaders = (novaHTTPRequest: NovaHTTPRequest) => {
  if (novaHTTPRequest.getRequestType() === HTTP_REQUEST_TYPE.GET) {
    return undefined;
  }
  return {
    [`${process.env.NEXT_PUBLIC_XSRF_TOKEN_HEADER_NAME}`]: document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${process.env.NEXT_PUBLIC_XSRF_TOKEN_COOKIE_NAME}=`))
      ?.substring(`${process.env.NEXT_PUBLIC_XSRF_TOKEN_COOKIE_NAME}=`.length) as string,
  };
};

// ==========================================================================
// Execute a request and handle the response, wraps error into a NovaError
// ==========================================================================
export const executeNovaRequest = async (
  novaHTTPRequest: NovaHTTPRequest,
  dataHandler?: any,
  errorHandler: any = DEFAULT_ERROR_HANDLER,
  signal?: AbortSignal,
): Promise<unknown | NovaError> => {
  if (novaHTTPRequest.getRequestEndpoint() === null) {
    throw new Error("Request endpoint cannot be null");
  }

  let newBody = novaHTTPRequest.getRequestBody();
  if (newBody && novaHTTPRequest.getRequestContentType() === HTTP_CONTENT_TYPE.JSON) {
    newBody = filterNil(newBody);
  }

  // Create a new enriched request
  const newRequest = new NovaHTTPRequest({
    ...novaHTTPRequest,
    [REQUEST_BODY]: newBody,
  });

  const requestOptions = {
    method: newRequest.getRequestType(),
    credentials: newRequest.mustIncludeCredentials()
      ? ("include" as RequestCredentials)
      : undefined,
    body: newRequest.getRequestBody()
      ? newRequest.getRequestContentType() === HTTP_CONTENT_TYPE.JSON
        ? JSON.stringify(newRequest.getRequestBody())
        : newRequest.getRequestBody()
      : undefined,
    headers: {
      "Content-Type": newRequest.getRequestContentType(),
      ...buildAdditionalHeaders(newRequest),
    },
    signal: signal,
  };

  const response = await fetch(newRequest.getRequestEndpoint(), requestOptions);
  let result;
  if (response.headers.get("Content-Type")?.includes(HTTP_CONTENT_TYPE.JSON)) {
    result = await response.json();
  } else {
    result = await response.text();
  }

  if (!response.ok) {
    const error: NovaError = await errorHandler(result);
    // The caller needs to use try/catch.
    return Promise.reject(error);
  }

  return Promise.resolve(dataHandler ? dataHandler(result) : result);
};
