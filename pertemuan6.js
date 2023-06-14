// //Const pada Array & Object

// const numbers = [1,2,3,4,5];
// numbers [3] = 10;
// console.log(numbers);

// const john = {
//     firstName: "john",
//     lastName: "doe",
//     age: 33,
//     status: "active",
// };

// //Arrow function

// function greetings () {
//     return "Hello world";
// }
// const greetings2 = () => {
//     return "Hello world this is arrow function";
// }
// console.log(greetings2);

// let number = [1,2,3,4,5];

// let res1 = number.map(function(element){
//     return element;
// });

// let res2 = number.map ((element) => element);
// console.log(res);

// //default parameter

// const greetings = (fullName, age) => {
//     if (fullName === undefined) {
//         fullName = "John Doe";
//     }
//     if (age === undefined){
//         age = 33;
//     }
// }

// //Rest Parameter

// const penjumlaha = (a,b,c,...params) => {
//     let hasil = 0;
//     params.forEach ((element) => {
//         hasil += element;
//     });
//     return hasil;
// };

// console.log(penjumlaha(1,2,3,4,5,6,7));

// //Spread operator
// let numbers = [1,2,3,4,5];
// console.log(...numbers);

// //Duplikasi Aray
// let numbers1 = [1,2,3,4,5];
// let numbers2 = [...numbers1];

// numbers1.push(6)
// numbers2.push(7)

// console.log("numbers1: ", numbers1);
// console.log("number2: ", numbers2);


//Menggabungkan Array
let numbers1 = [1,2,3];
let numbers2 = [5,6,7];
let numbers3 = [8,9,10];

let combineNumbers5 = numbers1.concat (numbers2, numbers3);
console.log(combineNumbers5);

let combineNumbers6 = [...numbers1, 4, ...numbers2, ...numbers3];
console.log(combineNumbers5);

