const { Circle, Square, Triangle } = require('./shapes');
describe('Shape', () => {
    test('should set the color', () => {
        const circle = new Circle('a', 'b', 'c');
        expect(circle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="c"/>
        <text x="150" y="125" font-size="55" text-anchor="middle" fill="b">a</text>
        </svg>`);
    })
    test('should set the color', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toBe('<rect x="100" y="50" width="100" height="100" fill="blue"/>');
    })
    test('should set the color', () => {
        const triangle = new Triangle();
        triangle.setColor('red');
        expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="red"/>');
    })
})