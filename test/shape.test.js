const {Triangle,Square,Circle} = require('../lib/shape.js');


it('should set varibles a render that color in function', ()=>{ 
const shapeTriangle = new Triangle();
shapeTriangle.setColor("blue");
shapeTriangle.setText("URL");
shapeTriangle.setTextColor("red");
expect(shapeTriangle.render()).toEqual((`<svg height="300" width="200"><polygon points="200,0 4000,190 0,210" style="fill:blue;stroke:purple;stroke-width:1" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">URL </text></svg>`));
})


it('should set varibles a render that color in function', ()=>{ 
const shapeSquare = new Square();
shapeSquare.setColor("blue");
shapeSquare.setText("URL");
shapeSquare.setTextColor("red");
expect(shapeSquare.render()).toEqual(`<svg width="300" height="200"><rect x="50" y="20" width="150" height="150" style="fill:blue;stroke-width:5;fill-opacity:;stroke-opacity:0.9" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">URL </text></svg>`);
});

it('should set varibles a render that color in function',()=>{
const shapeCircle = new Circle();
shapeCircle.setColor("blue");
shapeCircle.setText("URL");
shapeCircle.setTextColor("red");
expect(shapeCircle.render()).toEqual(`<svg height="300" width=200"><circle cx="150" cy="150" r="140" stroke="black" stroke-width="3" fill="blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="red">URL </text></svg>`);
});
