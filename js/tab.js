const tabNumber = document.querySelector('.bank-review__tab');
const tabImg = document.querySelector('.bank-review__list');
const dataImg = [
    img1 = {
        img : "../bank/img/tab-img1",
        text : "tab1입니다"
    },
    img2 = {
        img : "../bank/img/tab-img1",
        text : "tab2입니다"
    },
    img3 = {
        img : "../bank/img/tab-img1",
        text : "tab3입니다"
    },
    img4 = {
        img : "../bank/img/tab-img1",
        text : "tab4입니다"
    },
    img5 = {
        img : "../bank/img/tab-img1",
        text : "tab5입니다"
    },
    img6 = {
        img : "../bank/img/tab-img1",
        text : "tab6입니다"
    },
    img7 = {
        img : "../bank/img/tab-img1",
        text : "tab7입니다"
    },
    img8 = {
        img : "../bank/img/tab-img1",
        text : "tab8입니다"
    }
]

function tabHandle(e){
    let dataNumber = e.target.dataset.img;
    tabImg.innerHTML ="";
    for(let i=7;i>0;i--){
        let divImg = `
            <li class="tab-image">
                <div class = "tab-image__size">
                    <div>
                        <img src="${dataImg[dataNumber].img}-${i}.jpeg">
                    </div>
                    <p>${dataImg[dataNumber].text}</p>
                </div>
            </li>
        `

        tabImg.insertAdjacentHTML('afterbegin', divImg);
    }
}

tabNumber.addEventListener('click',tabHandle);