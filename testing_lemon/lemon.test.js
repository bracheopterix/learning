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

const lemonmon = require('./lemon_main');

// test('function is giving 0 when true', () => {
//   expect(lemonmon(true)).toBe(0);
//   expect(lemonmon(false)).toBe(1);
// })

test('do we get 20% taxes plus', () => {
  // expect(calcTaxes(9.55)).toBe(11.46);
  expect(calcTaxes(0)).toBe(0);
  // expect(calcTaxes(8.65)).toBe(10.38);
  // expect(calcTaxes(15.55)).toBe(18.66);
  // expect(calcTaxes(6.45)).toBe(7.74);
})

