//variable 

let firstName;

firstName = "Jhon Doe"; //string

let age = 30; //Number
let isMarried = false; //Bolean

console.log(firstName)
console.log(age)
console.log(isMarried)
console.log("Hallo nama saya " + firstName + " umur saya " + age)

const gender = "male";

//operator
let x = 10;
let y = 20;

x++;
console.log(x);//11
x = x + 1;
console.log(x);//12
x+=1
console.log(x);//13

x = "20";
console.log(x === y);//false

x = 20;
console.log(x == y)//true


// ternary operator
age = 15;
let result = age >= 17 ? " bisa buat ktp " : " belum bisa buat ktp";
console.log(result);

//function
function greetingsPagi(){
    console.log("Selamat Pagi")
}

function greetingsMalam(){
    console.log("Selamat Malam")
}

function fullName(){
    console.log("Nama saya Chan Waturandang")
}

greetingsPagi();
greetingsMalam();
fullName();


function greetingsPagi(age){
    console.log("Haii, umur saya " + age)
}

greetingsPagi();