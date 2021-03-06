// Variables
var boxView = document.querySelector(".box-view");
var hex1 = document.querySelector(".hex-1");
var hex2 = document.querySelector(".hex-2");
var hex3 = document.querySelector(".hex-3");
var hex4 = document.querySelector(".hex-4");
var hex5 = document.querySelector(".hex-5");
var colorField1 = document.getElementById("colorField1");
var colorField2 = document.getElementById("colorField2");
var colorField3 = document.getElementById("colorField3");
var colorField4 = document.getElementById("colorField4");
var colorField5 = document.getElementById("colorField5");
var locked = document.querySelectorAll(".locked");
var unlock = document.querySelectorAll(".unlock");
var buttonNewPalette = document.querySelector(".new-palette");
var buttonSavedPalette = document.querySelector(".save-palette");
var savedSection = document.querySelector(".saved-box");
var displayMiniPalette = document.querySelector(".displayMiniPalette");

//Global Variables
var currentPalette = new Palette();
var savedPalettes = [];

///EVENT LISTENERS
window.addEventListener("load", loadPalette);

buttonNewPalette.addEventListener("click", loadPalette);

buttonSavedPalette.addEventListener("click", savePalette);

boxView.addEventListener("click", function (event) {
  compareColorId(event);
});

savedSection.addEventListener("click", function (event) {
  if (event.target.className === "trashCan") {
    deleteSavedPalette(event);
  }
});

//FUNCTIONS
function loadPalette() {
  currentPalette.checkLock();
  showColors();
}

function savePalette() {
  savedPalettes.push(currentPalette);
  showSavedPalettes();
  currentPalette = new Palette();
  loadPalette();
}

function compareColorId(event) {
  for (var i = 0; i < currentPalette.colors.length; i++) {
    if (event.target.closest(".unit").id === currentPalette.colors[i].id) {
      lockColor(i);
    }
  }
}

function deleteSavedPalette(event) {
  var trashID = parseInt(event.target.id);
  for (var i = 0; i < savedPalettes.length; i++) {
    if (trashID === savedPalettes[i].id) {
      savedPalettes.splice(i, 1);
      event.target.parentElement.remove();
    }
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

function showSavedPalettes() {
  savedSection.innerHTML += `<section class="displayMiniPalette">
    <div class="miniBox" style='background-color:${currentPalette.colors[0].hexCode}'></div>
    <div class="miniBox" style='background-color:${currentPalette.colors[1].hexCode}'></div>
    <div class="miniBox" style='background-color:${currentPalette.colors[2].hexCode}'></div>
    <div class="miniBox" style='background-color:${currentPalette.colors[3].hexCode}'></div>
    <div class="miniBox" style='background-color:${currentPalette.colors[4].hexCode}'></div>
    <img class="trashCan" id="${currentPalette.id}" src="./trash-solid.svg" alt="Trash Can">
    </section>`;
}
