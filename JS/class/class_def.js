class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    drive(){
        return `${this.make} ${this.model}이 운행중입니다.`
    }
    stop(){
        return `${this.make} ${this.model} 차가 멈췄습니다.`
    }
}

const myCar = new Car("kia", "K3");
const yourCar = new Car("Tesla", "Model3");

console.log(myCar.make);
console.log(myCar.drive());
console.log(myCar.stop());


console.log(yourCar.drive());
console.log(yourCar.stop());

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printName(){
        return `${this.name}입니다.`
    }
}

const person1 = new Person("최윤경", 24);
console.log(person1.name);