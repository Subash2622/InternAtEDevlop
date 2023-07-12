// console.log(" Today is 06-07-2023");
// document.getElementById("demo").innerHTML = 12 + 13;
// document.write(5 + 6);
// window.alert(5 + 6);
// alert(5 + 6);
// console.log(5 + 6);
// const d = new Date("2015-03");
// console.log(d);

//If Else
// var audienceIsLaughing = false;

// if (audienceIsLaughing) {
//   console.log("Wow, my joke is a big hit!");
// } else {
//   console.log("Oops, tough crowd. I need to work on my material!");
// }

//========================

// var num1 = 100;
// var num2 = 20;
// var operation = "add";
// var result;

// if (operation === "add") {
//   result = num1 + num2;
// } else if (operation === "subtract") {
//   result = num1 - num2;
// } else if ((operation = "multiply")) {
//   result = num1 * num2;
// } else if (operation === "divide") {
//   result = num1 / num2;
// } else {
//   console.log("Invalid Operation enter");
// }
// console.log("The result is " + result);

//=====================================

// var number = -10;
// var absoluteValue;

// if (number >= 0) {
//   absoluteValue = number;
// } else {
//   absoluteValue = -number;
// }

// console.log("The absolute value of", number, "is", absoluteValue);
//===========================================================
// console.log(x); // Output: undefined
// var x = 5;
//===========================================================
// sayHello(); // Output: "Hello"
// function sayHello() {
//   console.log("Hello");
// }
//===========================================================
// console.log(x); // Output: undefined
// var x = 5;
// function myFunction() {
//   console.log("Function hoisting");
// }
//====================================================
// console.log(x); // Output: "Function"
// var x = "Variable";
// function x() {
//   console.log("Function");
// }
//============================
// var x = 5;
// function myFunction() {
//   console.log(x); // Output: undefined
//   var x = 10;
// }
// myFunction();
//==================================
// var x = 5;
// function myFunction() {
//   console.log(x); // Output: 5
// }
// myFunction();
//===================================
// console.log(x); // Output: ReferenceError: x is not defined
// const x = 5;
//========================
// var today = new Date().getDay();
// var tomorrow = (today + 1) % 7;
// switch (tomorrow) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Sejal";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     text = "Looking forward to the weekend";
//     break;
// }

// console.log("tomorrow is " + day);
//============================================
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//============================
// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
//=====================================
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }
//===================================
// for(let i=0;i<=1000;i++){
//     console.log(i);
// }
//========================
// const person = {
//     name: 'John',
//     age: 30,
//     occupation: 'Engineer'
//   };

//   for (let key in person) {
//     console.log(key + ': ' + person[key]);
//   }
//========================================
// const colors = ['red', 'green', 'blue'];

// for (let index in colors) {
//   console.log(index + ': ' + colors[index]);
// }
//======================================
// const message = "Hello";

// for (let index in message) {
//   console.log(message[index]);
// }
//======================================
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.country = "USA";

// const person = new Person("John", 30);

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }
//==============================
// const colors = ["red", "green", "blue"];

// for (const color of colors) {
//   console.log(color);
// }
//========================================
// const person = {
//     name: 'John',
//     greet: function() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   };

//   person.greet();
//=======================================
// const greet = (name) => {
//   console.log("Hello " + name);
// };
// greet("Subash");
// console.log(" Today is 06-07-2023");
//=========================================
// //const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(x => x * 2);

// console.log(doubledNumbers);
//==========================================
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(doubledNumbers);
//========================================
// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(function (x) {
//   return x * x;
// });

// console.log(squaredNumbers);
//=========================================
// const numbers = [4, 9, 16, 25, 36];

// const squareRoots = numbers.map(Math.sqrt);

// console.log(squareRoots);
//===============================================
//Filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (x) {
//   return x % 2 === 0;
// });

// console.log(evenNumbers);
//===============================
// const number = [2, 3, 45, 645, 645, 44, 364, 34, 424];

// const newNum = number.filter((a) => {
//   return a > 100;
// });
// console.log(newNum);
//Reduce Method=======================
//The reduce() method takes two main parameters: the callback function and an optional initial value for the accumulator. The callback function receives four arguments: the accumulator, the current element, the current index, and the original array.
// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = arr.reduce((a1, a2) => {
//   return a1 + a2;
// });
// console.log(newArr);
//Reurns Value
//=======================================
//Alert used for To interact with browser
// alert("Hello, world!");
//===============================
//confir use for take responces from user
// const result = confirm("Are you sure you want to delete this item?");

// if (result) {
//   // Delete the item
//   console.log("Item deleted.");
// } else {
//   // Cancel the delete operation
//   console.log("Delete operation cancelled.");
// }
//===================================
//Prompt is used for taking input from user
// const name = prompt("Please enter your name:");

// if (name) {
//   console.log("Hello, " + name + "!");
// } else {
//   console.log("No name entered.");
// }
//====================================
//Arrow function
//The arrow function is one of the
// features introduced in the ES6 version of JavaScript. It allows you to createfunctions in a cleaner way compared
// to regular functions. Here are some of the valid syntax for arrow function:

//Syntax
// () => expression
// (param1, paramN) => expression
// () => {
// statements
// }
// (param1, paramN) => {
// statements
// }
//Callback Function
// const calculate = (a, b, operation) => {
//   return operation(a, b);
// };

// // One Way
// const result = calculate(3, 4, function (num1, num2) {
//   return num1 + num2;
// });
// console.log(result);
// //Another Way
// const subtraction = (a, b) => a - b;
// const subRes = calculate(10, 5, subtraction);
// console.log(subRes);
// //Another Way
// function multiply(a, b) {
//   return a * b;
// }
// const mulRes = calculate(8, 3, multiply);
// console.log(mulRes);
//====================================================================================================================================
// (function (x) {
//   console.log(x * x);
// })(2);
// 3 + "3"
// 3 + + "3"
//=============================================================================================================================
//Promise
// console.log("Hey, can you get the tacos?");
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isTacosAvailable = false;
//     if (isTacosAvailable) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 5000);
// });
// setTimeout(() => {
//   console.log("In the mean time I will make soup");
// }, 2000);

// promise
//   .then((resolvedValue) => {
//     console.log(resolvedValue);
//     console.log("I will set up the table now");
//   })
//   .catch((rejectedValue) => {
//     console.log(rejectedValue);
//     console.log("I will prepare pasta now");
//   });
//=======================================
//Call
// const person1 = {
//   fName: "Mahendra",
//   lName: "Babhubali",
//   fullName: function () {
//     return this.fName + " " + this.lName;
//   },
// };
// const person2 = {
//   fName: "Katapa ",
//   lName: "Das",
// };
// console.log(person1.fullName.call(person2));
//==============================================
//CAll
// const person1 = {
//   fName: "Mahendra",
//   lName: "Bahubali",
//   fullName: function (hometown, country) {
//     return this.fName + " " + this.lName + " " + hometown + " " + country;
//   },
// };
// const person2 = {
//   fName: "Katapa ",
//   lName: "Das",
// };
// console.log(person1.fullName.call(person2, "Keonjhar", "India"));
//===================================
//Apply
// const person1 = {
//   fName: "Mahendra",
//   lName: "Bahubali",
//   fullName: function (hometown, country) {
//     return this.fName + " " + this.lName + " " + hometown + " " + country;
//   },
// };
// const person2 = {
//   fName: "Kattapa ",
//   lName: "Das",
// };
// console.log(person1.fullName.apply(person2, ["Keonjhar", "India"]));
//===========================================
// Bind
// const person1 = {
//   fName: "Mahendra",
//   lName: "Bahubali",
//   fullName: function (hometown, country) {
//     return this.fName + " " + this.lName + " " + hometown + " " + country;
//   },
// };
// const person2 = {
//   fName: "Katapa ",
//   lName: "Das",
// };
// const result = person1.fullName.bind(person2, "Keonjhar", "India");
// console.log(result);
// console.log(result());
//=================================
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// setTimeout(() => {
//   console.log(3);
// }, 0);
// console.log(4);
// console.log(5);
//=============================================
// let x = function (e) {
//   alert("Hello Gyusssss!!!");
// };

// let y = function (e) {
//   alert("Hello Frandsss!!!");
// };

// Btn.addEventListener("click", x);

// Btn.addEventListener("click", y);

// let b = prompt("Enter the number");
// if (b == 2) {
//   btn.removeEventListener("click", x);
// }
//////////////////////////////////////////////////////////////////////////////
// let Btn = document.getElementById("Btn");
// let x = function (e) {
//   alert("Hello Gyusssss!!!");
// };

// let y = function (e) {
//   alert("Hello Frandsss!!!");
// };

// Btn.addEventListener("click", x);
// Btn.addEventListener("click", y);

// let b = prompt("Enter the number");
// if (b == 2) {
//   Btn.removeEventListener("click", x);
// }
//
//=============================================
//Function Currying
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(3, 2));
//Aam Jindegi ==================
// function multiplplyMasala(a) {
//   return function (b) {
//     return a * b;
//   };
// }
// let curry = multiplplyMasala(3);
// console.log(curry(2));
//Mentos Jindegi
