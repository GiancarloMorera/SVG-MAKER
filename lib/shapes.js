class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor =  shapeColor
    }
}
class Circle extends Shape {
   render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}
class Square extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="50" width="100" height="100" fill="${this.color}"/>
        <text x="150" y="125" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}
module.exports = { Circle, Square, Triangle };












