import { capitalize } from "../string";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should return an empty string if input is an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("should not change the rest of the string", () => {
    expect(capitalize("hELLO")).toBe("HELLO");
  });

  it("should handle single character strings", () => {
    expect(capitalize("a")).toBe("A");
  });

  it("should handle strings with leading spaces", () => {
    expect(capitalize(" hello")).toBe(" hello");
  });
});
