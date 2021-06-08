 class Person{//Parent Class
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    play(){
        console.log(`${this.name} is Playing`)
    }
}
class Cricketer extends Person{
    constructor(name,age,type,country){
        super(name,age)
        this.name=name;
        this.age=age;
        this.type=type;
        this.country=country;
    }
    play(){
        super.play();
        console.log(`${this.name} Is A Very Big Cricketer`)
    }
}
let sakib=new Cricketer("Sakib",35,"Alrounder","Bangladesh");
let tamim=new Person("Tamim",35);

sakib.play();