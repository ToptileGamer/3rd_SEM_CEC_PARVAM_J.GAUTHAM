const numers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = numers.map((num) => num * 2);
console.log(doubled);

const fruits = ['apple', 'banana', 'cherry'];
const uppercasedFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(uppercasedFruits);

const prices = [10, 20, 30];
const pricetags = prices.map((price) => `$${price}`);
console.log(pricetags);

const products = [100, 200, 300];
const withTax = products.map((product) => product * 1.8);
console.log(withTax);

const user = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Emily', lastName: 'Johnson' },
];
const fullNames = user.map((user) => `${user.firstName} ${user.lastName}`);
console.log(fullNames);

const rectangles = [
  { width: 10, height: 20 },
  { width: 5, height: 15 },
    { width: 8, height: 12 },
];
const areas = rectangles.map((rect) => rect.width * rect.height);
console.log(areas); 


