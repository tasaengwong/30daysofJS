const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
  "",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "",
];

const techs = ["Num", "Text", "Boolean", "Array", "Condition", "True", "false"];

console.log(techs.length);
console.log(techs[0]);
console.log(techs.lastIndexOf("Num"));

const mixedDataTypes = [25, "test", false, null, undefined];
console.log("Number of numbers:", mixedDataTypes.length);
const itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];

console.log(itCompanies);

console.log("Number of Companies is :", itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

console.log(itCompanies + ",");
const uppercase = itCompanies.map((itCompanies) => itCompanies.toUpperCase());
console.log(uppercase + " , ");

console.log(itCompanies);

// let check = prompt("enter");
// if (itCompanies.indexOf(check) !== itCompanies) {
//   console.log(check);
// } else {
//   console.log("not found");
// }


const sort = itCompanies.sort()
console.log(sort)
const reverse = itCompanies.reverse()
console.log(reverse)
console.log(itCompanies.splice(3,4))

console.log(itCompanies.splice(0,4))

console.log(itCompanies.splice(0,1))  
console.log(itCompanies.splice())  



//level2 