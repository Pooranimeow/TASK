const new1=document.querySelector('#push') ;
const tt=document.querySelector('#newtask input').value;
console.log(tt);
    
function clicking(){
    const inpvalue=document.getElementById('newval').value;
    if(inpvalue.length == 0 ){
        alert("Please Enter some input");
    }
    else{
       document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${inpvalue}
                </span>
                <button class="delete">
                <i class="fa fa-close"></i>
                </button>
            </div>
        `;
     
     var list = document.querySelectorAll('.task');
     list.forEach(cont=>cont.addEventListener('click', function(event) {
     event.target.classList.toggle('checked');}));

     //clearing input fields
     document.getElementById('newval').value = ' ';

     //for delete
     const buttons = document.querySelectorAll('.delete');
     
     function deleteCard(event) {
     const buttonThatGotClicked = event.currentTarget;
     buttonThatGotClicked.parentElement.remove();}
     
     buttons.forEach(del =>del.addEventListener("click",deleteCard));
    }
}


new1.addEventListener('click',clicking);

window.addEventListener('keydown', function(event) {
    console.log(event.key);
    if (event.key =='Enter') {
        clicking(); 
    }
  });

