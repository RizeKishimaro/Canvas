// const let var
// assignment opreators = != >= <=
// const name = "John";

// string number boolean array object undefined null
const name = "James";
const age = 12;
const isYoung = true;
const friends = ["Bob", "Joe", true, false, 0, { name: "Larry" }];
// const products = {
//     isPending: false,
//     // this is called nested objects
//   products: [
//     {
//       name: "mango",
//       price: 10,
//       expiredate: "2023-6-30",
//     },
//     {
//       name: "Banana",
//       price: 5,
//       expiredate: "2023-6-30",
//     },
//     {
//         name: 'apple',
//         price: 30,
//         expiredate: "2023-6-30",
//     }
//   ],
// };

//nested objects and nested arrays

// const students = [
//   {
//     id: 1,
//     name: "Smith",
//     age: 16,
//     occupation: ["IT", "Computer", "Programming"],
//   },
//   {
//     id: 2,
//     name: "Joe",
//     age: 12,
//     occupation: ["IT", "Computer", "Programming"],
//   },
// ];

// console.log(students[0].name);

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// console.log(students);
//            param
// friends.map((friend)=>{
//     console.log(friend);
// });
//this is comparision operators and it's always return a boolean
// console.log(0==="0");
// if, if else , else

const obj = {
  lsdfskf: "name",
};
// loop is only available in array and objects
const people = [
  {
    id: 1,
    name: "Bryan",
    gender: "male",
    email: "bryan@gmail.com",
    password: "bryan123",
    birthdate: "2005-4-21",
    joinDate: "2020",
  },
  {
    id: 2,
    name: "Kelvin",
    gender: "male",
    email: "kelvin@gmail.com",
    password: "kelvin123",
    birthdate: "2000-4-21",
    joinDate: "2012",
  },
  {
    id: 3,
    name: "Mishiro",
    gender: "female",
    email: "mishiro@gmail.com",
    password: "mishiro123",
    birthdate: "2002-4-21",
    joinDate: "2019",
  },
];
// function callMe(x, y) {
//     console.log(x + y);
// }
// callMe(1,2)
// anonymous function
// const result = function (x, y) {
//     console.log(x + y);
// }
// result(1,2)

// const result = function (x, y) {
//   return x + y;
// };


//this is arrow funciton
// const result = (x, y) => {
//     return x+ y 
// }
// console.log(result(1,2))

// IIFE ( Immediatly Invoked Function Expression)

// const result = (() => {
//     console.log(1)
//   })();

// function variables are local not global

// you can't use the variable that are in side of the function from the global or outside of the function
// const variables = ()=>{
//     const num = 1;
//     console.log(num)
// }
// variables()
// method and properties in the array
// method should use with () example people.map()
// properties should use people.length


const filteredPeople = people.filter(function (value, index) {
  return value.gender !== "male";
});

console.log(filteredPeople)
// 0 means false and 1 means true
