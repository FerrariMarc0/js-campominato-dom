'use strict';

const bigContainer= document.querySelector('.container');
const button = document.getElementById('gen');
const gameLevel= document.getElementById('difficulty');


button.addEventListener('click',
 function(){
    const inputLevel= difficulty.value;
    switch (inputLevel){

        case 'easy':
            bigContainer.innerHTML= '';
            for(let i = 1; i <= 100; i++){
                const createdElement= newElements('div', 'box', i, 'azure');
                bigContainer.append(createdElement);
            }
        break;
        
        case 'normal':
            bigContainer.innerHTML= '';
            for(let i = 1; i <= 81; i++){
                const createdElement= newElements('div', 'box_81', i, 'azure');
                bigContainer.append(createdElement);
            }
        break;

        case 'hard':
            bigContainer.innerHTML= '';
            for(let i = 1; i <= 49; i++){
                const createdElement= newElements('div', 'box_49', i, 'azure');
                bigContainer.append(createdElement);
        
            }
    }

});
