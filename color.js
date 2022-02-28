class Color {
  constructor() {
    this.hexCode = this.getRandomHex();
    this.locked = false;
    this.id = Date.now();
  }
  getRandomHex() {
    var hexValues = [
      "A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    ];
    var output = "#";
    for (var i = 0; i < 6; i++) {
      output += hexValues[Math.floor(Math.random() * hexValues.length)];
    }
    return output;
  }
};
