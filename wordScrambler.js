//Create a function that returns a value of a word and scrambles the letter order with Math.random()
let str = "MOCHILA";
function scrambles(str){
    let max = str.length;
    let strTemp = ""
    for(i=0; i< max; i++){
       let radom = Math.floor(Math.random()*str.length);
       strTemp += str[radom]       
       str = str.substr(0,radom) + str.substr(radom+1) 
    }
    return strTemp
}

console.log(scrambles(str));


// other form 
function scramble(str) {
    // Create an array to store the characters of the string.
    let arr = str.split("");
  
    // Loop through the array, swapping each character with a random character from the array.
    for (let i = 0; i < arr.length; i++) {
      // Generate a random number between 0 and the length of the array.
      let rand = Math.floor(Math.random() * arr.length);
  
      // Swap the current character with the character at the random index.
      let temp = arr[i];
      arr[i] = arr[rand];
      arr[rand] = temp;
    }
  
    // Return the scrambled string.
    return arr.join("");
  }
  
  // Example
  console.log(scramble("hello")); // "hlelo"


  
//Other form 
function repeat({str2}){
    let aux = [];

    for(let i=0; i<str2.length; i++){
        let rand = Math.floor(Math.random() * str2.length);
        while(true)
        {
            if(aux.includes(rand)){
                rand = Math.floor(Math.random() * str2.length);
            }
            else{
                aux.push(rand)
                 break;
            } 
        }
    }
    return aux
}

function scramble3({str2}){
    str2 =  str2.split("")
    let revuelto = repeat({str2:str2})
    str2 = str2.map( (x,index) => { return x = str2[revuelto[index]] } )
    return str2.join("")
}

console.log(scramble3({str2:"HOLA"}))



