
let Fname = '20scoops'
let Lname = 'CNX'
let country = 'thailand'
let city = 'chiangmai'
let age = 22;
let isMarried = 'single'
let y = 2021;

console.log(typeof(Fname))
console.log(typeof(Lname))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(y))

let No = '10';
console.log(typeof (No))

let part = '9.81'
let num_float = parseInt(part)  //parseInt 9.8 is not equal 10 
console.log(num_float)  

console.log (3 > 2)
console.log (8 < 9)
console.log (8 >= 6)

console.log(4 != 4)
console.log('Javascript'.length == 'phython'.length)
console.log(NaN == NaN)

console.log('\n')
let a = 4 > 3 ;
let b = 4 >= 3 ;
let c =  4 < 3 ;
let z = 4 <= 3 ;
let e = 4 == 4 ;
let f = 4 === 4 ;
let g = 4 != 4;
let w = 4 !== 4;
// let i = 4 != '4';
let j = 4 === '4';
// let k = 4 == '4';


console.log(a)
console.log(b)
console.log(c)
console.log(z)
console.log(e)
console.log(f)
console.log(g)
console.log(w)
console.log(4 != '4')
console.log(j)
console.log(4 == '4')
console.log('python'.length == 'jargon'.length)

console.log('\n')
// let check = 4 > 3 && 10 < 12;
// let check = 4 > 3 && 10 > 12 ;
// let check = 4 > 3 || 10 < 12 ;
// let check = 4 > 3 || 10 > 12 ;
// let check = !(4>3);
// let check = !(4<3);
// let check = !(4 > 3  && 10 < 12);
// let check = !(4 > 3 && 10> 12)
let check =!(4 === '4');
// let check = ;
// const check = 4 > 3 && 10 > 5
console.log(check)
console.log('\n')

const now = new Date()
console.log('What is the year\t'+now.getFullYear()) // 2020

const m = new Date()
console.log('What is the month today as a\t'+m.getMonth()) // 0, because the month is November,  month(0-11)

const todate = new Date()
console.log('What is the date to day is\t'+todate.getDate())

const d = new Date()
console.log('to day is \t'+d.getDate) 

const h = new Date()
console.log('Now is hours\t'+h.getHours()+':'+h.getMinutes()+':'+h.getSeconds()) 

console.log('\n')


const time = new Date()
const day  = time.getDate()
const month = time.getMonth()
const year = time.getFullYear()
const hour = time.getHours()
const minutes = time.getMinutes()
const timer = time.getTime()

console.log(day+'/'+month+'/'+year)




