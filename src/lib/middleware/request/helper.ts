/**
 * Removes (sub-)properties with null or undefined values from a given JSON object
 * @returns {object} A new JSON object where (sub-)properties with undefined or null values have been removed.
 * @param object
 */
export const filterNil = (object: any) => {
  Object.entries(object).forEach(([k, v]) => {
    if (v && typeof v === "object") {
      filterNil(v);
    }
    if (
      (v && typeof v === "object" && !Object.keys(v).length) ||
      v === null ||
      v === undefined
    ) {
      if (Array.isArray(object)) {
        // @ts-ignore
        object.splice(k, 1);
      } else {
        delete object[k];
      }
    }
  });
  return object;
};
