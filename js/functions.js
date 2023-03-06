'use strict';

function myCreateElement(htmlElement, className, htmlValue){
    const element= document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;
    element.addEventListener('click', function(){
        console.log(htmlValue);
    })
    return element;
}

function myAppendElement(containerElement, htmlElement){
    containerElement.append(htmlElement);
}
function resetGame(){
    const boardContainer = document.querySelector('.container');
    boardContainer.innerHTML = '';
}
function createBoard(boardContainer, cellNumber){

    let fragmentBoard= document.createDocumentFragment();
    for(let i = 1; i <= cellNumber; i++){
        const element = document.createElement('div');
        element.classList.add('box');
        element.style.width= `calc(100% / ${Math.sqrt(cellNumber)})`;
        element.style.height= element.style.width;
        element.innerText = i;
        fragmentBoard.append(element);
        
    }
    boardContainer.append(fragmentBoard);
}

function calculateCells(level){
    let cellNumber;
    

    switch(level){

        case 'normal':
            cellNumber= 81;
        break;

        case 'hard':
            cellNumber= 49;
        break;
        
        default:
            cellNumber= 100;
    }
    return cellNumber;
}

function createBombs(nbombs, min, max){
    let bombArray= [];
        while (bombArray.length < nbombs){
       
        const bomb= getRndInteger(min, max);
        if(!bombArray.includes(bomb)){
            
            bombArray.push(bomb);
        }
    }
    return bombArray;
    
}

function gameLogic(bombs){
    console.log(bombs);
    const cells= document.querySelectorAll('.box');
    const cellsClicked= [];
    let score= document.getElementById('counter_point');
    let gameOver= false;


    for(let i = 0; i < cells.length; i++){
        cells[i].addEventListener('click', function(){
            let cellNumber= Number(this.innerText);
            if (gameOver){
                return;
            }
            if(bombs.includes(cellNumber)){
                console.log('bomba');
                this.classList.add('red');
                gameOver= true;
                score.innerText= 'Hai perso!!';
            } else if(!cellsClicked.includes(cellNumber)){
                console.log('continua');
                this.classList.add('azure');
                cellsClicked.push(cellNumber);
                score.innerText= `Il tuo punteggio è: ${cellsClicked.length}`;
            }

            if(cellsClicked.length === cells.length - bombs.length){
                score.innerText=`Hai vinto! il tuo punteggio è ${cellsClicked.length}`;
                gameOver= true;
            }
            if(gameOver === true){
                for(let i = 0; i < bombs.length; i++){
                document.querySelector(`.box:nth-child(${bombs[i]})`).classList.add('red');
            }
            }
            
        })
    }
}

function campoMinato(){

    const bombsNumber= 16;
    const boardContainer = document.querySelector('.container');
    let level= (document.getElementById('difficulty').value);
    document.getElementById('counter_point').innerHTML= 'In bocca al lupo!';
    resetGame();
    let cellNumber= calculateCells(level);
    const bombs= createBombs(bombsNumber, 1, cellNumber);
    createBoard(boardContainer, cellNumber);

    gameLogic(bombs);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }