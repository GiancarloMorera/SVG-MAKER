class SVG {
    constructor() {
        this.text = "";
        this.shape = "";
    }
   render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.text}${this.shape}</svg>`;
   }
    setText(char, color) {
         this.text = `<text x="150" y="125" font-size="55" text-anchor="middle" fill="${color}">${char}</text>`;
    }
    setShape(shape) {
        this.shape = shape.render();
    }
}
module.exports = SVG;