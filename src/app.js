import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let stickArr = ['♦', '♥', '♠', '♣'];
let numbersArr = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];
let sticks = document.querySelectorAll('.stick');
let cardNumber = document.querySelector('.cardNumber');




window.onload = function() {
  //write your code here
  let randomNumber = Math.floor(Math.random() * 12);
  let randomStick = Math.floor(Math.random() * 4);
  let newNumber = numbersArr[randomNumber];
  let newStick = stickArr[randomStick];

  cardNumber.innerHTML = newNumber;

  sticks.forEach(stick => {
    stick.innerHTML = newStick;

    stick.style.color = (newStick === '♥' || newStick === '♦' ? 'red' : 'black');
  });

};
