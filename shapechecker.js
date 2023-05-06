function shapechecker (data){
    let SVG = ''
    if (data.shape == 'square'){
       const SVG = new Square;
       console.log('square')
       console.log(SVG);
    } 
    else if(data.shape == 'circle') {
       const SVG = new Circle  
       console.log('circle')
    } else {
       const SVG = new Triangle
       console.log('Triangle')
    }

}

module.exports = shapechecker;