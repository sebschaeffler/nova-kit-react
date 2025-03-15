import { filterNil } from "../helper";

const nestedObject = {
  type: "something",
  external_url: null,
  hosted_documentation: {
    url: null,
    uploaded_object_key: {
      entry: null,
      new: null,
    },
  },
};

const expected = {
  type: "something",
};

describe("infrastructure::middleware::query", () => {
  test("filters null values from nested object", () => {
    expect(filterNil(nestedObject)).toEqual(expected);
  });

  test("filters null values from array", () => {
    const values = [nestedObject];
    const expectedArr = [nestedObject];

    expect(filterNil(values)).toEqual(expectedArr);
  });

  test("filters null values from nested array", () => {
    const values = [nestedObject, [nestedObject]];
    const expectedArr = [expected, [expected]];

    expect(filterNil(values)).toEqual(expectedArr);
  });

  test("filters null values from nested array with only null values", () => {
    const values = [nestedObject, [{ null: null }]];
    const expectedArr = [expected];

    expect(filterNil(values)).toEqual(expectedArr);
  });
});
