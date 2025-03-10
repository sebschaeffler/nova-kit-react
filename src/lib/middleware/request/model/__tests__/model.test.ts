import { NovaQueryParameters } from "@/lib/middleware/request/model/nova-query-parameters";

const endpoint = "/example/api/resource";

describe("common::query::model::QueryParameters", () => {
  test("Should return empty string", () => {
    const params = {
      limit: "",
      state: "",
      identity_domain: "",
      username: "",
      partial_external_id: "",
      partial_email: "",
      partial_partial_username: "",
      partial_company_name: "",
    };
    expect(NovaQueryParameters.buildQueryString({})).toBeUndefined();
    expect(NovaQueryParameters.buildQueryString({ endpoint: "" })).toEqual("");
    expect(NovaQueryParameters.buildQueryString({ endpoint, params })).toEqual(endpoint);
  });

  test("Should return expected result string", () => {
    const params = {
      limit: "50",
      state: "",
      identity_domain: "213",
      username: "",
      partial_external_id: "toto",
      partial_email: "",
    };
    const result = NovaQueryParameters.buildQueryString({ endpoint, params });

    expect(result).not.toEqual("");
    expect(result).toContain("limit");
    expect(result).toContain("identity_domain");
    expect(result).toContain("partial_external_id");
    expect(result).not.toContain("state");
    expect(result).not.toContain("username");

    const expected = "limit=50&identity_domain=213&partial_external_id=toto";
    expect(result).toBe(`${endpoint}?${expected}`);
  });
});
