
function dateEjercice(){
    let d = new Date(2025, 12, 15) 
    let mon = ['January','February','March','Abril','May','June','July','August','September','Octuber','November','December']
    let day = d.getDay()
    let year = d.getFullYear()
    let mont = d.getMonth()
    let holdDate =  `${ mont===0? mon[11]:mon[mont-1]} ${day} ${year}`;
    console.log(holdDate)
};

dateEjercice();

