'use strict';

function newElements(a, b, c, d, e){
    
    const element= document.createElement(a);
    element.classList.add(b);
    element.innerHTML= c;
    
    element.addEventListener('click', function(){
        const bombArray= [];
        for(let i = 1; i <= 16; i++){
            let bomb= Math.floor(Math.random()*100);
            bombArray.push(bomb);
        }
        cLog(c);
        element.classList.add(d);
        


    })
    return element;
}







function cLog(all){
    console.log(all);
}