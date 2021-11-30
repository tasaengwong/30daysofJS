
# #day 9 Higher Order Function

## Higher Order Function

Are function which take other function as a parameter or return a function

## Callback

A callback is a function with can be passed as parameter to other function

## Example Syntax

         // a callback function, the function could be any name
         const callback = (n) => {
         return n ** 2
         }
         // function take other function as a callback
         function cube(callback, n) {
         return callback(n) * n
         }
         console.log(cube(callback, 3))

# Function Programming

writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.

### ForEach

forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements,
index parameter and array itself. The index and the array optional.

### Map

Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

### Filter 

Filter : filter out item which full fill conditions and return a new array

#### Example syntax 
            //Filter countries containing land 
            const countriesContainingLand = countries.filter((country) => country
            includes('land')
            console.log(countriesContainingLand)


# #Day 10 Sets and Map
## Set
    set is collection of elements. Set can only contains unique element.
    
    
### syntax 
            //create an empty set 
            const companies = new set()
            consoloe.log(companies)

### adding an element to a set
            const companies = new Set() // creating an empty set
            console.log(companies.size) // 0

            companies.add('Google') // add element to the set
            companies.add('Facebook')
            companies.add('Amazon')
            companies.add('Oracle')
            companies.add('Microsoft')

            console.log(companies.size) // 5 elements in the set
            console.log(companies)

// using .add for add element to set
### deleting an element a set 
 // can delete an element from element a set using a delete method.
            //syntax example 
            console.log(comoanies.delete('Google'))

### checking an element in the set 
// the has method can help to know if a certain element exists in a set.
            
            console.log(companies.has('Apple')) 
            // false because don't have element Apple in a set
            
and remove all the element from a set using clear().
            companies.clear()


# day 11 Destructuring and Spreading
    Destructuring is a unpack arrays,and object and assigning to a distinct variable.

## Example Destructuring Arrays
            const numbers = [1, 2, 3]
            let [numOne, numTwo, numThree] = numbers

            console.log(numOne, numTwo, numThree)


If we like to skip on of the value in the array we use additional comma.The comma help to omit the value. And we can use default value in case the value of array for that index is undefined.

We can not assign variable to all the element in the array. We can destructure  and we can get the remaining as array using spread operator (...)
### Example 
            const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            let [num1, num2, num3, ...rest] = nums

            console.log(num1, num2, num3)
            console.log(rest)

We can Destructuring during iteration using for of
### Example 
            const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm']
            ['Norway', 'Oslo']]

            for (const [country, city] of countries) {
            console.log(country, city)
            }

## Destructuring Object
When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object.

# Spread or Rest Operator
When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread arr elements to another array.
### Example Spread operator to get the rest of array 
            const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            let [num1, num2, num3, ...rest] = nums
​
            console.log(num1, num2, num3)
            console.log(rest)