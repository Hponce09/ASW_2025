let boton = document.getElementById('test-click')

boton.addEventListener('mousedown',(e)=>{
    console.log(e.type)
})
boton.addEventListener('mouseup',(e)=>{

    console.log(e.type)
})
boton.addEventListener('click',(e)=>{
    console.log(e.type)
})
boton.addEventListener('dblclick',(e)=>{
    console.log(e.type)
})


let section =document.getElementById('area1')
let div =document.getElementById('area2')
let boton2 =document.getElementById('boton')


section.addEventListener('click',(e)=>{
    console.log("Click en el Padre")
})
div.addEventListener('click',(e)=>{
    console.log("Click en el hijo")
    e.stopImmediatePropagation()
})
boton2.addEventListener('click',(e)=>{
    console.log("Click en el boton")
    e.stopImmediatePropagation()
})

