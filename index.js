const inquirer = require('inquirer');
//const { default: Choices } = require('inquirer/lib/objects/choices');
const {readFile , writeFile } = require('fs');
const {Triangle,Square,Circle} = require('./lib/shape.js');

//
inquirer.prompt([{
                    type: 'input',
                    message: 'What 3 text would you like to include in your logo? ',
                    name: 'text',
                } ,
                {
                    type: 'input',
                    message: 'What color would you like your text? ',
                    name: 'textColor',
                } , 
                {
                    type: 'list',
                    message: 'What shape would you like your logo to be? ',
                    name: 'shape',
                    choices: ['circle','square' ,'trangle'],
                } ,
                {
                    type: 'input',
                    message: 'what color would you like this shape? ',
                    name: 'shapeColor',
                }
                
               


])
.then((data) => {
    console.log(data)
    let SVG = ''
     if (data.shape == 'square'){
        const SVG = new Square;
        SVG.setColor(data.shapeColor)
        SVG.setTextColor(data.textColor)
        SVG.setText(data.text)
        console.log(SVG.render())
        writeFile('logo.svg',type,(err) => err ? console.log(err) : console.log('succesfully created LOGO!'))
        return SVG;
     } 
     else if(data.shape == 'circle') {
        const SVG = new Circle  
        SVG.setColor(data.shapeColor)
        SVG.setTextColor(data.textColor)
        SVG.setText(data.text)
        console.log(SVG.render())
        writeFile('logo.svg',type,(err) => err ? console.log(err) : console.log('succesfully created LOGO!'))
        return SVG;
     } else {
        const SVG = new Triangle
        SVG.setColor(data.shapeColor)
        SVG.setTextColor(data.textColor)
        SVG.setText(data.text)
        const type = SVG.render()
        console.log(type)
        writeFile('logo.svg',type,(err) => err ? console.log(err) : console.log('succesfully created LOGO!'))
        console.log(SVG.render())
    return SVG;
     }
     
     //SVG.setColor(data.shapeColor)
    // console.log(SVG)
})
//.then(writeFile('logo.svg',SVG.render()));