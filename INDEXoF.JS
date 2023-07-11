/* 

*/

let bb = ["Laurence","Mike","Larry","kim","Joanne","Laurence","Mike","Laurence","Mike","Laurance","Mike"]

bb2= bb.filter((value,index,array) => {
    console.log(value,index,array.indexOf(value))
    return array.indexOf(value) == index; 
})

console.log(bb2)
