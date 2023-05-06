const shapeGenerator = (data) => {
 if ( data == circle){
    return('<circle cx="25" cy="75" r="20"/>')

 } else if (data == square) {
    

    return ('<rect x="10" y="10" width="30" height="30"/>')
 } else {

  return(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <polygon points="0 20, 100 20, 100 0, 0 100 "/>
</svg>)
 }

}



const textGenerator = (data,textcolor) => {
   if (data.length > 3){
      console.log(Error)
   } else {

      return(`<tspan font-weight="bold" fill=${textcolor}>${data}</tspan>`
      )
   }
    
}