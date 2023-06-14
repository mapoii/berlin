//IIFE
//(Immediately Invoked Function Expression)
//Fungsi yang otomatis dijalankan

(function () {
  console.log(`Hello World`);
})();

//Array

// let students = ["john", "jane", "bob", "peter"];
// let john = ["john", "doe", 33, true];

// console.log(students.length);
// console.log(students[1]);
// console.log(john[1]);

// console.log(students[students.length - 1]);

// students[2] = "edgar";
// console.log(students);
// console.log(john);

// let array = [1, 2, 3, "halo", false, true];
// console.log(array.toString());
// console.log(array.join(" "));
// array.pop();
// console.log(array);
// array.push("selamat pagi");
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift("selamat pagi");
// console.log(array);

// let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
// buah.splice(3, 1, "Lemon", "Kiwi");
// console.log(buah);

//Object
// let johnObj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 33,
//   isMarried: true,
//   sayHello: function () {
//     console.log("hello my name is" + this.firstName);
//   },
//   address: {
//     city: "Minut",
//     province: "Sulawesi Utara",
//     postalCode: "95371",
//   },
//   grade: [80, 100, 85],
// };

// console.log(johnObj.firstName); //Dot Notation
// console.log(johnObj.lastName);
// console.log(johnObj["age"]); //Bracket Notation
// johnObj.address = "Manado";
// console.log(johnObj);
// johnObj.sayHello();
// console.log(johnObj.address.city);
// console.log(johObj.grade[2]);

//Array Built in Method
//Array Object
let students = [
  {
    fullName: "John Doe",
    age: 33,
    grade: 90,
  },
  {
    fullName: "Peter",
    age: 25,
    grade: 85,
  },
  {
    fullName: "Jane",
    age: 28,
    grade: 95,
  },
];

// for (let i = 0; i < students.length; i++) {
//   students[i].grade += 5;
//   console.log(students[i]);
// }

let result2 = students.forEach(function (item) {
  item.grade += 5;
});

// let result = students.map(function (item) {
//   item.grade += 5;
//   return item;
// });
// console.log(result);

let filterStudent = students.filter(function (item) {
  return item.grade > 90;
});
console.log(filterStudent);

let findStudent = students.find(function (item) {
  return item.grade > 90;
});
console.log(findStudent);
