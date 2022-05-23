const toppings = ['Mushrooms', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chilles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

function tops(para){
    console.log(para);
}
toppings.forEach(tops);
//as inline function
toppings.forEach(first=>{ console.log(first); });


//array items and index of it
function logTopping(topping, index) {
    console.log(topping, index);
  }
  toppings.forEach(logTopping);


//current,prev,next items of array
function logToppings(topping, index,originalArray){
    const newtext=originalArray[index-1];
    newtext ? console.log(newtext) : null;
    console.log(topping);
    const newtext2=originalArray[index+1];
    newtext2 ? console.log(newtext2) : null;
    console.log('---');
    const last=index === originalArray.length - 1;
    last ? console.log('Goodbye') : console.log("getting the next topping");
}
toppings.forEach(logToppings);


//map
const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];
function tops(emo){
      console.log(`👋 ${emo} 👋 `);
}
const referface=faces.map(tops);
console.log(referface);


//map--2
const fullNames = ['wes', 'kait', 'poppy']
.map(capitalize)
.map(passing);
console.log(fullNames);

//using fun name
function passing(name){
    return (`Mr.${name}`);
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

// function capitalize(word) {
//     return `${word[0].toUpperCase()}${word.slice(1)}`;
// }

//array total
let tot=0;
const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];
orderTotals.forEach(fname=> {
  tot=tot+fname;
})
console.log(tot);


const orderTotalsWithTaxe= orderTotals.map(total => 1);
const orderTotalsWithTax = orderTotals.map(total => total * 1.13);
console.log(orderTotalsWithTax);
console.log(orderTotalsWithTaxe);



const people = [
    {
      birthday: "April 22, 1993",
      names: {
        first: "Keith",
        last: "Buckley",
      },
    },
    {
      birthday: "January 3, 1975",
      names: {
        first: "Larry",
        last: "Heep",
      },
    }
  ];

  //get age by dob 
  const newmaptext=people.map(function(person){
      console.log(person);
      const dat=new Date(person.birthday).getTime();
      const dat2=Date.now();
      const age= dat2-dat;
      console.log(dat,dat2);
      console.log(age);
   
  });
console.clear();

  const students = [
    {
      id: "11ce",
      first_name: "Dall",
      last_name: "Puckring",
    },
    {
      id: "565a",
      first_name: "Margarete",
      last_name: "Brandi",
    },
    {
      id: "565c",
      first_name: "Bendicty",
      last_name: "Woodage",
    }
  ];
  

//find
const student = students.find(stud => stud.id === '565a');
console.log(student);

//filter
const studentd = students.filter(stud => stud.id === '565a');
console.log(studentd);

//higher order functions
function findById(id) {
    return function isStudent(student) {
      return student.id === id;
    }
  };
const studentds = students.filter(findById('565a'));
console.log(studentds);

//2
function findByProp(prop, propWeAreLookingFor) {
  return function isStudent(student) {
    return student[prop]=== propWeAreLookingFor;
  }
}

const studentj = students.find(findByProp('id', '565a'));
const studentk = students.find(findByProp('first_name', 'Bendicty'));
console.log(studentj);
console.log(studentk);

//reduce method
const numbers = [150, 50, 60,70];
function myFunc(total, num) {
  return total + num;
}
const temp=numbers.reduce(myFunc);
console.log(temp);


//for-of----only for arrays and strings
const numberss = [150, 50, 60,70];
for(const num of numberss){
  console.log(num);
}
//for-in----array and string
for(const nums in numberss){
  console.log(nums);
}
//for-in----object
const wes = {
  name: 'wes',
  age: 100,
  cool: true
}
for(const prop in wes){
  console.log(prop);
}

//prototype--connect obj and func
const baseHumanStats = {
  feet: 2,
  arms: 2,
  eyes: 2,
  head: 1
};
function Humans(name){
this.name=name;
}
Humans.prototype=baseHumanStats;
const west= new Humans('wes');

console.log(Object.entries(west));
for (const prop in west) {
  console.log(prop);
}

//while loop
let cool = true;
let i = 1;
while (cool === true) {
  console.log('You are cool');
  i++
  if (i > 100) {
    cool = false;
  }
}