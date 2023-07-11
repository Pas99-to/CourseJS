let lista = [2,3,4,6,2,3,6]
/*
function isRepeat(list,longitud)
{
if(list[(list.length-longitud)]!=undefined){
    y = list[(list.length-longitud)]
    longitud = longitud-1;
    return isRepeat(list,longitud);
}
else{ 
    return -1;
}
}
*/

function repeat(list,longitud){
    if(longitud >= 0){
     longitud=longitud-1;
     repeat(list,longitud);
    return list[longitud];
    }else{
        return -1
    }
}

console.log(repeat(lista,(lista.length-1)));

