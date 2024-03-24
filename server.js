const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const { writeFile } = require('fs');

inquirer.prompt([
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