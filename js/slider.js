const slider = document.querySelector('.slider-wrap');
const sliderMove = document.querySelector('.slider-trans');
const nextBotton = document.querySelector('.next');
const sliderUL = document.querySelector('.slider-back');

const sliderWidth = slider.offsetWidth;
const sliderMoveStyle = sliderMove.style;

const sliderLength = document.querySelectorAll('.slider-Item');
const sliderNavi = document.querySelector('.slider-navi');

let current = 0;

function sl(){
    if(sliderWidth <= Math.abs(current)){
        current=0;
        sliderMoveStyle.transform = `translateX(${current}px)`;
    }else {
        current = current-sliderWidth;
        sliderMoveStyle.transform = `translateX(${current}px)`;

    }
}



function sliderNextHandle(){
    if(sliderWidth <= Math.abs(current)){
        current=0;
        sliderMoveStyle.transform = `translateX(${current}px)`;
    }else {
        current = current-sliderWidth;
        sliderMoveStyle.transform = `translateX(${current}px)`;

    }
}


setInterval(sl,1000);

nextBotton.addEventListener('click',sliderNextHandle);

function naviLI(){
    sliderLength.forEach((value,ind) => {
    `<li class= 'navi-ID__${ind} navi'>${ind}</li>`
})
}
sliderNavi.insertAdjacentHTML('afterbegin', naviLI);