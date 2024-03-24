const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./shapes');
const { writeFile } = require('fs');
class CLI {
    async run() {
        await inquirer.prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like to draw?',
                choices: ['Circle', 'Square', 'Triangle']
            },
            {
                type: 'list',
                name: 'shapeColor',
                message: 'What color would you like to use?',
                choices: ['red', 'blue', 'yellow', 'green']
            },
            {
                type: 'input',
                name: 'text',
                message: 'Please enter 3 or less characters. These will appear on top of the shape.',
                validate: function (text) {
                    if (text.length <= 3) {
                        return true;
                    }
                    return 'Please enter 3 or less characters';
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color would you like to use for text?'
            }
        ])
            .then(answers => {
                console.log(answers);
                let shape;
                switch (answers.shape) {
                    case 'Circle':
                        shape = new Circle();
                        break;
                    case 'Square':
                        shape = new Square();
                        break;
                    case 'Triangle':
                        shape = new Triangle();
                        break;
                }
                shape.setColor(answers.shapeColor);
            });
    }
}
// Initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const filename = "logo.svg"
            fs.writeFile(filename, generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
}
// Function is called to initialize the app
init();
module.exports = CLI;