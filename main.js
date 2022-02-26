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

var colorField1 = document.getElementById("cf1");
var colorField2 = document.getElementById("cf2");
var colorField3 = document.getElementById("cf3");
var colorField4 = document.getElementById("cf4");
var colorField5 = document.getElementById("cf5");

var unit1 = document.getElementById("unit1");
var unit2 = document.getElementById("unit2");

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

var buttonNewPalette = document.querySelector(".new-palette");
var buttonSavedPalette = document.querySelector(".save-palette");

//Global Variables
var currentPalette;
var savedPalettes = [];

///EVENT LISTENERS
window.addEventListener("load", generatePalette);
// unit1.addEventListener("click", showLocked1);
// unit2.addEventListener("click", showLocked2);
// unit3.addEventListener("click", showLocked3);
// unit4.addEventListener("click", showLocked4);
// unit5.addEventListener("click", showLocked5);
buttonNewPalette.addEventListener("click", refreshPalette);
buttonSavedPalette.addEventListener("click", savePalette);
// window.addEventListener("load", generatePalette);

//FUNCTIONS
function savePalette() {
  savedPalettes.push(currentPalette);
  console.log(savedPalettes);
}

function generatePalette() {
  currentPalette = new Palette();
  showColors();
  console.log(currentPalette);
}

// function showSavedPalettes() {
//   var displaySavedPalettes = [];
//   for (var i = 0; i < savedPalettes.length; i++) {
//     displaySavedPalettes += `<section class id="1" ${savedPalettes[i]} `
//   }
// }

function showSavedPalettes() {
  savedSection.innerHTML = currentPalette;
}

function loadSavedCovers() {
  var displaySavedCovers = [];
  for (var i = 0; i < savedCovers.length; i++) {
    displaySavedCovers += `<section class="mini-cover" id="${savedCovers[i].id}" ondblclick="deleteCover(this.id)">
    <img class="cover-image" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>`;
  }

  savedCoverDisplay.innerHTML = displaySavedCovers;
} // function loadSavedCovers() {
//   var displaySavedCovers = [];
//   for (var i = 0; i < savedCovers.length; i++) {
//     displaySavedCovers +=
//     <img class="cover-image" src="${savedCovers[i].cover}">
//
//   savedCoverDisplay.innerHTML = displaySavedCovers;
// };
//
//   savedCoverDisplay.innerHTML = displaySavedCovers;
// };
//innerText with for loop for every item in palette array of colors go over variables assigned to page for querySelectors and do innerText on them
//   colorField1.style.background = color1
//function that will put new colors in the palette
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
  console.log("button pressed");
  currentPalette.moveColorToPalette();
  showColors();
  console.log(currentPalette);
}

function showLocked1() {
  locked1.classList.remove("hidden");
  unlock1.classList.add("hidden");
}

function showLocked2() {
  locked2.classList.remove("hidden");
  unlock2.classList.add("hidden");
}

function showLocked3() {
  locked3.classList.remove("hidden");
  unlock3.classList.add("hidden");
}

function showLocked4() {
  locked4.classList.remove("hidden");
  unlock4.classList.add("hidden");
}

function showLocked5() {
  locked5.classList.remove("hidden");
  unlock5.classList.add("hidden");
}
