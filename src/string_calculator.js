const possible_delimiters = /[\,\n]/;

function string_calculator(numbers) {
  const numbers_arr = numbers.split(possible_delimiters).filter((n) => !!n);
  const sum = numbers_arr.reduce((acc, val) => acc + parseInt(val), 0);
  return sum;
}

module.exports = {
  string_calculator,
};
