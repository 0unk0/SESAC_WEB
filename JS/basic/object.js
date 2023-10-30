hello = "hello"; // var랑 같은 거임
var hello = "hello";
let number = 1; // 변수 중복, 재할당 불가능

//객체(object) - 중괄호로 키벨류 형태로 감싼 데이터 유형
let person1 = { name: "Alice", age: 30, job: "Engineer" };

let person2 = {
    name: "Alice",
    age: 30,
    job: "Engineer"
}; 

console.log(person2);

person2.location = "Seoul";


console.log(person2);

person2.age = 31;

console.log(person2);

delete person2.location;

console.log(person2);

let car = {
    brand: "Kia",
    year: 2020,
    start: function(){
        return "Engine Started"
    },
    stop: function(){
        return "Engine Stopped"
    }
};

console.log(car);
console.log(car.start());