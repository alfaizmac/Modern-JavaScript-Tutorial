// // for loops
// for (let i = 0; i < 5; i++) {
//   console.log("in loop", i);
// }

// const names = ["A", "B ", "C", "D", "E"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// while loops
// let i = 0;
// while (i <= 5) {
//   console.log("in loop: ", i);
//   i++;
// }

// do loops
// let i = 0;
// do {
//   console.log("in loop: ", i);
//   i++;
// } while (i < 5);

// if statements
// const age = 20;

// if (age >= 20) {
//   console.log("You are over 20 years old");
// } else {
//   console.log("You are under 20 years old");
// }

// const pass = "pass";
// if (pass.length >= 8) {
//   console.log("that password is long enough!");
// } else if (pass.length >= 3) {
//   console.log("that password is not long enough!");
// }

// logical operator are OR ||, AND &&, NOT !!
// You already knows about this just look on yout finished projects

// // logical NOT (!)
// let user = false;
// if (!user) {
//   console.log("hello");
// }

// //break and continue
// const score = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < score.length; i++) {
//   if (score[i] === 3) {
//     continue; //skips the 3 in the array then goes to loop again
//   }
//   console.log("your score: ", score[i]);
//  if (score[i] === 9) {
//     console.log("you got a 9");
//     break; //break mean stopping the loop flow and continue scan the bottom codes.
//   }
// }

// //switch statements
// const grade = "D";

// switch (grade) {
//   case "A":
//     console.log("You got an A");
//     break;
//   case "B":
//     console.log("You got an B");
//     break;
//   case "C":
//     console.log("You got an C");
//     break;
//   case "D":
//     console.log("You got an D");
//     break;
//   default:
//     console.log("not a valid grade");
// }

// variables & block scope
let age = 30;
if (true) {
  let age = 40; // you can redefine inside the code block and can only access inside the code block
  console.log("inside 1st code block: ", age);
  if (true) {
    let age = 50;
    console.log("inside 2nd code block: " + age);
  }
}
console.log("outside 1st code block: ", age);
