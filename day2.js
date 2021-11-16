let challenge = ' 30 Days Of JavaScript'
console.log(challenge)

let string = ' 30 Days Of Javascript'
console.log(string.length)

console.log(string.toUpperCase())

console.log(string.toLowerCase())


console.log(string.substring(2,18)) 
console.log(string.split())  
console.log(string.split(' '))    
let bland = 'Facebook, Google, Microsoft , Apple, IBM, Oracle, Amezon'
console.log(bland.split(','))

let char = '30 Days Of JavaScript'
console.log(char.replace('JavaScript', 'Python'))
console.log(char.charAt(15))   // S

let te = '30 Days Of JavaScript'
console.log(te.charCodeAt(12))  // J ASCII is 97

console.log(te.indexOf('a'))  //4
console.log(te.lastIndexOf('a')) //14
let paragrap = 'You cannot end a sentence with because because because is a conjunction'
console.log(paragrap.indexOf('because'))
console.log(paragrap.lastIndexOf('because')) 
console.log(paragrap.search('because'))
console.log(string.trim())

console.log(char.startsWith(30))
console.log(char.endsWith('JavaScript'))

console.log(char.match('a'))
let cat = "30"
console.log(cat.concat(" Days"," of"," and", " Javascript"))
console.log(char.repeat(2))