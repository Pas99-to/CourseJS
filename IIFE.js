let value = "10000";

(function (){
    let value = "100"
    console.log(value);
})();

let result = (()=>{
    let value = "Hola soy Moana"
    return value
})();

console.log(result);
console.log(value);

(function (value){
    console.log('Anonymus whit parameters: '+value)
})("Anonymus");

