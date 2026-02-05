function addElement(){
    const newDiv = document.createElement('div')
    newDiv.className = ('tablero_principal')
    

    for(let i = 1 ; i < 10 ; i++ ){

        const contenedor = document.createElement('div')
        newDiv.appendChild(contenedor)
        document.body.appendChild(newDiv)

    }

}

addElement()