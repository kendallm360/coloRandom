var hex1 = document.querySelector('.hex1');
var hex2 = document.querySelector('.hex2');
var hex3 = document.querySelector('.hex3');
var hex4 = document.querySelector('.hex4');
var hex5 = document.querySelector('.hex5');
var buttonNewPalette = document.querySelector('.newPalette');
buttonNewPalette.addEventListener('click', moveToPalette);
//var paletteBox = document.querySelector('.palette-box');
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
  var paletteBox = new Palette(color1, color2, color3, color4, color5)
}
