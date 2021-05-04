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

const
 
function navHandleOver(){
    console.log(this);
}

for(let i=0; i <navListLi.length; i++){
    navListLi[i].addEventListener("click",navHandleOver);
}

