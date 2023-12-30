// 1. datatypes.
//1 . number - int long float, double
// let, var , const
// console.log(10 + 2);
// var a = 10;
// console.log(a);
// console.log(a + 5);
// // let a1 = 20;
// // console.log(a);

// var a = 30;
// console.log(a);
// console.log(a + 5);
// const b = 50;
// console.log(b);
// console.log(2.35);

// console.log("a");
// console.log("a");
// console.log("hello");
// console.log('Hello "amrutha" welcome to javascript');
// console.log("Hello 'amrutha' welcome to javascript");

// javascript - backtick.
// let a = 10;
// let b = 20;

// console.log("the sum of a and b is " + (a + b));

// console.log("the sum of a and b is ", a + b);

// console.log(`The sum of ${a}  and ${b} is ${a + b}`);

// control statements.

// if , if-else , if-else if - else,
// break, continue ,  switch - case

// let username = "suresh";

// if (username == "amrutha") {
//   console.log("Access granted to " + username);
// } else if (username == "suresh") {
//   console.log("Access granted to " + username);
// } else {
//   console.log("Access denied");
// }

// let username = "raj";

// switch (username) {
//   case "amrutha": {
//     console.log("Access granted to " + username);
//     break;
//   }

//   case "suresh": {
//     console.log("Access granted to " + username);
//     break;
//   }

//   case "mahesh": {
//     console.log("Access granted to " + username);
//     break;
//   }

//   default: {
//     console.log("Access denied.");
//   }
// }

// loop control statements.
// 1. while loop

// var i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// var i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// var i = 100;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// 2. do-while.
// var i = 100;

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// for loop .
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// break condition. .
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
// }

// continue
// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

// logical operators.
// and
// for (let i = 1; i <= 10; i++) {
//   if (i <= 4 || i >= 8) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 3 || i == 5 || i == 7) {
//     continue;
//   }
//   console.log(i);
// }

// class Sample {
//   constructor() {
//     console.log("default constructor");
//   }

//   add() {
//     let a = 10;
//     let b = 20;
//     console.log(a + b);
//   }
// }

// class Demo extends Sample {
//   constructor() {
//     super();
//     console.log("default constructor of demo class");
//   }
// }

// var s1 = new Sample();
// const s2 = new Sample();

// s1.add();
// s2.add();

// create an object of Demo class. using the refernce varaible of Demo() class i can access the add() function.

// var d1 = new Demo();
// d1.add();

// encapsulation concept.
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(name, age);
//   }
// }

// var s1 = new Student("Amrutha", 20);
// var s2 = new Student("suresh", 30);
