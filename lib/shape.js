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
    render(){return(`<svg height="300" width="200"><polygon points="200,0 4000,190 0,210" style="fill:${this.color};stroke:purple;stroke-width:1" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text} </text></svg>`)
    }
}


class Square extends Shape{
    
    render(){return(`<svg width="300" height="200"><rect x="50" y="20" width="150" height="150" style="fill:${this.color};stroke-width:5;fill-opacity:;stroke-opacity:0.9" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text} </text></svg>`)
    }
}
    



class Circle extends Shape{
    render(){return(`<svg height="300" width=200"><circle cx="150" cy="150" r="140" stroke="black" stroke-width="3" fill="${this.color}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text} </text></svg>`)
    }
}


module.exports = {Triangle,Square,Circle};