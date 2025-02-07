// Prices with 20% tax:
// Dish: Italian pasta Price (incl.tax): $ 11.46
// Dish: Rice with veggies Price (incl.tax): $ 10.38
// Dish: Chicken with potatoes Price (incl.tax): $ 18.66
// Dish: Vegetarian Pizza Price (incl.tax): $ 7.74

// Prices without tax:
// Dish: Italian pasta Price (incl.tax): $ 9.55
// Dish: Rice with veggies Price (incl.tax): $ 8.65
// Dish: Chicken with potatoes Price (incl.tax): $ 15.55
// Dish: Vegetarian Pizza Price (incl.tax): $ 6.45

const calcTaxes = require('./lemon_main');
const lemonmon = require('./lemon_main');

// test('function is giving 0 when true', () => {
//   expect(lemonmon(true)).toBe(0);
//   expect(lemonmon(false)).toBe(1);
// })

test('do we get 20% taxes plus', () => {
  const arg = 9.55434343434343434343;
  const expected = 11.4652121212;
  const actual = calcTaxes(arg);
  console.log(actual, expected, actual === expected);
  expect(calcTaxes(arg)).toBe(expected);
  // expect(calcTaxes(0)).toBe(0);
  // expect(calcTaxes(8.65)).toBe(10.38);
  // expect(calcTaxes(15.55)).toBe(18.66);
  // expect(calcTaxes(6.45)).toBe(7.74);
})

// FLOATS CAN'T BE COMPARED LIKE THIS!
