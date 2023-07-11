class ProtoptypeExample{
    constructor(firtsname,years){
        this.firtsname = firtsname;
        this.years=years;
    }
}

ProtoptypeExample.prototype.name=function(){
console.log("Mi nombre es: ",this.firtsname,"\t tengo",this.years)
};

ProtoptypeExample.prototype.color="Blue";

let person = new ProtoptypeExample("Juan",23);

person.name();
console.log(person.color);

let person2 = new ProtoptypeExample("Maria",23);
person2.color="RED"

person2.name();
console.log(person2.color);