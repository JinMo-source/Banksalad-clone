'use strict';

// 인기 카드 HOT Card
const cardList = document.querySelector('.card-list');
const listHeight = cardList.offsetHeight;
let listStyle = cardList.style;
let currentPosition = -60;

listStyle.transitionDuration = 2+'s';

function cardListHandle(){
    if(listHeight <= Math.abs(currentPosition)){
        currentPosition = 0;
    }
    listStyle.top = currentPosition+'px';
    currentPosition = currentPosition-60;
}

let start = setInterval(cardListHandle,1500);

function restart(event){
    event.stopPropagation();
    start = setInterval(cardListHandle,1500);
    let boxControl = document.querySelector('.card-position__box'); 
    boxControl.classList = 'card-position__box boxHide';
    listStyle.transitionDuration = 1+'s';
}

function stop(event){
    event.stopPropagation();

    let boxControl = document.querySelector('.card-position__box'); 
    boxControl.classList = 'card-position__box boxOpen';
    listStyle.transitionDuration = 0+'s';
    listStyle.top = 0;
    listStyle.zIndex = 999;
    
    clearInterval(start);
}

cardList.addEventListener('mouseout',restart);
cardList.addEventListener('mouseover',stop);

