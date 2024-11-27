function string_calculator(numbers) {
  const numbers_arr = numbers.split(",").filter((n) => !!n);
  const sum = numbers_arr.reduce((acc, val) => acc + parseInt(val), 0);
  return sum;
}

module.exports = {
  string_calculator,
};
