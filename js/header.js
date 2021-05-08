'use strict';

const appDownload = document.querySelector('.app-download');
const appItem = appDownload.querySelector('div');

function appHandleClick(){
    if(appItem.className === "appItemHide"){
        appItem.className = "appItemOpen";
    }else {
        appItem.className = "appItemHide";
    }
    
}

appDownload.addEventListener('click',appHandleClick);


const navList = document.querySelector('.nav-list');
const navListLi = navList.querySelectorAll("li");


 
function navHandleOver(e){
    e.preventDefault();
    const navi = document.querySelector(".navi");
    const navMenu = navi.querySelectorAll('.nav-menu');
    
    navi.className = "navi ItemOpen";
    
    let dataNumber = this.dataset.navi;
    navMenu[dataNumber].className = "nav-menu ItemOpen";
};

function navHandleOut(e){
    e.preventDefault();
    
    const navi = document.querySelector(".navi");
    const navMenu = navi.querySelectorAll('.nav-menu');
    
    navi.className = "navi ItemHide";
    
    navMenu.className = "nav-menu ItemHide";
    // console.log(navMenu);
};



for(let i=0; i <navListLi.length; i++){
    navListLi[i].addEventListener("mouseover",navHandleOver);
}

    navList.addEventListener("mouseout",navHandleOut);
