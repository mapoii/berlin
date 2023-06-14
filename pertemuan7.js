//destracturing array dan objeck 

let numbers = [1, 2, 3, 4, 5];

// let num1 = numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];
// let num4 = numbers[3];
// let num5 = numbers[4];
// let num6 = numbers[5];

//destructuring semua array
// let [num1, num2, num3, num4, num5] = numbers;

//destructuring beberapa
// let [num1, , num3,  ,num5] = numbers;


// console.log(num1);
// console.log(num3);

//destructuring objek 
// let jhon ={
//     fullName: "jhon doe",
//     age: 33,
//     isMarried: true
// };

// const {fullName, age, isMarried} = jhon;

// console.log(fullName);
// console.log(age);
// console.log(isMarried);

// //destructuring parameter fungsi 
// const greetings = (obj) => {
//     // return `Hello my name is ${obj.fullName} and i'm ${obj.age} years old`
//     return `Hello my name is ${fullName} and i'm ${age} years old`
// };

// console.log(greetings(jhon));

// ================================================
// module 
// ================================================

// import { nama, numbers as angka, jhon } from "./utils.js";
// import greeting from "./utils.js";
// import penjumlahan from "./penjumlahan.js";

// console.log(nama);
// console.log(angka);
// console.log(jhon);
// console.log(greetings());
// console.log(penjumlahan(10, 20));


//=============================================
// asynchronous & synchronous 
//=============================================

//synchronous 

// console.log("proses 1");
// console.log("proses 2");
// console.log("proses 3");
// console.log("proses 4");

// //asynchronous 
// setTimeout(() => {
//     console.log("proses 1");
// }, 5000);
// setTimeout(()=>{
//     console.log("proses 3");

// }, 3000);
// console.log("proses 4");

//2 jenis asynchronous 
//parallel 
// setTimeout(() => {
//     console.log("proses 1");
// }, 5000);
// setTimeout(()=>{
//     console.log("proses 2");

// }, 3000);
// console.log("proses 3");


//concurrent 
// setTimeout(() => {
//     console.log("proses 1");
//     setTimeout(() => {
//         console.log("proses 2");
//         setTimeout(() => {
//             console.log("proses 3");
//             setTimeout(() => {
//                 console.log("proses 4");
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 5000);(jarang dipakai )


//promise 
// let condition = true
// let newPromise = new Promise ((resolve, reject) =>{
//     if (condition){
//         resolve("berhasil");
//     } else {
//         reject ("gagal");
//     }
// });
let condition = false
let newPromise = new Promise ((resolve, reject) =>{
    if (condition){
        resolve("berhasil");
    } else {
        reject ("gagal");
    }
});

// 1.then - catch 

// newPromise.then ((result) => {
//     console.log(result);
// })
// .catch((eror)=> {
//     console.log(error)
// });

// 2. asyn - await 
const getPromise = async () => {
 try {
    let result = await newPromise;
    console.log(result);
}
    catch (error){
        console.log(error);
    }
};
getPromise();




