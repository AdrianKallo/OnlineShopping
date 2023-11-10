const calculatePrice = require('./calculatePrice');
const applyAgeRestrictions = require('./calculatePrice');
const applyProductPriceRules = require('./calculatePrice');

test('Test user buying A product', () => {
  expect(calculatePrice.calculateProductPrice(55, 'A', false, false)).toBe(70);
});

test('Test age under 21 buying any products', () => {
  expect(applyAgeRestrictions.applyAgeRestrictions(21, 'A','B','C','D'));
});


test('Test user aged 21-25 can buy only A and B', () => {
  expect(applyAgeRestrictions.applyAgeRestrictions(25, 'C', 'D'));
});

test('Type D products are always 20% more expensive.', () => {
  expect(calculatePrice.calculateProductPrice(30,'D', false, false)).toBe(54);
});

test('If the customer has made any returns in past, the price is increased by $150.', () => {
  expect(calculatePrice.calculateProductPrice(30,'A', true, false)).toBe(195);
});

test('Loyalty members receive a 10% discount.', () => {
  expect(calculatePrice.calculateProductPrice(30,'A', false, true)).toBe(40.5);
});