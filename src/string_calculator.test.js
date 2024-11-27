const { string_calculator } = require("./string_calculator");

describe("string calculator", () => {
  test("check if sum is returned for empty string", () => {
    const result = string_calculator("");
    expect(result).toBe(0);
  });

  test("when string contains only 1 number", () => {
    const result = string_calculator("2");
    expect(result).toBe(2);
  });

  test("when string contains only multiple numbers", () => {
    const result = string_calculator("2,3,4,5,6");
    expect(result).toBe(2 + 3 + 4 + 5 + 6);
  });

  test("when string contains comma and newline both as delimiter", () => {
    const result = string_calculator("1\n2,3");
    expect(result).toBe(1 + 2 + 3);
  });

  test("when string is passed with custom delimiter", () => {
    const result = string_calculator("//;\n1;2");
    expect(result).toBe(1 + 2);
  });

  test("when string is passed with custom delimiter with multiple characters", () => {
    const result = string_calculator("//|||\n1|||2");
    expect(result).toBe(1 + 2);
  });

  test("when string is passed with negative numbers it should throw exception", () => {
    function driver() {
      string_calculator("2,-1");
    }
    expect(driver).toThrow(new Error("negative numbers not allowed -1"));
  });

  test("when string is passed with multiple negative numbers it should throw exception", () => {
    function driver() {
      string_calculator("2,-1,-3,-4,5");
    }
    expect(driver).toThrow(new Error("negative numbers not allowed -1,-3,-4"));
  });

  test("when string is passed with numbers greater than 1000", () => {
    const result = string_calculator("2,1001");
    expect(result).toBe(2);
  });

  test("when string is passed with delimiters of any length", () => {
    const result = string_calculator("//[***]\n1***2***3");
    expect(result).toBe(1 + 2 + 3);
  });
});
