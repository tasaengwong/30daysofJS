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

// Use filter to filter out countries containing land.

const containingLand  = countries.filter((countries) => countries.includes('land'))
console.log(containingLand)

// Use filter to filter out countries having six character.

const Letters = countries.filter(
  (country) => country.length === 6
)
console.log(Letters)

// Use filter to filter out country start with 'E'
const countriesStart = countries.filter((country) => country.startsWith('E'))
console.log(countriesStart)


// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items
function getStringLists(names){
  return names.filter(product => typeof product === 'string')
}
console.log(getStringLists(names))

// Use reduce to sum all the numbers in the numbers array.

const summary = numbers.reduce((n,m) => n+m,0)
console.log(summary)

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concatenate = countries.reduce((c1,c2) => c1+','+c2)
console.log(concatenate+' are north European countries')

// Explain the difference between some and every

/* every Check if all the elements are similar in one aspect. It returns boolean
and some check if some the elements */

// Use some to check if some names' length greater than seven in names array

const check  = names.some((names) => names.length > 7 )
console.log(check)

// Use every to check if all the countries contain the word land

const checkCountry = countries.every((countries) => countries.includes('land'))
console.log(checkCountry)

// Explain the difference between find and findIndex.

// find : is return first Element with condition and findIndex return position of first element with condition

// Use find to find the first country containing only six letters in the countries array
const find = countries.find((find) => find.length === 6)
console.log(find)

//  Use findIndex to find the position of the first country containing only six letters in the countries array

const findIndex = countries.findIndex((find) => find.length === 6)
console.log(findIndex)

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const searchCountry = countries.findIndex((find) => countries.indexOf('Norway')) 
console.log(searchCountry)

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const searchCounties = countries.findIndex((find) => countries === 'Russia') 
console.log(searchCounties)


// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(products))