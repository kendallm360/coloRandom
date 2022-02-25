var hex1 = document.querySelector('.hex1');
var hex2 = document.querySelector('.hex2');
var hex3 = document.querySelector('.hex3');
var hex4 = document.querySelector('.hex4');
var hex5 = document.querySelector('.hex5');

var colorField1 = document.getElementById('cf1');
var colorField2 = document.getElementById('cf2');
var colorField3 = document.getElementById('cf3');
var colorField4 = document.getElementById('cf4');
var colorField5 = document.getElementById('cf5');

var unit1 = document.getElementById("unit1");
var unit2 = document.getElementById("unit2");



var locked1 = document.querySelector('.locked1');
var unlock1 = document.querySelector('.unlock1');

var locked2 = document.querySelector('.locked2');
var unlock2 = document.querySelector('.unlock2');

var locked3 = document.querySelector('.locked3');
var unlock3 = document.querySelector('.unlock3');

var locked4 = document.querySelector('.locked4');
var unlock4 = document.querySelector('.unlock4');

var locked5 = document.querySelector('.locked5');
var unlock5 = document.querySelector('.unlock5');


var buttonNewPalette = document.querySelector('.newPalette');

// unlock.forEach(function(event) {
//   showLocked(event);
//
// });
unit1.addEventListener('click', showLocked1)
unit2.addEventListener('click', showLocked2)
unit3.addEventListener('click', showLocked3)
unit4.addEventListener('click', showLocked4)
unit5.addEventListener('click', showLocked5)

// .addEventListener('click', showLocked)
// unlock3.addEventListener('click', showLocked)
buttonNewPalette.addEventListener('click', moveToPalette);
window.addEventListener('load', moveToPalette);

function showLocked1 () {
  locked1.classList.remove("hidden");
  unlock1.classList.add("hidden");
}

function showLocked2 () {
  locked2.classList.remove("hidden");
  unlock2.classList.add("hidden");
}

function showLocked3 () {
  locked3.classList.remove("hidden");
  unlock3.classList.add("hidden");
}

function showLocked4 () {
  locked4.classList.remove("hidden");
  unlock4.classList.add("hidden");
}

function showLocked5 () {
  locked5.classList.remove("hidden");
  unlock5.classList.add("hidden");
}

// event.preventDefault();

var color = new Color();
var paletteBox = new Palette();
function moveToPalette() {
  var color1 = color.getRandomHex();
  var color2 = color.getRandomHex();
  var color3 = color.getRandomHex();
  var color4 = color.getRandomHex();
  var color5 = color.getRandomHex();

  hex1.innerText = color1;
  hex2.innerText = color2;
  hex3.innerText = color3;
  hex4.innerText = color4;
  hex5.innerText = color5;

  colorField1.style.background = color1
  colorField2.style.background = color2
  colorField3.style.background = color3
  colorField4.style.background = color4
  colorField5.style.background = color5

  var paletteBox = new Palette(color1, color2, color3, color4, color5)
}
