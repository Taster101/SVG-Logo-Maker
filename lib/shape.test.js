const {Triangle,Square,Circle} = require('./shape.js');


it('should set varibles a render that color in function', ()=>{ 
const shapeTriangle = new Triangle();
shapeTriangle.setColor("blue");
shapeTriangle.setColor("blue");
shapeTriangle.setColor("blue");
expect(shapeTriangle.render()).toEqual(`<svg height="300" width="200">
<polygon points="200,10 250,190 160,210" style="fill:${this.color};stroke:purple;stroke-width:1" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text} </text>
</svg>`);
})


it('should set varibles a render that color in function', ()=>{ 
const shapeSquare = new Square();
shapeSquare.setColor("blue");
shapeTriangle.setColor("blue");
shapeTriangle.setColor("blue");
expect(shapeSquare.render()).toEqual(`<svg width="300" height="200">
<rect x="50" y="20" width="150" height="150"
style="fill:${this.color};stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text} </text>
</svg>`);
});

it('should set varibles a render that color in function',()=>{
const shapeCircle = new Circle();
shapeCircle.setColor("blue");
shapeTriangle.setColor("blue");
shapeTriangle.setColor("blue");
expect(shapeCircle.render()).toEqual(`<svg height="300" width=200">
<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text} </text>
</svg>`);
});
