var hexPlacement = document.querySelectorAll('.hex');
var buttonNewPalette = document.querySelector('#newPalette');
buttonNewPalette.addEventListener('click', createHex);

class Color {
  constructor(output) {
  this.hexPlacement = output;
  this.locked = false;
  }



  getRandomHex(hexValues) {
    var hexValues = [
      'A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'
    ];
    var output = '#'
    for (var i = 0; i < 6; i++) {
    output += hexValues[Math.floor(Math.random() * hexValues.length)];
    }

    // // title.innerText = titles[getRandomIndex(titles)];
    // // tagline1.innerText = descriptors[getRandomIndex(descriptors)];
    console.log(this.hexPlacement)
    return this.hexPlacement
    console.log(output)
    // // hexPlacement.innerText = hexValues[getRandomHex(hexValues)]

}
}
function createHex(output) {
  hexPlacement.innerText = output;
}


  // function getRandomHex() {
  //   var randHex = hexValues[getRandomIndex(hexValues)]
  //   return
  // }
