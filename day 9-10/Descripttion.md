
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

### filter 

Filter : filter out item which full fill conditions and return a new array

#### Example syntax 