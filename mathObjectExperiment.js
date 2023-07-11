
//1. Output the value of PI into with these steps 
console.log(Math.PI);
// Ceil Method: rounding up
console.log(Math.ceil(5.7));
//Floor Method: rounding down
console.log(Math.floor(5.7));
//Round Method: rounding numbers
console.log(Math.round(5.7));

//Math floor and random to get a number from 0 to 10 
console.log(Math.floor(Math.random()*11));

//Math floor and random to get a number from 1 to 10 
console.log(Math.floor(Math.random()*10+1));

//Math floor and random to get a number from 1 to 100 
console.log(Math.floor(Math.random()*100+1));

//Create a function using the paraeters min and max 
function randomNumber(min, max){
    return Math.random()*(max-min+1)+min
}

console.log(Math.floor(randomNumber(1,100)));