'use strict';

// 인기 카드 HOT Card


const cardList = document.querySelector('.card-list');
let listStyle = cardList.style;
let currentPosition = -50;

listStyle.transitionDuration = 1+'s';

function cardListHandle(){
    const listHeight = cardList.offsetHeight;

    if(listHeight <= Math.abs(currentPosition)){
        currentPosition = 0;
    }
    listStyle.top = currentPosition+'px';
    currentPosition = currentPosition-50;
}

let start = setInterval(cardListHandle,1500);

function restart(event){
    event.stopPropagation();
    start = setInterval(cardListHandle,1500);
}

function stop(event){
    event.stopPropagation();
    clearInterval(start);
}

cardList.addEventListener('mouseout',restart);
cardList.addEventListener('mouseover',stop);

