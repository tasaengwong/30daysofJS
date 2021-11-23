let challenge = " 30 Days Of JavaScript";
console.log(challenge);

let string = " 30 Days Of Javascript";
console.log(string.length);

console.log(string.toUpperCase());

console.log(string.toLowerCase());

console.log(string.substring(2, 18));
console.log(string.split());
console.log(string.split(" "));
let bland = "Facebook, Google, Microsoft , Apple, IBM, Oracle, Amezon";
console.log(bland.split(","));

let char = "30 Days Of JavaScript";
console.log(char.replace("JavaScript", "Python"));
console.log(char.charAt(15)); // S

let te = "30 Days Of JavaScript";
console.log(te.charCodeAt(12)); // J ASCII is 97

console.log(te.indexOf("a")); //4
console.log(te.lastIndexOf("a")); //14
let paragrap =
  "You cannot end a sentence with because because because is a conjunction";
console.log(paragrap.indexOf("because"));
console.log(paragrap.lastIndexOf("because"));
console.log(paragrap.search("because"));
console.log(string.trim());

console.log(char.startsWith(30));
console.log(char.endsWith("JavaScript"));

console.log(char.match("a"));
let cat = "30";
console.log(cat.concat(" Days", " of", " and", " Javascript"));
console.log(char.repeat(2));

//Level 2
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
console.log(typeof "10");

let num = 9.81;
let numflloat = +num;
console.log(numflloat + 0.19);

let randomNum = Math.random();
let numBtnZeroAndTen = randomNum * 101;
let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor);

function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandomBetween(50, 100));

const stringtext = Math.random().toString(36);
console.log(stringtext);

let n = 5,
  st; // row or column count
// defining an empty string

for (let i = 1; i <= n; i++) {
  // external loop
for (let j = 0; j < n; j++) {
    // internal loop
    st += "n";
}
  // newline after each row
st += "\n";
}
// printing the string
console.log(st);

var u,
  i,
  k = 0,
  u = 1;

document.write("<br><br>");
for (u = 1; u <= 5; u++) {
  //row
  document.write(`<br>${u}`);
  // document.write(i);
  for (i = 0; i <= 3; i++) {
    //col
    // document.write(i);
    // if (i >= 5) {
    //   document.write(" ");
    //   document.write(Math.pow(i, ));
    //   document.write(" "); // num u
    // }

    // for (k = 0 ; k <= 3; k++){
    //   document.write(" ");
    //   document.write(Math.pow(u, k));
    //   document.write(" ");

    // }
    // break;
    
    // if(i <= 5){
    document.write(" ");
    document.write(Math.pow(u, i));
    document.write(" ");
    // }
  }
}
// document.write(u)
