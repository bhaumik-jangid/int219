// let age = 60;
// if(age>30){
//     console.log("A")
// }else if (age>=80){
//     console.log("B")
// } else {
//     console.log("Fail")
// }

// const { connected } = require("process")

// if(age%2===0){
//     console.log("Age is even")
// }else{
//     console.log("Age is odd")
// }

// for(i=0; i<=9; i++){
//     console.log(`iteration: ${i}`);
// }

// const day ="Monday"
// //implement switch case

// let dayOfWeek;
// switch(day){
//     case "Monday":
//         dayOfWeek = "Weekday";
//         break;
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//     case "Friday":
//         dayOfWeek = "Weekday";
//         break;
//     case "Saturday":
//     case "Sunday":
//         dayOfWeek = "Weekend";
//         break;
//     default:
//         dayOfWeek = "Invalid day";
// }

// console.log(dayOfWeek);

// alert("Hello world")
// if (confirm("Are you sure")){
//     console.log("yes")
// } else {
//     console.log("No")
// }

// //implement prompt

// let name = prompt("Enter your name");
// console.log(`Hello ${name}`);


// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2025,
//     color: "Blue",
//     start: function(){
//         console.log(`This ${this.color} ${this.make} ${this.model} was made in ${this.year}`);
//     },
// };
// car.start();


// function fibonacci(n){
//     if(n<=1){
//         console.log(n + " ");
//         return n;
//     }else{
//         let m = fibonacci(n-1) + fibonacci(n-2);
//         console.log(n + " ");
//         return m;
//     }
//     arr = [1,67,756,67]
//     arr.forEach(function(value){
//         console.log(value);
//     });

// }

// console.log(fibonacci(2));


// let arr1 = [1,2,3,4,5];
// let newArr = arr.map(function(value){
//     return value*2;
// });

// let fruits = ["Apple", "Banana", "Orange"];

// fruits.push("watermelon");
// fruits.pop();
// fruits.unshift("pineapple");
// fruits.shift();

// fruits.forEach(function(element) {
//     console.log(element);
// });


// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);
// console.log(fruits.length);

// let arr = [1, 2, 3, 4];
// let squareArr = arr.map(function(element){
//     return element * element;
// });

// console.log(squareArr);


// let evenArr = arr.filter(function(element) {
//     return element % 2 == 0;
// });

// console.log(evenArr);


// let arr = [1, 3, 2, 4, 5];
// let sortedArr = arr.sort(function(a, b){
//     return a - b;
// });
// console.log(sortedArr);

// let desndingArr = arr.sort(function(a, b){
//     return b - a;
// });
// console.log(desndingArr);

// join use
// let str1 = arr.join(" ");
// console.log(str1);

//split use
// let str2 = "This is a string";
// let arr2 = str2.split(" ");
// console.log(arr2);

//slice and splice use
// let arr3 = [1, 2, 3, 4, 5];
// let arr4 = arr3.slice(1, 4);
// console.log("slice : ",arr4);

// arr3.splice(1, 2, 6, 7);
// console.log("splice : ",arr3);