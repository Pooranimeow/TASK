// var is function scope.
// let and const are block scope.
// Function scope is within the function.
// Block scope is within curly brackets.


    // const s=document.querySelector('label');
    // console.log(s);
    const age=100;
    console.log("sample");
    // console.log(s,age);

    const first='she\'s \'cool\'';
    const sec='SECOND';
    const last=`LAST 
    is 
    last`;

    console.log(first);
    console.log(sec);
    console.log(last);

    const hello= `This is ${sec} time ${2+3}`;
    console.log(hello);

    
    let text=first + sec;
    text=text + hello;
    console.log(text);


    const ae = 500;
    const nam= 200;
    const sum=ae+nam;
    console.log(`the sum is ${sum}`);


    const hlo=`
    <div>
    <h2>${sec}</h2>
    <p>${hello}</p>
    </div>
    `;
    document.body.innerHTML= hlo;


    const obj={
        first:'first',
        last:'last'

    };

    let isdraw= false;
    const num=25;
    const number=num>25;
    console.log(number);



//    let a=10;
//    const b=10;

// parameters
   function calculateBill(a,b=10){  //calculateBill(10) in console
    console.log(a,b);
    console.log('executed');
    const obj2=a*b;
    return obj2;
   }
   calculateBill();

// arguments
   const mytotal=calculateBill(10,10);
   console.log(mytotal);

//    const mytotal2=calculateBill(20,20);
//    console.log(mytotal,mytotal2);
//    console.log(`your total is ${mytotal}`);
//    console.log(`your total is ${calculateBill()}`);


// arguments are passing to parameters
function say(firstname)
{
    return (`hello ${firstname}`);
}
// const say2=say('sri');
// console.log(say2);
function say2(name)
{
    return (`mr ${name}`);
}


// global variable--var
var say3 =function (fst)
{
    return (`hello ${fst}`);
}
// function say3(fst)
// {
//     return `hello ${fst.toUpperCase()}`;
// }



// function expression - anonymous function
const say4 =function (fstname)
{
    return (`hello ${fstname}`);
}

//different ways to declare function #1
function inchesTocm(inches){
    return inches*5;
}

//eslint disable #2
const inchesToCM=(inches) =>{
    return inches*5;
};

//#3
const InchesToCM=inches => inches*5;

//#4
const calculatebill=(a,b=10)=> a*b;
    
    
   
//#5 IIFE-Immediately invoked function expression #6-methods,shorthand method,arrow function
(function(age){
    // console.log('successfully');
    return `your age is ${age}`;
})(10);

//function scope-- run only within function
const ages = 100;
function go() {
  const ages = 200;
  var hair = 'blonde';
  console.log(ages);
  console.log(hair);
 
}

//block scope--let and const declaration is within the func. only--but is possible that var declaration is called outside the function in block scope
if (1 === 1) {
    var cooll = true;
  }
  console.log(cooll);

//global declaration of variable--let and var is used for global..but const is not possible

let cool;
if (1 === 1) {
   cool = true;
}
console.log(cool);

//block within the function
function iscool(name){
// let cools;
if (name === 'sri') {
   var cools = true;
}
console.log(cools);
return cools;
}

for (var i = 0; i < 10; i++) {
    console.log(i);
 }

 //
const dog = 'snickers';
function logDog(dog) {
  console.log(dog);
}
function go() {
  const dog = 'sunny';
//   console.log(dog);
  logDog('tom');
}
// go();


function sayHlo(na) {
  function yel() {
    console.log(na.toUpperCase());
  }
  yel();
}

//function hoisting--possible
say();
function say() {
  console.log('hey!');
  console.log(add(20, 2));
}
function add(a, b){
  return a + b;
}

//variable hoisting--not possible,Hoisting is when variable declarations and function declarations are hoisted to the top of the file.
//Only function declaration types of functions are hoisted, not function expressions (when you put a function in a variable).

var ask;
console.log(ask);
 ask = 10;

 //closures--access a parent level scope from a child scope,
 function outer(){
  const outerVar = 'Hey I am the outer Var';
  function inner(){
    const innerVar = "hey I am an inner var";
    console.log(innerVar);
    console.log(outerVar);
  }
  inner();
}
outer();

//2
function outers() {
  const outerVar = "Hey I am the outer Var";
  function inners() {
    const innerVar = "hey I am an inner var";
    console.log(innerVar);
    console.log(outerVar);
  }
  return inners();
}
const innerfunc=outers();
innerfunc;

//3-inner scope references a variable that was created in our outer scope, that is what is referred to as closure.
function createGreeting(greeting) {
  const myGreet = greeting.toUpperCase();
  return function(name) {
    return `${myGreet} ${name}`;
  };
}
const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('wes'));
console.log(sayHello('kait'));
console.log(sayHey('kait'));


//private variables
function createGame(gameName){
  var score = 0;
  return function win(){
    score ++;
    return `Your name ${gameName} score is ${score}`
  }
}
const hockeyGame = createGame('Hockey');
const hockeysGame = createGame('cricket');


//textcontent,innertext,innerhtml,outerhtml
const heading = document.querySelector('h2');
console.log(heading.textContent);
console.log(heading.innerText);


//data attributes
// const customs = document.querySelector('.custom');
// console.log(customs);

// customs.addEventListener('click', function(){
//   alert(`Welcome ${customs.dataset.name} ${customs.dataset.last} `);
// });



function calculate(bill, tax=5, rate=5){
  console.log('calculate success');
  const ttl=bill+(bill*tax)+(bill*rate);
  return ttl;
}

function slugifys(sentence, lowercase) {
  if (lowercase) {
    return sentence.replace(/\s/g, '-').toLowerCase();
  } 
  // else{
  return sentence.replace(/\s/g, '-');
  // }
}

function slugify(sentence, lowercase) {
  let slug  = sentence.replace(/\s/g, '-');
  if (lowercase) {
    slug= slug.toLowerCase();
    // return slug.toLowerCase();
  }
  return slug;
}


function nexts(){
const namel = 'ws';
// if ('awesome'.includes(namel)) {
//   console.log('SUPER COOL AWESOME NAME');
// }
const isAwesomeName = 'awesome'.includes(namel);
if (isAwesomeName) {
  console.log('SUPER COOL NAME');
}
}



function nameIsAwesome(named) {
  return 'awesome'.includes(named);
}
if (nameIsAwesome('wes')) {
  console.log('COOL NAME WES');
}



function next(){
// const doggy = {};
// if (doggy) {
//   console.log('You have a dog');
// } else {
//   console.log("You don't have a dog");
// }
const isCool = false;
if (!isCool){
  console.log('You are not cool');
}
}


function nexti(){
const values = [[], [], -10, 1, 0, "", "full string", " ", undefined, NaN, null];
console.group('truthy or falsy values');
values.forEach(value => {

  if (value)  
  console.log(value, 'is truthy');
  else  
  console.log(value, 'is falsy');
})
console.groupEnd('');
}

function nextis(){
const count = 0;
// const word= count===1 ? 'item' : 'items';
// if (count === 1) {
//   word = 'item';
// } else {
//   word = 'items';
// }
const sent=`you have ${count} ${count===1 ? '' : 's'} in cart`;
console.log(sent);
}


function handleKeyDown(event) {
  console.log(event.key);
}
window.addEventListener("keydown", handleKeyDown);


//timeout and intervals
function buzzer() {
  console.log("ENNNNGGGG");
}
console.log("Starting");
setTimeout(buzzer, 500);
console.log("Finishing!");

function setImmediateInterval(funcToRun, ms) {
  
  funcToRun();
  return setInterval(funcToRun, ms);
}
setImmediateInterval(buzzer, 2000);

function sayHi() {
  console.log("Heeeyy");
}
setImmediateInterval(sayHi, 2000);

function destroy() {
  document.body.innerHTML = `<p>DESTROYED</p>`;
}
setTimeout(destroy, 5000);


switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}