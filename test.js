// //this is global code block
// console.log("hello");

// //this is function code block

// function getName() {
//   console.log("getName");
// }
// getName();

// // variables

// //es5 syntax

// // es 6 [const, let] se5[ var]
// //constant is const
// // let is reassignable
// // const is not reassignable
// let name = "Smith";
// name = "Luke";
// console.log(name);

// // data types in javascript

// // string , number , boolean , array , object, undefined , null

// const name = "James"; // string data types in javascript
// const age = 18; //number data types in javascript
// const isYoung = true; //boolean data types in javascript
// //                  0       1       2
// const friends = ["Emily", "Bob", "Smith"]; //array data types in javascript
// // console.log(friends[0]);
// //                key  value  key    value key  value
// const scores = { math: 90, english: 80, physics: 90 };
// // we print object's vales with key and . sign
// console.log(scores.english );

// Operators in javascript
// Arithmetic +(plus) - minus *(times) %(Moduler) /(Divison) ++(Increament) --( decreasement) **(square)

// const result = 1 + 2;
// const result = 1 - 2;
// const result = 2 * 2;
// const result = 3 ** 2;
// const result = 5 % 2;// remain of division
// const result = 4 / 2;
// let result = 1 // result = result + 1 reassignment
// console.log(result++); // 1 + 1
// console.log(result);
// let result = 2; //reassignment
// console.log(result--);

// Assignment variable in javascript =(assignment eg. const name = "joe") += (Increasing +1 and assign) -= (Decreasing and assign)
// let num = 1;
// console.log(num+=5)

// let num = 1;
// console.log((num -= 5));

// logical opreators in javascript
// >(Greater than) <(Less than) >=(Greater than or equal) <= (Less than or equal) &&(and and statement must be true both) statement ||(or is one statement must be true) !=(not equal) ==(equal equal) ===(strict equal) !==(strict equal)
// every logical opreators in javascript will return boolean
// const num = 2;
// console.log( 2 < 1);
//  const num = 5;
//  console.log( num <= 5);

// conditions
// James he was 12 he want to drink beer
// [if  else if else] only three keywords
// const age = 12;

// if (age >= 18) {
//   console.log("Enjoy the beer");
//   // && must be true both
// } else if (age >= 15 && age <= 18) {
//   console.log("You need to be an adult to drink the beer young boy");
// } else {
//   console.log("You're young to drink beer");
// }

// const age = 12;

// if (age >= 18) {
//   console.log("Enjoy the beer");
//   // && must be true both
// } else if (age >= 15 || age <= 18) {
//   console.log("You need to be an adult to drink the beer young boy");
// } else {
//   console.log("You're young to drink beer");
// }

// const name = undefined;
// console.log(name);
//!=
// console.log(false != true);
// !
// undefined  is 0 and true is 1
// console.log(!undefined);

// ===  strict type is check it's data type and return a boolean
// console.log( "0" === 0);

// == is not checking it's data type and return a boolean
// console.log("0" == 0);

// const username = "Joe";
// const password = "joe123";

// const input_uname ="Joe";
// const input_password = "joe123";
// if (username === input_uname && password === input_password) {
//   console.log("Login successful");
// } else {
//   console.log("Login failed");
// }

//functions in javascript
// function is keyword in javascript
// and function need a name to be called
// function is containing one code block to be executed
// function will work when you call by it's name
//  keyword  name paranthesis  code block
// function name () {}
// function alsdf() {
//   console.log("called");
// }
//NaN stands for not a number
//funciton's parameters
//             value acceptor
// function caculate(num) {
//     console.log(num);
//   console.log(num + 1);
// }
// caculate()


//make a login function where we use to check 
// 1. User's age
// 2  User's username
// 3 User's password
// 4 User's is Active // boolean
// const user = {
//     age: 18,
//     username: "Emily",
//     password: "Password123",
//     isActive: true,
// }