const { string_calculator } = require("./string_calculator");

describe("string calculator", () => {
  test("check if sum is returned for empty string", () => {
    const result = string_calculator("");
    expect(result).toBe(0);
  });
});
