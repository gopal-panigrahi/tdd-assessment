function string_calculator(numbers) {
  let number_string = numbers;
  let delimiters = /[\,\n]/;

  if (numbers.startsWith("//")) {
    number_string = numbers.split("\n")[1];
    delimiters = parse_delimiters(numbers);
  }

  const numbers_arr = transform_into_numbers(number_string, delimiters);

  throwIfContainsNegatives(numbers_arr);

  const sum = numbers_arr.reduce((acc, val) => acc + val, 0);
  return sum;
}

function throwIfContainsNegatives(numbers_arr) {
  const negative_nums = numbers_arr.filter((n) => n < 0);

  if (negative_nums.length > 0) {
    throw new Error(`negative numbers not allowed ${negative_nums.join(",")}`);
  }
}

function transform_into_numbers(number_string, delimiters) {
  return number_string
    .split(delimiters)
    .filter((n) => !!n)
    .map((n) => parseInt(n))
    .filter((n) => n < 1000);
}

function parse_delimiters(numbers) {
  let delimiters = /[\,\n]/;

  if (numbers.startsWith("//")) {
    delimiters = numbers.split("\n")[0];

    delimiters = delimiters
      .substring(2)
      .split("][")
      .map((d) => d.replace("[", "").replace("]", ""));

    delimiters = new RegExp(`[${delimiters.join(",")}]`);
  }

  return delimiters;
}

module.exports = {
  string_calculator,
};
