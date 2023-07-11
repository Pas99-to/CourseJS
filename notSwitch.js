/* FUNCIONAMIENTO PARECIDO A UN SWITCH SOLO QUE USANDO DICCIONARIO (ALGO PARECIDO CON ENUM)*/

let FUNCIONES = {
    funcion1: hola1({hola:"Hola", quien:"Juan"}),
    funcion2: adios({adios:"Nos vemos",quien:"Juan"}),

}


function hola1({hola,quien}){
    console.log(hola,quien)
}

function adios({adios, quien}){
    console.log(adios,quien)
}

FUNCIONES["funcion1"]
FUNCIONES["funcion2"]
