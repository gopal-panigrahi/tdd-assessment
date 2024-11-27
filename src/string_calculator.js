function string_calculator(numbers) {
  let number_string = numbers;
  let delimiters = /[\,\n]/;

  if (numbers.startsWith("//")) {
    [delimiters, number_string] = numbers.split("\n");
    delimiters = delimiters.substring(2);
  }

  const numbers_arr = number_string.split(delimiters).filter((n) => !!n);
  const sum = numbers_arr.reduce((acc, val) => acc + parseInt(val), 0);
  return sum;
}

module.exports = {
  string_calculator,
};
