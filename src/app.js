import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let stickArr = ['♦', '♥', '♠', '♣'];
let numbersArr = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];
let sticks = document.querySelectorAll('.stick');
let cardNumber = document.querySelector('.cardNumber');
let buttonChange = document.getElementById('change');
let newHeight = document.getElementById('height');
let newWidth = document.getElementById('width');
let card = document.querySelector('.card');
let counter = document.getElementById('counter');
let time = 5;

const NewCard = () => {
  let randomNumber = Math.floor(Math.random() * 12);
  let randomStick = Math.floor(Math.random() * 4);
  let newNumber = numbersArr[randomNumber];
  let newStick = stickArr[randomStick];

  cardNumber.innerHTML = newNumber;

  sticks.forEach(stick => {
    stick.innerHTML = newStick;

    stick.style.color = (newStick === '♥' || newStick === '♦' ? 'red' : 'black');
  });
}

window.onload = function() {
  //write your code here
  NewCard();
};

buttonChange.addEventListener('click', (e) => {
  NewCard();
});

newHeight.addEventListener('change', (e) => {
  card.style.height = `${e.target.value}px`;
});

newWidth.addEventListener('change', (e) => {
  card.style.width = `${e.target.value}px`;
});

setInterval(() => {
  time--;
  counter.textContent = `Cambiando carta en ${time}`;

  if (time <= 0) {
    NewCard();
    time = 5;
  }
}, 1000);




