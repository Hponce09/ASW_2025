function addElement(){
    const newDiv = document.createElement('div')
    newDiv.className = ('tablero_principal')
    
    newDiv.style.display = "grid"
    newDiv.style.gridTemplateColumns = "1fr 1fr 1fr"
    newDiv.style.gridTemplateRows= "1fr 1fr 1fr"
    newDiv.style.gap = "2px"
    newDiv.style.backgroundColor = "red";
    newDiv.style.width = "300px";
    newDiv.style.height = "300px";

    for(let i = 1 ; i < 10 ; i++ ){

        const contenedor = document.createElement('div')
        newDiv.appendChild(contenedor)
        document.body.appendChild(newDiv)

    }

}

addElement()