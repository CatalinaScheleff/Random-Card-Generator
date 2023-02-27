/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function crearNumero() {
  let arrNum = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNum = Math.floor(Math.random() * arrNum.length);

  return arrNum[indexNum];
}

function crearPinta(Index) {
  let arrPinta = ["♥", "♠", "♦", "♣"];
  if (arrPinta[Index] === "♥" || arrPinta[Index] === "♦") {
    document.querySelector("#pinta1").style.color = "red";
    document.querySelector("#pinta2").style.color = "red";
  } else if (arrPinta[Index] === "♣" || arrPinta[Index] === "♠") {
    document.querySelector("#pinta1").style.color = "black";
    document.querySelector("#pinta2").style.color = "black";
  }
  return arrPinta[Index];
}

window.onload = function() {
  //write your code here
  document.querySelector("#numero").innerHTML = crearNumero();

  let indexPinta = Math.floor(Math.random() * 4);
  let pinta = crearPinta(indexPinta);
  document.querySelector("#pinta1").innerHTML = pinta;
  document.querySelector("#pinta2").innerHTML = pinta;

  document.querySelector("#btn").addEventListener("click", function() {
    let indexPinta = Math.floor(Math.random() * 4);
    let pinta = crearPinta(indexPinta);
    document.querySelector("#numero").innerHTML = crearNumero();
    document.querySelector("#pinta1").innerHTML = pinta;
    document.querySelector("#pinta2").innerHTML = pinta;
  });
};

// window.onload = function() {
//   //write your code here
//   document.querySelector("#numero").innerHTML = crearNumero();
//   let indexPinta = Math.floor(Math.random() * 4);
//   let pinta = crearPinta(indexPinta);

//   document.querySelector("#pinta1").innerHTML = pinta;
//   document.querySelector("#pinta2").innerHTML = pinta;
// };
