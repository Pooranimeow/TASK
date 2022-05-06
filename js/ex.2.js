const terms=document.querySelector('.sub-box');
const word=document.querySelector('.words');
const accept=document.querySelector('.accept');

const ob=new IntersectionObserver(Callback,
    {
        root:terms,
        threshold:1
    });

ob.observe(terms.lastElementChild);

function Callback(payload){
    if(payload[0].intersectionRatio===1){
        accept.disabled=false;
        ob.unobserve(terms.lastElementChild);
    }
   
 }

