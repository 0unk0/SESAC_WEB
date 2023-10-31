// let car = {make: "Kia", model: "K3"};

// console.log(car.make);
// console.log(car.model);

// console.log("make" in car);
// console.log("make" in car);

function Car(make, model){
    this.make = make;
    this.model = model;

}

let myCar = new Car("kia", "K5");

let Car1 = new Car("Kia", "K3");
let Car2 = new Car("Kia", "스포티지");
let Car3 = new Car("Kia", "테슬라");

console.log(myCar);
console.log(Car1);
console.log(Car2);
console.log(Car3);