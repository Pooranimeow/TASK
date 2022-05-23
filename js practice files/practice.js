// function Pizza(num1,num2) {
//     this.num1=num1;
//     this.num2=num2;
    
// }
 
// const pepperoniPizza = new Pizza(2,3);
// console.log(pepperoniPizza.num1);



//promise method
// function makePizza(toppings) {
//     const pizzaPromise  = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(`success ${toppings}`);
//         },1000)
//         if (toppings.includes('pineapple')) {
//             reject("Seriously? Get out 🍍");
//           }
//     });
//     return pizzaPromise;
// }
//   const pizza=makePizza();
//   console.log(pizza);
// const pizzas=makePizza(['cake']);
//   const pizzas2=makePizza(['cake','apple','fruit']);
// console.log(pizzas);
//   console.log(pizzas2);

//then method
// console.log('Starting');
//   pizzas.then(function(pizza) {
//     console.log("Ahh I got it!");
//     console.log(pizza);
//   });
//   console.log('finishing');


// console.clear();


// console.log('First');
// makePizza(['pepperoni', 'ham'])
//   .then(function(pizza) {
//     console.log(pizza);
//     return makePizza(['ham', 'cheese']);
//   })
//   .then(function(pizza) {
//     console.log(pizza);
//     return makePizza(['hot peppers', 'onion', 'feta']);
//   })
//   .then(function(pizza) {
//     console.log(pizza);
//     return makePizza();
//   })
//   .then(function(pizza) {
//     console.log(pizza);
//     return makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);
//   })
//   .then(pizza => {
//     console.log('All done! here is your last pizza');
//     console.log(pizza);
//   })
// console.log('Right after');


//promise.all()
// const pizzaPromise1 = makePizza(['hot peppers', 'onion', 'feta']);
// const pizzaPromise2 = makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);
// const pizzaPromise3 = makePizza(['ham', 'cheese']);

// const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// dinnerPromise.then(pizzas => {
//     console.log(pizzas);
//   })


//promise.race()
// const pizzaPromise1 = makePizza(['hot peppers', 'onion', 'feta']);
// const pizzaPromise2 = makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);
// const pizzaPromise3 = makePizza(['ham', 'cheese']);

// const dinnerPromise = Promise.race([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// dinnerPromise.then(pizzas => {
//     console.log('first one ready');
//     console.log(pizzas);
//   })

//promise-error handling-catch
// function handleError(err) {
//     console.log('Oh noooo!!');
//     console.log(err);
//   } 
// makePizza(['cheese','pineapple'])
//   .then(pizza => {
//     console.log(pizza);
//   })
//   .catch(handleError)


//promise.allsettled
// const p1 = makePizza(['pepper']);
// const p2 = makePizza(['pineapple']);
// const dinnerPromise2 = Promise.allSettled([p1, p2]);
// dinnerPromise2
//   .then(results => {
//     console.log(results);
//   })

//promise and catch
// const dinnerPromise3 = Promise.all([p1, p2]).catch(handleError); 

//async and await
// function wait(ms) {
//     return new Promise((resolve)=>{
//       setTimeout(resolve,ms);
//     })
//   }
// async function go() {
//     console.log('Starting');
//     await wait(6000);
//     console.log('Ending');
//     await wait(2000);
//     console.log('ending');
//   }
//   go();

//   async function makeDinner() {
//     const pizza1 = await makePizza(['pepperoni']);
//     console.log(pizza1);
//   }
//   makeDinner();


//fetch and console
fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => console.log(data));
  
  


