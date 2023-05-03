const inquirer = require('inquirer');
//const { default: Choices } = require('inquirer/lib/objects/choices');
const {readFile , writeFile } = require('fs');
const shape = require('.shape.js');
//
inquirer.prompt([{
                    type: 'input',
                    message: 'What 3 text would you like to include in your logo? ',
                    name: 'text',
                } ,
                {
                    type: 'input',
                    message: 'What color would you like your text? ',
                    name: 'textcolor',
                } , 
                {
                    type: 'list',
                    message: 'What shape would you like your logo to be? ',
                    name: 'shape',
                    choices: ['cicrle','square' ,'trangle'],
                } ,
                {
                    type: 'input',
                    message: 'what color would you like this shape? ',
                    name: 'shape-color',
                }
                
               


])
