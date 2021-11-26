console.log("\n");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("\n");
let l = 0;
while (l <= 10) {
  console.log(l);
  l++;
}
console.log("\n");

let d = 0;
do {
  console.log(d);
  d++;
} while (d <= 10);

console.log("\n");
//  loop 10 to 0
for (let x = 10; x >= 0; x--) {
  console.log(x);
}
console.log("\n");

let y = 10;
while (y >= 0) {
  console.log(y);
  y--;
}

console.log("\n");

let b = 10;
do {
  console.log(b);
  b--;
} while (b >= 0);

console.log("\n");
let m = 100;
for (let n = 0; n <= m; n++) {
  console.log(n);
}

console.log("\n");

let h = 7;
let string = "";
for (let j = 1; j <= h; j++) {
  for (let t = 0; t < j; t++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);

for (let o = 0; o <= 10; o++) {
  console.log(`${o} * ${o} = ${o * o}`);
}
console.log("\n");
for (let p = 0; p <= 100; p++) {
  if (p % 2 === 0) {
    console.log(p + " is even");
  }
}
console.log("\n");
for (let w = 0; w <= 100; w++) {
  if (w % 2 !== 0) {
    console.log(w + " is odd");
  }
}

console.log("\n");

let count = 0;
let i, j;
for (j = 2; j <= 100; j++) {
  for (i = 1; i <= j; i++) {
    if (j % i == 0) count++;
  }
  if (count == 2) console.log(j);
  count = 0;
}

console.log("\n");

let ans = 0
for (s = 1; s <= 100; s++){
  ans = ans + s
} 
console.log(ans)

let answer = 0
for (s = 1; s <= 100; s++){
  if(s%2===0){
  answer = answer + s
  }
} 
console.log(answer)
let answers = 0
for (s = 1; s <= 100; s++){
  if(s%2!==0){
  answers = answers + s
  }
} 
console.log(answers)


console.log('The sum of all even from 0 to 100 is '+answer+' And the sum all odd from 0 to 100 is ' + answers)

const arr  = Array.from({ length: 5},() => Math.floor(Math.random() * 10))
console.log(arr)

// program to generate random strings



var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
console.log(randomColor)

var r = () => Math.random() * 256 >> 0;
var color = `rgb(${r()}, ${r()}, ${r()})`;
console.log(color)



const  region= [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
const webTec = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

const upregion = region.map( region => region.toUpperCase())
const char = upregion.map( upregion => upregion.substring(0,3))
const lent = region.map(region => region.length)

console.log(upregion)
console.log(lent)
console.log(char)


// const search = region.includes("land")
// console.log(search)

const fullStacks = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']
]
fullStacks.forEach((fullStacks) =>{
  fullStacks.forEach((data) =>{
    console.log(data)
  })
})

const sortedCounties = region;
sortedCounties.sort()
console.log(sortedCounties)
webTec.sort()
mernStack.sort()
console.log(webTec)
console.log(mernStack)
