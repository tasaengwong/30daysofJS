// Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
// Set new properties the dog object: breed, getDogInfo

const Dog = {
  title: "clismas",
  legs: "4 legs",
  color: "white",
  age: "3 month",
  bark: ["woof woof"]
}
Dog.breed = "Siberian"
Dog.getDogInfo = function() {
    let statement = `${this.title} is a ${this.legs}.\nit breed in ${this.breed}.\nand bark ${this.bark}.`
    return statement
}
console.log(Dog.name);
console.log(Dog.legs);
console.log(Dog.color);
console.log(Dog.age);
console.log(Dog.bark);

console.log(Dog.getDogInfo())



const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
const copyUsers = Object.assign({}, users)
console.log(copyUsers)
const tycan = Object.values(users.Alex.skills)
console.log(tycan)



// Example Code 
// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, 1000)