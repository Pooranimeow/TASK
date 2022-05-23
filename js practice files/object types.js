let name1 = 'wes';
let name2 = 'wes';
console.log(name1 === name2);
name1 = 'scott';
console.log(name1 === name2);
name1=name2;
console.log(name1 === name2);
name2='stopper';
name1='stop';
console.log(name1 === name2);


const person1 = {
    first: "wes",
    last: "bos",
    clothing: {
    shirts:1,
    pant:2
    }
  };
  const person2 = {
    first: "wes",
    last: "bos"
  };
console.log(person1 === person2);

// const person3 = Object.assign({},person1);
  const person3={...person1};
  person3.first='lor';

// const person3 = _.cloneDeep(person1);
// person3.first = 'Larry';
// person3.clothing.shirts = 100;

console.log(person3);
console.log(person1);

const meatInventory = {
    bacon: 2,
    sausage: 3,
    tomato:10
  };
  const veggieInventory = {
    lettuce: 5,
    tomatoes: 3,
    tomato:8 
  };
  const inventory={
      
      ...veggieInventory,
      ...meatInventory ,
      bacon: 10,
     
    };
  
  console.log(inventory);
  var data = 'something else';
  function doStuff(data) {
  console.log(data);
  }
  doStuff(name1);


  function doStuff2(data) {
    data.tomatoes = 100;
    console.log(data);
  }
  doStuff2(inventory);

const myMap = new Map();
myMap.set('name', 'wes');
myMap.age=100;
// console.log(myMap);

myMap.set(person1, 'Really cool');
console.log(myMap);

myMap.get(person1);

const score = 300;
const prizes = new Map();
prizes.set(100, 'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Car');
console.log(prizes);
prizes.size;
console.log(`you win a ${prizes.get(score)}`);

// prizes.has(100);
// prizes.delete(200);
const ul = document.querySelector('.prizes');
prizes.forEach(entry => {
  console.log(entry);
});
for(const prize of prizes){
    console.log(prize[0], prize[1]);
}

for (const [points, prize] of prizes) {
    const li = `<li>${points}-${prize}</li>`;
    ul.insertAdjacentHTML('beforeend', li);
  }
 const mapping= new Map([['name', 'wes'],[2,'dos'],[3,'bos']]);
 console.log(mapping);

//You can turn an object into json using JSON.stringify()
 JSON.stringify(person2);
 //json into an object
 JSON.parse(`{"name":"wes","age":"100"}`);
 //if you want to send your map (=>) content you have to convert it to an object(:)
 Object.fromEntries(prizes);

 //array
 const name = [];
 const names = new Array();
 const namess = ['is','was','has','name', 'wes'];
 


//to check whether array or not
 Array.isArray(names);

//to find last item of array
console.log(namess[namess.length-1]);


// Mutative Method-reverse(),splice()-add,replce or remove
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//numbers.reverse();
//numbers.splice(3, 2);--remove two items  from index 3
//numbers.splice(2);--remove all items from index 2
//numbers.splice(5,2,'hi');--replace
//numbers.splice(5,0,'hi');--add
console.log(numbers);


//immutable method--slice() 
const numberspart=numbers.slice(2,5);
console.log(numberspart);
console.log(numbers);


const numbersReversed = [...numbers].reverse();
// numbersReversed.reverse();
console.log(numbersReversed);
console.log(numbers);


//add into first or last position of an array without affecting original array
// const newarr=[...namess,'luxes'];
const newarr=['luxes', ...namess];
console.log(newarr);


//add an item to the end of an array
namess.push('lux');
console.log(namess);


//add an item to the front of an array
newarr.unshift('plus');
console.log(newarr);


//add or remove item in middle of an array
const bikes = ["bianchi", "miele", "panasonic", "miyata"];
const newBikes = [...bikes.slice(0, 1),"benotto",...bikes.slice(1)];
console.log(newBikes);

const newBikes2 = [...newBikes.slice(0, 3),...newBikes.slice(4) ];
  console.log(newBikes2);


//find index and index values

// const kaitIndex = namess.findIndex('wes');
// console.log(kaitIndex);--not a func

const kaitIndex = bikes.findIndex(namely => namely === 'miele')
    // if (namely === 'wes') {
    //     return true;
    //   } else {
    //     return false;
    //   }
    console.log(kaitIndex);
    console.log(bikes[kaitIndex]);

//make new array using index 

const newNamesWithOutKait = [
    // get everything before the kait index
    bikes.slice(0, kaitIndex),
    // everything from the kait index
    bikes.slice(kaitIndex)
  ].flat(); //instead of ... operator
console.log(newNamesWithOutKait);

//use flat method instead of spread operator...
const newNames999 = newNamesWithOutKait.flat();
console.log(newNames999);


//to delete the particular comment
const comments = [
    { text: "Cool Beans", id: 123 },
    { text: "Love this", id: 133 },
    { text: "Neato", id: 233 },
    { text: "good bikes", id: 333 },
    { text: "so good", id: 433 }
  ];

  function deleteComment(id, comments) {
    // first find the index of the item in the array
    const commentIndex = comments.findIndex(comment => comment.id === id);
    // make a new array without that item in it
    return [
      ...comments.slice(0, commentIndex),
      ...comments.slice(commentIndex + 1)
    ];
    // return our new array
  }
  console.log(deleteComment(133,comments));



//object static methods
const meats = {
    beyond: 10,
    beef: 5,
    pork: 7,
  };
console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.values(meats).forEach(qty => {
    console.log(qty);
  });
Object.keys(meats).forEach(qty => {
    console.log(qty);
});
Object.entries(meats).forEach(qty => {
    console.log(qty);
});

Object.entries(meats).forEach(([key, value]) => {
    console.log(key, value);
  });



//loop over array
namess.forEach(function(named,index,array){
console.log(named,index);
});

const buns=["s1","s2","s3"];

//push
buns.push('s4');
console.log(buns);
//unshift
buns.unshift('s0');
console.log(buns);
//pop
buns.pop();
console.log(buns);
//shift
buns.shift();
console.log(buns);


//static methods--array.of()
Array.of('wes', 'kait');
[...'wes']
Array.of(...'wes');

//array.from()
const range = Array.from( { length: 5 }, function(){
    return 'wes';
});

function createRange(start, end){
const ranges = Array.from( { length: end - start }, 
function(item,index){
    return index+start;
});
return ranges;
}

//array.isarray
Array.isArray(names);


//instance methods--join() turns the array into a string,
const bun=["s1","s2","s3"];

console.log(bun.join());
console.log(bun.join(' or '));

//split()---Split will take the string and split it up into an array.

const foodString = "hot dogs, hamburgers, sausages, corn";
console.log(foodString.split(','));
console.log(foodString.split(' '));

//split like spread 
'wes bos'.split('');

//pop and push method 
// take the last item off toppings with pop()
const lastItem = bun.pop();
console.log(lastItem);
console.log(bun);
// add it back with push()
bun.push(lastItem);
console.log(bun);

//indexOf
const avoIndex = bun.indexOf('s1');
console.log(avoIndex);

const wes = { name: "wes" };
const people = [{ name: "scott" }, wes];
console.log(people.indexOf(wes));

//includes
const avoIndexs = bun.includes('s6');
console.log(avoIndexs);

// add it if it's not includes
if (!avoIndexs) {
    bun.push("s6");
  }
  console.log(bun);


//callback methods
const feedback = [
  { comment: "Love the burgs", rating: 4 },
  { comment: "Horrible Service", rating: 2 },
  { comment: "Smoothies are great, liked the burger too", rating: 5 },
  { comment: "Ambiance needs work", rating: 3 },
  { comment: "I DONT LIKE BURGERS", rating: 1 },
];


//to find one object that contains the word--1
const burgRating = feedback.find(rating => rating.comment.includes('work'));
console.log(burgRating);


//to console all objects in the array
function findBurgRating(Feed) {
  console.log(Feed);
}


//to find one object that contains the word using includes--2
function findBurgRatings(Feed) {

  return Feed.comment.includes('Service');

}

const burgRatings = feedback.find(findBurgRatings);
console.log(burgRatings);


//filter method--1
const goodReviews = feedback.filter(singleFeedback => {
  if (singleFeedback.rating !== 2) {
    return true;
  } else {
    return false;
  }
});
console.table(goodReviews);


//filter method--2
function filterByMinRating(minrating){
 return function(single){
     return single.rating > minrating;
  }
}
const goodReview = feedback.filter(filterByMinRating(2));
console.table(goodReview);


//3
const burgRatin= feedback.filter(singleFeedback => singleFeedback.comment.includes('burg'));
console.table(burgRatin);


//4
function findByWord(word) {
  return function(singleFeedback) {
    return singleFeedback.comment.includes(word);
  };
}
const burgRatinn= feedback.filter(findByWord('burg'));
console.table(burgRatinn);

//some()
const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(meatValue => meatValue >5);
console.table(isThereEnoughOfAtLeastOneMeat);


//every()
const isThereEnoughOfAtLeastOneMeats= Object.values(meats).every(meatValue => meatValue >=2);
console.table(isThereEnoughOfAtLeastOneMeats);


//sort()
const numbersy = [1, 2, 100, 3, 200, 400, 155];
const numbersSorted = numbersy.sort();
console.table(numbersSorted);

const numbersys = ['a','r','t','u'];
const numbersSorteds = numbersys.sort();
console.table(numbersSorteds);

console.table(namess.sort());