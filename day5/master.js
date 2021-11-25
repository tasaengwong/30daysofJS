
console.log(countries)
console.log(webTechs);
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(" ");
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
const add = shoppingCart.push('Meat','Sugar')
const remove = shoppingCart.splice(3,1)
const edit = shoppingCart.splice(2,1,'Grean Tea')

console.log(shoppingCart)


// if (countries.indexOf("Ethiopai") !== countries){
//     const adding = countries.push( 'Ethiopai')
// }else {
//     console.log('Do not have Country')
// }
// console.log(countries)

// let language = prompt("Enter your language")
// if (webTechs.indexOf(language) !== webTechs){
//     console.log('Sass is a Css preprocess')
// }else{
//     const editing = webTechs.push('Sass')
// }
// console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


//level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const len = ages.length;


const sorting = ages.sort()
console.log(sorting)

const arrSort = ages.sort();
const mid = Math.ceil(len / 2);



const median =
  len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];

console.log("median: ", median);
 

const sum = ages.reduce((sum, val) => (sum += val));
console.log("average: ", sum / len);


console.log(countries.length)

  