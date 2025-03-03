import { NovaErrorModel } from "@/lib/model/error"; // HTTP Request Types

// HTTP Request Types
export const HTTP_REQUEST_TYPE = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
  PATCH: "PATCH",
};

// HTTP Request Content types
export const HTTP_CONTENT_TYPE = {
  JSON: "application/json",
  TEXT: "text/plain",
};

export const DEFAULT_ERROR_HANDLER = async (err: any) =>
  await NovaErrorModel.fromGenericError(err);

export const REQUEST_TYPE = "requestType";
export const REQUEST_ENDPOINT = "endpoint";
export const REQUEST_BODY = "parameters";
export const REQUEST_CONTENT_TYPE = "contentType";
export const REQUEST_MUST_INCLUDE_CREDENTIALS = "withCredentials";

const DefaultHTTPRequest = {
  [REQUEST_TYPE]: HTTP_REQUEST_TYPE.GET,
  [REQUEST_ENDPOINT]: "",
  [REQUEST_BODY]: null,
  [REQUEST_CONTENT_TYPE]: HTTP_CONTENT_TYPE.JSON,
  [REQUEST_MUST_INCLUDE_CREDENTIALS]: true,
};

export class NovaHTTPRequest {
  readonly [REQUEST_TYPE]: string;
  readonly [REQUEST_ENDPOINT]: string;
  readonly [REQUEST_BODY]?: BodyInit | null;
  readonly [REQUEST_CONTENT_TYPE]: string;
  readonly [REQUEST_MUST_INCLUDE_CREDENTIALS]: boolean;

  constructor(other?: any) {
    this[REQUEST_ENDPOINT] =
      other?.[REQUEST_ENDPOINT] ?? DefaultHTTPRequest[REQUEST_ENDPOINT];
    this[REQUEST_TYPE] = other?.[REQUEST_TYPE] ?? DefaultHTTPRequest[REQUEST_TYPE];
    this[REQUEST_BODY] = other?.[REQUEST_BODY] ?? DefaultHTTPRequest[REQUEST_BODY];
    this[REQUEST_CONTENT_TYPE] =
      other?.[REQUEST_CONTENT_TYPE] ?? DefaultHTTPRequest[REQUEST_CONTENT_TYPE];
    this[REQUEST_MUST_INCLUDE_CREDENTIALS] =
      other?.[REQUEST_MUST_INCLUDE_CREDENTIALS] ??
      DefaultHTTPRequest[REQUEST_MUST_INCLUDE_CREDENTIALS];
  }

  getRequestType(): string {
    return this[REQUEST_TYPE];
  }

  getRequestEndpoint() {
    return this[REQUEST_ENDPOINT];
  }

  getRequestBody(): BodyInit | undefined | null {
    return this[REQUEST_BODY];
  }

  getRequestContentType() {
    return this[REQUEST_CONTENT_TYPE];
  }

  mustIncludeCredentials(): boolean {
    return this[REQUEST_MUST_INCLUDE_CREDENTIALS];
  }

  // create setters for each field
  setRequestType(requestType: string) {
    return new NovaHTTPRequest({ ...this, [REQUEST_TYPE]: requestType });
  }

  setRequestEndpoint(endpoint: string) {
    return new NovaHTTPRequest({ ...this, [REQUEST_ENDPOINT]: endpoint });
  }

  setRequestBody(parameters: any) {
    return new NovaHTTPRequest({ ...this, [REQUEST_BODY]: parameters });
  }

  setRequestContentType(contentType: string) {
    return new NovaHTTPRequest({
      ...this,
      [REQUEST_CONTENT_TYPE]: contentType,
    });
  }

  setMustIncludeCredentials(mustIncludeCredentials: boolean) {
    return new NovaHTTPRequest({
      ...this,
      [REQUEST_MUST_INCLUDE_CREDENTIALS]: mustIncludeCredentials,
    });
  }
}
