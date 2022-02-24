class Color {
  constructor() {
  this.hexCode = ;
  this.locked = false;
  }
}

  var hexPlacement = document.querySelectorAll('.hex');
  var buttonNewPalette = document.querySelector('#newPalette');
  buttonNewPalette.addEventListener('click', getRandomHex);

  // Functions
  function getRandomHex(hexValues) {
    var hexValues = [
      'A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'
    ];
    var output = '#'
    for (var i = 0; i < 6; i++) {
    output += hexValues[Math.floor(Math.random() * hexValues.length)];
    }
    console.log(output)
    return output

  }
  // function getRandomHex() {
  //   var randHex = hexValues[getRandomIndex(hexValues)]
  //   return
  // }
