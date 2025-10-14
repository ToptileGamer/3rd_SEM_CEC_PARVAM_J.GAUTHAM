let users = [
 { name: "John", age: 25 },
 { name: "Alice", age: 22 },
 { name: "Bob", age: 30 }
];
users.sort((a, b) => a.age - b.age);
console.log(users);

let num = 1234;
let sum = 0;
while (num > 0) {
 sum += num % 10;
 num = Math.floor(num / 10);
}
console.log("Sum of digits:", sum);


let n = 7, a = 0, b = 1;
console.log(a, b);
for (let i = 2; i < n; i++) {
 let c = a + b;
 console.log(c);
 a = b;
 b = c;
}

function counter() {
let count = 0;
return function() {
count++;
return count;
}
}
let add = counter();
console.log(add());
console.log(add());