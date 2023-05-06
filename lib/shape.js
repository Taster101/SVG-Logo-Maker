class Shape{
    constructor(){
   this.color = '';
   this.text = '';
   this.textColor = '';
    }
    setColor(color){
        this.color = color;
    }
    setText(text){
   this.text = text;

    }
    setTextColor(textColor){
        this.textColor = textColor;
    }
}








class Triangle extends Shape {
    render(){
        return(`<svg height="210" width="500">
        <polygon points="200,10 250,190 160,210" style="fill:${this.color};stroke:purple;stroke-width:1" /><text x="150 y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text} </text>
      </svg>`)
    }
}


class Square extends Shape{
    
    render(){
   return (`<svg width="400" height="180">
   <rect x="50" y="20" width="150" height="150"
   style="fill:${this.color};stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" /><text x="150 y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text} </text>
 </svg>`)
    }
}
    



class Circle extends Shape{
    render(){
     return (`<svg height="100" width="100">
     <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill=${this.color} /><text x="150 y="125" font-size="60" text-anchor="middle" fill=${this.textcolor}>${this.text} </text>
   </svg>`)
    }
}


module.exports = {Triangle,Square,Circle};