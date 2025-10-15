const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

const scores = [10, 20, 30, 40];
const totalScore = scores.reduce((acc, score) => acc + score, 0);
console.log(totalScore);

const words = ['Hello', ' ', 'World', '!'];
const sentence = words.reduce((acc, word) => acc + word, '');
console.log(sentence);

const cart = [
    { name: 'apple', price: 1.2 },
    { name: 'banana', price: 0.8 },
    { name: 'cherry', price: 2.5 },
];
const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);