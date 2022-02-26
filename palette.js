//Only data in classes, not HTML

class Palette {
  constructor() {
    this.colors =
      [new Color(),
      new Color(),
      new Color(),
      new Color(),
      new Color()];
      this.id = Date.now();
  }
   moveColorToPalette() {
     this.colors = [];
     for (var i = 0; i < 5; i++)
     {this.colors.push(new Color())}
     //console.log(this.colors)
     //var color1 = new Color();
    // hex2.innerText = color2;
    // colorField1.style.background = color1
}
}
//method that will just put 5 new colors into the palette and call this method on the botton press || generate new Palettes
//for loop to generate this.colors middle is i<5

// page load is different from the button push, because one instantiates a new Palette, and one just changes the colors

  // this.color1 = color1 || new Color();
  // this.color2 = color2 || new Color();
  // this.color3 = color3 || new Color();
  // this.color4 = color4 || new Color();
  // this.color5 = color5 || new Color();
  // this.id = Date.now();
