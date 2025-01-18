// // function declaration
// function greet() {
//   console.log("hello");
// }

// // function expression remember function express cannot be called when it on buttom
// const speak = function () {
//   console.log("good day!");
// };

// greet();
// speak();

// // arguments & parameters
// const speak = function (name = "Mario ", time = "morning ") {
//   console.log("good " + time + name);
// };

// speak();
// speak("Luigi", "night ");

// retuning values
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// const a = calcArea(5);
// console.log(a);

// arrow function
// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };
//let convert this to arrow function
// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };
// console.log(bill([10, 15, 30], 0.2));

// const name = "mario";
// // functions

// const greet = () => "hello";
// let resultOne = greet();
// console.log(resultOne);

// // methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// callbacks & foreach
// const myFunc = (callbackFunc) => {
//   let value = 50;
//   callbackFunc(value);
// };
// myFunc((value) => {
//   console.log(value);
// });

// callbacks & foreach
// let people = ["mario", "luigi", "yoshi", "toad", "princess"];
// const logPerson = (person, index) => {
//   console.log(index + " hello " + person);
// };
// people.forEach(logPerson);

// people.forEach((person, index) => {
//   console.log(person, index);

// get a reference to the 'ul
const ul = document.querySelector(".people");
const people = ["mario", "luigi", "yoshi", "toad", "princess"];

let html = "";

people.forEach(function (person) {
  html += `<li style="color: purple"> ${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
