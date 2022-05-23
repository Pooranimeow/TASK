// const butt=document.querySelector(".new");
// const butts=document.querySelector(".new2");

// butt.addEventListener("click",function(){
//     console.log("clicked successfully");
// });




//using reference-- for multiple buttons have the same func.
// function handle(){
//     console.log("clicked success");
// }

// const hanlist= () =>console.log("clicked");


// butt.addEventListener("click",handle);
// butt.addEventListener("click",function(){
// console.log("clicked successfully")});


// butts.addEventListener("click",handle);
// butts.addEventListener("click",hanlist);


// // to remove event list.
// butt.removeEventListener("click",handle);





// //for multiple items--doesn"t work
// const buttonn=document.querySelectorAll(".next");

// function handles(event){
//     console.log("yes clicked");
//     console.log(event);
// }

// buttonn.forEach(function(buyButton){
// buyButton.addEventListener("click",handles);
// });




//for getting input values in innerhtml using eventlist.
// function getName(){
//     let m=document.getElementById("name1").value;
//     let n=document.getElementById("name2").value;
//     document.getElementById("para").innerHTML=m;
//     document.getElementById("para2").innerHTML=n;
// }
// document.getElementById("btn").addEventListener("click",getName);



// //for getting input values in console using eventlist.
// const signform=document.querySelector('[name="signup"]');
// signform.addEventListener('submit',function(event){
// //     event.preventDefault();
// //     console.log(event.currentTarget.name1.value);
// //     console.log(event.currentTarget.name2.value);
// //     console.log(event.currentTarget.box.checked);
// const newform=event.currentTarget.name1.value;
// if(newform.includes('i')){
// alert('not accepted');
// // event.preventDefault();
// }
// });



const crt=document.createElement('p');
crt.textContent='hi i m';
crt.classList.add('new');
console.log(crt);


const myImage = document.createElement('img');
myImage.src = "https://picsum.photos/500";
myImage.alt = "Nice photo";
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(crt);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

//append--append element

myDiv.append(myImage);
console.log(myDiv.childNodes);

//append--append text

myDiv.append('some text');
console.log(myDiv.textContent);

const heading = document.createElement('h2');
heading.textContent = 'Cool things';
myDiv.insertAdjacentText('afterbegin','hlo');

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);
document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);


const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2);

const item = document.querySelector('.para');
// console.log(item.innerHTML);

item.innerHTML =
`<div>
<p>Hey How are you?</p>
</div>`;
console.log(item.innerHTML);

const src = `https://picsum.photos/200`;
// const desc = `Cute pup  <img onload="alert('hacked');"src="https://picsum.photos/50"/>`;
const desc = `Cute pup `;
const myHTML = `
  <div class="wrapper">
    <h2> ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

item.innerHTML =myHTML;
console.log(item.innerHTML);

// console.log(typeof myHTML );

const itemImage = document.querySelector('.wrapper  h2');
itemImage.classList.add('round');

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment.querySelector('img'));
console.log(myFragment);

