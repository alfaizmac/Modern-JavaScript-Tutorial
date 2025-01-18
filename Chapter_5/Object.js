// // object literals
// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@gmail.com",
//   location: "berlin",
//   blogs: [
//     { title: "why mac& chess rules", likes: 30 },
//     { title: "the best way to learn js", likes: 40 },
//   ],

//   logBlogs() {
//     console.log("this user has written the following blogs:");
//     this.blogs.forEach((blogs) => {
//       console.log(blogs.title, blogs.likes);
//     });
//   },
// };

// user.logBlogs();

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// console.log(user["name"]);

// user["name"] = "gago";
// console.log(user["name"]);

// const blogs = [
//   { title: "why mac& chess rules", likes: 30 },
//   { title: "the best way to learn js", likes: 40 },
// ];

// console.log(blogs);

// //math object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.83;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // generate random numbers
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 10));

// let score1 = 50;
// let score2 = score1;

// console.log(`score1: ${score1}`, `score2: ${score2}`);

// score1 = 100;
// console.log(`score1: ${score1}`, `score2: ${score2}`);

const user1 = { name: `ryu`, age: 30 };
const user2 = user1;
console.log(user1, user2);

user2.age = 40;
console.log(user1, user2);
