function string_calculator(numbers) {
  const numbers_arr = numbers
    .split(",")
    .map((n) => n.split("\n"))
    .flat()
    .filter((n) => !!n);
  const sum = numbers_arr.reduce((acc, val) => acc + parseInt(val), 0);
  return sum;
}

module.exports = {
  string_calculator,
};
