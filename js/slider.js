const slider = document.querySelector('.slider-wrap');
const sliderWidth = slider.offsetWidth;
const sliderMove = document.querySelector('.slider-trans');
const nextBotton = document.querySelector('.next');

const sliderMoveStyle = sliderMove.style;
let current = 0;


function sliderNextHandle(){
    current = current-sliderWidth;
    sliderMoveStyle.transform = `translateX(${current}px)`;
    console.log(sliderMove.style);
    console.log(sliderMove.style.transform);
}

nextBotton.addEventListener('click',sliderNextHandle);