//declare a function FullName and it print out your full name.
function printFullName() {
  let firstName = "Akhom";
  let lastName = "Tasaengwong";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}
printFullName();

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

const FullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(FullName("akhom", "tasaengwong"));

//   Declare a function addNumbers and it takes two two parameters and it returns sum.

let addNum = (num1, num2) => {
  let Sum = num1 * num2;
  return Sum;
};
console.log(addNum(10, 20));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(lengths, width) {
  let ractangle = lengths * width;
  return ractangle;
}
console.log(areaOfRectangle(3, 6));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(L, W) {
  let perimeter = 2 * (L * W);
  return perimeter;
}
console.log(perimeterOfRectangle(3, 6));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function rectangular(kwang, yao, sung) {
  let volume = kwang * yao * sung;
  return volume;
}
console.log(rectangular(3, 6, 8));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (r) => {
  let PI = Math.PI;
  let Circle = PI * r * r;
  return Circle;
};
console.log(areaOfCircle(4));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

const Circumferencr = (r) => {
  let PI = Math.PI;
  let circumference = 2 * PI * r;
  return circumference;
};
console.log(Circumferencr(4));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
let substance = (mass, volume) => {
  let density = mass / volume;
  return density;
};
console.log(substance(43, 12));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

let Speed = (S, T) => {
  let V = S / T;
  return V;
};
console.log(Speed(10, 2) + " " + "m/s");

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight = (mass, gravity) => {
  let weight = mass * gravity;
  return weight;
};
console.log(weight(5, 9));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

const convertCelciusToFahrenheit = (C) => {
  let fahrenheit = (9 / 5) * C + 32;
  return fahrenheit;
};
console.log(convertCelciusToFahrenheit(37));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

let BMI = (weight, height) => {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return bmi + " " + "is Underweight";
  } else if (bmi < 25) {
    return bmi + " " + "is Normal weight";
  } else if (bmi < 30) {
    return bmi + " " + "is Overweight";
  } else {
    return bmi + " " + "is Obese";
  }
};
console.log(BMI(60, 1.55));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// const season = (season) => {
//   let month = prompt ('enter your month')
//   switch (month) {
//     case "September":
//       return "Is season Autumn";
//       break;
//     case "October":
//       return "Is season Autumn";
//       break;
//     case "November":
//       return "Is season Autumn";
//       break;
//     case "December":
//       return "Is season winter";
//       break;
//     case "January":
//       return "Is season winter";
//       break;
//     case "February":
//       return "Is season winter";
//       break;
//     case "March":
//       return "Is season Spring";
//       break;
//     case "April":
//       return "Is season Spring";
//       break;
//     case "May":
//       return "Is season Spring";
//       break;
//     case "June":
//       return "Is season Summer";
//       break;
//     case "July":
//       return "Is season Summer";
//       break;
//     case "August":
//       return "Is season Summer";
//       break;
//   }
// };
// console.log(season());

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(...argument) {
  return Math.max.apply(null, argument);
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

//level 2f
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// program to solve quadratic equation
/*
let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
} */

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// const printArray = (...takes) =>{
//     let input = prompt ('Enter your num')
//     return input.split()
// }
// console.log(printArray())

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.


function showDateTime(){
    const now = new Date()
    const years = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate() 
    const hours = now.getHours() 
    const minutes = now.getMinutes()
  
    return (`${date}/${month}/${years} ${hours}:${minutes}`); 
};

console.log(showDateTime())

// Declare a function name swapValues. This function swaps value of x to y.
// function swapValues(){

// let a = prompt('X value');
// let b = prompt('Y value');
// let temp;
// temp = a;
// a = b;
// b = temp;

// return(`X => ${a} Y=> ${b}`);
// }
// console.log(swapValues())

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).


const reverseArray = (rev) =>{
      
let rev = rev.reverse();  
return rev 
}
console.log(reverseArray([1, 2, 3, 4, 5]))