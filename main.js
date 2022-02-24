var hex1 = document.querySelector('.hex1');
var buttonNewPalette = document.querySelector('.newPalette');
//var paletteBox = document.querySelector('.palette-box');
var color = new Color();
var paletteBox = new Palette();
function moveToPalette() {
  var color1 = color.getRandomHex();
  var color2 = color.getRandomHex();
  var color3 = color.getRandomHex();
  var color4 = color.getRandomHex();
  var color5 = color.getRandomHex();
  console.log(color)
  console.log(typeof color1)
  hex1.innerText = 'color1';
  //paletteBox.color1 = color1;
  var paletteBox = new Palette(color1, color2, color3, color4, color5)
console.log(paletteBox)
}
buttonNewPalette.addEventListener('click', moveToPalette);

// //buttonNewPalette.addEventListener('click', function() {
//  moveToPalette('color1', 'color2', 'color3', 'color4', 'color5');
// });


// function getRandomHex(hexValues) {
//   var hexValues = [
//     'A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'
//   ];
//   var output = '#'
//   for (var i = 0; i < 6; i++) {
//   output += hexValues[Math.floor(Math.random() * hexValues.length)];
//   }
//   return output
// }
  // // title.innerText = titles[getRandomIndex(titles)];
  // // tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  // console.log(this.hexPlacement)

  // console.log(output)
  // // hexPlacement.innerText = hexValues[getRandomHex(hexValues)]


// function createHex(output) {
//   hexPlacement.innerText = output;
//   //currentPalette = new Palette()
// }


// function getRandomHex() {
//   var randHex = hexValues[getRandomIndex(hexValues)]
//   return
// }
