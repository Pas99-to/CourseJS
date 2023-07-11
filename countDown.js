
let endDate = "December 12 2024"

function countDown(){
    let timer = Date.parse(endDate) - new Date;
    let days = Math.floor(timer/(1000*60*60*24));
    let hours = Math.floor( (timer/(1000*60*60))%24 );
    let  minutes = Math.floor( (timer/1000*60)%60);
    let  seconds = Math.floor((timer/1000)%60);

    return {
        timer: timer,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds:  seconds
    }
}

function update(){
    temp = countDown();
    output = "";
    for(const temporal in temp){
        output += (`${temporal}: ${temp[temporal]}`); 
    }
    console.log(output)
    setTimeout(update, 1000);
}

update()