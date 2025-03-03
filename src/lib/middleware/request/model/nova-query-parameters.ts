const QUERY_STRING_SEPARATOR = "&";
const QUERY_STRING_START = "?";

export const LIMIT = "limit";
export const DEFAULT_LIMIT: number = 50;

export class NovaQueryParameters {
  [LIMIT]: number;

  constructor(object?: { [key: string]: any }) {
    this[LIMIT] = object?.[LIMIT] ?? DEFAULT_LIMIT;
  }

  static buildQueryString = ({
                               endpoint,
                               params,
                             }: {
    endpoint?: string;
    params?: { [_: string]: any } | undefined;
  }) => {
    if (!params) return endpoint;
    let stringValueArray = [];
    for (const [key, value] of Object.entries(params)) {
      if (value) {
        stringValueArray.push(`${key}=${value}`);
      }
    }
    const result = stringValueArray.join(QUERY_STRING_SEPARATOR);
    return result ? `${endpoint}${QUERY_STRING_START}${result}` : endpoint;
  };
}
