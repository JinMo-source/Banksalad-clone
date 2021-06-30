const slider = document.querySelector('.slider-wrap');
const sliderMove = document.querySelector('.slider-trans');
const nextBotton = document.querySelector('.next');
const prevBotton = document.querySelector('.prev');
const sliderUL = document.querySelector('.slider-back');

const sliderLength = document.querySelectorAll('.slider-Item');
const sliderNavi = document.querySelector('.slider-navi');

const sliderWidth = slider.offsetWidth;
console.log(sliderWidth);
const sliderMoveStyle = sliderMove.style;


//작동
function mainSlider(){
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
            current = 0;
            sliderMoveStyle.transform = `translateX(${current}px)`;
        }else {
            current = current-sliderWidth;
            sliderMoveStyle.transform = `translateX(${current}px)`;
        }
    }

    function sliderPrevHandle(){
        if(sliderWidth == Math.abs(current)){
            current = 0;
            sliderMoveStyle.transform = `translateX(${current*2}px)`;
        }else {
            current = current-sliderWidth;
            sliderMoveStyle.transform = `translateX(${current}px)`;
        }
    }

    setInterval(sl,1500);

    nextBotton.addEventListener('click',sliderNextHandle);
    prevBotton.addEventListener('click',sliderPrevHandle);
}

mainSlider();



// navi
function sliderLI(){
    sliderNavi.innerHTML = '';

    sliderLength.forEach((value,ind) => {
        let naviLI = `<li id="carousel-id-${ind}" class="carousel"></li>`;
        sliderNavi.insertAdjacentHTML('afterbegin', naviLI);
    })

    function naviHandle(e){
        let carId = e.target.id.split("-")[2];
        current = 0;
        sliderMoveStyle.transform = `translateX(${-sliderWidth*carId}px)`;
    }
    
    sliderNavi.addEventListener('click',naviHandle)
}


sliderLI();