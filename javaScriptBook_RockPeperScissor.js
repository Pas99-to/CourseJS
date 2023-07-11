arr = ["rock","paper","scissor"];

numberRandom = arr[Math.floor(Math.random()*3)];

takeDesicion = readline("WRITE THE YOU CHOSE \n(PAPER)\n(ROCK)\n(SCISSOR)");


switch(takeDesicion){

    case "paper":
        if(numberRandom == "rock"){
            console.log("YOU WIN");
        }   
        else if(takeDesicion == "scissor"){
            console.log("YOU LOSE");
        }
        else{
            console.log("TIE");
        }
    break;

    case "rock":
        if(numberRandom == "scissor"){
            console.log("YOU WIN");
        }   
        else if(takeDesicion == "paper"){
            console.log("YOU LOSE");
        }
        else{
            console.log("TIE");
        }
    break;
    
    case "scissor":
        if(numberRandom == "paper"){
            console.log("YOU WIN");
        }   
        else if(takeDesicion == "rock"){
            console.log("YOU LOSE");
        }
        else{
            console.log("TIE");
        }
    break; 
}