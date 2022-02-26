class Palette {
  constructor() {
    this.colors = [
      new Color(),
      new Color(),
      new Color(),
      new Color(),
      new Color(),
    ];
    this.id = Date.now();
  }
  moveColorToPalette() {
    console.log(this.colors[0].locked)
    // this.colors = [];
    for (var i = 0; i < 5; i++) {
      if (!this.colors[i].locked) {
        this.colors.splice(i, 1, new Color());
      }
      this.colors[i].id = `${i}`
      console.log(this.colors[i].id)
    }
  }
}
// for each color in array we want to assign an ID of 0-4
