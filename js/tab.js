const tabNumber = document.querySelector('.bank-review__tab');
const tabBox = document.querySelector('.tab-image')
const tabImg = document.querySelectorAll('.tab-image>div');

function tabHandle(e){
    let dataNumber = e.target.dataset.img;
    tabBox.innerHTML = "";
    
    for(let i =0; i < 8;i++){
        let divImg = `<div class="tab-image__size"><img src="../img/tab-${dataNumber}"></div>`;
        console.log(testImage('../bank/img/slider1.png'));
        if(testImage('../bank/img/slider1.png')){
            console.log('true');
            return tabBox.insertAdjacentHTML('afterbegin', divImg);
        }else if(!testImage('./img/slider1.png')){
            console.log(false);
            return alert('false');
        }

    }
    
}
function testImage(URL) {
    var tester=new Image();
   tester.onload= isGood;
   tester.onerror=isBad;
   tester.src=URL;
   console.log(tester.src);
   function isGood() { console.log('true')
       return true};
   function isBad() { return false};
}

// testImage('./img/slider1.png')
tabNumber.addEventListener('click',tabHandle);