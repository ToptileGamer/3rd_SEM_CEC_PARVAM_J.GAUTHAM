const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = numbers.filter((num) => num % 2 === 0);
console.log(odd);

const fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
const longFruits = fruits.filter((fruit) => fruit.length > 4);
console.log(longFruits);

const prices = [10, 15, 20, 25, 30];
const affordable = prices.filter((price) => price <= 20);
console.log(affordable);

const people = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 15 },
];
const adults = people.filter((person) => person.age >= 18);
console.log(adults);