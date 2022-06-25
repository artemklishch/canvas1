// How to remove and update array items
const arr1 = ['FIRST','Laurence','Svekis',100,false];
const arr2 = ['SECOND',2332,true,'Hello','Svekis',400,false];
 
const arr3 = arr1.concat(arr1,arr2);
const arr4 = arr1;
arr2.push(arr1);
console.log(arr2);
console.log(arr3);
Array.prototype.push.apply(arr1,arr2);
console.log(arr1);
 
arr2.push('NEW ITEM');
arr1.push('Arr 1 New');
 
//delete arr1[12];
//delete arr2[7];
 
//arr1.length = 0;
 
arr1.splice(12,1,'REMOVED','SECOND');
arr2.splice(3);
 
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
// Comparing Data Type and automatic conversion of Data Types
let a = [10];
let b = 10;
let c = "10";
 
if(a == b) console.log(`${a} == ${b}`);
if(a == c) console.log(`${a} == ${c}`);
 
if(a === b) console.log(`${a} === ${b}`);
if(a === c) console.log(`${a} === ${c}`);
 
if(a != b) console.log(`${a} != ${b}`);
if(a != c) console.log(`${a} != ${c}`);
 
if(a !== b) console.log(`${a} !== ${b}`);
if(a !== c) console.log(`${a} !== ${c}`);
 
 
let d = [];
let e = 0;
let f = false;
let g = '';
let h = null;
let i = undefined;
let j = NaN;
 
 
console.clear();
if(d == e) console.log(`D ${d} == ${e}`);
if(e == f) console.log(`E ${e} == ${f}`);
if(f == g) console.log(`F ${f} == ${g}`);
if(g == h) console.log(`G ${g} == ${h}`);
if(h == i) console.log(`H ${h} == ${i}`);
if(i == j) console.log(`I ${i} == ${j}`);
if(j == d) console.log(`J ${j} == ${d}`);
 
if(g == d) console.log(`GD ${g} == ${d}`);
if(f == h) console.log(`FH ${f} == ${h}`);
if(f == i) console.log(`FI ${f} == ${i}`);
if(f == j) console.log(`FJ ${f} == ${j}`);
 
console.clear();
if(!d) console.log(`D Yes ${d}`);
if(!e) console.log(`E Yes ${e}`);
if(!f) console.log(`F Yes ${f}`);
if(!g) console.log(`G Yes ${g}`);
if(!h) console.log(`H Yes ${h}`);
if(!i) console.log(`I Yes ${i}`);
if(!j) console.log(`J Yes ${j}`);
 
 
 
 
if(d === e) console.log(`D ${d} === ${e}`);
if(e === f) console.log(`E ${e} === ${f}`);
if(f === g) console.log(`F ${f} === ${g}`);
if(g === h) console.log(`G ${g} === ${h}`);
if(h === i) console.log(`H ${h} === ${i}`);
if(i === j) console.log(`I ${i} === ${j}`);
if(j === d) console.log(`J ${j} === ${d}`);
// Object Construction with JavaScript
function FullName(firstName,lastName){
this.firstName = firstName;
this.lastName = lastName;
this.full = `${firstName} ${lastName}`;
}
 
const person1 = new FullName("Laurence","Svekis");
console.log(person1.full);
 
const person2 = new FullName("John","Svekis");
console.log(person2.full);
 
const person3 = new FullName("Mike","Smith");
console.log(person3.full);
 
let val = `${person1.firstName} ${person1.lastName}`;
console.log(val);
// JavaScript Immediately invoked functions coding examples
(function(){
console.log('ready');
})();
 
(()=>{
console.log('ready arrow');
})();
 
((a=1,b=2,c=3)=>{
console.log(a,b,c);
const val = a * b * c;
console.log(val);
})(5,6,7);
// Random Numbers and Random Array items
const arr = [];
const arr11 = [];
 
for(let i=0;i<10;i++){
const val = ran(0,1000);
arr.push(val.toString());
}
 
for(let i=0;i<20;i++){
const ind = Math.floor(Math.random()*arr.length);
const val = arr[ind];
console.log(ind,val);
}
 
function ran(min,max){
return Math.floor(Math.random()*(max-min+1))+min;
}
 
for(let i=1;arr1.push(i++)<50;);
console.log(arr1);
 
const arr12 = arr.sort();
const arr13 = arr.reverse();
arr.sort(()=>{
return Math.random() - 0.5;
});
console.log(arr[0]);
arr.sort(()=>{
return Math.random() - 0.5;
});
console.log(arr[0]);




// String Whitespace Cleaner and Remover
String.prototype.cleaner = function(){
return this.replace(/\s+/g,' ').trim();
}
 
const myStr1 = " Hello World ";
console.log(myStr1.cleaner());
 
let val1 = myStr1;
val1 = trimMyString(val1);
console.log(val1);
document.querySelector('.output').textContent = val;
 
function trimMyString(str){
let val = str.replace(/\s+/g,' ').trim();
//val = str.trimLeft();
//val = str.trimRight();
return val;
}


const canvas = document.getElementById("canvas");
const ctx = canvas .getContext("2d");
ctx.beginPath();
ctx.moveTo(40, 30);
ctx.quadraticCurveTo(20, 100, 200, 20);
// ctx.quadraticCurveTo(200, 100, 100, 10);
ctx.stroke();

// Quadratic Bézier curve
ctx.beginPath();
ctx.moveTo(50, 20);
ctx.quadraticCurveTo(230, 30, 50, 100);
ctx.stroke();

// Start and end points
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(50, 20, 5, 0, 2 * Math.PI);   // Start point
ctx.arc(50, 100, 5, 0, 2 * Math.PI);  // End point
ctx.fill();

// Control point
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(230, 30, 5, 0, 2 * Math.PI);
ctx.fill();