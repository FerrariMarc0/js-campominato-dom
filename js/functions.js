'use strict';

function newElements(a, b, c, d){
    const element= document.createElement(a);
    element.classList.add(b);
    element.innerHTML= c;
    
    element.addEventListener('click', function(){
        console.log(c);
        element.classList.add(d);
    })
    return element;
}