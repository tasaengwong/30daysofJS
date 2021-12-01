// day 9 exercise
// Explain the difference between Foreach map filter and reduce
/* Answer
 foreach : Iterate an array elements. use foreach  only with arrays. It callback function with element,index, parameter and array
 Map : Iterate and arrays elements, modify the array and return new arrays.
 filter : filter out item which full fill filtering conditions and return new array.
 reduce :  task a callback function. the callback function task accumulator,current and optional initial value
*/

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Define a call function before you them in forEach, map, filter or reduce.
let sum = 0
numbers.forEach(num => sum += num) //foreach
console.log(sum)

const Upper = names.map((names) => names.toUpperCase()) //map
console.log(Upper)

const findLand = countries.filter((countries) => countries.includes('land'))
console.log(findLand)

const total =numbers.reduce((a,b) => a * b)
console.log(total)

// Use forEach to console.log each country in the countries array.
countries.forEach((countries) => console.log(countries))
console.log('\n')

//Use forEach to console.log each name in the names array.
names.forEach ((names) => console.log(names))
console.log('\n')

// Use forEach to console.log each number in the numbers array.
numbers.forEach((numbers) => console.log(numbers))


//Use map to create a new array by changing each country to uppercase in the countries array.
const NewCountry  =countries.map((countries) => countries.toUpperCase())
console.log(NewCountry)

//Use map to create an array of countries length from countries array.

const lengthCountry  =countries.map((countries) => countries.length)
console.log(lengthCountry)

// Use map to create a new array by changing each number to square in the numbers array

const math = numbers.map((numbers) => Math.pow(numbers,2))
console.log(math)

// Use map to change to each name to uppercase in the names array
const UpName  = names.map((names) => names.toUpperCase())
console.log(UpName)

//Use map to map the products array to its corresponding prices.

const corresponding = products.map((product) => products.product == products.price )
console.log(corresponding)
