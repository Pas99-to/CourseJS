/*function doOuterFuctionStuff(nr){

doInnerFunctionStuff(nr);

function doInnerFunctionStuff(x){
    let z = 10;
}
console.log("Not accesible: ",z);
}

doOuterFuctionStuff(2);*/

let start = 10;

function coutDown1(val){

    console.log(val);

    if(val < 1){
        return
    }else{
        return coutDown1(val - 1) ;
    }
}

coutDown1(start);

console.log("***********************************************");

function coutDown2(val){
 if(val > 0){
    val--;
    coutDown2(val);    
 }
 return -1;
}

console.log(coutDown2(start));

console.log("******************************************************")

let value = function(argument_1){
    console.log("This is the paramater that pass: "+argument_1)
}

value(2);

function value2(...arguments){
console.log(arguments)
}

value2([2,3,4,5],2);

console.log("*********************************************************");

function recursive(param){
    if(param >= 0){
        recursive(param -1);
        console.log(param)
    }    
    return -1;
};

console.log(recursive(10))

console.log("***********************************************************");

function logRecursive(nr){

    console.log("Started function: ",nr);

    if(nr>0){
    
        logRecursive(nr-1);
    
    }
    
    else{
    
        console.log("donde with recursion");
    
    }

    console.log("Ended function: ",nr);
    
}

logRecursive(3)