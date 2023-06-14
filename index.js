//Destructuring Array & Object

// let numbers = [1, 2, 3, 4, 5];

// let num1 = numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];
// let num4 = numbers[3];
// let num5 = numbers[4];

//Destructuring semua
// let [num1, num2, num3, num4, num5] = numbers;
//Desctructuring beberapa
// let [num1, , num3, , num5] = numbers;

// console.log(num1);
// console.log(num2);

// let john = {
//   fullName: "John doe",
//   age: 33,
//   isMarried: true,
// };

// const { fullName, age: umur, isMarried } = john;

// console.log(fullName);
// console.log(umur);
// console.log(isMarried);

// //Destructuring pada paramater fungsi
// const greetings = ({ fullName, age }) => {
//   return `Hello my name is ${fullName} and I'm ${age} years old`;
// };

// console.log(greetings(john));

//=====================================
//Module
//=====================================

// import greetings, { nama, angka, john as objJohn } from "./utils.js";
// import penambahan from "./penjumlahan.js";

// console.log(nama);
// console.log(angka);
// console.log(objJohn);

// console.log(greetings());
// console.log(penambahan(10, 20));

//=====================================
//Asynchronous JavaScript
//=====================================

// 2 Jenis Async
// 1. Parallel
// setTimeout(() => {
//   console.log("proses 1");
// }, 5000);
// console.log("proses 2");
// setTimeout(() => {
//   console.log("proses 3");
// }, 3000);
// console.log("proses 4");

// 2. Concurent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

//Promise
let condition = true;
let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

//1. Then - Catch
// newPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error));

// 2. Async - Await
const getPromise = async () => {
  try {
    let result = await newPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

getPromise();