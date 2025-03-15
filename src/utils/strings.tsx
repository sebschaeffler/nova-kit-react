/**
 * This method will split the input string every time a '\n' is encountered and return a span
 * with break lines in between. An additional modify function can be passed to modify the text further.
 * @param text
 * @param modify
 *
 */
export const renderSplitText = (
  text: string,
  modify?: Function,
): Array<React.ReactElement> | null => {
  if (!text) return null;

  return text.split("\n").map((item, index) => (
    <span key={index}>
      {modify ? modify(item) : item}
      <br />
    </span>
  ));
};

export const trimStringsInObject = (obj: any): any => {
  if (typeof obj === "string") {
    return obj.trim();
  } else if (Array.isArray(obj)) {
    return obj.map(trimStringsInObject);
  } else if (typeof obj === "object" && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = trimStringsInObject(obj[key]);
      return acc;
    }, {} as any);
  }
  return obj;
};
