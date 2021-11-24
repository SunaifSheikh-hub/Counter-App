let initValue=0;
let counterVal=document.getElementById('counter');
counterVal.innerHTML=0;
const increment=()=>{
    initValue=initValue+1;
    counterVal.innerHTML=initValue;
}

const decrement=()=>{
    initValue=initValue-1;
    counterVal.innerHTML=initValue;
}

const getVal=()=>{
    const snap=document.getElementById('currVal');                
    var span = document.createElement('div'); 
    snap.appendChild(span)        
    span.innerHTML=initValue;                            
       
}



