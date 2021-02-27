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
let ShopName = [];
let ShopVotes = [];
let ShopShow = [];
let indexs = [];

function ShopImg(name, source) {
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
// console.log(ShopImg.allImg[0]['name']);
// console.log(ShopImg.allImg[0].votes);

function generateRandomIndex() {
    return Math.floor(Math.random() * ShopImg.allImg.length);

}

function renderThreeImg() {
    leftImgIndex = generateRandomIndex();
    // centerImgIndex = generateRandomIndex();
    // rightImgIndex = generateRandomIndex();


    do {
        centerImgIndex = generateRandomIndex();

    } while (leftImgIndex === centerImgIndex)

    do {
        rightImgIndex = generateRandomIndex();

    } while (leftImgIndex === rightImgIndex || centerImgIndex === rightImgIndex)

    indexs.push(leftImgIndex, centerImgIndex, rightImgIndex);

    // ShopImg.allImg

    console.log(ShopImg.allImg[leftImgIndex]);

    leftImgElement.src = ShopImg.allImg[leftImgIndex].source;
    ShopImg.allImg[leftImgIndex].show++
    centerImgElmenet.src = ShopImg.allImg[centerImgIndex].source;
    ShopImg.allImg[centerImgIndex].show++

    rightImgElmenet.src = ShopImg.allImg[rightImgIndex].source;
    ShopImg.allImg[rightImgIndex].show++
}

renderThreeImg();
leftImgElement.addEventListener('click', handleUserClick);
centerImgElmenet.addEventListener('click', handleUserClick);
rightImgElmenet.addEventListener('click', handleUserClick);
// ShopResult.addEventListener('results-list');
myBtn.addEventListener('click', showList);

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

        do{ 
            renderThreeImg();
            console.log(indexs);
        }while (indexs.includes(leftImgIndex) || indexs.includes(centerImgIndex) || indexs.includes(rightImgIndex))
         indexs = [];
         console.log(indexes);

       
    }

    else {
        leftImgElement.removeEventListener('click', handleUserClick);
        centerImgElmenet.removeEventListener('click', handleUserClick);
        rightImgElmenet.removeEventListener('click', handleUserClick);
        myBtn.addEventListener('click', showList);

        for (let i = 0; i < ShopImg.allImg.length; i++) {
            // 0
            ShopName.push(ShopImg.allImg[i].name);

            ShopVotes.push(ShopImg.allImg[i].votes);

            ShopShow.push(ShopImg.allImg[i].show);

        }
        viewChart();
    }
}

// making a show list function:
function showList(event) {
    let list = document.getElementById('results-list');
    console.log(list);

    for (let i = 0; i < ShopImg.allImg.length; i++) {

        //   console.log( ShopImg.allImg[i]); 
        // 0
        // 1
        // 2

        let resultsItem = document.createElement('li');
        list.appendChild(resultsItem);
        // banana had 3 votes, and was seen 5 times.
        // console.log(ShopImg.allImg[0].votes);
        resultsItem.textContent = ShopImg.allImg[i].name + ' had ' + ShopImg.allImg[i].votes + ' votes, was seen ' + ShopImg.allImg[i].show
    }

    myBtn.removeEventListener('click', showList);



    function viewChart() {

        let ctx = document.getElementById('myChart').getContext('2d');

        let chart = new Chart(ctx, {
            type: 'bar',

            data: {
                labels: showList,

                datasets: [


                    {
                        label: 'shop votes',
                        backgroundColor: '#1e212d',
                        borderColor: '#1e212d',
                        data: ShopVotes
                    },

                    {
                        label: 'shop show',
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        data: ShopShow
                    },


                ]

            },
            options:{}
        });
    }
//       // Configuration options go here
//       options: {}
//     });

}

// declaring variables means creating a new variable


function save(){
    let storedData;
    let parsedStoredData  = { seen:[] , vote:[]};
    console.log();
    if (localStorage.getItem('data') !== null){
        storedData = localStorage.getItem('data');
        parsedStoredData = JSON.parse(storedData);
      
        for (let i = 0 ; i < Images.all.length ; i++){
            allSeen[i] += parsedStoredData.seen[i];
            allVote[i] += parsedStoredData.vote[i];
        }
       
    }
    parsedStoredData.seen = allSeen;
    parsedStoredData.vote = allVote;
    let newDataToStore =JSON.stringify(parsedStoredData);
    localStorage.setItem('data',newDataToStore);
}

// declaring variables means creating a new variable