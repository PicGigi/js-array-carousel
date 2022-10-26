const leftSlider = document.getElementById("left-slider");
const rightSlider = document.getElementById("right-slider");

const arrImg = [ "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

// slider di sinistra

for (i = 0; i < arrImg.length; i++) {
    const singleImg = document.createElement("img");
    singleImg.src = arrImg[i];
    singleImg.classList.add('left-slider-img')

    if(i === 0){
        singleImg.classList.add('active');
    }

    leftSlider.append(singleImg);
}

// slider di destra

for (i = 0; i < arrImg.length; i++) {
    const singleImg = document.createElement("img");
    singleImg.src = arrImg[i];
    singleImg.classList.add('right-slider-img')

    if(i === 0){
        singleImg.classList.add('selected');
    }
    rightSlider.append(singleImg);
}

let currentImg = 0;
const listLeftImg = document.querySelectorAll('.left-slider-img');
const listRightImg = document.querySelectorAll('.right-slider-img');


const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");

downButton.addEventListener('click',
    function(){
        listLeftImg[currentImg].classList.remove('active');
        listRightImg[currentImg].classList.remove('selected');
        if(currentImg === 4){
            currentImg = -1;
        }
        currentImg++;
        listLeftImg[currentImg].classList.add('active');
        listRightImg[currentImg].classList.add('selected');

    }
);

upButton.addEventListener('click',
    function(){
        listLeftImg[currentImg].classList.remove('active');
        listRightImg[currentImg].classList.remove('selected');
        if(currentImg === 0){
            currentImg = 5;
        }
        currentImg--;
        listLeftImg[currentImg].classList.add('active');
        listRightImg[currentImg].classList.add('selected');
    }
);
