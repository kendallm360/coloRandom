// Variables
var hex1 = document.querySelector(".hex1");
var hex2 = document.querySelector(".hex2");
var hex3 = document.querySelector(".hex3");
var hex4 = document.querySelector(".hex4");
var hex5 = document.querySelector(".hex5");

var locked1 = document.querySelector(".locked1");
var unlock1 = document.querySelector(".unlock1");

var locked2 = document.querySelector(".locked2");
var unlock2 = document.querySelector(".unlock2");

var locked3 = document.querySelector(".locked3");
var unlock3 = document.querySelector(".unlock3");

var locked4 = document.querySelector(".locked4");
var unlock4 = document.querySelector(".unlock4");

var locked5 = document.querySelector(".locked5");
var unlock5 = document.querySelector(".unlock5");

var savedSection = document.querySelector(".saved-box");
var displayMiniPalette = document.querySelector(".displayMiniPalette");


var colorField1 = document.getElementById("cf1");
var colorField2 = document.getElementById("cf2");
var colorField3 = document.getElementById("cf3");
var colorField4 = document.getElementById("cf4");
var colorField5 = document.getElementById("cf5");

var unit1 = document.getElementById("unit1");
var unit2 = document.getElementById("unit2");


var buttonNewPalette = document.querySelector(".new-palette");
var buttonSavedPalette = document.querySelector(".save-palette");

//Global Variables
var currentPalette;
var savedPalettes = [];

///EVENT LISTENERS
window.addEventListener("load", generatePalette);

buttonNewPalette.addEventListener("click", refreshPalette);
buttonSavedPalette.addEventListener("click", savePalette);

unit1.addEventListener("click", showLocked1);
unit2.addEventListener("click", showLocked2);
unit3.addEventListener("click", showLocked3);
unit4.addEventListener("click", showLocked4);
unit5.addEventListener("click", showLocked5);

//FUNCTIONS
function savePalette() {
  savedPalettes.push(currentPalette);
  showSavedPalettes()
  console.log(savedPalettes);
}

function generatePalette() {
  currentPalette = new Palette();
  showColors();
  console.log(currentPalette);
}

function showSavedPalettes() {
    savedSection.innerHTML += `<section class="displayMiniPalette">
    <div class="miniBox1"${savedPalettes[0]}" style='background-color:${savedPalettes[0].colors[0].hexCode}'></div>
    <div class="miniBox1"${savedPalettes[1]}" style='background-color:${savedPalettes[1].colors[1].hexCode}'></div>
    <div class="miniBox1"${savedPalettes[2]}" style='background-color:${savedPalettes[2].colors[2].hexCode}'></div>
    <div class="miniBox1"${savedPalettes[3]}" style='background-color:${savedPalettes[3].colors[3].hexCode}'></div>
    <div class="miniBox1"${savedPalettes[4]}" style='background-color:${savedPalettes[4].colors[4].hexCode}'></div>
    <img class="trashCan" src="./trash-solid.svg" alt="Trash Can">
    </section>`
}

// if showlock is envoked

function showColors() {

  hex1.innerText = currentPalette.colors[0].hexCode;
  hex2.innerText = currentPalette.colors[1].hexCode;
  hex3.innerText = currentPalette.colors[2].hexCode;
  hex4.innerText = currentPalette.colors[3].hexCode;
  hex5.innerText = currentPalette.colors[4].hexCode;

  colorField1.style.background = currentPalette.colors[0].hexCode;
  colorField2.style.background = currentPalette.colors[1].hexCode;
  colorField3.style.background = currentPalette.colors[2].hexCode;
  colorField4.style.background = currentPalette.colors[3].hexCode;
  colorField5.style.background = currentPalette.colors[4].hexCode;

}

function refreshPalette() {
  currentPalette.moveColorToPalette();
  showColors();
}

// when show lock is envoked

function showLocked1() {
  currentPalette.colors[0].locked = true;
  locked1.classList.remove("hidden");
  unlock1.classList.add("hidden");
  console.log('locked')
}

function showLocked2() {
  currentPalette.colors[1].locked = true;
  locked2.classList.remove("hidden");
  unlock2.classList.add("hidden");
}

function showLocked3() {
  currentPalette.colors[2].locked = true;
  locked3.classList.remove("hidden");
  unlock3.classList.add("hidden");
}

function showLocked4() {
  currentPalette.colors[3].locked = true;
  locked4.classList.remove("hidden");
  unlock4.classList.add("hidden");
}

function showLocked5() {
  currentPalette.colors[4].locked = true;
  locked5.classList.remove("hidden");
  unlock5.classList.add("hidden");
}
