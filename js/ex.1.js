const cardButtons= document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalinner=document.querySelector('.modal-inner');

function handleCardButtonClick(event){

    const button=event.currentTarget;
    const card=button.closest('.card');
    const imgSrc=card.querySelector('img').src;
    const names=card.querySelector('h2').textcontent;
    const desc = card.dataset.description;

    modalinner.innerHTML=`<img width="500" height="500" src="${imgSrc.replace('200', '600')}" alt="${names}" />
    <p>${desc}</p>`;
    modalOuter.classList.add('open');
}


// cards.forEach(function() { this.addEventListener('click',handleclick) } );
cardButtons.forEach(button => button.addEventListener('click',handleCardButtonClick) );

function closemodal(){
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click',function(event){
    const out=event.target.closest('.modal-inner');
    if(!out){
        closemodal(); 
    }
});

// not working-keydown,mousedown
window.addEventListener('keydown', function(event) {
    console.log(event.key);
    if (event.key =='Escape') {
        closemodal(); 
    }
  });
