import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const NewCard = () => {
  let stickArr = ['♦', '♥', '♠', '♣'];
  let numbersArr = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];
  let sticks = document.querySelectorAll('.stick');
  let cardNumber = document.querySelector('.cardNumber');
  let randomNumber = Math.floor(Math.random() * 12);
  let randomStick = Math.floor(Math.random() * 4);
  let newNumber = numbersArr[randomNumber];
  let newSticks = stickArr[randomStick];

  cardNumber.innerHTML = newNumber;

  sticks.forEach(stick => {
    stick.innerHTML = newSticks;

    stick.style.color = (newSticks === '♥' || newSticks === '♦' ? 'red' : 'black');
  });
}

window.onload = function () {
  //write your code here
  NewCard();
};

let buttonChange = document.getElementById('change');
buttonChange.addEventListener('click', (e) => {
  NewCard();
});


let card = document.querySelector('.card');
let newHeight = document.getElementById('height');
newHeight.addEventListener('change', (e) => {
  if (e.target.value >= 500) {
    card.style.height = `${e.target.value}px`;
  }

});

let newWidth = document.getElementById('width');
newWidth.addEventListener('change', (e) => {
  if (e.target.value >= 350) {
    card.style.width = `${e.target.value}px`;
  }
});

let time = 5;
let counter = document.getElementById('counter');
setInterval(() => {

  time--;
  counter.textContent = `Cambiando carta en ${time}`;

  if (time <= 0) {
    NewCard();
    time = 5;
  }
}, 1000);




