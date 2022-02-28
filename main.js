// Variables
var boxView = document.querySelector(".box-view");

var hex1 = document.querySelector(".hex1");
var hex2 = document.querySelector(".hex2");
var hex3 = document.querySelector(".hex3");
var hex4 = document.querySelector(".hex4");
var hex5 = document.querySelector(".hex5");

var locked = document.querySelectorAll(".locked");
var unlock = document.querySelectorAll(".unlock");

var savedSection = document.querySelector(".saved-box");
var displayMiniPalette = document.querySelector(".displayMiniPalette");
// var trashButton = document.querySelector(".trashCan");

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
var currentPalette = new Palette();
var savedPalettes = [];

///EVENT LISTENERS
window.addEventListener("load", loadPalette);

boxView.addEventListener("click", function (event) {
  compareColorId(event);
});

savedSection.addEventListener("click", function (event) {
  // deleteSavedPalette(event);
  if (event.target.className === "trashCan") {
    deleteSavedPalette(event);
  }
});

function compareColorId(event) {
  for (var i = 0; i < currentPalette.colors.length; i++) {
    if (event.target.closest(".unit").id === currentPalette.colors[i].id) {
      lockColor(i);
    }
  }
}

buttonNewPalette.addEventListener("click", refreshPalette);
buttonSavedPalette.addEventListener("click", savePalette);

//FUNCTIONS
function deleteSavedPalette() {
  console.log("steve", savedPalettes);

  for (var i = 0; i < savedPalettes.length; i++) {
    //savedPalettes.pop(currentPalette);
    savedPalettes.splice(i, 1);
    //console.log(thing1);
    //debugger;
  }
  console.log("second", savedPalettes);
  return savedPalettes;
}

function loadPalette() {
  generatePalette();
  refreshPalette();
}
function refreshPalette() {
  currentPalette.moveColorToPalette();
  showColors();
}

function savePalette() {
  savedPalettes.push(currentPalette);
  showSavedPalettes();
  // console.log(savedPalettes);
}

function generatePalette() {
  // currentPalette = new Palette();
  showColors();
  // console.log(currentPalette);
}

function showSavedPalettes() {
  savedSection.innerHTML += `<section class="displayMiniPalette">
    <div class="miniBox1" style='background-color:${currentPalette.colors[0].hexCode}'></div>

    <div class="miniBox1" style='background-color:${currentPalette.colors[1].hexCode}'></div>

    <div class="miniBox1" style='background-color:${currentPalette.colors[2].hexCode}'></div>

    <div class="miniBox1" style='background-color:${currentPalette.colors[3].hexCode}'></div>

    <div class="miniBox1" style='background-color:${currentPalette.colors[4].hexCode}'></div>

    <img class="trashCan" src="./trash-solid.svg" alt="Trash Can">
    </section>`;
}

function lockColor(i) {
  if (currentPalette.colors[i].locked) {
    currentPalette.colors[i].locked = false;
    unlock[i].classList.remove("hidden");
    locked[i].classList.add("hidden");
  } else if (!currentPalette.colors[i].locked) {
    currentPalette.colors[i].locked = true;
    unlock[i].classList.add("hidden");
    locked[i].classList.remove("hidden");
  }
}

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
