
//object
const person = {
    name: "wes",
    age: 100
  };
console.log(person);

const ages=1000;
const pers=new Object({
    name: "wes",
    propertyToCheck:"NEVER",
    ages,
    'cool':true,
    'really cool dude': true,
    '777': true,
    clothing: {
      shirts: 10,
      pants: 2
    },
    // sayHello: function(greeting = "Hey") {
    //   return `${greeting} ${this.name}`;
    // }
    sneeze: () => {
  console.log("AHHHH CHOOO",this);
}
});

pers.job='web developer';
pers.count=1;



console.log(pers.ages);
console.log(pers.clothing.pants);

// console.log(delete pers.name);

// const propertyToCheck = prompt("What do you want to check?");
// console.log(propertyToCheck);
// console.log(pers[propertyToCheck]);
// console.log(pers.propertyToCheck);

const wesFroze = Object.freeze(pers);
wesFroze.cool='false';
console.log(wesFroze);



const nameInput = document.querySelector('[name="first"]');
// if (nameInput) {
//   const namely = nameInput.value;
// }
// const namely = nameInput.value;
// console.log(namely);
const namely = nameInput? nameInput.value : 'no';
console.log(namely);






//closest method

const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

const ul = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;
div.innerHTML = ul;
console.log(div);

const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
// div.innerHTML = myHTML;
// console.log(div);

const ulElement = div.querySelector('ul');
console.log(ulElement);

ulElement.insertAdjacentHTML("beforebegin", myHTML);


const myDiv=document.querySelector('.myDiv');
console.log(myDiv.children[1]);

myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();

/* <div class="playerCard">
   <h2>NAME — AGE</h2>
   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
 </div> */

function generatePlayerCard(name, age, height){
 const tech= `
 <div class="playerCard">
   <h2>${name} — ${age}</h2>
   <p>They are ${height} and ${age} years old. In Dog years this person would be ${age*7}. That would be a tall dog!</p>
   <button class="delete" type="button">&times Delete</button>
 </div> 
 `;
 return tech;
}


const cards = document.createElement('div');
cards.classList.add('cards');
document.body.insertAdjacentElement('afterbegin',cards);

// cards.insertAdjacentHTML('afterbegin', generatePlayerCard("snickers", 12, 150));
// cards.insertAdjacentHTML('afterbegin', generatePlayerCard("snic", 12, 150));
// cards.insertAdjacentHTML('beforeend', generatePlayerCard("snick", 12, 150));


let cardsHTML = generatePlayerCard('wes', 12, 150);
 cardsHTML = cardsHTML + generatePlayerCard('scott', 12, 150);
 cardsHTML = cardsHTML + generatePlayerCard('kait', 12, 150);
 cardsHTML = cardsHTML + generatePlayerCard('snickers', 12, 150);


cards.innerHTML=cardsHTML;
console.log(cards);

const buttons = document.querySelectorAll('.delete');

function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest(".playerCard").remove();


}

buttons.forEach(del =>del.addEventListener("click",deleteCard));