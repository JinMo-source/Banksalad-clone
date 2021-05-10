const slider = document.querySelector('.slider-wrap');
const sliderWidth = slider.offsetWidth;
const sliderMove = document.querySelector('.slider-trans');
const nextBotton = document.querySelector('.next');


function sliderNextHandle(){
    console.log(sliderWidth)
    sliderMove.style.transform = `translateX(${sliderWidth}px)`;
    console.log(sliderMove.style);
    console.log(sliderMove.style.transform);
}

nextBotton.addEventListener('click',sliderNextHandle);