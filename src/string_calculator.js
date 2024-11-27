function string_calculator(numbers) {
  let number_string = numbers;
  let delimiters = /[\,\n]/;

  if (numbers.startsWith("//")) {
    [delimiters, number_string] = numbers.split("\n");
    delimiters = delimiters.substring(2);
  }

  const numbers_arr = number_string
    .split(delimiters)
    .filter((n) => !!n)
    .map((n) => parseInt(n))
    .filter((n) => n < 1000);

  const negative_nums = numbers_arr.filter((n) => n < 0);

  if (negative_nums.length > 0) {
    throw new Error(`negative numbers not allowed ${negative_nums.join(",")}`);
  }

  const sum = numbers_arr.reduce((acc, val) => acc + val, 0);
  return sum;
}

module.exports = {
  string_calculator,
};
