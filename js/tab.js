const tabNumber = document.querySelector('.bank-review__tab');

const dataImg = {
    t1 : {
        img : "../img/tab-img1",
        text : "b"
    },
}

function tabHandle(e){
    let dataNumber = e.target.dataset.img;
    console.log(dataImg.b.img)
}

tabNumber.addEventListener('click',tabHandle);