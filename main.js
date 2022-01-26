const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

//devo cambiare immagine con bottoni avanti-indietro


let slides = '';

for (let i = 0; i < items.length; i++) {

    slides +=  `<div class="item">
                    <img src="${items[i]}">
                </div>`;
                console.log(slides)
}

// //creo le slide e iniz. una var. che mi tenga traccia della slide attiva per container-left

let containerLeft = document.getElementById('container-left');
containerLeft.innerHTML = slides;

let currentSlide = 0;

let leftItems = document.getElementsByClassName('item');
leftItems[currentSlide].classList.add('active');

// faccio lo stesso per container-right

let photos = '';

for (let i = 0; i < items.length; i++) {

    photos +=  `<div class="item-block">
                    <img src="${items[i]}">
                </div>`;
                console.log(photos)
}

let containerRight = document.getElementById('container-right');
containerRight.innerHTML = photos;

let actualPhoto = 0;

let rightItems = document.getElementsByClassName('item-block');
rightItems[actualPhoto].classList.add('active');

