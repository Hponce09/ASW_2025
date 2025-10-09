
    var nombre =true;
    var a="d";
    //let b="e";
    //const c="f";

    if(nombre){
        var a=2; 
        //let b="e"; 
        //const c="f";

       console.log(a);
       //console.log(b);
       //console.log(c);
    }

    console.log(a)
    //console.log(b);
    //console.log(c);

    const miArray= [1,2,3];

    miArray.push(5);
    miArray[1]=9;

    console.log(miArray);

    /* 
    ¿Qué es hoisting y cómo afecta a var?
    un comportamiento donde las declaraciones de variables y funciones 
    son movidas al inicio de su ámbito (scope) antes de que el código se ejecute

    ¿Qué diferencias de alcance existen entre var, let y const?
    var tiene un ambito global y pueden ser redeclaradas y modificadas, mientras que 
    let y const tiene un ambito de bloque, let pude ser modificada pero no redeclarada
    mientras que const no puede ser modificada ni redeclarada

    */
