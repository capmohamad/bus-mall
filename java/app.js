'use strict';

let leftImgElement = document.getElementById('left-img');

let centerImgElmenet = document.getElementById('center-img');

let rightImgElmenet = document.getElementById('right-img');
let myBtn = document.getElementById('myBtn');

let maxAttempts = 25;
let userAttemtesCounter = 0;
let leftImgIndex;
let centerImgIndex;
let rightImgIndex;

function ShopImg(name, source , show) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.show = 0;
    ShopImg.allImg.push(this);
}
ShopImg.allImg = [];
new ShopImg('bag', 'img/bag.jpg');
new ShopImg('banana', 'img/banana.jpg');
new ShopImg('rom', 'img/bathroom.jpg');
new ShopImg('boot', 'img/boots.jpg');
new ShopImg('food', 'img/breakfast.jpg');
new ShopImg('bubble', 'img/bubblegum.jpg');
new ShopImg('chair', 'img/chair.jpg');
new ShopImg('cthu', 'img/cthulhu.jpg');
new ShopImg('dog-duck', 'img/dog-duck.jpg');
new ShopImg('dragon', 'img/dragon.jpg');
new ShopImg('pen', 'img/pen.jpg');
new ShopImg('pet', 'img/pet-sweep.jpg');
new ShopImg('scissors', 'img/scissors.jpg');
new ShopImg('shark', 'img/shark.jpg');
new ShopImg('sweep', 'img/sweep.png');
new ShopImg('tauntaun', 'img/tauntaun.jpg');
new ShopImg('unicorn', 'img/unicorn.jpg');
new ShopImg('usb', 'img/usb.gif');


console.log(ShopImg.allImg);

function generateRandomIndex() {
    return Math.floor(Math.random() * ShopImg.allImg.length);

}

    function renderThreeImg() {
        leftImgIndex = generateRandomIndex();
        centerImgIndex = generateRandomIndex();
        rightImgIndex = generateRandomIndex();


        do {
            rightImgIndex = generateRandomIndex();
        } while (leftImgIndex === rightImgIndex)

        ShopImg.allImg

        console.log(ShopImg.allImg[leftImgIndex]);

        leftImgElement.src = ShopImg.allImg[leftImgIndex].source;
        centerImgElmenet.src = ShopImg.allImg[centerImgIndex].source;
        rightImgElmenet.src = ShopImg.allImg[rightImgIndex].source;

    }
renderThreeImg();
leftImgElement.addEventListener('click', handleUserClick);
centerImgElmenet.addEventListener('click', handleUserClick);
rightImgElmenet.addEventListener('click', handleUserClick);
// ShopResult.addEventListener('results-list');
myBtn.addEventListener('click',handleUserClick)

function handleUserClick(event) {
    userAttemtesCounter++;
    console.log(event.target.id);

    if (userAttemtesCounter < maxAttempts) {
        if (event.target.id === 'left-img') {
            ShopImg.allImg[leftImgIndex].votes++
        } else if (event.target.id === "center-img") {
            ShopImg.allImg[centerImgIndex].votes++
        }

        else { ShopImg.allImg[rightImgIndex].votes++ }

        renderThreeImg();

    }
    else {
       let list;
        let ShopResult; 
        for (let i = 0; i < ShopImg.allImg.length; i++) {
            ShopResult = document.createElement('li');
            list.appendChild(ShopResult);
            ShopResult.textContent = ShopImg.allImg[i].name + 'have' + ShopImg.allImg[i].votes + 'votes';

        }
        
        leftImgElement.removeEventListener('click', handleUserClick);
        centerImgElmenet.removeEventListener('click', handleUserClick);
        rightImgElmenet.removeEventListener('click', handleUserClick);


    }
}


